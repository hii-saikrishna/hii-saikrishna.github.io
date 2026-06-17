// ===== Journey world (Updates page) — scroll travels a green valley, ends in blue sky =====

function jHash(x, y) { const s = Math.sin(x * 127.1 + y * 311.7) * 43758.5453; return s - Math.floor(s); }
function jNoise(x, y) {
  const xi = Math.floor(x), yi = Math.floor(y);
  const xf = x - xi, yf = y - yi;
  const u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf);
  const a = jHash(xi, yi), b = jHash(xi + 1, yi), c = jHash(xi, yi + 1), d = jHash(xi + 1, yi + 1);
  return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
}
function jFbm(x, y) {
  let val = 0, amp = 0.55, f = 1;
  for (let i = 0; i < 4; i++) { val += amp * jNoise(x * f, y * f); amp *= 0.5; f *= 2.1; }
  return val;
}
function jTerrainH(x, z) {
  const amp = THREE.MathUtils.smoothstep(Math.abs(x), 3.5, 14);
  return jFbm(x * 0.07 + 31, z * 0.07 + 7) * 7 * amp;
}

const J_PATH = { zStart: 18, zEnd: -300 };
function jPathX(z) { return Math.sin(z * 0.028) * 3.2; }

function JourneyWorld() {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el || !window.THREE) return;
    let cleanup = null;
    try {
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.setSize(window.innerWidth, window.innerHeight, false);
    el.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const fogGreen = new THREE.Color(0xe9f3ea);
    const fogBlue = new THREE.Color(0xcfe8fa);
    scene.fog = new THREE.Fog(fogGreen.clone(), 26, 150);
    const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 400);

    scene.add(new THREE.HemisphereLight(0xfdfffa, 0xb9d8ae, 1.1));
    const sun = new THREE.DirectionalLight(0xfff4dd, 1.5);
    sun.position.set(40, 60, -30);
    scene.add(sun);

    const disposables = [];
    const track = (o) => { disposables.push(o); return o; };

    // ---- Terrain ----
    const tGeo = track(new THREE.PlaneGeometry(140, 380, 64, 170));
    tGeo.rotateX(-Math.PI / 2);
    {
      const p = tGeo.attributes.position;
      const colors = new Float32Array(p.count * 3);
      const cLow = new THREE.Color(0x8fc177), cMid = new THREE.Color(0x5fa763), cHigh = new THREE.Color(0x47885c), cPath = new THREE.Color(0xb6d8a4);
      for (let i = 0; i < p.count; i++) {
        const x = p.array[i * 3], z = p.array[i * 3 + 2] - 150;
        const h = jTerrainH(x - jPathX(z), z);
        p.array[i * 3 + 1] = h;
        p.array[i * 3 + 2] = z;
        const c = new THREE.Color();
        const onPath = 1 - THREE.MathUtils.smoothstep(Math.abs(x - jPathX(z)), 1.5, 5);
        if (h < 1.4) c.lerpColors(cLow, cMid, h / 1.4);
        else c.lerpColors(cMid, cHigh, Math.min(1, (h - 1.4) / 4));
        c.lerp(cPath, onPath * 0.7);
        colors[i * 3] = c.r; colors[i * 3 + 1] = c.g; colors[i * 3 + 2] = c.b;
      }
      tGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
      tGeo.computeVertexNormals();
    }
    scene.add(new THREE.Mesh(tGeo, track(new THREE.MeshStandardMaterial({ vertexColors: true, flatShading: true, roughness: 0.95 }))));
    const groundY = (x, z) => jTerrainH(x - jPathX(z), z);

    // ---- Mountains ----
    const mGeo = track(new THREE.ConeGeometry(1, 1, 6));
    const mMat = track(new THREE.MeshStandardMaterial({ color: 0x93b8a6, flatShading: true, roughness: 1 }));
    const sMat = track(new THREE.MeshStandardMaterial({ color: 0xf4f9f4, flatShading: true, roughness: 1 }));
    for (let i = 0; i < 14; i++) {
      const side = i % 2 === 0 ? 1 : -1;
      const z = 10 - i * 24 - Math.random() * 10;
      const x = side * (30 + Math.random() * 28);
      const h = 10 + Math.random() * 16, r = 7 + Math.random() * 9;
      const m = new THREE.Mesh(mGeo, mMat);
      m.scale.set(r, h, r); m.position.set(x, h / 2 - 1.5, z);
      m.rotation.y = Math.random() * Math.PI;
      scene.add(m);
      if (h > 17) {
        const cap = new THREE.Mesh(mGeo, sMat);
        cap.scale.set(r * 0.36, h * 0.3, r * 0.36);
        cap.position.set(x, h - h * 0.15 - 1.5, z);
        cap.rotation.y = m.rotation.y;
        scene.add(cap);
      }
    }

    // ---- Trees ----
    const trunkGeo = track(new THREE.CylinderGeometry(0.07, 0.1, 0.6, 6));
    const trunkMat = track(new THREE.MeshStandardMaterial({ color: 0x7a5b3e, flatShading: true, roughness: 1 }));
    const folGeo = track(new THREE.ConeGeometry(0.6, 1.3, 7));
    const folMats = [0x4e9e5f, 0x66ab5e, 0x3f8f58].map((c) => track(new THREE.MeshStandardMaterial({ color: c, flatShading: true, roughness: 1 })));
    for (let i = 0; i < 70; i++) {
      const z = 14 - Math.random() * 330;
      const side = Math.random() > 0.5 ? 1 : -1;
      const x = jPathX(z) + side * (4.5 + Math.random() * 22);
      const y = groundY(x, z);
      const tree = new THREE.Group();
      const trunk = new THREE.Mesh(trunkGeo, trunkMat); trunk.position.y = 0.3; tree.add(trunk);
      const fol = new THREE.Mesh(folGeo, folMats[i % 3]); fol.position.y = 1.1; tree.add(fol);
      if (i % 2) { const f2 = new THREE.Mesh(folGeo, folMats[(i + 1) % 3]); f2.scale.setScalar(0.7); f2.position.y = 1.7; tree.add(f2); }
      tree.position.set(x, y, z);
      tree.scale.setScalar(0.8 + Math.random() * 1.6);
      tree.rotation.y = Math.random() * Math.PI;
      scene.add(tree);
    }

    // ---- Clouds ----
    const cloudGeo = track(new THREE.SphereGeometry(1, 7, 7));
    const cloudMat = track(new THREE.MeshStandardMaterial({ color: 0xffffff, flatShading: true, roughness: 1, transparent: true, opacity: 0.85 }));
    for (let i = 0; i < 9; i++) {
      const c = new THREE.Group();
      for (let j = 0; j < 3; j++) {
        const s = new THREE.Mesh(cloudGeo, cloudMat);
        s.position.set(j * 1.4 - 1.4, Math.random() * 0.4, Math.random() * 0.8);
        s.scale.set(1.6 + Math.random(), 0.55, 1);
        c.add(s);
      }
      const z = 8 - i * 37;
      c.position.set(jPathX(z) + (i % 2 ? -1 : 1) * (12 + Math.random() * 14), 16 + Math.random() * 7, z);
      scene.add(c);
    }

    // ---- Robots along the trail ----
    const worldRobots = [];
    const placeRobot = (kind, z, side, scale = 1.4, rotY = 0.6) => {
      const built = ROBOT_BUILDERS[kind]();
      const x = jPathX(z) + side * 3.4;
      const y = kind === "drone" ? groundY(x, z) + 3 : groundY(x, z);
      built.group.position.set(x, y, z);
      built.group.scale.setScalar(scale);
      built.group.rotation.y = rotY * -side;
      scene.add(built.group);
      worldRobots.push({ built, kind, baseY: y, ph: Math.random() * 6 });
    };
    placeRobot("quadruped", -38, 1, 1.5, 0.9);
    placeRobot("rover", -105, -1, 1.6, 0.4);
    placeRobot("humanoid", -170, 1, 1.4, 0.7);
    placeRobot("quadruped", -235, -1, 1.5, 0.5);
    const skyDrones = [];
    for (let i = 0; i < 2; i++) {
      const d = ROBOT_BUILDERS.drone();
      d.group.scale.setScalar(2.2);
      scene.add(d.group);
      skyDrones.push({ d, z: -60 - i * 120, r: 6 + i * 2, h: 7 + i * 1.5, sp: 0.25 + i * 0.06, ph: i * 2 });
    }

    // ---- Scroll → camera ----
    let target = 0, p = 0;
    const onScroll = () => {
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      target = Math.min(1, Math.max(0, window.scrollY / max));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const mouse = { x: 0, y: 0 };
    const onMove = (e) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    const onResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight, false);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", onResize);

    let raf = 0, running = true;
    const t0 = performance.now();
    const tick = () => {
      if (!running) return;
      const t = (performance.now() - t0) / 1000;
      p += (target - p) * 0.07;
      const z = J_PATH.zStart + (J_PATH.zEnd - J_PATH.zStart) * p;
      // near the end, the camera lifts toward the sky
      const lift = THREE.MathUtils.smoothstep(p, 0.82, 1) * 7;
      const cx = jPathX(z) + mouse.x * 0.7;
      const cy = 2.6 + Math.sin(z * 0.05) * 0.25 - mouse.y * 0.4 + lift;
      camera.position.set(cx, cy, z);
      camera.lookAt(jPathX(z - 14), 2.1 + lift * 1.6, z - 14);

      // sky finale: fog + overlay blend to blue
      const skyAmt = THREE.MathUtils.smoothstep(p, 0.72, 0.98);
      scene.fog.color.lerpColors(fogGreen, fogBlue, skyAmt);
      const skyEl = document.getElementById("j-sky");
      if (skyEl) skyEl.style.opacity = skyAmt;

      worldRobots.forEach((r) => {
        r.built.update(t + r.ph);
        if (r.kind === "drone") r.built.group.position.y = r.baseY + Math.sin(t + r.ph) * 0.3;
      });
      skyDrones.forEach(({ d, z: dz, r, h, sp, ph }) => {
        const a = t * sp + ph;
        d.group.position.set(jPathX(dz) + Math.cos(a) * r, h + Math.sin(t * 0.7 + ph) * 0.6, dz + Math.sin(a) * r);
        d.group.rotation.y = -a + Math.PI / 2;
        d.update(t + ph);
      });

      const pf = document.getElementById("j-progress-fill");
      if (pf) pf.style.transform = `scaleX(${p})`;

      renderer.render(scene, camera);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    const onVis = () => {
      if (document.hidden) { running = false; cancelAnimationFrame(raf); }
      else if (!running) { running = true; raf = requestAnimationFrame(tick); }
    };
    document.addEventListener("visibilitychange", onVis);

    cleanup = () => {
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
      disposables.forEach((d) => d.dispose && d.dispose());
      renderer.dispose();
      try { renderer.forceContextLoss(); } catch (e2) { /* older three */ }
      while (el.firstChild) el.removeChild(el.firstChild);
    };
    } catch (e) {
      // WebGL/scene failure must not blank the Milestones page — drop the 3D bg only.
      if (el) while (el.firstChild) el.removeChild(el.firstChild);
    }
    return () => { cleanup && cleanup(); };
  }, []);
  return <div ref={ref} className="j-canvas" />;
}

