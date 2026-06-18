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

function addPathLine(parent, rx, rz, cx, cz, color = 0x2e8f5b, opacity = 0.2) {
  const points = [];
  const segments = 64;
  for (let i = 0; i <= segments; i++) {
    const theta = (i / segments) * Math.PI * 2;
    points.push(new THREE.Vector3(cx + Math.sin(theta) * rx, 0.01, cz + Math.cos(theta) * rz));
  }
  const geo = new THREE.BufferGeometry().setFromPoints(points);
  const mat = new THREE.LineBasicMaterial({ color, transparent: true, opacity });
  const line = new THREE.Line(geo, mat);
  parent.add(line);
  return line;
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
      } else if (mode === "cook") {
        g.rotation.z = Math.sin(t * 0.8) * 0.005;
        // Left arm holds bowl/cutting board
        armL.sh.rotation.set(-0.4, 0.2, 0.1);
        armL.elbow.rotation.set(-0.6, 0, 0);
        // Right arm chops rapidly
        armR.sh.rotation.set(-0.6, -0.2, -0.1);
        armR.elbow.rotation.x = -0.7 + Math.sin(t * 12) * 0.35; // rapid chopping!
        headG.rotation.y = -0.2 + Math.sin(t * 0.5) * 0.2; // look at counter
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
function buildQuadrupedModel(visorColor = 0x3fc88f) {
  const g = new THREE.Group();
  const mP = rMat(RB.panel), mD = rMat(RB.dark), mJ = rMat(RB.joint), mA = rMat(RB.accent);

  const body = rBox(g, mP, 0.92, 0.26, 0.42, 0, 0.62, 0);
  rBox(body, mD, 0.94, 0.08, 0.44, 0, -0.12, 0);
  rBox(body, mA, 0.3, 0.04, 0.43, 0.18, 0.13, 0);
  const visorMat = rMat(RB.visor, { emissive: visorColor, emissiveIntensity: 0.8 });
  const head = rBox(g, mP, 0.2, 0.16, 0.26, 0.56, 0.66, 0);
  rBox(head, visorMat, 0.03, 0.06, 0.16, 0.11, 0, 0);
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
      visorMat.emissiveIntensity = 0.5 + Math.sin(t * 5) * 0.35;
    },
  };
}

