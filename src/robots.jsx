// ===== Stylized robot models + card/diorama scenes =====

const RB = {
  panel:  0xeef1f4,
  panel2: 0xd9dfe6,
  dark:   0x252c36,
  joint:  0x3a4450,
  accent: 0x2e8f5b,   // green accent
  visor:  0x9fe8c8,
  grass:  0x6db36a,
  grass2: 0x4e9e5f,
  soil:   0x9b7e57,
  rock:   0xb9c2bb,
};

function rMat(c, o = {}) {
  return new THREE.MeshStandardMaterial({ color: c, roughness: 0.6, metalness: 0.12, flatShading: true, ...o });
}
function rBox(parent, mat, w, h, d, x = 0, y = 0, z = 0) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
  m.position.set(x, y, z);
  parent.add(m);
  return m;
}
function rCyl(parent, mat, rt, rb, h, x = 0, y = 0, z = 0, seg = 10) {
  const m = new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, seg), mat);
  m.position.set(x, y, z);
  parent.add(m);
  return m;
}
function rSph(parent, mat, r, x = 0, y = 0, z = 0, seg = 10) {
  const m = new THREE.Mesh(new THREE.SphereGeometry(r, seg, seg), mat);
  m.position.set(x, y, z);
  parent.add(m);
  return m;
}

function addRobotLights(scene) {
  scene.add(new THREE.HemisphereLight(0xffffff, 0xcfe4cf, 1.15));
  const dir = new THREE.DirectionalLight(0xffffff, 1.4);
  dir.position.set(3, 6, 4);
  scene.add(dir);
  const fill = new THREE.DirectionalLight(0xe2f2e6, 0.4);
  fill.position.set(-4, 2, -3);
  scene.add(fill);
}

function addMeadow(parent, radius = 1.5) {
  const matG = rMat(RB.grass, { roughness: 0.95 });
  const disc = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius * 1.04, 0.1, 28), matG);
  disc.position.y = -0.05;
  parent.add(disc);
  const blob = new THREE.Mesh(
    new THREE.CircleGeometry(radius * 0.5, 24),
    new THREE.MeshBasicMaterial({ color: 0x223322, transparent: true, opacity: 0.16 })
  );
  blob.rotation.x = -Math.PI / 2;
  blob.position.y = 0.011;
  parent.add(blob);
  const matB = rMat(RB.grass2, { roughness: 0.95 });
  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * Math.PI * 2 + 0.6;
    const b = new THREE.Mesh(new THREE.ConeGeometry(0.1 + Math.random() * 0.06, 0.22 + Math.random() * 0.14, 6), matB);
    b.position.set(Math.cos(a) * radius * 0.82, 0.1, Math.sin(a) * radius * 0.82);
    parent.add(b);
  }
  const rock = new THREE.Mesh(new THREE.DodecahedronGeometry(0.1, 0), rMat(RB.rock));
  rock.position.set(-radius * 0.7, 0.05, radius * 0.35);
  rock.scale.y = 0.7;
  parent.add(rock);
  return disc;
}

function addTree(parent, x, z, s = 1) {
  const tree = new THREE.Group();
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.1, 0.6, 6), rMat(0x7a5b3e, { roughness: 1 }));
  trunk.position.y = 0.3;
  tree.add(trunk);
  const fol = new THREE.Mesh(new THREE.ConeGeometry(0.6, 1.3, 7), rMat(RB.grass2, { roughness: 1 }));
  fol.position.y = 1.1;
  tree.add(fol);
  tree.position.set(x, 0, z);
  tree.scale.setScalar(s);
  parent.add(tree);
  return tree;
}