function JourneyPage({ eyebrow, titleA, titleB, lede, children }) {
  return (
    <div className="journey">
      <JourneyWorld />
      <div className="j-sky" id="j-sky"></div>
      <div className="j-progress"><div id="j-progress-fill" className="j-progress-bar"></div></div>
      <div className="j-content">
        <header className="j-hero" data-screen-label={eyebrow}>
          <div className="j-eyebrow">{eyebrow}</div>
          <h1 className="j-title">{titleA}<br /><span className="outline">{titleB}</span></h1>
          <p className="j-lede">{lede}</p>
          <div className="j-cue">
            <span className="j-cue-line"></span>
            Scroll to travel
          </div>
        </header>
        {children}
        <footer className="j-outro">
          <div className="j-outro-word">fin.</div>
          <button className="btn" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Back to the trailhead ↑</button>
        </footer>
      </div>
    </div>
  );
}

function JourneySection({ index, label, children, wide }) {
  return (
    <section className="j-section" data-screen-label={label}>
      <div className="j-zone">
        <span className="j-zone-num">{String(index).padStart(2, "0")}</span>
        <span className="j-zone-word">{label}</span>
      </div>
      <div className={`j-card ${wide ? "wide" : ""}`}>{children}</div>
    </section>
  );
}

Object.assign(window, { JourneyWorld, JourneyPage, JourneySection });