// ---------- Drone ----------
function buildDroneModel(visorColor = 0x3fc88f) {
  const g = new THREE.Group();
  const mP = rMat(RB.panel), mD = rMat(RB.dark), mA = rMat(RB.accent);
  const body = rBox(g, mP, 0.42, 0.14, 0.42, 0, 0, 0);
  rBox(body, mA, 0.44, 0.04, 0.12, 0, 0, 0);
  const visorMat = rMat(RB.visor, { emissive: visorColor, emissiveIntensity: 0.9, roughness: 0.2 });
  rSph(g, visorMat, 0.07, 0, -0.1, 0.16);
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
      visorMat.emissiveIntensity = 0.6 + Math.sin(t * 6) * 0.35;
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
      // open dollhouse home — compact, furnished apartment with large robots living and working in it
      const home = new THREE.Group();
      stage.add(home);

      // Compact footprint so the robots read large at human scale (RW/RD = half width/depth)
      const RW = 2.5, RD = 2.2;

      const mFloor = rMat(0xe6d6ba, { roughness: 0.9 });
      const mRug = rMat(0xd7e7da, { roughness: 1 });
      const mWall = rMat(0xf3efe7, { roughness: 0.97 });
      const mWallBack = rMat(0xe9e2d4, { roughness: 0.97 });
      const mBase = rMat(0xccbfa6, { roughness: 0.9 });
      const mWood = rMat(0xb0875a, { roughness: 0.8 });
      const mWoodDark = rMat(0x7c5a3a, { roughness: 0.85 });
      const mSofa = rMat(0x6f93b8, { roughness: 0.95 });
      const mSofaCushion = rMat(0x83a6c8, { roughness: 0.95 });
      const mMetal = rMat(0xcfd6dc, { roughness: 0.3, metalness: 0.6 });
      const mDark = rMat(0x2b3038, { roughness: 0.4 });
      const mScreen = rMat(0x12161c, { emissive: 0x153a6b, emissiveIntensity: 0.6, roughness: 0.3 });
      const mPot = rMat(0xc96f4a, { roughness: 0.9 });

      // Floor + rug
      rBox(home, mFloor, RW * 2 + 0.2, 0.18, RD * 2 + 0.2, 0, -0.09, 0);
      const rug = new THREE.Mesh(new THREE.CylinderGeometry(0.95, 0.95, 0.03, 28), mRug);
      rug.position.set(0.8, 0.02, 0.75); home.add(rug);

      // Two solid walls (back -z, left -x); front + right stay open to the camera
      rBox(home, mWallBack, RW * 2 + 0.2, 1.3, 0.1, 0, 0.65, -RD - 0.04);
      rBox(home, mWall, 0.1, 1.3, RD * 2 + 0.2, -RW - 0.04, 0.65, 0);
      rBox(home, mBase, RW * 2 + 0.2, 0.1, 0.05, 0, 0.05, -RD - 0.02);
      rBox(home, mBase, 0.05, 0.1, RD * 2 + 0.2, -RW - 0.02, 0.05, 0);

      // Window on the back wall. Built as ONE solid frame box embedded into the wall, with a
      // smaller sky pane and the two muntins layered strictly in front at DISTINCT depths so no
      // two faces are ever coplanar — this is what removes the z-fighting flicker.
      const mSky = rMat(0xaedcf5, { emissive: 0x8ec8ee, emissiveIntensity: 0.4, roughness: 0.5 });
      const windowG = new THREE.Group(); windowG.position.set(0.95, 0.82, -RD + 0.02); home.add(windowG);
      rBox(windowG, mWood, 1.1, 0.72, 0.12, 0, 0, 0.0);        // frame (single box, back embedded in wall)
      rBox(windowG, mSky, 0.92, 0.56, 0.03, 0, 0, 0.08);       // sky pane, inset in front of the frame
      rBox(windowG, mWood, 0.035, 0.56, 0.025, 0, 0, 0.115);   // muntin vertical
      rBox(windowG, mWood, 0.92, 0.035, 0.025, 0, 0, 0.145);   // muntin horizontal

      // Framed picture on the left wall (positioned at -RW + 0.04 to stand out from the wall and resolve z-fighting)
      const frame = new THREE.Group(); frame.position.set(-RW + 0.04, 0.85, 0.7); frame.rotation.y = Math.PI / 2; home.add(frame);
      rBox(frame, mWoodDark, 0.72, 0.52, 0.03, 0, 0, 0); // frame backing border
      rBox(frame, rMat(0xf7f5f0, { roughness: 0.95 }), 0.58, 0.38, 0.02, 0, 0, 0.015); // white canvas background
      
      // Abstract art elements layered on the canvas at distinct depths
      rBox(frame, rMat(0xde6b48, { roughness: 0.8 }), 0.22, 0.18, 0.005, -0.1, 0.05, 0.026);  // terracotta rectangle
      rBox(frame, rMat(0x2f6df0, { roughness: 0.8 }), 0.12, 0.22, 0.005, 0.12, -0.04, 0.027); // cobalt rectangle
      
      const sunGeo = new THREE.CylinderGeometry(0.08, 0.08, 0.005, 16);
      const sunMat = rMat(0xf4d35e, { roughness: 0.7, emissive: 0xf4d35e, emissiveIntensity: 0.1 });
      const sun = new THREE.Mesh(sunGeo, sunMat);
      sun.rotation.x = Math.PI / 2;
      sun.position.set(0.08, 0.06, 0.028);
      frame.add(sun); // golden sun circle
      
      rBox(frame, rMat(0x1a1a1a, { roughness: 0.9 }), 0.015, 0.32, 0.005, -0.16, -0.02, 0.029); // vertical black line
      rBox(frame, rMat(0x1a1a1a, { roughness: 0.9 }), 0.44, 0.015, 0.005, 0.02, 0.08, 0.03);    // horizontal black line
      
      // ---- KITCHEN (back-left): fridge in the corner, then the counter run to its right (no overlap) ----
      const kitchen = new THREE.Group(); home.add(kitchen);
      const counterZ = -RD + 0.3;
      // fridge stands alone in the corner (x spans -2.45..-1.95)
      rBox(kitchen, rMat(0xdfe3e6, { roughness: 0.5, metalness: 0.3 }), 0.5, 1.18, 0.5, -RW + 0.3, 0.59, counterZ);
      rBox(kitchen, mWoodDark, 0.5, 0.02, 0.5, -RW + 0.3, 0.64, counterZ);                 // fridge door split line
      rBox(kitchen, mMetal, 0.03, 0.46, 0.03, -RW + 0.5, 0.62, counterZ + 0.27);           // fridge handle (front face)
      // counter run starts to the RIGHT of the fridge (x spans -1.8..-0.3)
      rBox(kitchen, mWood, 1.5, 0.52, 0.5, -1.05, 0.26, counterZ);                         // base
      rBox(kitchen, rMat(0xe9e2d4, { roughness: 0.6 }), 1.56, 0.06, 0.56, -1.05, 0.55, counterZ); // countertop
      [-1.55, -1.05, -0.55].forEach(cx => rBox(kitchen, mWoodDark, 0.02, 0.4, 0.02, cx, 0.26, counterZ + 0.25)); // door seams
      rBox(kitchen, mDark, 0.32, 0.06, 0.26, -1.4, 0.57, counterZ);                        // sink basin
      rCyl(kitchen, mMetal, 0.018, 0.018, 0.16, -1.4, 0.66, counterZ - 0.06, 8);           // faucet riser
      rBox(kitchen, mMetal, 0.018, 0.018, 0.12, -1.4, 0.74, counterZ - 0.01);              // faucet spout
      [[-0.6, 0.1], [-0.6, -0.1], [-0.85, 0.1], [-0.85, -0.1]].forEach(([bx, bz]) => {     // stove burners
        const burner = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.012, 12), mDark);
        burner.position.set(bx, 0.585, counterZ + bz); kitchen.add(burner);
      });
      rBox(kitchen, mWood, 1.5, 0.4, 0.28, -1.05, 1.08, -RD + 0.18);                       // upper cabinets

      // ---- LIVING: sofa, coffee table, TV console ----
      const sofa = new THREE.Group(); sofa.position.set(0.8, 0, 1.7); home.add(sofa); // faces -z (toward TV)
      rBox(sofa, mSofa, 1.5, 0.2, 0.66, 0, 0.2, 0);            // seat base
      rBox(sofa, mSofa, 1.5, 0.46, 0.16, 0, 0.45, 0.27);       // backrest
      rBox(sofa, mSofa, 0.16, 0.36, 0.66, -0.67, 0.38, 0);     // arm L
      rBox(sofa, mSofa, 0.16, 0.36, 0.66, 0.67, 0.38, 0);      // arm R
      rBox(sofa, mSofaCushion, 0.62, 0.13, 0.5, -0.34, 0.34, -0.04); // cushion L
      rBox(sofa, mSofaCushion, 0.62, 0.13, 0.5, 0.34, 0.34, -0.04);  // cushion R
      [[-0.66, -0.28], [0.66, -0.28], [-0.66, 0.28], [0.66, 0.28]].forEach(([fx, fz]) => rCyl(sofa, mWoodDark, 0.03, 0.03, 0.12, fx, 0.06, fz, 8));

      const table = new THREE.Group(); table.position.set(0.8, 0, 0.7); home.add(table);
      rBox(table, mWoodDark, 0.92, 0.05, 0.52, 0, 0.34, 0);
      [[-0.4, -0.2], [0.4, -0.2], [-0.4, 0.2], [0.4, 0.2]].forEach(([lx, lz]) => rCyl(table, mWoodDark, 0.025, 0.025, 0.34, lx, 0.17, lz, 6));

      const media = new THREE.Group(); media.position.set(-0.5, 0, -RD + 0.2); home.add(media);
      rBox(media, mWoodDark, 1.3, 0.3, 0.32, 0, 0.15, 0);      // console
      rBox(media, mDark, 1.2, 0.72, 0.06, 0, 0.74, -0.07);     // TV bezel
      rBox(media, mScreen, 1.08, 0.6, 0.02, 0, 0.74, -0.03);   // TV screen
      rCyl(media, mDark, 0.04, 0.04, 0.12, 0, 0.42, -0.05, 8); // TV stand

      // Floor lamp (front-right) with a warm point light
      const lamp = new THREE.Group(); lamp.position.set(RW - 0.3, 0, 1.7); home.add(lamp);
      rCyl(lamp, mMetal, 0.06, 0.09, 0.04, 0, 0.02, 0, 12);
      rCyl(lamp, mMetal, 0.02, 0.02, 1.1, 0, 0.57, 0, 8);
      const shade = new THREE.Mesh(new THREE.ConeGeometry(0.19, 0.26, 14, 1, true), rMat(0xf2e6c8, { emissive: 0xffe9b0, emissiveIntensity: 0.5, side: THREE.DoubleSide }));
      shade.position.y = 1.12; lamp.add(shade);
      const lampLight = new THREE.PointLight(0xffe2ad, 0.55, 3.2); lampLight.position.set(RW - 0.3, 1.12, 1.7); home.add(lampLight);

      // Pendant light over the coffee table
      const pendant = new THREE.Group(); pendant.position.set(0.8, 1.9, 0.7); home.add(pendant);
      rCyl(pendant, mDark, 0.004, 0.004, 0.45, 0, 0.22, 0, 6);
      const shade2 = new THREE.Mesh(new THREE.ConeGeometry(0.16, 0.18, 14, 1, true), rMat(0x2b3038, { side: THREE.DoubleSide }));
      pendant.add(shade2);
      rSph(pendant, rMat(0xfff1c8, { emissive: 0xffe6a0, emissiveIntensity: 1.0 }), 0.05, 0, -0.02, 0);
      
      // plants (the .y is the drone's hover height above each plant; base sits on the floor)
      const plantPositions = [
        new THREE.Vector3(-RW + 0.32, 1.05, 1.7),    // front-left corner
        new THREE.Vector3(RW - 0.35, 1.05, -RD + 0.45), // back-right corner, by the window
        new THREE.Vector3(-RW + 0.32, 1.05, -0.2),   // mid-left wall
      ];
      const addPlant = (pos, s = 1) => {
        const p = new THREE.Group();
        rCyl(p, mPot, 0.14, 0.1, 0.22, 0, 0.11, 0, 8);
        const l1 = new THREE.Mesh(new THREE.ConeGeometry(0.21, 0.5, 7), rMat(RB.grass2)); l1.position.y = 0.46; p.add(l1);
        const l2 = new THREE.Mesh(new THREE.ConeGeometry(0.14, 0.34, 7), rMat(RB.grass)); l2.position.set(0.07, 0.62, 0.04); p.add(l2);
        p.position.copy(pos);
        p.position.y = 0; // base on floor
        p.scale.setScalar(s); home.add(p);
      };
      addPlant(plantPositions[0], 1.05);
      addPlant(plantPositions[1], 0.9);
      addPlant(plantPositions[2], 0.95);

      // ---- Human residents living alongside the robots ----
      const addHuman = (x, z, { rotY = 0, seated = false, shirt = 0x4a6fa5, pants = 0x33405a, skin = 0xe8b894, hair = 0x3a2a1a, shoes = 0x2a2a2e, scale = 1 } = {}) => {
        const h = new THREE.Group();
        const mSkin = rMat(skin, { roughness: 0.7 });
        const mShirt = rMat(shirt, { roughness: 0.9 });
        const mPants = rMat(pants, { roughness: 0.9 });
        const mHair = rMat(hair, { roughness: 0.95 });
        const mShoe = rMat(shoes, { roughness: 0.8 });
        if (seated) {
          rBox(h, mPants, 0.34, 0.2, 0.34, 0, 0.5, 0);                 // hips
          rBox(h, mPants, 0.3, 0.16, 0.42, 0, 0.48, 0.26);            // thighs (forward)
          rBox(h, mPants, 0.13, 0.42, 0.14, -0.08, 0.26, 0.46);       // shin L
          rBox(h, mPants, 0.13, 0.42, 0.14, 0.08, 0.26, 0.46);        // shin R
          rBox(h, mShoe, 0.13, 0.06, 0.2, -0.08, 0.05, 0.56);         // foot L
          rBox(h, mShoe, 0.13, 0.06, 0.2, 0.08, 0.05, 0.56);          // foot R
          rBox(h, mShirt, 0.36, 0.42, 0.26, 0, 0.82, 0);              // torso
          rBox(h, mShirt, 0.1, 0.36, 0.1, -0.23, 0.8, 0.05);          // arm L
          rBox(h, mShirt, 0.1, 0.36, 0.1, 0.23, 0.8, 0.05);           // arm R
          rSph(h, mSkin, 0.055, -0.23, 0.62, 0.1);                    // hand L
          rSph(h, mSkin, 0.055, 0.23, 0.62, 0.1);                     // hand R
          rCyl(h, mSkin, 0.05, 0.05, 0.08, 0, 1.07, 0, 8);            // neck
          rSph(h, mSkin, 0.13, 0, 1.19, 0);                           // head
          const cap = rSph(h, mHair, 0.135, 0, 1.21, -0.02); cap.scale.set(1, 0.82, 1);
        } else {
          rBox(h, mPants, 0.14, 0.6, 0.16, -0.1, 0.3, 0);             // leg L
          rBox(h, mPants, 0.14, 0.6, 0.16, 0.1, 0.3, 0);              // leg R
          rBox(h, mShoe, 0.14, 0.06, 0.22, -0.1, 0.03, 0.04);         // foot L
          rBox(h, mShoe, 0.14, 0.06, 0.22, 0.1, 0.03, 0.04);          // foot R
          rBox(h, mShirt, 0.38, 0.5, 0.24, 0, 0.86, 0);               // torso
          rBox(h, mShirt, 0.1, 0.46, 0.12, -0.25, 0.84, 0);          // arm L
          rBox(h, mShirt, 0.1, 0.46, 0.12, 0.25, 0.84, 0);           // arm R
          rSph(h, mSkin, 0.055, -0.25, 0.6, 0.02);                    // hand L
          rSph(h, mSkin, 0.055, 0.25, 0.6, 0.02);                     // hand R
          rCyl(h, mSkin, 0.05, 0.05, 0.08, 0, 1.16, 0, 8);            // neck
          rSph(h, mSkin, 0.135, 0, 1.3, 0);                           // head
          const cap = rSph(h, mHair, 0.14, 0, 1.33, -0.02); cap.scale.set(1, 0.85, 1);
        }
        h.position.set(x, 0, z);
        h.rotation.y = rotY;
        h.scale.setScalar(scale);
        home.add(h);
        return h;
      };
      // Two adults relaxing on the sofa (facing the TV)
      addHuman(0.5, 1.85, { seated: true, rotY: Math.PI, shirt: 0x2f7d6b, pants: 0x394150 });
      addHuman(1.12, 1.85, { seated: true, rotY: Math.PI, shirt: 0xb5563e, pants: 0x3a3a44, hair: 0x5a3a22 });
      // An adult standing in the kitchen near the robot chef
      addHuman(-0.15, -0.85, { rotY: Math.PI, shirt: 0x5d6b3a, pants: 0x40342a, hair: 0x241712 });
      // A child playing on the rug
      addHuman(1.55, 0.55, { rotY: -Math.PI * 0.6, scale: 0.72, shirt: 0xe0b341, pants: 0x4763a8, hair: 0x2a1c12 });

      // UGV charging dock against the left wall
      const dock = new THREE.Group();
      dock.position.set(-RW + 0.3, 0.05, -0.7);
      const mDock = rMat(0x2d3748, { roughness: 0.2 });
      rBox(dock, mDock, 0.34, 0.1, 0.34, 0, 0, 0);
      rBox(dock, rMat(0xe2e8f0), 0.22, 0.16, 0.05, -0.12, 0.08, 0);
      home.add(dock);

      // robots doing chores — scaled up ~45% so they read large in the compact home
      const vac = buildRoverModel(); vac.group.scale.setScalar(0.62); home.add(vac.group);

      // Humanoid chef in cook (chopping) mode, working at the counter
      const chef = buildHumanoidModel("cook"); chef.group.scale.setScalar(0.72);
      chef.group.position.set(-1.15, 0, counterZ + 0.55); chef.group.rotation.y = Math.PI; home.add(chef.group);

      // Drone duster with scanning spotlight cone
      const duster = buildDroneModel(); duster.group.scale.setScalar(0.56); home.add(duster.group);
      const dScannerMat = new THREE.MeshBasicMaterial({ color: 0x3fc88f, transparent: true, opacity: 0.0, side: THREE.DoubleSide });
      const dScanner = new THREE.Mesh(new THREE.ConeGeometry(0.35, 0.9, 16), dScannerMat);
      dScanner.rotation.x = Math.PI; // point down
      dScanner.position.y = -0.45;
      duster.group.add(dScanner);

      const patrol = buildQuadrupedModel(); patrol.group.scale.setScalar(0.56); home.add(patrol.group);

      // Systematic zigzag sweep for the vacuum across the open floor (passes under the coffee table)
      const vacWaypoints = [
        new THREE.Vector3(-RW + 0.3, 0, -0.7), // dock
        new THREE.Vector3(1.9, 0, -1.0),
        new THREE.Vector3(-1.9, 0, -1.0),
        new THREE.Vector3(-1.9, 0, -0.4),
        new THREE.Vector3(1.9, 0, -0.4),
        new THREE.Vector3(1.9, 0, 0.3),
        new THREE.Vector3(-1.9, 0, 0.3),
        new THREE.Vector3(-1.9, 0, 1.0),
        new THREE.Vector3(1.9, 0, 1.0),
        new THREE.Vector3(-RW + 0.3, 0, -0.7), // back to dock
      ];

      // Quadruped patrol loop through the open left-central area (clear of sofa/table)
      const waypoints = [
        new THREE.Vector3(0.0, 0, 0.6), new THREE.Vector3(0.0, 0, -1.0),
        new THREE.Vector3(-1.9, 0, -1.0), new THREE.Vector3(-1.9, 0, 0.6),
        new THREE.Vector3(0.0, 0, 0.6)
      ];
      const patrolPathGeo = new THREE.BufferGeometry().setFromPoints(waypoints);
      const patrolPathLine = new THREE.Line(patrolPathGeo, new THREE.LineBasicMaterial({ color: 0x2e8f5b, transparent: true, opacity: 0.15 }));
      home.add(patrolPathLine);

      update = (t) => {
        // 1. UGV systematic sweeping path
        const vTotal = vacWaypoints.length;
        const vProg = (t * 0.12) % vTotal;
        const v0 = Math.floor(vProg), v1 = (v0 + 1) % vTotal, vf = vProg - v0;
        const currentPos = new THREE.Vector3().lerpVectors(vacWaypoints[v0], vacWaypoints[v1], vf);
        vac.group.position.copy(currentPos);
        vac.update(t * 1.6);
        
        const vDir = vacWaypoints[v1].clone().sub(vacWaypoints[v0]);
        if (vDir.lengthSq() > 0.0001) {
          vac.group.rotation.y = Math.atan2(vDir.x, vDir.z) - Math.PI / 2;
        }

        // 2. Humanoid chef (chopping counter animation)
        chef.update(t);

        // 3. Drone visiting plants with scanning spotlight
        const cycle = 24;
        const tc = t % cycle;
        let targetPos = new THREE.Vector3();
        let isInspecting = false;
        
        if (tc < 5) {
          const f = tc / 5;
          targetPos.lerpVectors(plantPositions[2], plantPositions[0], f);
        } else if (tc < 8) {
          targetPos.copy(plantPositions[0]);
          isInspecting = true;
        } else if (tc < 13) {
          const f = (tc - 8) / 5;
          targetPos.lerpVectors(plantPositions[0], plantPositions[1], f);
        } else if (tc < 16) {
          targetPos.copy(plantPositions[1]);
          isInspecting = true;
        } else if (tc < 21) {
          const f = (tc - 16) / 5;
          targetPos.lerpVectors(plantPositions[1], plantPositions[2], f);
        } else {
          targetPos.copy(plantPositions[2]);
          isInspecting = true;
        }
        
        duster.group.position.copy(targetPos);
        duster.group.position.y += Math.sin(t * 1.8) * 0.05;
        duster.update(t);
        
        let activePlantIdx = tc < 8 ? 0 : (tc < 16 ? 1 : 2);
        const lookTarget = plantPositions[activePlantIdx];
        const dirToPlant = lookTarget.clone().sub(duster.group.position);
        duster.group.rotation.y = Math.atan2(dirToPlant.x, dirToPlant.z);

        dScannerMat.opacity = isInspecting ? 0.3 + Math.sin(t * 6) * 0.12 : 0.0;

        // 4. Quadruped patroller
        patrol.update(t);
        const total = 4;
        const prog = (t * 0.18) % total;
        const i0 = Math.floor(prog), i1 = i0 + 1, f = prog - i0;
        patrol.group.position.lerpVectors(waypoints[i0], waypoints[i1], f);
        const dir = waypoints[i1].clone().sub(waypoints[i0]);
        patrol.group.rotation.y = Math.atan2(dir.x, dir.z) - Math.PI / 2;

        // 5. Cinematic panning camera (orbits within open front-right sector)
        const camRadius = zoom < 1 ? 16.5 : 7.875; // Zoomed in another 25% on Research page
        const angle = Math.PI / 4 + Math.sin(t * 0.08) * 0.5 + ctx.mouse.x * 0.4;
        camera.position.set(Math.sin(angle) * camRadius, (zoom < 1 ? 5.5 : 3.6) + ctx.mouse.y * 1.5, Math.cos(angle) * camRadius);
        camera.lookAt(0, zoom < 1 ? -3.0 : -0.2, 0); // Tilted further downwards on Home page
      };
    }

    if (kind === "swarm") {
      // Wildfire Search & Rescue themed diorama with cinematic camera orbit
      // ===== Irregular wildfire spread: ~half the forest burns, with a natural, jagged fire front =====
      // A randomized scalar field (re-seeded each load) decides burnt vs. living ground per-point.
      const fireWaves = [];
      for (let i = 0; i < 5; i++) {
        fireWaves.push({
          ax: (Math.random() * 2 - 1) * 1.1,
          az: (Math.random() * 2 - 1) * 1.1,
          ph: Math.random() * Math.PI * 2,
          amp: 0.5 + Math.random() * 0.7,
        });
      }
      const biasX = (Math.random() * 2 - 1) * 0.45;
      const biasZ = (Math.random() * 2 - 1) * 0.45;
      const fireField = (x, z) => {
        let s = biasX * x + biasZ * z;
        for (const w of fireWaves) s += Math.sin(x * w.ax + z * w.az + w.ph) * w.amp;
        return s;
      };
      // Calibrate the threshold to the field's median so ~50% of the ground area burns.
      const fsamples = [];
      for (let i = 0; i < 600; i++) {
        const a = Math.random() * Math.PI * 2, r = Math.sqrt(Math.random()) * 4.2;
        fsamples.push(fireField(Math.cos(a) * r, Math.sin(a) * r));
      }
      fsamples.sort((a, b) => a - b);
      const burnThreshold = fsamples[Math.floor(fsamples.length * 0.5)];
      const isBurnt = (x, z) => fireField(x, z) > burnThreshold;

      // Pick a random disc point satisfying a predicate (burnt or green region).
      const pickPoint = (pred, minR = 0.3, maxR = 3.9, tries = 60) => {
        for (let k = 0; k < tries; k++) {
          const a = Math.random() * Math.PI * 2;
          const r = minR + Math.sqrt(Math.random()) * (maxR - minR);
          const x = Math.cos(a) * r, z = Math.sin(a) * r;
          if (pred(x, z)) return { x, z };
        }
        return { x: 0, z: 0 };
      };
      const notBurnt = (x, z) => !isBurnt(x, z);

      // Vertex-coloured ground disc: charred ash where burnt, lush grass where alive.
      const cChar = new THREE.Color(0x27201c);
      const cGrass = new THREE.Color(RB.grass);
      const cGrass2 = new THREE.Color(RB.grass2);
      const RINGS = 18, SEG = 64, GROUND_R = 4.2;
      const gPos = [], gCol = [], gIdx = [];
      for (let ri = 0; ri <= RINGS; ri++) {
        const rad = (ri / RINGS) * GROUND_R;
        for (let si = 0; si <= SEG; si++) {
          const a = (si / SEG) * Math.PI * 2;
          const x = Math.cos(a) * rad, z = Math.sin(a) * rad;
          gPos.push(x, 0, z);
          const c = isBurnt(x, z) ? cChar : (Math.random() < 0.5 ? cGrass : cGrass2);
          gCol.push(c.r, c.g, c.b);
        }
      }
      const gStride = SEG + 1;
      for (let ri = 0; ri < RINGS; ri++) {
        for (let si = 0; si < SEG; si++) {
          const aI = ri * gStride + si, bI = aI + 1, cI = aI + gStride, dI = cI + 1;
          gIdx.push(aI, cI, bI, bI, cI, dI);
        }
      }
      const groundGeo = new THREE.BufferGeometry();
      groundGeo.setAttribute("position", new THREE.Float32BufferAttribute(gPos, 3));
      groundGeo.setAttribute("color", new THREE.Float32BufferAttribute(gCol, 3));
      groundGeo.setIndex(gIdx);
      groundGeo.computeVertexNormals();
      const ground = new THREE.Mesh(groundGeo, new THREE.MeshStandardMaterial({ vertexColors: true, flatShading: true, roughness: 0.92 }));
      stage.add(ground);
      // Solid body underneath so the disc isn't paper-thin from the side.
      const groundBody = new THREE.Mesh(new THREE.CylinderGeometry(4.2, 4.2 * 1.04, 0.12, 32), rMat(0x2c2620, { roughness: 0.95 }));
      groundBody.position.y = -0.07;
      stage.add(groundBody);

      // Glow embers/veins on the charred ground
      const emberMat = new THREE.MeshBasicMaterial({ color: 0xff2200, transparent: true, opacity: 0.7 });
      const embers = [];
      for (let i = 0; i < 12; i++) {
        const emb = new THREE.Mesh(new THREE.BoxGeometry(0.12 + Math.random() * 0.25, 0.015, 0.04 + Math.random() * 0.06), emberMat);
        const p = pickPoint(isBurnt, 0.4, 3.5); // embers only on charred ground
        emb.position.set(p.x, 0.005, p.z);
        emb.rotation.y = Math.random() * Math.PI;
        stage.add(emb);
        embers.push({ mesh: emb, phase: Math.random() * Math.PI * 2, speed: 4.0 + Math.random() * 5.0 });
      }

      const mFlame = rMat(0xff4400, { emissive: 0xff1100, emissiveIntensity: 1.6, roughness: 0.1 });
      const mFlameInner = rMat(0xffbb00, { emissive: 0xff8800, emissiveIntensity: 2.0, roughness: 0.1 });
      const flames = [];

      // Add burnt, charred trees (some burning)
      const addBurntTree = (parent, x, z, s = 1, isOnFire = false) => {
        const tree = new THREE.Group();
        const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.08, 0.8, 6), rMat(0x18110e, { roughness: 1.0 }));
        trunk.position.y = 0.4;
        tree.add(trunk);
        const fol = new THREE.Mesh(new THREE.ConeGeometry(0.45, 0.9, 5), rMat(0x2b1c19, { roughness: 1.0 }));
        fol.position.y = 1.0;
        tree.add(fol);
        tree.position.set(x, 0, z);
        tree.scale.setScalar(s);
        parent.add(tree);

        if (isOnFire) {
          const firePositions = [
            { x: 0, y: 0.15, z: 0.06, sc: 0.45 },
            { x: 0.06, y: 0.4, z: -0.05, sc: 0.5 },
            { x: -0.07, y: 0.65, z: 0.03, sc: 0.55 },
            { x: 0.05, y: 0.85, z: 0.05, sc: 0.6 },
            { x: 0, y: 1.1, z: 0, sc: 0.7 }, // engulfing the crown
            { x: -0.1, y: 0.9, z: -0.1, sc: 0.5 },
            { x: 0.1, y: 1.0, z: 0.1, sc: 0.5 },
          ];
          firePositions.forEach(p => {
            const f = new THREE.Group();
            f.position.set(p.x, p.y, p.z);
            f.scale.setScalar(p.sc * s);
            const outCone = new THREE.Mesh(new THREE.ConeGeometry(0.16, 0.45, 5), mFlame);
            outCone.position.y = 0.22;
            f.add(outCone);
            const inCone = new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.25, 5), mFlameInner);
            inCone.position.y = 0.12;
            f.add(inCone);
            tree.add(f);
            flames.push({ group: f, outCone, inCone, baseScale: p.sc * s, seed: Math.random() * 10 });
          });
        }
        return tree;
      };
      
      // Lush, living tree builder for the green (-x) half
      const addGreenTree = (parent, x, z, s = 1) => {
        const tree = new THREE.Group();
        const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.09, 0.7, 6), rMat(0x7a5b3e, { roughness: 1 }));
        trunk.position.y = 0.35;
        tree.add(trunk);
        const fol1 = new THREE.Mesh(new THREE.ConeGeometry(0.55, 1.1, 7), rMat(RB.grass2, { roughness: 1 }));
        fol1.position.y = 0.95;
        tree.add(fol1);
        const fol2 = new THREE.Mesh(new THREE.ConeGeometry(0.4, 0.85, 7), rMat(RB.grass, { roughness: 1 }));
        fol2.position.y = 1.35;
        tree.add(fol2);
        tree.position.set(x, 0, z);
        tree.scale.setScalar(s);
        parent.add(tree);
        return tree;
      };

      // Scatter trees across the whole forest; trees in burnt ground burn/char, the rest stay lush.
      const treeSpots = [];
      let treeTries = 0;
      while (treeSpots.length < 13 && treeTries < 500) {
        treeTries++;
        const a = Math.random() * Math.PI * 2;
        const r = 0.8 + Math.sqrt(Math.random()) * 3.1;
        const x = Math.cos(a) * r, z = Math.sin(a) * r;
        if (treeSpots.some(s => Math.hypot(s.x - x, s.z - z) < 1.0)) continue;
        treeSpots.push({ x, z });
      }
      treeSpots.forEach(s => {
        const sc = 0.7 + Math.random() * 0.3;
        if (isBurnt(s.x, s.z)) addBurntTree(stage, s.x, s.z, sc, Math.random() < 0.72); // most burning, some charred
        else addGreenTree(stage, s.x, s.z, sc);
      });

      // Add charred logs lying on the ground, some burning
      const addCharredLog = (parent, x, z, angleY, length = 0.7, burning = false) => {
        const logGroup = new THREE.Group();
        logGroup.position.set(x, 0.03, z);
        logGroup.rotation.y = angleY;
        logGroup.rotation.x = Math.PI / 2 + (Math.random() - 0.5) * 0.15; // slightly tilted on ground
        
        const logMat = rMat(0x1a1210, { roughness: 1.0 }); // charcoal black
        const logMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.045, length, 6), logMat);
        logMesh.rotation.z = Math.PI / 2; // lie down
        logGroup.add(logMesh);
        parent.add(logGroup);

        if (burning) {
          const numLogFlames = Math.floor(length * 5);
          for (let i = 0; i < numLogFlames; i++) {
            const fx = (i / (numLogFlames - 1) - 0.5) * length * 0.7;
            const f = new THREE.Group();
            f.position.set(fx, 0.05, (Math.random() - 0.5) * 0.05);
            f.scale.setScalar(0.25 + Math.random() * 0.25);
            
            const outCone = new THREE.Mesh(new THREE.ConeGeometry(0.1, 0.3, 5), mFlame);
            outCone.position.y = 0.15;
            f.add(outCone);
            const inCone = new THREE.Mesh(new THREE.ConeGeometry(0.05, 0.18, 5), mFlameInner);
            inCone.position.y = 0.09;
            f.add(inCone);
            logGroup.add(f);
            flames.push({ group: f, outCone, inCone, baseScale: f.scale.x, seed: Math.random() * 10 });
          }
        }
      };

      for (let i = 0; i < 5; i++) {
        const p = pickPoint(isBurnt, 0.5, 3.3); // charred logs lie within the burn
        addCharredLog(stage, p.x, p.z, Math.random() * Math.PI, 0.6 + Math.random() * 0.35, Math.random() < 0.7);
      }

      // ---- Lush greenery across the living (-x) half: bushes, grass tufts, wildflowers ----
      const mBush = rMat(RB.grass2, { roughness: 1 });
      const mBush2 = rMat(RB.grass, { roughness: 1 });
      const addBush = (x, z, s = 1) => {
        const b = new THREE.Group();
        b.position.set(x, 0, z);
        b.scale.setScalar(s);
        [[0, 0.16, 0, 0.22], [0.14, 0.12, 0.05, 0.16], [-0.12, 0.13, -0.04, 0.17], [0.03, 0.2, -0.1, 0.14]]
          .forEach(([lx, ly, lz, r], i) => {
            const m = new THREE.Mesh(new THREE.DodecahedronGeometry(r, 0), i % 2 ? mBush2 : mBush);
            m.position.set(lx, ly, lz);
            b.add(m);
          });
        stage.add(b);
      };
      for (let i = 0; i < 7; i++) {
        const p = pickPoint(notBurnt, 0.6, 3.5);
        addBush(p.x, p.z, 0.8 + Math.random() * 0.4);
      }

      // Grass tufts scattered across the living ground
      const mTuft = rMat(RB.grass2, { roughness: 1 });
      for (let i = 0; i < 30; i++) {
        const p = pickPoint(notBurnt, 0.5, 3.8);
        const blade = new THREE.Mesh(new THREE.ConeGeometry(0.03, 0.18 + Math.random() * 0.12, 4), mTuft);
        blade.position.set(p.x, 0.09, p.z);
        blade.rotation.z = (Math.random() - 0.5) * 0.3;
        stage.add(blade);
      }

      // A few bright wildflowers for life
      const flowerColors = [0xffd166, 0xff6b9d, 0xf4f1de];
      for (let i = 0; i < 12; i++) {
        const p = pickPoint(notBurnt, 0.6, 3.6);
        const col = flowerColors[i % flowerColors.length];
        const fl = new THREE.Mesh(new THREE.SphereGeometry(0.04, 8, 8), new THREE.MeshStandardMaterial({ color: col, roughness: 0.7, emissive: col, emissiveIntensity: 0.15 }));
        fl.position.set(p.x, 0.12, p.z);
        stage.add(fl);
      }
      
      const rp1 = pickPoint(notBurnt, 1.0, 3.4);
      const r1 = new THREE.Mesh(new THREE.DodecahedronGeometry(0.15, 0), rMat(RB.rock)); // natural rock on living ground
      r1.position.set(rp1.x, 0.07, rp1.z);
      r1.scale.set(1.2, 0.8, 1.4);
      stage.add(r1);

      const rp2 = pickPoint(isBurnt, 1.0, 3.4);
      const r2 = new THREE.Mesh(new THREE.DodecahedronGeometry(0.12, 0), rMat(0x3d3530)); // soot rock in the burn
      r2.position.set(rp2.x, 0.06, rp2.z);
      r2.scale.set(1, 0.6, 1.2);
      stage.add(r2);

      // ruins (burnt-out debris — sits within the fire zone)
      const ruinsP = pickPoint(isBurnt, 1.2, 3.0);
      const ruins = new THREE.Group();
      ruins.position.set(ruinsP.x, 0, ruinsP.z);
      stage.add(ruins);
      const mDebris = rMat(0x4a423e, { roughness: 0.95 }); // soot covered grey
      const mDebris2 = rMat(0x2d2624, { roughness: 0.95 });
      const b1 = rBox(ruins, mDebris, 0.4, 0.8, 0.4, -0.2, 0.4, 0.1); b1.rotation.set(0.2, 0.1, -0.4);
      const b2 = rBox(ruins, mDebris2, 0.35, 0.6, 0.35, 0.2, 0.3, -0.2); b2.rotation.set(-0.5, 0.3, 0.2);
      const b3 = rBox(ruins, mDebris, 0.5, 0.2, 0.8, 0, 0.1, 0.3); b3.rotation.set(0.1, -0.6, 0.4);

      // Pulsing rescue target beacon
      const beaconGeo = new THREE.SphereGeometry(0.12, 16, 16);
      const beaconMat = new THREE.MeshBasicMaterial({ color: 0xff3b30, transparent: true, opacity: 0.9 });
      const beacon = new THREE.Mesh(beaconGeo, beaconMat);
      beacon.position.set(0, 0.5, 0);
      ruins.add(beacon);

      // Wildfire spots spread across the forest floor (using larger multi-cone clusters for 50% fire)
      const spawnWildfire = (x, z, s) => {
        const f = new THREE.Group();
        f.position.set(x, 0.05, z);
        f.scale.setScalar(s);
        
        const subFlames = [
          { ox: 0, oz: 0, scY: 1.2, r: 0.22, h: 0.65 },
          { ox: -0.12, oz: 0.08, scY: 0.95, r: 0.16, h: 0.45 },
          { ox: 0.13, oz: -0.1, scY: 0.85, r: 0.14, h: 0.4 },
          { ox: 0.07, oz: 0.11, scY: 0.7, r: 0.12, h: 0.35 },
        ];
        
        subFlames.forEach((sf, idx) => {
          const outCone = new THREE.Mesh(new THREE.ConeGeometry(sf.r, sf.h, 5), mFlame);
          outCone.position.set(sf.ox, sf.h * 0.5, sf.oz);
          f.add(outCone);
          const inCone = new THREE.Mesh(new THREE.ConeGeometry(sf.r * 0.55, sf.h * 0.6, 5), mFlameInner);
          inCone.position.set(sf.ox, sf.h * 0.3, sf.oz);
          f.add(inCone);
          
          flames.push({
            group: f,
            outCone,
            inCone,
            baseScale: s,
            seed: Math.random() * 10 + idx * 3.0,
            scY: sf.scY
          });
        });
        stage.add(f);
      };
      
      // Scatter wildfire zones across the burnt ground; reuse the spots for smoke + lights.
      const fireSpots = [];
      for (let i = 0; i < 8; i++) {
        const p = pickPoint(isBurnt, 0.4, 3.4);
        fireSpots.push(p);
        spawnWildfire(p.x, p.z, 0.9 + Math.random() * 0.5);
      }

      // Smoke particles rising from fires (moderate density)
      const smokeParticles = [];
      const mSmoke = new THREE.MeshBasicMaterial({ color: 0x3d3533, transparent: true, opacity: 0.4 });
      const smokeGeo = new THREE.DodecahedronGeometry(0.06, 0);
      
      const spawnSmoke = (parent, x, y, z) => {
        const p = new THREE.Mesh(smokeGeo, mSmoke);
        p.position.set(x + (Math.random() - 0.5) * 0.2, y, z + (Math.random() - 0.5) * 0.2);
        p.scale.setScalar(0.6 + Math.random() * 0.8);
        parent.add(p);
        smokeParticles.push({
          mesh: p,
          origX: x,
          origZ: z,
          speedY: 0.4 + Math.random() * 0.4,
          speedXZ: 0.1 + Math.random() * 0.1,
          angle: Math.random() * Math.PI * 2,
          life: Math.random(),
          scaleSpeed: 1.0 + Math.random() * 1.5
        });
      };

      for (let i = 0; i < 40; i++) {
        const src = fireSpots[Math.floor(Math.random() * fireSpots.length)];
        spawnSmoke(stage, src.x, 0.1 + Math.random() * 1.5, src.z);
      }

      // two flickering wildfire pointlights anchored to actual fire spots
      const fl1 = fireSpots[0] || { x: 1.5, z: -1.5 };
      const fireLight1 = new THREE.PointLight(0xff5500, 2.2, 7.0);
      fireLight1.position.set(fl1.x, 0.5, fl1.z);
      stage.add(fireLight1);

      const fl2 = fireSpots[Math.min(3, fireSpots.length - 1)] || { x: -1.0, z: 1.0 };
      const fireLight2 = new THREE.PointLight(0xff4400, 1.7, 5.8);
      fireLight2.position.set(fl2.x, 0.4, fl2.z);
      stage.add(fireLight2);

      const q1 = buildQuadrupedModel(0xff3300); q1.group.scale.setScalar(0.85); stage.add(q1.group);
      const q2 = buildQuadrupedModel(0xff3300); q2.group.scale.setScalar(0.85); stage.add(q2.group);
      const d = buildDroneModel(0xff3300); d.group.scale.setScalar(0.8); stage.add(d.group);

      // Trajectory paths for quadrupeds
      addPathLine(stage, 1.8, 1.2, 0, 0.2, 0x2f6df0, 0.15); // blue path
      addPathLine(stage, 1.4, 0.9, 0, -0.4, 0x2f6df0, 0.15);

      // shared map: point cloud growing over a wider area
      const MN = 300;
      const mapPos = new Float32Array(MN * 3);
      for (let i = 0; i < MN; i++) {
        const a = Math.random() * Math.PI * 2, r = Math.random() * 2.8;
        mapPos[i * 3] = Math.cos(a) * r;
        mapPos[i * 3 + 1] = 0.02 + Math.random() * 0.04;
        mapPos[i * 3 + 2] = Math.sin(a) * r;
      }
      const mapGeo = new THREE.BufferGeometry();
      mapGeo.setAttribute("position", new THREE.BufferAttribute(mapPos, 3));
      const mapPts = new THREE.Points(mapGeo, new THREE.PointsMaterial({ color: 0x2f6df0, size: 0.035, transparent: true, opacity: 0.0 }));
      stage.add(mapPts);

      const rings = [q1.group, q2.group].map(() => {
        const r = new THREE.Mesh(
          new THREE.RingGeometry(0.3, 0.32, 32),
          new THREE.MeshBasicMaterial({ color: 0x2f6df0, transparent: true, opacity: 0.5, side: THREE.DoubleSide })
        );
        r.rotation.x = -Math.PI / 2;
        r.position.y = 0.03;
        stage.add(r);
        return r;
      });

      // Communication network lines
      const commLineGeo = new THREE.BufferGeometry();
      const commLineMat = new THREE.LineBasicMaterial({
        color: 0x2f6df0,
        transparent: true,
        opacity: 0.7,
        linewidth: 1.5
      });
      const commLine = new THREE.LineSegments(commLineGeo, commLineMat);
      stage.add(commLine);

      update = (t) => {
        // Pulse beacon
        beacon.material.opacity = 0.5 + Math.sin(t * 8) * 0.4;
        beacon.scale.setScalar(0.9 + Math.sin(t * 8) * 0.25);

        // Flicker fires (by scaling the individual inner/outer cones rather than the group)
        flames.forEach((f) => {
          const wave = Math.sin(t * 14.0 + f.seed);
          const cosWave = Math.cos(t * 12.0 + f.seed);
          const localScaleY = f.scY ? f.scY : 1.0;
          f.outCone.scale.set(
            0.85 + wave * 0.18,
            localScaleY * (1.0 + cosWave * 0.3),
            0.85 + wave * 0.18
          );
          f.inCone.scale.set(
            0.85 + wave * 0.18,
            localScaleY * (1.0 + cosWave * 0.3),
            0.85 + wave * 0.18
          );
          f.outCone.rotation.y = t * 3.0 + f.seed;
          f.inCone.rotation.y = -t * 5.0 + f.seed;
        });

        // Animate smoke particles rising from fires
        smokeParticles.forEach((sp) => {
          sp.life += 0.012 * sp.speedY;
          if (sp.life > 1.0) {
            sp.life = 0;
            const src = fireSpots[Math.floor(Math.random() * fireSpots.length)];
            sp.mesh.position.set(
              src.x + (Math.random() - 0.5) * 0.2,
              0.15,
              src.z + (Math.random() - 0.5) * 0.2
            );
            sp.mesh.scale.setScalar(0.6 + Math.random() * 0.8);
          } else {
            sp.mesh.position.y += 0.015 * sp.speedY;
            sp.mesh.position.x += Math.sin(t * 2.0 + sp.angle) * 0.003;
            sp.mesh.position.z += Math.cos(t * 2.0 + sp.angle) * 0.003;
            sp.mesh.scale.setScalar((0.6 + sp.life * sp.scaleSpeed) * (0.6 + Math.random() * 0.2));
            sp.mesh.material.opacity = 0.45 * (1.0 - sp.life);
          }
        });

        // Pulsate embers
        embers.forEach((emb) => {
          const val = Math.sin(t * emb.speed + emb.phase);
          emb.mesh.material.opacity = 0.4 + val * 0.3;
        });

        // Flicker fire pointlights
        fireLight1.intensity = 1.6 + Math.sin(t * 18.0) * 0.5;
        fireLight2.intensity = 1.2 + Math.cos(t * 15.0) * 0.4;

        // Move q1 in an elliptical path
        const q1X = Math.sin(t * 0.28) * 1.8;
        const q1Z = Math.cos(t * 0.28) * 1.2 + 0.2;
        q1.group.position.set(q1X, 0, q1Z);
        q1.group.rotation.y = Math.atan2(Math.cos(t * 0.28) * 1.8, -Math.sin(t * 0.28) * 1.2) - Math.PI / 2;
        q1.update(t * 1.5);

        // Move q2 in a separate elliptical path
        const q2X = Math.sin(t * 0.24 + 2.2) * 1.4;
        const q2Z = Math.cos(t * 0.24 + 2.2) * 0.9 - 0.4;
        q2.group.position.set(q2X, 0, q2Z);
        q2.group.rotation.y = Math.atan2(Math.cos(t * 0.24 + 2.2) * 1.4, -Math.sin(t * 0.24 + 2.2) * 0.9) - Math.PI / 2;
        q2.update(t * 1.3);

        // Dynamic drone path
        d.update(t);
        d.group.position.set(Math.sin(t * 0.4) * 2.0, 1.8 + Math.sin(t * 1.1) * 0.15, Math.cos(t * 0.4) * 2.0);

        mapPts.material.opacity = 0.35 + Math.sin(t * 0.8) * 0.25;

        // Update rings to follow the moving robots
        rings.forEach((r, i) => {
          const src = i === 0 ? q1.group : q2.group;
          r.position.copy(src.position);
          r.position.y = 0.03;
          const ph = (t * 0.6 + i * 0.5) % 1;
          r.scale.setScalar(0.4 + ph * 2.8);
          r.material.opacity = 0.5 * (1 - ph);
        });

        // Dynamic communication network links
        const p1 = q1.group.position;
        const p2 = q2.group.position;
        const pd = d.group.position;
        const fb1 = new THREE.Vector3(2.0, 0.4, -2.0); // fire 1
        const fb2 = new THREE.Vector3(-2.2, 0.4, 1.4); // fire 2

        const linePoints = new Float32Array([
          p1.x, p1.y + 0.5, p1.z,  p2.x, p2.y + 0.5, p2.z,  // q1 to q2
          p1.x, p1.y + 0.5, p1.z,  pd.x, pd.y, pd.z,        // q1 to drone
          p2.x, p2.y + 0.5, p2.z,  pd.x, pd.y, pd.z,        // q2 to drone
          p1.x, p1.y + 0.5, p1.z,  fb1.x, fb1.y, fb1.z,     // q1 to fire 1
          p2.x, p2.y + 0.5, p2.z,  fb2.x, fb2.y, fb2.z,     // q2 to fire 2
          pd.x, pd.y, pd.z,        fb1.x, fb1.y, fb1.z,     // drone to fire 1
          pd.x, pd.y, pd.z,        fb2.x, fb2.y, fb2.z      // drone to fire 2
        ]);
        commLineGeo.setAttribute("position", new THREE.BufferAttribute(linePoints, 3));
        commLineGeo.attributes.position.needsUpdate = true;

        // Cinematic moving camera (orbits stage)
        const camRadius = zoom < 1 ? 16.5 : 7.875; // Zoomed in another 25% on Research page
        const angle = t * 0.08 + ctx.mouse.x * 0.45;
        camera.position.set(Math.sin(angle) * camRadius, (zoom < 1 ? 5.5 : 3.6) + ctx.mouse.y * 1.5, Math.cos(angle) * camRadius);
        camera.lookAt(0, zoom < 1 ? -3.0 : -0.2, 0); // Tilted further downwards on Home page
      };
    }

    if (kind === "gp") {
      // Environmental Monitoring themed diorama with cinematic camera orbit
      addMeadow(stage, 4.2);
      
      // Add winding river
      const mRiver = rMat(0x3498db, { roughness: 0.2, metalness: 0.8 });
      const river = rBox(stage, mRiver, 8.4, 0.02, 1.2, 0, 0.015, 0);
      river.rotation.y = Math.PI / 4;

      // Current streaks (flowing water effect)
      const mFoam = rMat(0xffffff, { roughness: 1, transparent: true, opacity: 0.65 });
      const current1 = rBox(river, mFoam, 0.8, 0.005, 0.03, -3.0, 0.012, -0.2);
      const current2 = rBox(river, mFoam, 1.2, 0.005, 0.02, 0.0, 0.012, 0.3);
      const current3 = rBox(river, mFoam, 0.6, 0.005, 0.02, 2.5, 0.012, -0.4);

      // Add rocks along river banks
      const addRiverRock = (x, z, s = 1) => {
        const r = new THREE.Mesh(new THREE.DodecahedronGeometry(0.12, 0), rMat(RB.rock, { roughness: 0.9 }));
        r.position.set(x, 0.06, z);
        r.scale.set(s, s * 0.6, s * 1.2);
        stage.add(r);
      };
      addRiverRock(-1.5, -1.0, 1.2);
      addRiverRock(1.2, 1.6, 0.95);
      addRiverRock(-0.8, -1.6, 1.1);
      addRiverRock(1.8, 1.0, 1.3);

      // Add weather/sensor tower station
      const station = new THREE.Group();
      station.position.set(-2.2, 0, -2.2);
      stage.add(station);
      const mMetal = rMat(0x7f8c8d, { metalness: 0.8, roughness: 0.2 });
      rCyl(station, mMetal, 0.04, 0.06, 1.2, 0, 0.6, 0);
      rBox(station, mMetal, 0.5, 0.04, 0.04, 0, 1.2, 0);
      rSph(station, RB.accent, 0.06, -0.25, 1.2, 0);
      rSph(station, RB.accent, 0.06, 0.25, 1.2, 0);
      
      const animHead = new THREE.Group();
      animHead.position.set(0, 1.32, 0);
      station.add(animHead);
      rCyl(animHead, mMetal, 0.015, 0.015, 0.2, 0, 0, 0);
      const cups = rBox(animHead, mMetal, 0.4, 0.02, 0.02, 0, 0.1, 0);
      rSph(cups, mMetal, 0.045, -0.2, 0, 0);
      rSph(cups, mMetal, 0.045, 0.2, 0, 0);

      // Add other trees
      addTree(stage, -2.4, 1.6, 0.9);
      addTree(stage, 2.4, -2.2, 0.75);
      addTree(stage, 2.6, 1.8, 0.75);

      const rover = buildRoverModel(); rover.group.scale.setScalar(0.8); stage.add(rover.group);

      // Draw rover trajectory path on ground
      addPathLine(stage, 2.0, 2.0, 0, 0, 0xc59f3f, 0.15);

      // Floating GP surface (expanded to cover the wider scene)
      const sGeo = new THREE.PlaneGeometry(5.2, 5.2, 26, 26);
      sGeo.rotateX(-Math.PI / 2);
      const surf = new THREE.Mesh(sGeo, new THREE.MeshBasicMaterial({ color: 0x2e8f5b, wireframe: true, transparent: true, opacity: 0.45 }));
      surf.position.y = 1.8;
      stage.add(surf);
      const base = sGeo.attributes.position.array.slice();

      // measurement pillars spread across the wider environment
      const samples = [];
      for (let i = 0; i < 12; i++) {
        const x = -2.2 + Math.random() * 4.4, z = -2.2 + Math.random() * 4.4;
        const bar = new THREE.Mesh(
          new THREE.CylinderGeometry(0.008, 0.008, 1, 6),
          new THREE.MeshBasicMaterial({ color: 0x7fc9a2, transparent: true, opacity: 0.8 })
        );
        const tip = new THREE.Mesh(new THREE.SphereGeometry(0.04, 8, 8), rMat(RB.dark));
        stage.add(bar); stage.add(tip);
        samples.push({ bar, tip, x, z, ph: Math.random() * 6 });
      }

      const d = buildDroneModel(); d.group.scale.setScalar(0.6); stage.add(d.group);

      // Gold-colored scanning cone under drone
      const gpScannerMat = new THREE.MeshBasicMaterial({ color: 0xc59f3f, transparent: true, opacity: 0.15, side: THREE.DoubleSide });
      const gpScanner = new THREE.Mesh(new THREE.ConeGeometry(0.4, 1.6, 12), gpScannerMat);
      gpScanner.rotation.x = Math.PI; // point down
      gpScanner.position.y = -0.8;
      d.group.add(gpScanner);

      const fieldY = (x, z, t) => 1.8 + Math.sin(x * 1.4 + t) * 0.24 + Math.cos(z * 1.6 + t * 0.6) * 0.18;

      // Scanning lasers
      const laserGeo = new THREE.BufferGeometry();
      const laserMat = new THREE.LineBasicMaterial({
        color: 0xc59f3f,
        transparent: true,
        opacity: 0.8,
        linewidth: 2
      });
      const laserLine = new THREE.LineSegments(laserGeo, laserMat);
      stage.add(laserLine);

      update = (t) => {
        // Spin anemometer on tower
        animHead.rotation.y = t * 4.0;

        // Flow river currents
        current1.position.x = -4.2 + ((t * 0.6 + 0) % 8.4);
        current2.position.x = -4.2 + ((t * 0.8 + 3) % 8.4);
        current3.position.x = -4.2 + ((t * 0.7 + 6) % 8.4);

        // Pulse drone scanning cone opacity
        gpScannerMat.opacity = 0.12 + Math.sin(t * 4) * 0.04;

        const p = sGeo.attributes.position;
        for (let i = 0; i < p.count; i++) {
          const x = base[i * 3], z = base[i * 3 + 2];
          p.array[i * 3 + 1] = Math.sin(x * 1.4 + t) * 0.24 + Math.cos(z * 1.6 + t * 0.6) * 0.18;
        }
        p.needsUpdate = true;

        samples.forEach(({ bar, tip, x, z }) => {
          const y = fieldY(x, z, t);
          tip.position.set(x, y, z);
          bar.position.set(x, y / 2, z);
          bar.scale.y = y;
        });

        rover.update(t);
        // Rover travels in a wider circle
        rover.group.position.set(Math.sin(t * 0.3) * 2.0, 0, Math.cos(t * 0.3) * 2.0);
        rover.group.rotation.y = t * 0.3;

        // Drone flies in a wider, sweeping circle
        d.update(t);
        d.group.position.set(Math.sin(t * 0.35) * 2.2, 2.6 + Math.sin(t * 1.2) * 0.15, Math.cos(t * 0.35) * 2.2);

        // Update scanning lasers
        const px = rover.group.position.x;
        const pz = rover.group.position.z;
        const ry = fieldY(px, pz, t);

        const dx = d.group.position.x;
        const dz = d.group.position.z;
        const dy = d.group.position.y;
        const dSurfY = fieldY(dx, dz, t);

        const laserPoints = new Float32Array([
          px, 0.25, pz,   px, ry, pz,
          dx, dy - 0.05, dz,  dx, dSurfY, dz
        ]);
        laserGeo.setAttribute("position", new THREE.BufferAttribute(laserPoints, 3));
        laserGeo.attributes.position.needsUpdate = true;

        // Cinematic moving camera (orbits stage)
        const camRadius = zoom < 1 ? 16.5 : 7.875; // Zoomed in another 25% on Research page
        const angle = t * 0.08 + ctx.mouse.x * 0.45;
        camera.position.set(Math.sin(angle) * camRadius, (zoom < 1 ? 5.5 : 3.6) + ctx.mouse.y * 1.5, Math.cos(angle) * camRadius);
        camera.lookAt(0, zoom < 1 ? -3.0 : -0.2, 0); // Tilted further downwards on Home page
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