// ---------- Humanoid (mode: "wave" | "walk") ----------
function buildHumanoidModel(mode = "wave") {
  const g = new THREE.Group();
  const mP = rMat(RB.panel), mP2 = rMat(RB.panel2), mD = rMat(RB.dark), mJ = rMat(RB.joint);
  const mA = rMat(RB.accent);
  const mV = rMat(RB.visor, { emissive: 0x3fc88f, emissiveIntensity: 0.7, roughness: 0.2 });

  rBox(g, mJ, 0.32, 0.16, 0.2, 0, 0.96, 0);
  const torso = rBox(g, mP, 0.42, 0.5, 0.26, 0, 1.32, 0);
  rBox(torso, mA, 0.26, 0.16, 0.02, 0, 0.06, 0.14);
  rBox(torso, mD, 0.44, 0.06, 0.28, 0, -0.2, 0);
  const headG = new THREE.Group(); headG.position.set(0, 1.71, 0); g.add(headG);
  rCyl(headG, mJ, 0.05, 0.05, 0.08, 0, -0.06, 0);
  const head = rBox(headG, mP, 0.24, 0.22, 0.24, 0, 0.06, 0);
  rBox(head, mV, 0.18, 0.07, 0.02, 0, 0.01, 0.13);
  rBox(head, mD, 0.26, 0.05, 0.26, 0, 0.12, 0);
  rCyl(head, mA, 0.012, 0.012, 0.14, 0.1, 0.18, 0);

  const mkArm = (side) => {
    const sh = new THREE.Group(); sh.position.set(0.27 * side, 1.5, 0); g.add(sh);
    rSph(sh, mJ, 0.07);
    rBox(sh, mP2, 0.09, 0.3, 0.1, 0, -0.18, 0);
    const elbow = new THREE.Group(); elbow.position.set(0, -0.34, 0); sh.add(elbow);
    rSph(elbow, mJ, 0.055);
    rBox(elbow, mP, 0.08, 0.26, 0.09, 0, -0.16, 0);
    rBox(elbow, mD, 0.09, 0.08, 0.1, 0, -0.32, 0);
    return { sh, elbow };
  };
  const armL = mkArm(-1), armR = mkArm(1);

  const mkLeg = (side) => {
    const hip = new THREE.Group(); hip.position.set(0.11 * side, 0.92, 0); g.add(hip);
    rSph(hip, mJ, 0.07);
    rBox(hip, mP2, 0.12, 0.36, 0.13, 0, -0.2, 0);
    const knee = new THREE.Group(); knee.position.set(0, -0.4, 0); hip.add(knee);
    rSph(knee, mJ, 0.06);
    rBox(knee, mP, 0.1, 0.34, 0.12, 0, -0.2, 0);
    rBox(knee, mD, 0.11, 0.07, 0.2, 0, -0.4, 0.04);
    return { hip, knee };
  };
  const legL = mkLeg(-1), legR = mkLeg(1);

  return {
    group: g,
    update(t) {
      torso.position.y = 1.32 + Math.sin(t * 1.6) * 0.012;
      if (mode === "walk") {
        const w = t * 4.4;
        legL.hip.rotation.x = Math.sin(w) * 0.5;
        legR.hip.rotation.x = Math.sin(w + Math.PI) * 0.5;
        legL.knee.rotation.x = Math.max(0, -Math.sin(w)) * 0.7;
        legR.knee.rotation.x = Math.max(0, -Math.sin(w + Math.PI)) * 0.7;
        armL.sh.rotation.x = Math.sin(w + Math.PI) * 0.4;
        armR.sh.rotation.x = Math.sin(w) * 0.4;
        armL.elbow.rotation.x = -0.2;
        armR.elbow.rotation.x = -0.2;
        g.position.y = Math.abs(Math.sin(w)) * 0.035;
        headG.rotation.y = Math.sin(t * 0.6) * 0.2;
      } else {
        g.rotation.z = Math.sin(t * 0.8) * 0.015;
        headG.rotation.y = Math.sin(t * 0.45) * 0.45;
        armL.sh.rotation.x = Math.sin(t * 1.2) * 0.08;
        armL.elbow.rotation.x = -0.15 + Math.sin(t * 1.2 + 1) * 0.06;
        const w = Math.max(0, Math.sin(t * 0.45));
        const ww = w * w;
        armR.sh.rotation.z = -2.4 * ww;
        armR.elbow.rotation.z = (-0.4 - Math.sin(t * 6) * 0.35) * ww;
        armR.sh.rotation.x = (1 - ww) * Math.sin(t * 1.1) * 0.08;
      }
    },
  };
}

