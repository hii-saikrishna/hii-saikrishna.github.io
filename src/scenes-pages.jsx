// ===== Fixed background worlds for Publications (paper archive) & Blog (smart home) =====

function fixedWorldHost(buildFn) {
  return function WorldComp() {
    const ref = React.useRef(null);
    React.useEffect(() => {
      const el = ref.current;
      if (!el || !window.THREE) return;
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
      renderer.setSize(window.innerWidth, window.innerHeight, false);
      el.appendChild(renderer.domElement);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(46, window.innerWidth / window.innerHeight, 0.1, 100);
      const state = { mouse: { x: 0, y: 0 }, scroll: 0 };
      const api = buildFn({ scene, camera, state }) || {};

      const onScroll = () => {
        const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
        state.scroll = Math.min(1, Math.max(0, window.scrollY / max));
      };
      const onMove = (e) => {
        state.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
        state.mouse.y = (e.clientY / window.innerHeight) * 2 - 1;
      };
      const onResize = () => {
        renderer.setSize(window.innerWidth, window.innerHeight, false);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("pointermove", onMove, { passive: true });
      window.addEventListener("resize", onResize);
      onScroll();

      let raf = 0, running = true;
      const t0 = performance.now();
      const tick = () => {
        if (!running) return;
        api.update && api.update((performance.now() - t0) / 1000);
        renderer.render(scene, camera);
        raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
      const onVis = () => {
        if (document.hidden) { running = false; cancelAnimationFrame(raf); }
        else if (!running) { running = true; raf = requestAnimationFrame(tick); }
      };
      document.addEventListener("visibilitychange", onVis);

      return () => {
        running = false;
        cancelAnimationFrame(raf);
        document.removeEventListener("visibilitychange", onVis);
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("pointermove", onMove);
        window.removeEventListener("resize", onResize);
        scene.traverse((o) => {
          if (o.geometry) o.geometry.dispose();
          if (o.material && o.material.dispose) o.material.dispose();
        });
        renderer.dispose();
        while (el.firstChild) el.removeChild(el.firstChild);
      };
    }, []);
    return <div ref={ref} className="iw-canvas" />;
  };
}

// paper sheet texture (white page with text lines)
function makePaperTexture() {
  const c = document.createElement("canvas");
  c.width = 128; c.height = 170;
  const x = c.getContext("2d");
  x.fillStyle = "#ffffff";
  x.fillRect(0, 0, 128, 170);
  x.fillStyle = "#2e8f5b";
  x.fillRect(14, 14, 70, 7);
  x.fillStyle = "#c3cbd4";
  for (let i = 0; i < 9; i++) x.fillRect(14, 36 + i * 13, 100 - (i % 3) * 14, 5);
  return new THREE.CanvasTexture(c);
}

// ---------- Publications: floating paper archive ----------
const PaperWorld = fixedWorldHost(({ scene, camera, state }) => {
  camera.position.set(0, 1.3, 7);
  camera.lookAt(0, 1.3, 0);
  addRobotLights(scene);

  const paperTex = makePaperTexture();
  const paperGeo = new THREE.PlaneGeometry(0.62, 0.82);
  const papers = [];
  for (let i = 0; i < 16; i++) {
    const m = new THREE.Mesh(paperGeo, new THREE.MeshBasicMaterial({
      map: paperTex, side: THREE.DoubleSide, transparent: true,
      opacity: 0.55 + Math.random() * 0.4,
    }));
    const side = i % 2 ? 1 : -1;
    m.position.set(side * (2.6 + Math.random() * 2.6), Math.random() * 6 - 1, -1.5 - Math.random() * 3);
    m.rotation.set(Math.random() * 0.5 - 0.25, Math.random() * 0.9 - 0.45, Math.random() * 0.3 - 0.15);
    m.userData = { sp: 0.12 + Math.random() * 0.22, rs: (Math.random() - 0.5) * 0.3, ph: Math.random() * 6 };
    scene.add(m);
    papers.push(m);
  }

  // ground meadow strip at the bottom
  const ground = new THREE.Group();
  ground.position.y = -1.9;
  scene.add(ground);
  addMeadow(ground, 3.4);
  addTree(ground, -2.6, -0.8, 0.8);
  addTree(ground, 2.8, -0.5, 0.6);

  // humanoid reading at the left
  const reader = buildHumanoidModel("wave");
  reader.group.position.set(-2.5, 0, 0.4);
  reader.group.rotation.y = 0.6;
  ground.add(reader.group);

  // drone carrying a paper across the sky
  const courier = buildDroneModel();
  courier.group.scale.setScalar(0.7);
  scene.add(courier.group);
  const carried = new THREE.Mesh(paperGeo, new THREE.MeshBasicMaterial({ map: paperTex, side: THREE.DoubleSide }));
  carried.scale.setScalar(0.7);
  carried.position.y = -0.45;
  carried.rotation.x = 0.15;
  courier.group.add(carried);

  // quadruped trotting on the right
  const dog = buildQuadrupedModel();
  dog.group.scale.setScalar(0.8);
  dog.group.position.set(2.4, 0, 0.6);
  dog.group.rotation.y = -0.7;
  ground.add(dog.group);

  return {
    update(t) {
      papers.forEach((m) => {
        m.position.y += m.userData.sp * 0.012;
        m.rotation.y += m.userData.rs * 0.004;
        m.position.x += Math.sin(t * 0.4 + m.userData.ph) * 0.0015;
        if (m.position.y > 5.4) m.position.y = -1.6;
      });
      reader.update(t);
      dog.update(t);
      courier.update(t);
      const a = t * 0.16;
      courier.group.position.set(Math.sin(a) * 4.2, 2.6 + Math.sin(t * 0.8) * 0.25, -1.6 + Math.cos(a) * 1.2);
      courier.group.rotation.y = -a;
      // gentle dolly with scroll + mouse parallax
      camera.position.x = state.mouse.x * 0.45;
      camera.position.y = 1.3 - state.scroll * 1.6 - state.mouse.y * 0.25;
      camera.lookAt(0, 1.1 - state.scroll * 1.6, 0);
    },
  };
});

// ---------- Blog: smart-home interior with robots doing chores ----------
const HouseWorld = fixedWorldHost(({ scene, camera, state }) => {
  camera.position.set(7.2, 6.4, 7.2);
  camera.lookAt(0, 0, 0);
  addRobotLights(scene);

  const house = new THREE.Group();
  scene.add(house);

  const mFloor = rMat(0xe9dfcd, { roughness: 0.9 });
  const mRug = rMat(0xcfe3cf, { roughness: 1 });
  const mWall = rMat(0xf4f4f0, { roughness: 0.95 });
  const mWood = rMat(0xb08a5e, { roughness: 0.85 });
  const mSofa = rMat(0x7da883, { roughness: 1 });
  const mPot = rMat(0xc96f4a, { roughness: 0.9 });

  // floor 10 x 8
  const floor = new THREE.Mesh(new THREE.BoxGeometry(10, 0.2, 8), mFloor);
  floor.position.y = -0.1;
  house.add(floor);
  const rug = new THREE.Mesh(new THREE.CylinderGeometry(1.5, 1.5, 0.04, 24), mRug);
  rug.position.set(-1.8, 0.02, 1.2);
  house.add(rug);

  // perimeter low walls (open dollhouse style)
  const wall = (w, d, x, z) => {
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, 1.1, d), mWall);
    m.position.set(x, 0.55, z);
    house.add(m);
  };
  wall(10, 0.18, 0, -4);     // back
  wall(0.18, 8, -5, 0);      // left
  wall(0.18, 3.2, 5, -2.4);  // right partial
  wall(4.2, 0.18, -2.9, 0.4); // inner divider (kitchen/living)

  // kitchen counter (back-left)
  const counter = new THREE.Mesh(new THREE.BoxGeometry(2.6, 0.55, 0.7), mWood);
  counter.position.set(-3.4, 0.275, -3.3);
  house.add(counter);
  rBox(house, mWall, 0.7, 0.9, 0.65, -1.6, 0.45, -3.35); // fridge

  // dining table + chairs (back-right)
  const table = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 0.8, 0.06, 12), mWood);
  table.position.set(2.4, 0.55, -2.2);
  house.add(table);
  rCyl(house, mWood, 0.06, 0.06, 0.5, 2.4, 0.27, -2.2);
  [[1.5, -2.2], [3.3, -2.2], [2.4, -1.3]].forEach(([x, z]) => {
    rBox(house, mSofa, 0.4, 0.45, 0.4, x, 0.22, z);
  });

  // sofa (living, front-left)
  const sofa = new THREE.Group();
  sofa.position.set(-3.6, 0, 1.4);
  sofa.rotation.y = Math.PI / 2;
  rBox(sofa, mSofa, 2.0, 0.42, 0.8, 0, 0.21, 0);
  rBox(sofa, mSofa, 2.0, 0.5, 0.22, 0, 0.62, -0.3);
  rBox(sofa, mSofa, 0.24, 0.55, 0.8, -0.94, 0.4, 0);
  rBox(sofa, mSofa, 0.24, 0.55, 0.8, 0.94, 0.4, 0);
  house.add(sofa);
  // coffee table
  rBox(house, mWood, 0.9, 0.3, 0.5, -1.8, 0.15, 1.2);

  // plants (greenery)
  const addPlant = (x, z, s = 1) => {
    const p = new THREE.Group();
    const pot = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.12, 0.22, 8), mPot);
    pot.position.y = 0.11;
    p.add(pot);
    const leaf = new THREE.Mesh(new THREE.ConeGeometry(0.22, 0.5, 7), rMat(RB.grass2));
    leaf.position.y = 0.45;
    p.add(leaf);
    const leaf2 = new THREE.Mesh(new THREE.ConeGeometry(0.15, 0.35, 7), rMat(RB.grass));
    leaf2.position.set(0.08, 0.6, 0.04);
    p.add(leaf2);
    p.position.set(x, 0, z);
    p.scale.setScalar(s);
    house.add(p);
  };
  addPlant(-4.5, -3.4, 1.3);
  addPlant(4.5, -3.5, 1.1);
  addPlant(-4.5, 3.4, 1.2);
  addPlant(0.3, 0.7, 0.9);

  // --- robots doing chores ---
  // vacuum rover sweeping the living room (lissajous path)
  const vac = buildRoverModel();
  vac.group.scale.setScalar(0.55);
  house.add(vac.group);
  // quadruped patrolling the perimeter
  const patrol = buildQuadrupedModel();
  patrol.group.scale.setScalar(0.6);
  house.add(patrol.group);
  const waypoints = [
    new THREE.Vector3(3.8, 0, 2.8), new THREE.Vector3(3.8, 0, -1.0),
    new THREE.Vector3(0.6, 0, -1.0), new THREE.Vector3(0.6, 0, 2.8),
  ];
  // humanoid at the kitchen counter
  const chef = buildHumanoidModel("wave");
  chef.group.scale.setScalar(0.62);
  chef.group.position.set(-3.4, 0, -2.6);
  chef.group.rotation.y = Math.PI;
  house.add(chef.group);
  // drone dusting the shelves
  const duster = buildDroneModel();
  duster.group.scale.setScalar(0.5);
  house.add(duster.group);

  const segLen = 1; // per-edge progress seconds-ish
  return {
    update(t) {
      vac.update(t * 2);
      vac.group.position.set(-1.8 + Math.sin(t * 0.55) * 1.6, 0, 1.3 + Math.sin(t * 0.83 + 1.2) * 1.3);
      vac.group.rotation.y = Math.atan2(Math.cos(t * 0.83 + 1.2) * 1.08, Math.cos(t * 0.55) * 0.88);

      patrol.update(t);
      const total = waypoints.length;
      const prog = (t * 0.22) % total;
      const i0 = Math.floor(prog), i1 = (i0 + 1) % total;
      const f = prog - i0;
      patrol.group.position.lerpVectors(waypoints[i0], waypoints[i1], f);
      const dir = waypoints[i1].clone().sub(waypoints[i0]);
      patrol.group.rotation.y = Math.atan2(dir.x, dir.z) - Math.PI / 2;

      chef.update(t);
      duster.update(t);
      duster.group.position.set(-1 + Math.sin(t * 0.4) * 3, 1.7 + Math.sin(t * 1.1) * 0.15, -3.2);
      duster.group.rotation.y = Math.sin(t * 0.4) > 0 ? 0 : Math.PI;

      // camera: slow orbital sway + scroll descends slightly + mouse parallax
      const ang = Math.PI / 4 + Math.sin(t * 0.07) * 0.08 + state.mouse.x * 0.06;
      const rad = 10.2 - state.scroll * 1.2;
      camera.position.set(Math.sin(ang) * rad, 6.4 - state.scroll * 1.4 - state.mouse.y * 0.4, Math.cos(ang) * rad);
      camera.lookAt(0, 0.2, 0);
    },
  };
});

Object.assign(window, { PaperWorld, HouseWorld });