// ---------- Quadruped ----------
function buildQuadrupedModel() {
  const g = new THREE.Group();
  const mP = rMat(RB.panel), mD = rMat(RB.dark), mJ = rMat(RB.joint), mA = rMat(RB.accent);

  const body = rBox(g, mP, 0.92, 0.26, 0.42, 0, 0.62, 0);
  rBox(body, mD, 0.94, 0.08, 0.44, 0, -0.12, 0);
  rBox(body, mA, 0.3, 0.04, 0.43, 0.18, 0.13, 0);
  const head = rBox(g, mP, 0.2, 0.16, 0.26, 0.56, 0.66, 0);
  rBox(head, rMat(RB.visor, { emissive: 0x3fc88f, emissiveIntensity: 0.8 }), 0.03, 0.06, 0.16, 0.11, 0, 0);
  rCyl(g, mD, 0.008, 0.008, 0.22, -0.48, 0.78, 0);

  const legs = [];
  const mkLeg = (fx, fz, phase) => {
    const hip = new THREE.Group(); hip.position.set(fx, 0.6, fz); g.add(hip);
    rSph(hip, mJ, 0.065);
    rBox(hip, mP, 0.08, 0.3, 0.07, 0, -0.16, 0);
    const knee = new THREE.Group(); knee.position.set(0, -0.3, 0); hip.add(knee);
    rSph(knee, mJ, 0.05);
    rBox(knee, mD, 0.06, 0.3, 0.06, 0, -0.16, 0);
    rSph(knee, mD, 0.045, 0, -0.32, 0);
    legs.push({ hip, knee, phase });
  };
  mkLeg(0.36, 0.2, 0); mkLeg(0.36, -0.2, Math.PI);
  mkLeg(-0.36, 0.2, Math.PI); mkLeg(-0.36, -0.2, 0);

  return {
    group: g,
    update(t) {
      const sp = 3.4;
      legs.forEach((l) => {
        const s = Math.sin(t * sp + l.phase);
        l.hip.rotation.z = s * 0.5;
        l.knee.rotation.z = -Math.max(0, Math.cos(t * sp + l.phase)) * 0.7 - 0.12;
      });
      g.position.y = Math.abs(Math.sin(t * sp)) * 0.025;
      head.rotation.y = Math.sin(t * 0.6) * 0.25;
    },
  };
}

// ---------- Drone ----------
function buildDroneModel() {
  const g = new THREE.Group();
  const mP = rMat(RB.panel), mD = rMat(RB.dark), mA = rMat(RB.accent);
  const body = rBox(g, mP, 0.42, 0.14, 0.42, 0, 0, 0);
  rBox(body, mA, 0.44, 0.04, 0.12, 0, 0, 0);
  rSph(g, rMat(RB.visor, { emissive: 0x3fc88f, emissiveIntensity: 0.9, roughness: 0.2 }), 0.07, 0, -0.1, 0.16);
  const rotors = [];
  [[1, 1], [1, -1], [-1, 1], [-1, -1]].forEach(([sx, sz]) => {
    rCyl(g, mD, 0.022, 0.022, 0.4, sx * 0.22, 0.02, sz * 0.22).rotation.z = sx * -0.9;
    const mount = rCyl(g, mD, 0.04, 0.05, 0.08, sx * 0.38, 0.1, sz * 0.38);
    const rotor = rCyl(mount, rMat(0x6b7682, { transparent: true, opacity: 0.85 }), 0.26, 0.26, 0.012, 0, 0.06, 0, 16);
    rotors.push(rotor);
  });
  rCyl(g, mD, 0.012, 0.012, 0.18, 0.12, -0.14, 0.12);
  rCyl(g, mD, 0.012, 0.012, 0.18, -0.12, -0.14, -0.12);
  return {
    group: g,
    update(t) {
      rotors.forEach((r, i) => { r.rotation.y = t * (22 + i * 2); });
      g.rotation.z = Math.sin(t * 1.4) * 0.06;
      g.rotation.x = Math.cos(t * 1.1) * 0.05;
    },
  };
}

// ---------- Ground rover ----------
function buildRoverModel() {
  const g = new THREE.Group();
  const mP = rMat(RB.panel), mD = rMat(RB.dark), mA = rMat(RB.accent), mJ = rMat(RB.joint);
  const chassis = rBox(g, mP, 0.84, 0.2, 0.52, 0, 0.34, 0);
  rBox(chassis, mD, 0.86, 0.06, 0.54, 0, -0.1, 0);
  rBox(chassis, mA, 0.2, 0.05, 0.53, 0.22, 0.1, 0);
  rBox(g, rMat(0x32507a, { roughness: 0.3, metalness: 0.4 }), 0.5, 0.02, 0.4, -0.12, 0.47, 0);
  rCyl(g, mD, 0.025, 0.025, 0.42, 0.3, 0.66, 0);
  const lidar = rCyl(g, mJ, 0.07, 0.08, 0.09, 0.3, 0.9, 0, 12);
  rBox(lidar, rMat(RB.visor, { emissive: 0x3fc88f, emissiveIntensity: 0.9 }), 0.15, 0.03, 0.02, 0, 0, 0);
  rCyl(g, mD, 0.006, 0.006, 0.3, -0.34, 0.62, -0.18);
  const wheels = [];
  [[0.3, 0.32], [0, 0.32], [-0.3, 0.32], [0.3, -0.32], [0, -0.32], [-0.3, -0.32]].forEach(([x, z]) => {
    const w = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.13, 0.09, 12), mD);
    w.rotation.x = Math.PI / 2;
    w.position.set(x, 0.13, z);
    g.add(w);
    wheels.push(w);
  });
  return {
    group: g,
    update(t) {
      wheels.forEach((w) => { w.rotation.y = t * 2.2; });
      lidar.rotation.y = t * 3;
      g.rotation.z = Math.sin(t * 0.9) * 0.01;
    },
  };
}

const ROBOT_BUILDERS = {
  humanoid: buildHumanoidModel,
  quadruped: buildQuadrupedModel,
  drone: buildDroneModel,
  rover: buildRoverModel,
};

// ---------- Interest-card scene ----------
function robotCardScene(kind, opts = {}) {
  return (ctx) => {
    const { scene, camera } = ctx;
    camera.position.set(...(opts.cam || [2.3, 1.7, 2.9]));
    camera.lookAt(0, opts.look ?? 0.7, 0);
    addRobotLights(scene);
    const stage = new THREE.Group();
    scene.add(stage);
    addMeadow(stage, opts.meadow ?? 1.45);
    const built = ROBOT_BUILDERS[kind]();
    stage.add(built.group);
    const hover = kind === "drone" ? (opts.hover ?? 1.0) : 0;
    return {
      update(t) {
        built.update(t);
        if (hover) built.group.position.y = hover + Math.sin(t * 1.3) * 0.08;
        stage.rotation.y = Math.sin(t * 0.22) * 0.45 + ctx.mouse.x * 0.35;
      },
      dispose() {
        scene.traverse((o) => {
          if (o.geometry) o.geometry.dispose();
          if (o.material && o.material.dispose) o.material.dispose();
        });
      },
    };
  };
}

// ---------- Research-thrust dioramas ----------
function dioramaScene(kind, zoom = 1) {
  return (ctx) => {
    const { scene, camera } = ctx;
    addRobotLights(scene);
    const stage = new THREE.Group();
    scene.add(stage);
    let update = () => {};


    if (kind === "embodied") {
      // open dollhouse room — robots living and working in a real home
      if (zoom < 1) { camera.position.set(9.36, 8.1, 10.44); camera.lookAt(0, -1.1, 0); }
      else { camera.position.set(4.4, 3.6, 4.6); camera.lookAt(0, 0.35, 0); }
      const home = new THREE.Group();
      stage.add(home);

      const mFloor = rMat(0xece2d0, { roughness: 0.95 });
      const mRug = rMat(0xcfe3cf, { roughness: 1 });
      const mWall = rMat(0xf5f5f1, { roughness: 0.95 });
      const mWood = rMat(0xb08a5e, { roughness: 0.85 });
      const mSofa = rMat(RB.grass, { roughness: 1 });
      const mPot = rMat(0xc96f4a, { roughness: 0.9 });

      rBox(home, mFloor, 6, 0.18, 5, 0, -0.09, 0);
      const rug = new THREE.Mesh(new THREE.CylinderGeometry(1.05, 1.05, 0.03, 24), mRug);
      rug.position.set(-1.0, 0.02, 0.7); home.add(rug);
      // two open walls
      rBox(home, mWall, 6, 0.95, 0.12, 0, 0.47, -2.44);
      rBox(home, mWall, 0.12, 0.95, 5, -2.94, 0.47, 0);
      // kitchen counter + fridge
      rBox(home, mWood, 1.7, 0.5, 0.5, -1.7, 0.25, -2.0);
      rBox(home, mWall, 0.5, 0.8, 0.45, -0.5, 0.4, -2.05);
      // sofa + coffee table
      const sofa = new THREE.Group(); sofa.position.set(1.7, 0, 0.4); sofa.rotation.y = -Math.PI / 2;
      rBox(sofa, mSofa, 1.5, 0.34, 0.6, 0, 0.18, 0);
      rBox(sofa, mSofa, 1.5, 0.4, 0.18, 0, 0.5, -0.22);
      home.add(sofa);
      rBox(home, mWood, 0.7, 0.22, 0.4, 0.7, 0.12, 0.5);
      // plants
      const addPlant = (x, z, s = 1) => {
        const p = new THREE.Group();
        rCyl(p, mPot, 0.13, 0.1, 0.2, 0, 0.1, 0, 8);
        const l1 = new THREE.Mesh(new THREE.ConeGeometry(0.2, 0.46, 7), rMat(RB.grass2)); l1.position.y = 0.42; p.add(l1);
        const l2 = new THREE.Mesh(new THREE.ConeGeometry(0.13, 0.32, 7), rMat(RB.grass)); l2.position.set(0.07, 0.56, 0.04); p.add(l2);
        p.position.set(x, 0, z); p.scale.setScalar(s); home.add(p);
      };
      addPlant(-2.4, -1.9, 1.0); addPlant(2.3, -2.0, 0.85); addPlant(-2.4, 1.9, 0.9);

      // robots doing chores
      const vac = buildRoverModel(); vac.group.scale.setScalar(0.42); home.add(vac.group);
      const chef = buildHumanoidModel("wave"); chef.group.scale.setScalar(0.5);
      chef.group.position.set(-1.7, 0, -1.45); chef.group.rotation.y = Math.PI; home.add(chef.group);
      const duster = buildDroneModel(); duster.group.scale.setScalar(0.42); home.add(duster.group);
      const patrol = buildQuadrupedModel(); patrol.group.scale.setScalar(0.4); home.add(patrol.group);
      const waypoints = [
        new THREE.Vector3(2.2, 0, 1.7), new THREE.Vector3(2.2, 0, -1.4),
        new THREE.Vector3(0.4, 0, -1.4), new THREE.Vector3(0.4, 0, 1.7),
      ];

      update = (t) => {
        vac.update(t * 1.6);
        vac.group.position.set(-1.0 + Math.sin(t * 0.5) * 1.0, 0, 0.7 + Math.sin(t * 0.78 + 1.2) * 0.9);
        vac.group.rotation.y = Math.atan2(Math.cos(t * 0.78 + 1.2) * 0.7, Math.cos(t * 0.5) * 0.5);
        chef.update(t);
        duster.update(t);
        duster.group.position.set(-0.6 + Math.sin(t * 0.4) * 1.6, 1.4 + Math.sin(t * 1.1) * 0.12, -1.9);
        duster.group.rotation.y = Math.sin(t * 0.4) > 0 ? 0 : Math.PI;
        patrol.update(t);
        const total = waypoints.length;
        const prog = (t * 0.18) % total;
        const i0 = Math.floor(prog), i1 = (i0 + 1) % total, f = prog - i0;
        patrol.group.position.lerpVectors(waypoints[i0], waypoints[i1], f);
        const dir = waypoints[i1].clone().sub(waypoints[i0]);
        patrol.group.rotation.y = Math.atan2(dir.x, dir.z) - Math.PI / 2;
        stage.rotation.y = Math.sin(t * 0.12) * 0.14 + ctx.mouse.x * 0.22;
      };
    }

    if (kind === "swarm") {
      if (zoom < 1) { camera.position.set(7.2, 5.13, 7.92); camera.lookAt(0, -0.4, 0); }
      else { camera.position.set(2.9, 2.1, 3.4); camera.lookAt(0, 0.5, 0); }
      addMeadow(stage, 1.9);
      const q1 = buildQuadrupedModel(); q1.group.position.set(-0.55, 0, 0.3); q1.group.rotation.y = 0.5; q1.group.scale.setScalar(0.85); stage.add(q1.group);
      const q2 = buildQuadrupedModel(); q2.group.position.set(0.6, 0, -0.4); q2.group.rotation.y = -0.7; q2.group.scale.setScalar(0.85); stage.add(q2.group);
      const d = buildDroneModel(); d.group.scale.setScalar(0.8); stage.add(d.group);
      // shared map: point cloud growing between the robots
      const MN = 160;
      const mapPos = new Float32Array(MN * 3);
      for (let i = 0; i < MN; i++) {
        const a = Math.random() * Math.PI * 2, r = Math.random() * 1.4;
        mapPos[i * 3] = Math.cos(a) * r;
        mapPos[i * 3 + 1] = 0.02 + Math.random() * 0.04;
        mapPos[i * 3 + 2] = Math.sin(a) * r;
      }
      const mapGeo = new THREE.BufferGeometry();
      mapGeo.setAttribute("position", new THREE.BufferAttribute(mapPos, 3));
      const mapPts = new THREE.Points(mapGeo, new THREE.PointsMaterial({ color: 0x2e8f5b, size: 0.035, transparent: true, opacity: 0.0 }));
      stage.add(mapPts);
      const rings = [q1.group, q2.group].map((src) => {
        const r = new THREE.Mesh(
          new THREE.RingGeometry(0.3, 0.32, 32),
          new THREE.MeshBasicMaterial({ color: 0x2e8f5b, transparent: true, opacity: 0.5, side: THREE.DoubleSide })
        );
        r.rotation.x = -Math.PI / 2;
        r.position.copy(src.position); r.position.y = 0.03;
        stage.add(r);
        return r;
      });
      update = (t) => {
        q1.update(t); q2.update(t + 1.3); d.update(t);
        d.group.position.set(Math.sin(t * 0.5) * 0.7, 1.5 + Math.sin(t * 1.2) * 0.1, Math.cos(t * 0.5) * 0.7);
        mapPts.material.opacity = 0.35 + Math.sin(t * 0.8) * 0.25;
        rings.forEach((r, i) => {
          const ph = (t * 0.6 + i * 0.5) % 1;
          r.scale.setScalar(0.4 + ph * 2.4);
          r.material.opacity = 0.5 * (1 - ph);
        });
      };
    }

    if (kind === "gp") {
      // Spatial Intelligence: GP belief surface floating above the real world
      if (zoom < 1) { camera.position.set(5.94, 5.04, 7.38); camera.lookAt(0, -0.5, 0); }
      else { camera.position.set(2.7, 2.3, 3.4); camera.lookAt(0, 0.9, 0); }
      addMeadow(stage, 1.9);
      addTree(stage, -1.3, -0.6, 0.7);
      addTree(stage, 1.1, -1.0, 0.55);
      const rover = buildRoverModel(); rover.group.scale.setScalar(0.8); stage.add(rover.group);
      // floating GP surface
      const sGeo = new THREE.PlaneGeometry(2.6, 2.6, 22, 22);
      sGeo.rotateX(-Math.PI / 2);
      const surf = new THREE.Mesh(sGeo, new THREE.MeshBasicMaterial({ color: 0x2e8f5b, wireframe: true, transparent: true, opacity: 0.5 }));
      surf.position.y = 1.7;
      stage.add(surf);
      const base = sGeo.attributes.position.array.slice();
      // measurement pillars connecting world → belief
      const samples = [];
      for (let i = 0; i < 6; i++) {
        const x = -1.0 + Math.random() * 2.0, z = -1.0 + Math.random() * 2.0;
        const bar = new THREE.Mesh(
          new THREE.CylinderGeometry(0.008, 0.008, 1, 6),
          new THREE.MeshBasicMaterial({ color: 0x7fc9a2, transparent: true, opacity: 0.8 })
        );
        const tip = new THREE.Mesh(new THREE.SphereGeometry(0.04, 8, 8), rMat(RB.dark));
        stage.add(bar); stage.add(tip);
        samples.push({ bar, tip, x, z, ph: Math.random() * 6 });
      }
      const d = buildDroneModel(); d.group.scale.setScalar(0.6); stage.add(d.group);
      const fieldY = (x, z, t) => 1.7 + Math.sin(x * 1.8 + t) * 0.16 + Math.cos(z * 2.2 + t * 0.7) * 0.12;
      update = (t) => {
        const p = sGeo.attributes.position;
        for (let i = 0; i < p.count; i++) {
          const x = base[i * 3], z = base[i * 3 + 2];
          p.array[i * 3 + 1] = Math.sin(x * 1.8 + t) * 0.16 + Math.cos(z * 2.2 + t * 0.7) * 0.12;
        }
        p.needsUpdate = true;
        samples.forEach(({ bar, tip, x, z }) => {
          const y = fieldY(x, z, t);
          tip.position.set(x, y, z);
          bar.position.set(x, y / 2, z);
          bar.scale.y = y;
        });
        rover.update(t);
        rover.group.position.set(Math.sin(t * 0.35) * 0.9, 0, Math.cos(t * 0.35) * 0.9);
        rover.group.rotation.y = t * 0.35 + Math.PI / 2;
        d.update(t);
        d.group.position.set(Math.sin(t * 0.4) * 1.1, 2.4, Math.cos(t * 0.4) * 1.1);
        stage.rotation.y = Math.sin(t * 0.15) * 0.2 + ctx.mouse.x * 0.25;
      };
    }

    return {
      update,
      dispose() {
        scene.traverse((o) => {
          if (o.geometry) o.geometry.dispose();
          if (o.material && o.material.dispose) o.material.dispose();
        });
      },
    };
  };
}

// ---------- Hero: drone beside photo ----------
function heroDroneScene(ctx) {
  const { scene, camera } = ctx;
  camera.position.set(1.4, 0.7, 1.9);
  camera.lookAt(0, 0.05, 0);
  addRobotLights(scene);
  const d = buildDroneModel();
  scene.add(d.group);
  return {
    update(t) {
      d.update(t);
      d.group.position.y = Math.sin(t * 1.2) * 0.07;
      d.group.rotation.y = t * 0.25 + ctx.mouse.x * 0.4;
    },
    dispose() {
      scene.traverse((o) => {
        if (o.geometry) o.geometry.dispose();
        if (o.material && o.material.dispose) o.material.dispose();
      });
    },
  };
}

// ---------- Hero: parade walking along top of photo ----------
function heroParadeScene(ctx) {
  const { scene, camera } = ctx;
  camera.position.set(0, 1.0, 3.6);
  camera.lookAt(0, 0.62, 0);
  addRobotLights(scene);

  const walker = buildHumanoidModel("walk");
  walker.group.scale.setScalar(0.62);
  scene.add(walker.group);

  const dog = buildQuadrupedModel();
  dog.group.scale.setScalar(0.5);
  scene.add(dog.group);

  const W = 1.55; // half travel width
  const P = 16;   // seconds per loop
  const tri = (ph) => (ph < 0.5 ? -1 + ph * 4 : 3 - ph * 4); // -1..1..-1
  return {
    update(t) {
      const ph = (t / P) % 1;
      const x = tri(ph) * W;
      const dir = ph < 0.5 ? 1 : -1;
      walker.update(t);
      walker.group.position.x = x;
      walker.group.rotation.y = dir * Math.PI / 2;
      dog.update(t + 0.4);
      dog.group.position.x = x - dir * 0.85;
      dog.group.position.y += 0; // bob handled in model
      dog.group.rotation.y = dir > 0 ? 0 : Math.PI;
    },
    dispose() {
      scene.traverse((o) => {
        if (o.geometry) o.geometry.dispose();
        if (o.material && o.material.dispose) o.material.dispose();
      });
    },
  };
}

Object.assign(window, {
  ROBOT_BUILDERS, robotCardScene, dioramaScene, heroDroneScene, heroParadeScene,
  addRobotLights, addMeadow, addTree, rMat, RB,
});
