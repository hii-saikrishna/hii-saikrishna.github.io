// AUTO-GENERATED BUNDLE — do not edit. Edit src/*.jsx then run ./build.sh

/* ===== src/data.jsx ===== */
// ===== Data =====

const PROFILE = {
  name: "Sai Krishna Ghanta",
  role: "PhD Student, Artificial Intelligence",
  org: "University of Georgia · HeRoLab",
  advisor: "Dr. Ramviyas Parasuraman",
  location: "Athens, GA",
  email: "sai.krishna.ghanta@uga.edu",
  scholar: "https://scholar.google.com/citations?user=lrK_Y8AAAAAJ&hl=en&oi=ao",
  github: "https://github.com/sai-krishna-ghanta",
  linkedin: "https://www.linkedin.com/in/sai-krishna-ghanta-320ab0211/",
  cv: "https://github.com/sai-krishna-ghanta/portfolio/raw/main/attached_assets/Resume.pdf"
};
const INTERESTS = [{
  id: "robot",
  title: "Robot Learning",
  desc: "Foundation models & reasoning frameworks for embodied agents.",
  topics: ["LLM Planning", "Neuro-Symbolic", "VLMs"]
}, {
  id: "multi",
  title: "Multi-Robot Systems",
  desc: "Distributed mapping, cooperative SLAM and exploration.",
  topics: ["Cooperative SLAM", "Task Allocation", "Exploration"]
}, {
  id: "vision",
  title: "Computer Vision",
  desc: "Scene graphs, SLAM in dynamic worlds, semantic 3D.",
  topics: ["Semantic SLAM", "Scene Graphs", "3D Vision"]
}, {
  id: "ml",
  title: "Machine Learning",
  desc: "Gaussian processes, uncertainty, continuous-thought models.",
  topics: ["GPs", "RL", "Cognitive ML"]
}];
const THRUSTS = [{
  num: "T1",
  title: "Robot Learning & Embodied Reasoning",
  scene: "learning",
  img: "attached_assets/Robot_Learning.png",
  body: "I build reasoning frameworks that let robots understand invisible spatial phenomena — Wi-Fi field strength, humidity, scent — and act on them. The goal is robots that can reason in language about a physical environment, then plan over it.",
  keywords: ["Embodied AI", "LLM Planning", "Spatial Grounding", "VLM Reasoning"]
}, {
  num: "T2",
  title: "Mapping and Localization for Multi-Robot Systems",
  scene: "swarm",
  img: "attached_assets/Multi_Robot_Systems.png",
  body: "SPACE is our framework for 3D spatial cooperation and exploration — it mitigates the ghosting trail effect in fused reconstructions and stays robust to communication dropouts. MGPRL recovers relative poses from Wi-Fi RSSI in GPS-denied indoors, and 3DS-SLAM extends semantic SLAM with 3D object detection in dynamic scenes.",
  keywords: ["SPACE", "MGPRL", "3DS-SLAM", "Distributed Mapping"]
}, {
  num: "T4",
  title: "Spatial Intelligence",
  scene: "gp",
  img: "attached_assets/Machine_Learning.png",
  body: "Robots that learn a belief over space itself: Gaussian-process fields for Wi-Fi, humidity, and other invisible signals, floating above the real world they describe. MGPRL uses these uncertainty-aware fields for multi-robot relative localization where GPS can't reach.",
  keywords: ["Gaussian Processes", "MGPRL", "Wi-Fi RSSI", "Uncertainty"]
}];
const PUBLICATIONS = [{
  year: 2025,
  kind: "conference",
  featured: true,
  title: "SPACE: 3D Spatial Co-operation and Exploration Framework for Robust Mapping and Coverage with Multi-Robot Systems",
  authors: ["Sai Krishna Ghanta*", "Ramviyas Parasuraman"],
  venue: "arXiv:2411.02524 — submitted to IEEE IROS 2025"
}, {
  year: 2025,
  kind: "conference",
  featured: true,
  title: "MGPRL: Distributed Multi-Gaussian Processes for Wi-Fi-based Multi-Robot Relative Localization in Large Indoor Environments",
  authors: ["Sai Krishna Ghanta*", "Ramviyas Parasuraman"],
  venue: "submitted to IEEE IROS 2025"
}, {
  year: 2025,
  kind: "submitted",
  title: "Thermographic Fault Diagnosis: An eXplainable Compact Vision in Transformer Approach for Electrical Machines",
  authors: ["Sai Krishna Ghanta", "Anmol Agarwal", "Aparna Sinha", "Debanjan Das"],
  venue: "submitted to IEEE Sensors Journal"
}, {
  year: 2023,
  kind: "conference",
  title: "3DS-SLAM: A 3D Object Detection-based Semantic SLAM towards Dynamic Indoor Environments",
  authors: ["Sai Krishna Ghanta*", "Kundrapu Supriya", "Sabur Baidya"],
  venue: "arXiv:2310.06385"
}, {
  year: 2023,
  kind: "conference",
  title: "Adversarial Security and Differential Privacy in mmWave Beam Prediction in 6G Networks",
  authors: ["Sai Krishna Ghanta", "Kundrapu Supriya", "Sabur Baidya"],
  venue: "IEEE CSNet 2023"
}, {
  year: 2023,
  kind: "journal",
  title: "Speaker-Independent Visual Speech Recognition: A Systematic Review and Futuristic Applications",
  authors: ["P. Nemani", "Sai Krishna Ghanta", "K. Supriya", "Santosh Kumar"],
  venue: "Elsevier — Image and Vision Computing, vol. 123"
}, {
  year: 2023,
  kind: "journal",
  title: "Data Preprocessing Techniques: Emergence and Selection Towards Machine Learning Models — A Practical Review Using the HPA Dataset",
  authors: ["K. Mallikharjuna Rao", "Sai Krishna Ghanta", "Kundrapu Supriya"],
  venue: "Multimedia Tools and Applications, 2023"
}, {
  year: 2022,
  kind: "journal",
  title: "Deep Learning-based Holistic Speaker-Independent Visual Speech Recognition",
  authors: ["P. Nemani", "Sai Krishna Ghanta", "N. Ramisetty", "B. D. S. Sai", "S. Kumar"],
  venue: "IEEE Transactions on Artificial Intelligence, 2022"
}];
const BLOG_POSTS = [{
  id: "slam-odyssey",
  title: "The SLAM Odyssey: From Monocular Vision to Cooperative Mapping",
  category: "Research",
  date: "Jun 2024",
  readTime: "8 min",
  excerpt: "A deep dive into multi-robot SLAM and how fused reconstructions can mislead. What we learned building SPACE.",
  cover: "slam",
  body: [["p", "When three robots fuse their local maps, something strange happens: their fusion becomes unreliable at the boundaries. We call this the \"ghosting trail\" effect—a phantom artifact that grows as reconstructions age."], ["h2", "The Problem with Classical Fusion"], ["p", "Traditional approaches assume that local maps are independent and Gaussian-distributed. They're neither. Uncertainty grows with time, and correlations between robots' observations are nonlinear and coupled."], ["p", "SPACE solves this by explicitly modeling spatial correlation windows and using probabilistic occupancy grids that degrade gracefully under communication loss."], ["h2", "Real-World Trials"], ["p", "We tested SPACE in a 400m² GPS-denied warehouse with four quadrupeds. The result: 34% reduction in boundary artifacts and robust coverage even when one robot loses comms for 90 seconds straight."]]
}, {
  id: "gp-fields",
  title: "Learning Invisible Fields: Gaussian Processes for Spatial Sensing",
  category: "Research",
  date: "May 2024",
  readTime: "6 min",
  excerpt: "How robots learn invisible environmental fields—Wi-Fi, humidity, radiation—and why uncertainty matters more than accuracy.",
  cover: "gp",
  body: [["p", "A robot's Wi-Fi signal strength varies wildly in indoor spaces. Reflections, interference, multipath propagation—all invisible to the robot's eyes. How do we turn RSSI readings into spatial knowledge?"], ["h2", "The Gaussian Process Trick"], ["p", "Instead of predicting a single Wi-Fi strength value, we predict a *distribution* over possible strengths. The width of that distribution is our uncertainty. High uncertainty = 'I need more samples here.'"], ["p", "MGPRL uses this principle to help robots localize each other in GPS-denied spaces. Two robots with only Wi-Fi can co-estimate their relative pose by pooling their observations."]]
}, {
  id: "embodied-reasoning",
  title: "Embodied Reasoning: Teaching Robots to Think Like Scientists",
  category: "Exploration",
  date: "Apr 2024",
  readTime: "7 min",
  excerpt: "Can robots hypothesize, experiment, and refine beliefs like humans? A fresh take on embodied AI.",
  cover: "reasoning",
  body: [["p", "When a scientist explores a new phenomenon, they form hypotheses, design experiments, and update their beliefs. Why can't robots do the same?"], ["h2", "A New Framework"], ["p", "We're building a neuro-symbolic reasoning layer that sits on top of visual and inertial sensors. It lets robots ask: 'Where is my uncertainty highest? What action would reduce it most?'"], ["p", "Early results show robots can autonomously plan efficient exploration paths—reducing sample time by 40% compared to random strategies."]]
}, {
  id: "vision-3d",
  title: "From 2D to 3D: Scaling Semantic Vision in Dynamic Worlds",
  category: "Research",
  date: "Mar 2024",
  readTime: "9 min",
  excerpt: "3DS-SLAM merges object detection, SLAM, and semantic understanding into one coherent pipeline.",
  cover: "vision",
  body: [["p", "Existing semantic SLAM systems treat dynamic objects as noise. But in human-filled environments, 'dynamic' is the norm. We needed a better approach."], ["h2", "The 3DS-SLAM Pipeline"], ["p", "Instead of ignoring detected objects, we track them. Moving people, robots, and furniture become features that anchor the map and aid localization."], ["p", "In 7 real-world indoor sequences, 3DS-SLAM reduced drift by 26% and improved loop closure detection in crowded scenes."]]
}, {
  id: "multi-robot-tasks",
  title: "Task Allocation in Uncertain Multi-Robot Teams",
  category: "Systems",
  date: "Feb 2024",
  readTime: "6 min",
  excerpt: "How do five robots decide who explores where when communication is intermittent?",
  cover: "tasks",
  body: [["p", "Classic task allocation assumes instant communication and perfect knowledge. Real robots live in silence and fog."], ["h2", "Decentralized Allocation"], ["p", "We designed a gossip-based algorithm where robots broadcast their planned task set and locally resolve conflicts using a shared entropy function. No central authority needed."], ["p", "Tested on simulated teams of 6–15 robots. Even with 50% comms dropout, task coverage stayed above 94%."]]
}, {
  id: "llm-robotics",
  title: "Do Large Language Models Understand Physics? Testing Spatial Reasoning in LLMs",
  category: "AI",
  date: "Jan 2024",
  readTime: "8 min",
  excerpt: "We probed GPT-4 and Llama-2 with spatial reasoning tasks. The results are surprising.",
  cover: "llm",
  body: [["p", "An LLM trained on human text has never felt gravity, never brushed against a wall, never gripped an object. Can it reason about physics at all?"], ["h2", "The Experiment"], ["p", "We created 150 spatial reasoning tasks (e.g., 'A box slides off a table. Where will it land?') and tested state-of-the-art LLMs. Average accuracy: 64%. Humans: 96%."], ["h2", "What This Means"], ["p", "LLMs are useful for high-level planning and communication, but they need grounding. Embodied feedback from robots closes the gap."]]
}];
const UPDATES = [{
  date: "Dec 2025",
  text: "SPACE framework submitted to IROS 2025. Excited to see it in the community."
}, {
  date: "Nov 2025",
  text: "Started collaborating with TU Delft on distributed Bayesian optimization for multi-robot exploration."
}, {
  date: "Oct 2025",
  text: "Gave a talk on embodied reasoning at the NeurIPS 2025 workshop on Embodied AI. Great discussions."
}, {
  date: "Sep 2025",
  text: "Completed field trials of MGPRL in the HeRoLab warehouse. Four quadrupeds, GPS-denied, 10 hours of autonomous operation."
}, {
  date: "Aug 2025",
  text: "Started PhD at UGA under Dr. Ramviyas Parasuraman. Building robots that think."
}, {
  date: "Jun 2025",
  text: "Graduated from IIIT Naya Raipur with B.Tech in Computer Science and Engineering."
}];
Object.assign(window, {
  PROFILE,
  INTERESTS,
  THRUSTS,
  PUBLICATIONS,
  BLOG_POSTS,
  UPDATES
});

/* ===== src/robots.jsx ===== */
// ===== Stylized robot models + card/diorama scenes =====

const RB = {
  panel: 0xeef1f4,
  panel2: 0xd9dfe6,
  dark: 0x252c36,
  joint: 0x3a4450,
  accent: 0x2e8f5b,
  // green accent
  visor: 0x9fe8c8,
  grass: 0x6db36a,
  grass2: 0x4e9e5f,
  soil: 0x9b7e57,
  rock: 0xb9c2bb
};
function rMat(c, o = {}) {
  return new THREE.MeshStandardMaterial({
    color: c,
    roughness: 0.6,
    metalness: 0.12,
    flatShading: true,
    ...o
  });
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
  const matG = rMat(RB.grass, {
    roughness: 0.95
  });
  const disc = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius * 1.04, 0.1, 28), matG);
  disc.position.y = -0.05;
  parent.add(disc);
  const blob = new THREE.Mesh(new THREE.CircleGeometry(radius * 0.5, 24), new THREE.MeshBasicMaterial({
    color: 0x223322,
    transparent: true,
    opacity: 0.16
  }));
  blob.rotation.x = -Math.PI / 2;
  blob.position.y = 0.011;
  parent.add(blob);
  const matB = rMat(RB.grass2, {
    roughness: 0.95
  });
  for (let i = 0; i < 4; i++) {
    const a = i / 4 * Math.PI * 2 + 0.6;
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
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.1, 0.6, 6), rMat(0x7a5b3e, {
    roughness: 1
  }));
  trunk.position.y = 0.3;
  tree.add(trunk);
  const fol = new THREE.Mesh(new THREE.ConeGeometry(0.6, 1.3, 7), rMat(RB.grass2, {
    roughness: 1
  }));
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
  const mP = rMat(RB.panel),
    mP2 = rMat(RB.panel2),
    mD = rMat(RB.dark),
    mJ = rMat(RB.joint);
  const mA = rMat(RB.accent);
  const mV = rMat(RB.visor, {
    emissive: 0x3fc88f,
    emissiveIntensity: 0.7,
    roughness: 0.2
  });
  rBox(g, mJ, 0.32, 0.16, 0.2, 0, 0.96, 0);
  const torso = rBox(g, mP, 0.42, 0.5, 0.26, 0, 1.32, 0);
  rBox(torso, mA, 0.26, 0.16, 0.02, 0, 0.06, 0.14);
  rBox(torso, mD, 0.44, 0.06, 0.28, 0, -0.2, 0);
  const headG = new THREE.Group();
  headG.position.set(0, 1.71, 0);
  g.add(headG);
  rCyl(headG, mJ, 0.05, 0.05, 0.08, 0, -0.06, 0);
  const head = rBox(headG, mP, 0.24, 0.22, 0.24, 0, 0.06, 0);
  rBox(head, mV, 0.18, 0.07, 0.02, 0, 0.01, 0.13);
  rBox(head, mD, 0.26, 0.05, 0.26, 0, 0.12, 0);
  rCyl(head, mA, 0.012, 0.012, 0.14, 0.1, 0.18, 0);
  const mkArm = side => {
    const sh = new THREE.Group();
    sh.position.set(0.27 * side, 1.5, 0);
    g.add(sh);
    rSph(sh, mJ, 0.07);
    rBox(sh, mP2, 0.09, 0.3, 0.1, 0, -0.18, 0);
    const elbow = new THREE.Group();
    elbow.position.set(0, -0.34, 0);
    sh.add(elbow);
    rSph(elbow, mJ, 0.055);
    rBox(elbow, mP, 0.08, 0.26, 0.09, 0, -0.16, 0);
    rBox(elbow, mD, 0.09, 0.08, 0.1, 0, -0.32, 0);
    return {
      sh,
      elbow
    };
  };
  const armL = mkArm(-1),
    armR = mkArm(1);
  const mkLeg = side => {
    const hip = new THREE.Group();
    hip.position.set(0.11 * side, 0.92, 0);
    g.add(hip);
    rSph(hip, mJ, 0.07);
    rBox(hip, mP2, 0.12, 0.36, 0.13, 0, -0.2, 0);
    const knee = new THREE.Group();
    knee.position.set(0, -0.4, 0);
    hip.add(knee);
    rSph(knee, mJ, 0.06);
    rBox(knee, mP, 0.1, 0.34, 0.12, 0, -0.2, 0);
    rBox(knee, mD, 0.11, 0.07, 0.2, 0, -0.4, 0.04);
    return {
      hip,
      knee
    };
  };
  const legL = mkLeg(-1),
    legR = mkLeg(1);
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
    }
  };
}

// ---------- Quadruped ----------
function buildQuadrupedModel() {
  const g = new THREE.Group();
  const mP = rMat(RB.panel),
    mD = rMat(RB.dark),
    mJ = rMat(RB.joint),
    mA = rMat(RB.accent);
  const body = rBox(g, mP, 0.92, 0.26, 0.42, 0, 0.62, 0);
  rBox(body, mD, 0.94, 0.08, 0.44, 0, -0.12, 0);
  rBox(body, mA, 0.3, 0.04, 0.43, 0.18, 0.13, 0);
  const head = rBox(g, mP, 0.2, 0.16, 0.26, 0.56, 0.66, 0);
  rBox(head, rMat(RB.visor, {
    emissive: 0x3fc88f,
    emissiveIntensity: 0.8
  }), 0.03, 0.06, 0.16, 0.11, 0, 0);
  rCyl(g, mD, 0.008, 0.008, 0.22, -0.48, 0.78, 0);
  const legs = [];
  const mkLeg = (fx, fz, phase) => {
    const hip = new THREE.Group();
    hip.position.set(fx, 0.6, fz);
    g.add(hip);
    rSph(hip, mJ, 0.065);
    rBox(hip, mP, 0.08, 0.3, 0.07, 0, -0.16, 0);
    const knee = new THREE.Group();
    knee.position.set(0, -0.3, 0);
    hip.add(knee);
    rSph(knee, mJ, 0.05);
    rBox(knee, mD, 0.06, 0.3, 0.06, 0, -0.16, 0);
    rSph(knee, mD, 0.045, 0, -0.32, 0);
    legs.push({
      hip,
      knee,
      phase
    });
  };
  mkLeg(0.36, 0.2, 0);
  mkLeg(0.36, -0.2, Math.PI);
  mkLeg(-0.36, 0.2, Math.PI);
  mkLeg(-0.36, -0.2, 0);
  return {
    group: g,
    update(t) {
      const sp = 3.4;
      legs.forEach(l => {
        const s = Math.sin(t * sp + l.phase);
        l.hip.rotation.z = s * 0.5;
        l.knee.rotation.z = -Math.max(0, Math.cos(t * sp + l.phase)) * 0.7 - 0.12;
      });
      g.position.y = Math.abs(Math.sin(t * sp)) * 0.025;
      head.rotation.y = Math.sin(t * 0.6) * 0.25;
    }
  };
}

// ---------- Drone ----------
function buildDroneModel() {
  const g = new THREE.Group();
  const mP = rMat(RB.panel),
    mD = rMat(RB.dark),
    mA = rMat(RB.accent);
  const body = rBox(g, mP, 0.42, 0.14, 0.42, 0, 0, 0);
  rBox(body, mA, 0.44, 0.04, 0.12, 0, 0, 0);
  rSph(g, rMat(RB.visor, {
    emissive: 0x3fc88f,
    emissiveIntensity: 0.9,
    roughness: 0.2
  }), 0.07, 0, -0.1, 0.16);
  const rotors = [];
  [[1, 1], [1, -1], [-1, 1], [-1, -1]].forEach(([sx, sz]) => {
    rCyl(g, mD, 0.022, 0.022, 0.4, sx * 0.22, 0.02, sz * 0.22).rotation.z = sx * -0.9;
    const mount = rCyl(g, mD, 0.04, 0.05, 0.08, sx * 0.38, 0.1, sz * 0.38);
    const rotor = rCyl(mount, rMat(0x6b7682, {
      transparent: true,
      opacity: 0.85
    }), 0.26, 0.26, 0.012, 0, 0.06, 0, 16);
    rotors.push(rotor);
  });
  rCyl(g, mD, 0.012, 0.012, 0.18, 0.12, -0.14, 0.12);
  rCyl(g, mD, 0.012, 0.012, 0.18, -0.12, -0.14, -0.12);
  return {
    group: g,
    update(t) {
      rotors.forEach((r, i) => {
        r.rotation.y = t * (22 + i * 2);
      });
      g.rotation.z = Math.sin(t * 1.4) * 0.06;
      g.rotation.x = Math.cos(t * 1.1) * 0.05;
    }
  };
}

// ---------- Ground rover ----------
function buildRoverModel() {
  const g = new THREE.Group();
  const mP = rMat(RB.panel),
    mD = rMat(RB.dark),
    mA = rMat(RB.accent),
    mJ = rMat(RB.joint);
  const chassis = rBox(g, mP, 0.84, 0.2, 0.52, 0, 0.34, 0);
  rBox(chassis, mD, 0.86, 0.06, 0.54, 0, -0.1, 0);
  rBox(chassis, mA, 0.2, 0.05, 0.53, 0.22, 0.1, 0);
  rBox(g, rMat(0x32507a, {
    roughness: 0.3,
    metalness: 0.4
  }), 0.5, 0.02, 0.4, -0.12, 0.47, 0);
  rCyl(g, mD, 0.025, 0.025, 0.42, 0.3, 0.66, 0);
  const lidar = rCyl(g, mJ, 0.07, 0.08, 0.09, 0.3, 0.9, 0, 12);
  rBox(lidar, rMat(RB.visor, {
    emissive: 0x3fc88f,
    emissiveIntensity: 0.9
  }), 0.15, 0.03, 0.02, 0, 0, 0);
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
      wheels.forEach(w => {
        w.rotation.y = t * 2.2;
      });
      lidar.rotation.y = t * 3;
      g.rotation.z = Math.sin(t * 0.9) * 0.01;
    }
  };
}
const ROBOT_BUILDERS = {
  humanoid: buildHumanoidModel,
  quadruped: buildQuadrupedModel,
  drone: buildDroneModel,
  rover: buildRoverModel
};

// ---------- Interest-card scene ----------
function robotCardScene(kind, opts = {}) {
  return ctx => {
    const {
      scene,
      camera
    } = ctx;
    camera.position.set(...(opts.cam || [2.3, 1.7, 2.9]));
    camera.lookAt(0, opts.look ?? 0.7, 0);
    addRobotLights(scene);
    const stage = new THREE.Group();
    scene.add(stage);
    addMeadow(stage, opts.meadow ?? 1.45);
    const built = ROBOT_BUILDERS[kind]();
    stage.add(built.group);
    const hover = kind === "drone" ? opts.hover ?? 1.0 : 0;
    return {
      update(t) {
        built.update(t);
        if (hover) built.group.position.y = hover + Math.sin(t * 1.3) * 0.08;
        stage.rotation.y = Math.sin(t * 0.22) * 0.45 + ctx.mouse.x * 0.35;
      },
      dispose() {
        scene.traverse(o => {
          if (o.geometry) o.geometry.dispose();
          if (o.material && o.material.dispose) o.material.dispose();
        });
      }
    };
  };
}

// ---------- Research-thrust dioramas ----------
function dioramaScene(kind) {
  return ctx => {
    const {
      scene,
      camera
    } = ctx;
    addRobotLights(scene);
    const stage = new THREE.Group();
    scene.add(stage);
    let update = () => {};
    if (kind === "learning") {
      camera.position.set(2.6, 1.9, 3.3);
      camera.lookAt(0, 0.95, 0);
      addMeadow(stage, 1.7);
      const h = buildHumanoidModel();
      stage.add(h.group);
      // holographic task panel the robot is "reading"
      const holoCanvas = document.createElement("canvas");
      holoCanvas.width = 256;
      holoCanvas.height = 160;
      const hx = holoCanvas.getContext("2d");
      hx.fillStyle = "rgba(46,143,91,0.12)";
      hx.fillRect(0, 0, 256, 160);
      hx.strokeStyle = "rgba(46,143,91,0.8)";
      hx.lineWidth = 2;
      hx.strokeRect(4, 4, 248, 152);
      hx.fillStyle = "rgba(46,143,91,0.7)";
      for (let i = 0; i < 5; i++) hx.fillRect(18, 22 + i * 26, 150 - i * 18, 8);
      hx.fillStyle = "rgba(46,143,91,0.9)";
      hx.fillRect(190, 22, 44, 44);
      const holoTex = new THREE.CanvasTexture(holoCanvas);
      const holo = new THREE.Mesh(new THREE.PlaneGeometry(1.1, 0.7), new THREE.MeshBasicMaterial({
        map: holoTex,
        transparent: true,
        opacity: 0.92,
        side: THREE.DoubleSide
      }));
      holo.position.set(0.95, 1.5, 0.4);
      holo.rotation.y = -0.7;
      stage.add(holo);
      // knowledge orbs orbiting the head
      const orbMat = new THREE.MeshStandardMaterial({
        color: RB.accent,
        emissive: 0x1d7547,
        emissiveIntensity: 0.5
      });
      const orbs = [];
      const linePos = new Float32Array(5 * 2 * 3);
      const lineGeo = new THREE.BufferGeometry();
      lineGeo.setAttribute("position", new THREE.BufferAttribute(linePos, 3));
      stage.add(new THREE.LineSegments(lineGeo, new THREE.LineBasicMaterial({
        color: 0x2e8f5b,
        transparent: true,
        opacity: 0.4
      })));
      for (let i = 0; i < 5; i++) {
        const o = new THREE.Mesh(new THREE.IcosahedronGeometry(0.055, 0), orbMat);
        stage.add(o);
        orbs.push(o);
      }
      update = t => {
        h.update(t);
        holo.position.y = 1.5 + Math.sin(t * 1.1) * 0.05;
        holo.material.opacity = 0.8 + Math.sin(t * 2.2) * 0.12;
        orbs.forEach((o, i) => {
          const a = t * 0.5 + i / 5 * Math.PI * 2;
          o.position.set(Math.cos(a) * 0.85, 1.85 + Math.sin(t * 0.9 + i) * 0.18, Math.sin(a) * 0.85);
          linePos[i * 6 + 0] = 0;
          linePos[i * 6 + 1] = 1.8;
          linePos[i * 6 + 2] = 0;
          linePos[i * 6 + 3] = o.position.x;
          linePos[i * 6 + 4] = o.position.y;
          linePos[i * 6 + 5] = o.position.z;
        });
        lineGeo.attributes.position.needsUpdate = true;
      };
    }
    if (kind === "swarm") {
      camera.position.set(2.9, 2.1, 3.4);
      camera.lookAt(0, 0.5, 0);
      addMeadow(stage, 1.9);
      const q1 = buildQuadrupedModel();
      q1.group.position.set(-0.55, 0, 0.3);
      q1.group.rotation.y = 0.5;
      q1.group.scale.setScalar(0.85);
      stage.add(q1.group);
      const q2 = buildQuadrupedModel();
      q2.group.position.set(0.6, 0, -0.4);
      q2.group.rotation.y = -0.7;
      q2.group.scale.setScalar(0.85);
      stage.add(q2.group);
      const d = buildDroneModel();
      d.group.scale.setScalar(0.8);
      stage.add(d.group);
      // shared map: point cloud growing between the robots
      const MN = 160;
      const mapPos = new Float32Array(MN * 3);
      for (let i = 0; i < MN; i++) {
        const a = Math.random() * Math.PI * 2,
          r = Math.random() * 1.4;
        mapPos[i * 3] = Math.cos(a) * r;
        mapPos[i * 3 + 1] = 0.02 + Math.random() * 0.04;
        mapPos[i * 3 + 2] = Math.sin(a) * r;
      }
      const mapGeo = new THREE.BufferGeometry();
      mapGeo.setAttribute("position", new THREE.BufferAttribute(mapPos, 3));
      const mapPts = new THREE.Points(mapGeo, new THREE.PointsMaterial({
        color: 0x2e8f5b,
        size: 0.035,
        transparent: true,
        opacity: 0.0
      }));
      stage.add(mapPts);
      const rings = [q1.group, q2.group].map(src => {
        const r = new THREE.Mesh(new THREE.RingGeometry(0.3, 0.32, 32), new THREE.MeshBasicMaterial({
          color: 0x2e8f5b,
          transparent: true,
          opacity: 0.5,
          side: THREE.DoubleSide
        }));
        r.rotation.x = -Math.PI / 2;
        r.position.copy(src.position);
        r.position.y = 0.03;
        stage.add(r);
        return r;
      });
      update = t => {
        q1.update(t);
        q2.update(t + 1.3);
        d.update(t);
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
      camera.position.set(2.7, 2.3, 3.4);
      camera.lookAt(0, 0.9, 0);
      addMeadow(stage, 1.9);
      addTree(stage, -1.3, -0.6, 0.7);
      addTree(stage, 1.1, -1.0, 0.55);
      const rover = buildRoverModel();
      rover.group.scale.setScalar(0.8);
      stage.add(rover.group);
      // floating GP surface
      const sGeo = new THREE.PlaneGeometry(2.6, 2.6, 22, 22);
      sGeo.rotateX(-Math.PI / 2);
      const surf = new THREE.Mesh(sGeo, new THREE.MeshBasicMaterial({
        color: 0x2e8f5b,
        wireframe: true,
        transparent: true,
        opacity: 0.5
      }));
      surf.position.y = 1.7;
      stage.add(surf);
      const base = sGeo.attributes.position.array.slice();
      // measurement pillars connecting world → belief
      const samples = [];
      for (let i = 0; i < 6; i++) {
        const x = -1.0 + Math.random() * 2.0,
          z = -1.0 + Math.random() * 2.0;
        const bar = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 1, 6), new THREE.MeshBasicMaterial({
          color: 0x7fc9a2,
          transparent: true,
          opacity: 0.8
        }));
        const tip = new THREE.Mesh(new THREE.SphereGeometry(0.04, 8, 8), rMat(RB.dark));
        stage.add(bar);
        stage.add(tip);
        samples.push({
          bar,
          tip,
          x,
          z,
          ph: Math.random() * 6
        });
      }
      const d = buildDroneModel();
      d.group.scale.setScalar(0.6);
      stage.add(d.group);
      const fieldY = (x, z, t) => 1.7 + Math.sin(x * 1.8 + t) * 0.16 + Math.cos(z * 2.2 + t * 0.7) * 0.12;
      update = t => {
        const p = sGeo.attributes.position;
        for (let i = 0; i < p.count; i++) {
          const x = base[i * 3],
            z = base[i * 3 + 2];
          p.array[i * 3 + 1] = Math.sin(x * 1.8 + t) * 0.16 + Math.cos(z * 2.2 + t * 0.7) * 0.12;
        }
        p.needsUpdate = true;
        samples.forEach(({
          bar,
          tip,
          x,
          z
        }) => {
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
        scene.traverse(o => {
          if (o.geometry) o.geometry.dispose();
          if (o.material && o.material.dispose) o.material.dispose();
        });
      }
    };
  };
}

// ---------- Hero: drone beside photo ----------
function heroDroneScene(ctx) {
  const {
    scene,
    camera
  } = ctx;
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
      scene.traverse(o => {
        if (o.geometry) o.geometry.dispose();
        if (o.material && o.material.dispose) o.material.dispose();
      });
    }
  };
}

// ---------- Hero: parade walking along top of photo ----------
function heroParadeScene(ctx) {
  const {
    scene,
    camera
  } = ctx;
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
  const P = 16; // seconds per loop
  const tri = ph => ph < 0.5 ? -1 + ph * 4 : 3 - ph * 4; // -1..1..-1
  return {
    update(t) {
      const ph = t / P % 1;
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
      scene.traverse(o => {
        if (o.geometry) o.geometry.dispose();
        if (o.material && o.material.dispose) o.material.dispose();
      });
    }
  };
}
Object.assign(window, {
  ROBOT_BUILDERS,
  robotCardScene,
  dioramaScene,
  heroDroneScene,
  heroParadeScene,
  addRobotLights,
  addMeadow,
  addTree,
  rMat,
  RB
});

/* ===== src/world.jsx ===== */
// ===== Journey world (Updates page) — scroll travels a green valley, ends in blue sky =====

function jHash(x, y) {
  const s = Math.sin(x * 127.1 + y * 311.7) * 43758.5453;
  return s - Math.floor(s);
}
function jNoise(x, y) {
  const xi = Math.floor(x),
    yi = Math.floor(y);
  const xf = x - xi,
    yf = y - yi;
  const u = xf * xf * (3 - 2 * xf),
    v = yf * yf * (3 - 2 * yf);
  const a = jHash(xi, yi),
    b = jHash(xi + 1, yi),
    c = jHash(xi, yi + 1),
    d = jHash(xi + 1, yi + 1);
  return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
}
function jFbm(x, y) {
  let val = 0,
    amp = 0.55,
    f = 1;
  for (let i = 0; i < 4; i++) {
    val += amp * jNoise(x * f, y * f);
    amp *= 0.5;
    f *= 2.1;
  }
  return val;
}
function jTerrainH(x, z) {
  const amp = THREE.MathUtils.smoothstep(Math.abs(x), 3.5, 14);
  return jFbm(x * 0.07 + 31, z * 0.07 + 7) * 7 * amp;
}
const J_PATH = {
  zStart: 18,
  zEnd: -300
};
function jPathX(z) {
  return Math.sin(z * 0.028) * 3.2;
}
function JourneyWorld() {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el || !window.THREE) return;
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true
    });
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
    const track = o => {
      disposables.push(o);
      return o;
    };

    // ---- Terrain ----
    const tGeo = track(new THREE.PlaneGeometry(140, 380, 64, 170));
    tGeo.rotateX(-Math.PI / 2);
    {
      const p = tGeo.attributes.position;
      const colors = new Float32Array(p.count * 3);
      const cLow = new THREE.Color(0x8fc177),
        cMid = new THREE.Color(0x5fa763),
        cHigh = new THREE.Color(0x47885c),
        cPath = new THREE.Color(0xb6d8a4);
      for (let i = 0; i < p.count; i++) {
        const x = p.array[i * 3],
          z = p.array[i * 3 + 2] - 150;
        const h = jTerrainH(x - jPathX(z), z);
        p.array[i * 3 + 1] = h;
        p.array[i * 3 + 2] = z;
        const c = new THREE.Color();
        const onPath = 1 - THREE.MathUtils.smoothstep(Math.abs(x - jPathX(z)), 1.5, 5);
        if (h < 1.4) c.lerpColors(cLow, cMid, h / 1.4);else c.lerpColors(cMid, cHigh, Math.min(1, (h - 1.4) / 4));
        c.lerp(cPath, onPath * 0.7);
        colors[i * 3] = c.r;
        colors[i * 3 + 1] = c.g;
        colors[i * 3 + 2] = c.b;
      }
      tGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
      tGeo.computeVertexNormals();
    }
    scene.add(new THREE.Mesh(tGeo, track(new THREE.MeshStandardMaterial({
      vertexColors: true,
      flatShading: true,
      roughness: 0.95
    }))));
    const groundY = (x, z) => jTerrainH(x - jPathX(z), z);

    // ---- Mountains ----
    const mGeo = track(new THREE.ConeGeometry(1, 1, 6));
    const mMat = track(new THREE.MeshStandardMaterial({
      color: 0x93b8a6,
      flatShading: true,
      roughness: 1
    }));
    const sMat = track(new THREE.MeshStandardMaterial({
      color: 0xf4f9f4,
      flatShading: true,
      roughness: 1
    }));
    for (let i = 0; i < 14; i++) {
      const side = i % 2 === 0 ? 1 : -1;
      const z = 10 - i * 24 - Math.random() * 10;
      const x = side * (30 + Math.random() * 28);
      const h = 10 + Math.random() * 16,
        r = 7 + Math.random() * 9;
      const m = new THREE.Mesh(mGeo, mMat);
      m.scale.set(r, h, r);
      m.position.set(x, h / 2 - 1.5, z);
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
    const trunkMat = track(new THREE.MeshStandardMaterial({
      color: 0x7a5b3e,
      flatShading: true,
      roughness: 1
    }));
    const folGeo = track(new THREE.ConeGeometry(0.6, 1.3, 7));
    const folMats = [0x4e9e5f, 0x66ab5e, 0x3f8f58].map(c => track(new THREE.MeshStandardMaterial({
      color: c,
      flatShading: true,
      roughness: 1
    })));
    for (let i = 0; i < 70; i++) {
      const z = 14 - Math.random() * 330;
      const side = Math.random() > 0.5 ? 1 : -1;
      const x = jPathX(z) + side * (4.5 + Math.random() * 22);
      const y = groundY(x, z);
      const tree = new THREE.Group();
      const trunk = new THREE.Mesh(trunkGeo, trunkMat);
      trunk.position.y = 0.3;
      tree.add(trunk);
      const fol = new THREE.Mesh(folGeo, folMats[i % 3]);
      fol.position.y = 1.1;
      tree.add(fol);
      if (i % 2) {
        const f2 = new THREE.Mesh(folGeo, folMats[(i + 1) % 3]);
        f2.scale.setScalar(0.7);
        f2.position.y = 1.7;
        tree.add(f2);
      }
      tree.position.set(x, y, z);
      tree.scale.setScalar(0.8 + Math.random() * 1.6);
      tree.rotation.y = Math.random() * Math.PI;
      scene.add(tree);
    }

    // ---- Floating islands ----
    const islands = [];
    for (let i = 0; i < 4; i++) {
      const isl = new THREE.Group();
      const top = new THREE.Mesh(track(new THREE.CylinderGeometry(2.2, 1.6, 0.7, 9)), track(new THREE.MeshStandardMaterial({
        color: 0x6db36a,
        flatShading: true,
        roughness: 1
      })));
      isl.add(top);
      const rock = new THREE.Mesh(track(new THREE.ConeGeometry(1.7, 2.4, 8)), track(new THREE.MeshStandardMaterial({
        color: 0x8e9a90,
        flatShading: true,
        roughness: 1
      })));
      rock.rotation.x = Math.PI;
      rock.position.y = -1.4;
      isl.add(rock);
      const tr = new THREE.Mesh(folGeo, folMats[i % 3]);
      tr.position.y = 1.0;
      tr.scale.setScalar(1.1);
      isl.add(tr);
      const z = -30 - i * 65;
      isl.position.set(jPathX(z) + (i % 2 ? 1 : -1) * (10 + Math.random() * 8), 11 + Math.random() * 5, z);
      isl.scale.setScalar(0.8 + Math.random() * 0.8);
      isl.userData = {
        baseY: isl.position.y,
        ph: Math.random() * 6
      };
      scene.add(isl);
      islands.push(isl);
    }

    // ---- Clouds ----
    const cloudGeo = track(new THREE.SphereGeometry(1, 7, 7));
    const cloudMat = track(new THREE.MeshStandardMaterial({
      color: 0xffffff,
      flatShading: true,
      roughness: 1,
      transparent: true,
      opacity: 0.85
    }));
    for (let i = 0; i < 6; i++) {
      const c = new THREE.Group();
      for (let j = 0; j < 3; j++) {
        const s = new THREE.Mesh(cloudGeo, cloudMat);
        s.position.set(j * 1.4 - 1.4, Math.random() * 0.4, Math.random() * 0.8);
        s.scale.set(1.6 + Math.random(), 0.55, 1);
        c.add(s);
      }
      const z = 8 - i * 55;
      c.position.set(jPathX(z) + (i % 2 ? -1 : 1) * (12 + Math.random() * 14), 17 + Math.random() * 6, z);
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
      worldRobots.push({
        built,
        kind,
        baseY: y,
        ph: Math.random() * 6
      });
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
      skyDrones.push({
        d,
        z: -60 - i * 120,
        r: 6 + i * 2,
        h: 7 + i * 1.5,
        sp: 0.25 + i * 0.06,
        ph: i * 2
      });
    }

    // ---- Scroll → camera ----
    let target = 0,
      p = 0;
    const onScroll = () => {
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      target = Math.min(1, Math.max(0, window.scrollY / max));
    };
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    onScroll();
    const mouse = {
      x: 0,
      y: 0
    };
    const onMove = e => {
      mouse.x = e.clientX / window.innerWidth * 2 - 1;
      mouse.y = e.clientY / window.innerHeight * 2 - 1;
    };
    window.addEventListener("pointermove", onMove, {
      passive: true
    });
    const onResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight, false);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", onResize);
    let raf = 0,
      running = true;
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
      islands.forEach(isl => {
        isl.position.y = isl.userData.baseY + Math.sin(t * 0.5 + isl.userData.ph) * 0.5;
        isl.rotation.y = t * 0.04;
      });
      worldRobots.forEach(r => {
        r.built.update(t + r.ph);
        if (r.kind === "drone") r.built.group.position.y = r.baseY + Math.sin(t + r.ph) * 0.3;
      });
      skyDrones.forEach(({
        d,
        z: dz,
        r,
        h,
        sp,
        ph
      }) => {
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
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(raf);
      } else if (!running) {
        running = true;
        raf = requestAnimationFrame(tick);
      }
    };
    document.addEventListener("visibilitychange", onVis);
    return () => {
      running = false;
      cancelAnimationFrame(raf);
      document.removeEventListener("visibilitychange", onVis);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("resize", onResize);
      scene.traverse(o => {
        if (o.geometry) o.geometry.dispose();
        if (o.material && o.material.dispose) o.material.dispose();
      });
      disposables.forEach(d => d.dispose && d.dispose());
      renderer.dispose();
      while (el.firstChild) el.removeChild(el.firstChild);
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: "j-canvas"
  });
}
function JourneyPage({
  eyebrow,
  titleA,
  titleB,
  lede,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "journey"
  }, /*#__PURE__*/React.createElement(JourneyWorld, null), /*#__PURE__*/React.createElement("div", {
    className: "j-sky",
    id: "j-sky"
  }), /*#__PURE__*/React.createElement("div", {
    className: "j-progress"
  }, /*#__PURE__*/React.createElement("div", {
    id: "j-progress-fill",
    className: "j-progress-bar"
  })), /*#__PURE__*/React.createElement("div", {
    className: "j-content"
  }, /*#__PURE__*/React.createElement("header", {
    className: "j-hero",
    "data-screen-label": eyebrow
  }, /*#__PURE__*/React.createElement("div", {
    className: "j-eyebrow"
  }, eyebrow), /*#__PURE__*/React.createElement("h1", {
    className: "j-title"
  }, titleA, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "outline"
  }, titleB)), /*#__PURE__*/React.createElement("p", {
    className: "j-lede"
  }, lede), /*#__PURE__*/React.createElement("div", {
    className: "j-cue"
  }, /*#__PURE__*/React.createElement("span", {
    className: "j-cue-line"
  }), "Scroll to travel")), children, /*#__PURE__*/React.createElement("footer", {
    className: "j-outro"
  }, /*#__PURE__*/React.createElement("div", {
    className: "j-outro-word"
  }, "fin."), /*#__PURE__*/React.createElement("button", {
    className: "btn",
    onClick: () => window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }, "Back to the trailhead \u2191"))));
}
function JourneySection({
  index,
  label,
  children,
  wide
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "j-section",
    "data-screen-label": label
  }, /*#__PURE__*/React.createElement("div", {
    className: "j-zone"
  }, /*#__PURE__*/React.createElement("span", {
    className: "j-zone-num"
  }, String(index).padStart(2, "0")), /*#__PURE__*/React.createElement("span", {
    className: "j-zone-word"
  }, label)), /*#__PURE__*/React.createElement("div", {
    className: `j-card ${wide ? "wide" : ""}`
  }, children));
}
Object.assign(window, {
  JourneyWorld,
  JourneyPage,
  JourneySection
});

/* ===== src/scenes-pages.jsx ===== */
// ===== Fixed background worlds for Publications (paper archive) & Blog (smart home) =====

function fixedWorldHost(buildFn) {
  return function WorldComp() {
    const ref = React.useRef(null);
    React.useEffect(() => {
      const el = ref.current;
      if (!el || !window.THREE) return;
      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
      renderer.setSize(window.innerWidth, window.innerHeight, false);
      el.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(46, window.innerWidth / window.innerHeight, 0.1, 100);
      const state = {
        mouse: {
          x: 0,
          y: 0
        },
        scroll: 0
      };
      const api = buildFn({
        scene,
        camera,
        state
      }) || {};
      const onScroll = () => {
        const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
        state.scroll = Math.min(1, Math.max(0, window.scrollY / max));
      };
      const onMove = e => {
        state.mouse.x = e.clientX / window.innerWidth * 2 - 1;
        state.mouse.y = e.clientY / window.innerHeight * 2 - 1;
      };
      const onResize = () => {
        renderer.setSize(window.innerWidth, window.innerHeight, false);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
      };
      window.addEventListener("scroll", onScroll, {
        passive: true
      });
      window.addEventListener("pointermove", onMove, {
        passive: true
      });
      window.addEventListener("resize", onResize);
      onScroll();
      let raf = 0,
        running = true;
      const t0 = performance.now();
      const tick = () => {
        if (!running) return;
        api.update && api.update((performance.now() - t0) / 1000);
        renderer.render(scene, camera);
        raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
      const onVis = () => {
        if (document.hidden) {
          running = false;
          cancelAnimationFrame(raf);
        } else if (!running) {
          running = true;
          raf = requestAnimationFrame(tick);
        }
      };
      document.addEventListener("visibilitychange", onVis);
      return () => {
        running = false;
        cancelAnimationFrame(raf);
        document.removeEventListener("visibilitychange", onVis);
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("pointermove", onMove);
        window.removeEventListener("resize", onResize);
        scene.traverse(o => {
          if (o.geometry) o.geometry.dispose();
          if (o.material && o.material.dispose) o.material.dispose();
        });
        renderer.dispose();
        while (el.firstChild) el.removeChild(el.firstChild);
      };
    }, []);
    return /*#__PURE__*/React.createElement("div", {
      ref: ref,
      className: "iw-canvas"
    });
  };
}

// paper sheet texture (white page with text lines)
function makePaperTexture() {
  const c = document.createElement("canvas");
  c.width = 128;
  c.height = 170;
  const x = c.getContext("2d");
  x.fillStyle = "#ffffff";
  x.fillRect(0, 0, 128, 170);
  x.fillStyle = "#2e8f5b";
  x.fillRect(14, 14, 70, 7);
  x.fillStyle = "#c3cbd4";
  for (let i = 0; i < 9; i++) x.fillRect(14, 36 + i * 13, 100 - i % 3 * 14, 5);
  return new THREE.CanvasTexture(c);
}

// ---------- Publications: floating paper archive ----------
const PaperWorld = fixedWorldHost(({
  scene,
  camera,
  state
}) => {
  camera.position.set(0, 1.3, 7);
  camera.lookAt(0, 1.3, 0);
  addRobotLights(scene);
  const paperTex = makePaperTexture();
  const paperGeo = new THREE.PlaneGeometry(0.62, 0.82);
  const papers = [];
  for (let i = 0; i < 16; i++) {
    const m = new THREE.Mesh(paperGeo, new THREE.MeshBasicMaterial({
      map: paperTex,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.55 + Math.random() * 0.4
    }));
    const side = i % 2 ? 1 : -1;
    m.position.set(side * (2.6 + Math.random() * 2.6), Math.random() * 6 - 1, -1.5 - Math.random() * 3);
    m.rotation.set(Math.random() * 0.5 - 0.25, Math.random() * 0.9 - 0.45, Math.random() * 0.3 - 0.15);
    m.userData = {
      sp: 0.12 + Math.random() * 0.22,
      rs: (Math.random() - 0.5) * 0.3,
      ph: Math.random() * 6
    };
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
  const carried = new THREE.Mesh(paperGeo, new THREE.MeshBasicMaterial({
    map: paperTex,
    side: THREE.DoubleSide
  }));
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
      papers.forEach(m => {
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
    }
  };
});

// ---------- Blog: smart-home interior with robots doing chores ----------
const HouseWorld = fixedWorldHost(({
  scene,
  camera,
  state
}) => {
  camera.position.set(7.2, 6.4, 7.2);
  camera.lookAt(0, 0, 0);
  addRobotLights(scene);
  const house = new THREE.Group();
  scene.add(house);
  const mFloor = rMat(0xe9dfcd, {
    roughness: 0.9
  });
  const mRug = rMat(0xcfe3cf, {
    roughness: 1
  });
  const mWall = rMat(0xf4f4f0, {
    roughness: 0.95
  });
  const mWood = rMat(0xb08a5e, {
    roughness: 0.85
  });
  const mSofa = rMat(0x7da883, {
    roughness: 1
  });
  const mPot = rMat(0xc96f4a, {
    roughness: 0.9
  });

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
  wall(10, 0.18, 0, -4); // back
  wall(0.18, 8, -5, 0); // left
  wall(0.18, 3.2, 5, -2.4); // right partial
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
  const waypoints = [new THREE.Vector3(3.8, 0, 2.8), new THREE.Vector3(3.8, 0, -1.0), new THREE.Vector3(0.6, 0, -1.0), new THREE.Vector3(0.6, 0, 2.8)];
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
      const prog = t * 0.22 % total;
      const i0 = Math.floor(prog),
        i1 = (i0 + 1) % total;
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
    }
  };
});
Object.assign(window, {
  PaperWorld,
  HouseWorld
});

/* ===== src/globe.jsx ===== */
// ===== 3D Globe — real continents (recolored earth texture) + visit heatmap =====

const VISITED_PLACES = [{
  name: "Athens, GA",
  lat: 33.95,
  lon: -83.38,
  w: 1.0,
  current: true
}, {
  name: "Guntur",
  lat: 16.31,
  lon: 80.44,
  w: 0.95,
  home: true
}, {
  name: "Vijayawada",
  lat: 16.51,
  lon: 80.65,
  w: 0.7
}, {
  name: "Naya Raipur",
  lat: 21.16,
  lon: 81.79,
  w: 0.85
}, {
  name: "Delhi",
  lat: 28.61,
  lon: 77.21,
  w: 0.5
}, {
  name: "Manali",
  lat: 32.24,
  lon: 77.19,
  w: 0.4
}, {
  name: "Thailand",
  lat: 13.76,
  lon: 100.5,
  w: 0.5
}, {
  name: "Hangzhou",
  lat: 30.27,
  lon: 120.16,
  w: 0.5
}, {
  name: "Louisville",
  lat: 38.25,
  lon: -85.76,
  w: 0.75
}, {
  name: "Washington, DC",
  lat: 38.91,
  lon: -77.04,
  w: 0.4
}, {
  name: "New York",
  lat: 40.71,
  lon: -74.01,
  w: 0.5
}, {
  name: "Colorado",
  lat: 39.74,
  lon: -104.99,
  w: 0.45
}, {
  name: "Gatlinburg",
  lat: 35.71,
  lon: -83.51,
  w: 0.35
}, {
  name: "Toronto",
  lat: 43.65,
  lon: -79.38,
  w: 0.4
}, {
  name: "Detroit",
  lat: 42.33,
  lon: -83.05,
  w: 0.35
}, {
  name: "Windsor",
  lat: 42.32,
  lon: -83.0,
  w: 0.3
}];
const TRAVEL_ARCS = [["Guntur", "Delhi"], ["Delhi", "Manali"], ["Guntur", "Naya Raipur"], ["Naya Raipur", "Thailand"], ["Guntur", "Louisville"], ["Louisville", "Athens, GA"], ["Athens, GA", "Hangzhou"], ["Athens, GA", "New York"], ["Athens, GA", "Colorado"], ["Athens, GA", "Toronto"], ["Toronto", "Detroit"]];
function latLonToV3(lat, lon, r) {
  const phi = (90 - lat) * Math.PI / 180;
  const theta = (lon + 180) * Math.PI / 180;
  return new THREE.Vector3(-r * Math.sin(phi) * Math.cos(theta), r * Math.cos(phi), r * Math.sin(phi) * Math.sin(theta));
}
function makeHeatTexture(color) {
  const c = document.createElement("canvas");
  c.width = c.height = 128;
  const x = c.getContext("2d");
  const g = x.createRadialGradient(64, 64, 0, 64, 64, 64);
  g.addColorStop(0, color + "cc");
  g.addColorStop(0.4, color + "55");
  g.addColorStop(1, color + "00");
  x.fillStyle = g;
  x.fillRect(0, 0, 128, 128);
  return new THREE.CanvasTexture(c);
}

// Load NASA earth texture, recolor into the site palette (green land / paper ocean)
function loadLandTexture(onReady) {
  const img = new Image();
  img.crossOrigin = "anonymous";
  img.onload = () => {
    try {
      const W = 1024,
        H = 512;
      const c = document.createElement("canvas");
      c.width = W;
      c.height = H;
      const x = c.getContext("2d");
      x.drawImage(img, 0, 0, W, H);
      const d = x.getImageData(0, 0, W, H);
      const px = d.data;
      for (let i = 0; i < px.length; i += 4) {
        const r = px[i],
          g = px[i + 1],
          b = px[i + 2];
        const ocean = b > r + 12 && b > g + 5;
        if (ocean) {
          px[i] = 240;
          px[i + 1] = 247;
          px[i + 2] = 241;
        } else {
          // land: shade by brightness for relief
          const lum = (r + g + b) / (3 * 255);
          px[i] = 110 + lum * 60;
          px[i + 1] = 165 + lum * 40;
          px[i + 2] = 122 + lum * 45;
        }
      }
      x.putImageData(d, 0, 0);
      const tex = new THREE.CanvasTexture(c);
      tex.colorSpace = THREE.SRGBColorSpace;
      onReady(tex);
    } catch (e) {/* keep fallback */}
  };
  img.src = "https://unpkg.com/three-globe@2.31.0/example/img/earth-day.jpg";
}
function buildGlobeScene(ctx) {
  const {
    scene,
    camera,
    el
  } = ctx;
  camera.position.set(0, 0.5, 3.6);
  camera.lookAt(0, 0, 0);
  scene.add(new THREE.HemisphereLight(0xffffff, 0xd6e8d8, 1.25));
  const dir = new THREE.DirectionalLight(0xffffff, 0.7);
  dir.position.set(3, 4, 5);
  scene.add(dir);
  const R = 1.32;
  const globe = new THREE.Group();
  scene.add(globe);
  const sphereMat = new THREE.MeshStandardMaterial({
    color: 0xf0f7f1,
    roughness: 0.85
  });
  globe.add(new THREE.Mesh(new THREE.SphereGeometry(R, 56, 56), sphereMat));
  loadLandTexture(tex => {
    sphereMat.map = tex;
    sphereMat.color.set(0xffffff);
    sphereMat.needsUpdate = true;
  });
  const halo = new THREE.Mesh(new THREE.SphereGeometry(R * 1.06, 32, 32), new THREE.MeshBasicMaterial({
    color: 0xcde7d2,
    transparent: true,
    opacity: 0.25,
    side: THREE.BackSide
  }));
  scene.add(halo);

  // subtle graticule
  const gratMat = new THREE.LineBasicMaterial({
    color: 0xb3cdba,
    transparent: true,
    opacity: 0.3
  });
  const gratPts = [];
  for (let lat = -60; lat <= 60; lat += 30) {
    const r2 = R * Math.cos(lat * Math.PI / 180),
      y = R * Math.sin(lat * Math.PI / 180);
    for (let a = 0; a < 360; a += 6) {
      const a1 = a * Math.PI / 180,
        a2 = (a + 6) * Math.PI / 180;
      gratPts.push(Math.cos(a1) * r2, y, Math.sin(a1) * r2, Math.cos(a2) * r2, y, Math.sin(a2) * r2);
    }
  }
  const gratGeo = new THREE.BufferGeometry();
  gratGeo.setAttribute("position", new THREE.Float32BufferAttribute(gratPts, 3));
  globe.add(new THREE.LineSegments(gratGeo, gratMat));

  // heat glows + markers
  const heatGreen = makeHeatTexture("#2e8f5b");
  const heatAmber = makeHeatTexture("#e0a23c");
  const markerMat = new THREE.MeshBasicMaterial({
    color: 0x1d7547
  });
  const homeMat = new THREE.MeshBasicMaterial({
    color: 0xe0832c
  });
  const rings = [];
  const byName = {};
  VISITED_PLACES.forEach(p => {
    const pos = latLonToV3(p.lat, p.lon, R);
    byName[p.name] = pos;
    const spr = new THREE.Sprite(new THREE.SpriteMaterial({
      map: p.w > 0.6 ? heatAmber : heatGreen,
      transparent: true,
      depthWrite: false
    }));
    const s = 0.22 + p.w * 0.55;
    spr.scale.set(s, s, 1);
    spr.position.copy(latLonToV3(p.lat, p.lon, R * 1.01));
    globe.add(spr);
    const dot = new THREE.Mesh(new THREE.SphereGeometry(p.current ? 0.035 : 0.022, 10, 10), p.home ? homeMat : markerMat);
    dot.position.copy(latLonToV3(p.lat, p.lon, R * 1.012));
    globe.add(dot);
    if (p.current || p.home) {
      const ring = new THREE.Mesh(new THREE.RingGeometry(0.05, 0.058, 32), new THREE.MeshBasicMaterial({
        color: p.current ? 0x1d7547 : 0xe0832c,
        transparent: true,
        opacity: 0.9,
        side: THREE.DoubleSide
      }));
      ring.position.copy(latLonToV3(p.lat, p.lon, R * 1.015));
      ring.lookAt(0, 0, 0);
      globe.add(ring);
      rings.push(ring);
    }
  });
  const arcMat = new THREE.LineBasicMaterial({
    color: 0x2e8f5b,
    transparent: true,
    opacity: 0.35
  });
  TRAVEL_ARCS.forEach(([a, b]) => {
    const pa = byName[a],
      pb = byName[b];
    if (!pa || !pb) return;
    const mid = pa.clone().add(pb).multiplyScalar(0.5).normalize().multiplyScalar(R * (1.12 + pa.distanceTo(pb) * 0.16));
    const curve = new THREE.QuadraticBezierCurve3(pa.clone().multiplyScalar(1.005), mid, pb.clone().multiplyScalar(1.005));
    const g = new THREE.BufferGeometry().setFromPoints(curve.getPoints(36));
    globe.add(new THREE.Line(g, arcMat));
  });

  // drag to rotate
  let dragging = false,
    px = 0,
    py = 0;
  let velY = 0.0,
    rotX = 0.35,
    targetRotX = 0.35;
  const onDown = e => {
    dragging = true;
    px = e.clientX;
    py = e.clientY;
  };
  const onUp = () => {
    dragging = false;
  };
  const onDrag = e => {
    if (!dragging) return;
    velY = (e.clientX - px) * 0.005;
    targetRotX = Math.max(-0.9, Math.min(0.9, targetRotX + (e.clientY - py) * 0.003));
    px = e.clientX;
    py = e.clientY;
  };
  el.addEventListener("pointerdown", onDown);
  window.addEventListener("pointerup", onUp);
  el.addEventListener("pointermove", onDrag);
  el.style.cursor = "grab";
  globe.rotation.y = 2.62;
  return {
    update(t) {
      if (!dragging) velY *= 0.95;
      globe.rotation.y += velY + (dragging ? 0 : 0.0018);
      rotX += (targetRotX - rotX) * 0.08;
      globe.rotation.x = rotX;
      halo.rotation.copy(globe.rotation);
      rings.forEach((r, i) => {
        const ph = (t * 0.7 + i * 0.5) % 1;
        r.scale.setScalar(1 + ph * 1.6);
        r.material.opacity = 0.9 * (1 - ph);
      });
    },
    dispose() {
      el.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      el.removeEventListener("pointermove", onDrag);
      scene.traverse(o => {
        if (o.geometry) o.geometry.dispose();
        if (o.material && o.material.dispose) o.material.dispose();
      });
      heatGreen.dispose();
      heatAmber.dispose();
    }
  };
}
Object.assign(window, {
  buildGlobeScene,
  VISITED_PLACES
});

/* ===== src/app-all.jsx ===== */
// ===== CONSOLIDATED APP =====
// Rich 3D scenes live in their own files and are loaded BEFORE this one:
//   data.jsx → robots.jsx → world.jsx → scenes-pages.jsx → globe.jsx → app-all.jsx
// This file owns the inline ThreeScene host + page components + routing, and
// wires each page to the detailed scene built in those modules.

// ===== Three.js Scene Host (inline, sized canvases) =====
function ThreeScene({
  build,
  className,
  style
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el || !window.THREE) return;
    const w = el.clientWidth || 400;
    const h = el.clientHeight || 400;
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(w, h, false);
    renderer.setClearColor(0x000000, 0);
    el.appendChild(renderer.domElement);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, w / h, 0.1, 100);
    camera.position.set(0, 0, 5);
    const ctx = {
      scene,
      camera,
      renderer,
      el,
      mouse: {
        x: 0,
        y: 0
      }
    };
    const api = build(ctx) || {};
    let raf = 0,
      running = false;
    const start = performance.now();
    const tick = () => {
      if (!running) return;
      const t = (performance.now() - start) / 1000;
      api.update && api.update(t);
      renderer.render(scene, camera);
      raf = requestAnimationFrame(tick);
    };
    const startLoop = () => {
      if (!running) {
        running = true;
        raf = requestAnimationFrame(tick);
      }
    };
    const stopLoop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => e.isIntersecting ? startLoop() : stopLoop());
    }, {
      rootMargin: "60px"
    });
    io.observe(el);
    const onVis = () => document.hidden ? stopLoop() : startLoop();
    document.addEventListener("visibilitychange", onVis);
    const onResize = () => {
      const nw = el.clientWidth,
        nh = el.clientHeight;
      if (!nw || !nh) return;
      renderer.setSize(nw, nh, false);
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
    };
    let resizeRaf = 0;
    const scheduleResize = () => {
      if (resizeRaf) return;
      resizeRaf = requestAnimationFrame(() => {
        resizeRaf = 0;
        onResize();
      });
    };
    // Defer out of the observer callback to avoid the benign
    // "ResizeObserver loop completed with undelivered notifications" warning.
    const ro = new ResizeObserver(scheduleResize);
    ro.observe(el);
    const onMove = e => {
      const r = el.getBoundingClientRect();
      ctx.mouse.x = (e.clientX - r.left) / r.width * 2 - 1;
      ctx.mouse.y = -((e.clientY - r.top) / r.height * 2 - 1);
    };
    el.addEventListener("pointermove", onMove);
    return () => {
      stopLoop();
      cancelAnimationFrame(resizeRaf);
      io.disconnect();
      ro.disconnect();
      document.removeEventListener("visibilitychange", onVis);
      el.removeEventListener("pointermove", onMove);
      api.dispose && api.dispose();
      renderer.dispose();
      while (el.firstChild) el.removeChild(el.firstChild);
    };
  }, [build]);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: className,
    style: style
  });
}

// ===== Hero diorama: the four detailed robots on a meadow =====
// Uses ROBOT_BUILDERS / addRobotLights / addMeadow from robots.jsx (loaded first).
function buildHeroDiorama(ctx) {
  const {
    scene,
    camera
  } = ctx;
  camera.position.set(2.6, 1.8, 3.4);
  camera.lookAt(0, 0.7, 0);
  addRobotLights(scene);
  const stage = new THREE.Group();
  scene.add(stage);
  addMeadow(stage, 2.2);
  const built = [];
  const place = (kind, x, z, s, ry) => {
    const b = ROBOT_BUILDERS[kind]();
    b.group.position.set(x, kind === "drone" ? 1.0 : 0, z);
    b.group.scale.setScalar(s);
    b.group.rotation.y = ry;
    stage.add(b.group);
    built.push({
      b,
      kind,
      baseY: b.group.position.y
    });
  };
  place("humanoid", -1.3, 0.15, 0.62, 0.5);
  place("quadruped", -0.25, -0.55, 0.66, -0.4);
  place("drone", 0.75, -0.3, 0.6, 0.2);
  place("rover", 1.3, 0.2, 0.62, -0.7);
  return {
    update(t) {
      built.forEach(({
        b,
        kind,
        baseY
      }, i) => {
        b.update(t + i * 0.7);
        if (kind === "drone") b.group.position.y = baseY + Math.sin(t * 1.3) * 0.08;
      });
      stage.rotation.y = Math.sin(t * 0.16) * 0.4 + ctx.mouse.x * 0.35;
    },
    dispose() {
      scene.traverse(o => {
        if (o.geometry) o.geometry.dispose();
        if (o.material && o.material.dispose) o.material.dispose();
      });
    }
  };
}

// ===== Page Components =====
function Reveal({
  children,
  delay = 0
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          setTimeout(() => el.classList.add("in"), delay);
          io.unobserve(el);
        }
      });
    }, {
      threshold: 0.12
    });
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: "reveal"
  }, children);
}
function PubRow({
  p
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "pub"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pub-year"
  }, p.year), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, p.title), /*#__PURE__*/React.createElement("p", {
    className: "pub-authors"
  }, p.authors.map((a, idx) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: idx
  }, idx > 0 && ", ", /*#__PURE__*/React.createElement("span", {
    className: a.toLowerCase().includes("sai krishna") ? "me" : ""
  }, a)))), /*#__PURE__*/React.createElement("div", {
    className: "pub-venue"
  }, p.venue)), /*#__PURE__*/React.createElement("div", {
    className: "pub-actions"
  }, p.featured && /*#__PURE__*/React.createElement("span", {
    className: "pub-chip featured"
  }, "Featured"), /*#__PURE__*/React.createElement("span", {
    className: "pub-chip"
  }, p.kind)));
}
function HomePage({
  go
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "hero",
    "data-screen-label": "Home hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "hero-eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pulse"
  }), /*#__PURE__*/React.createElement("span", null, "Athens \xB7 Georgia")), /*#__PURE__*/React.createElement("h1", {
    className: "hero-name"
  }, "Sai Krishna", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "italic"
  }, "Ghanta")), /*#__PURE__*/React.createElement("p", {
    className: "hero-role"
  }, "PhD Student in AI ", /*#__PURE__*/React.createElement("span", {
    className: "at"
  }, "at"), " the University of Georgia"), /*#__PURE__*/React.createElement("p", {
    className: "hero-bio"
  }, "I work on ", /*#__PURE__*/React.createElement("em", null, "multi-robot systems"), ", computer vision, and autonomous navigation \u2014 frameworks where many robots map, localize, and reason about complex environments together, even when GPS and clean communication fail."), /*#__PURE__*/React.createElement("p", {
    className: "hero-bio"
  }, "Currently with ", /*#__PURE__*/React.createElement("em", null, "Dr. Ramviyas Parasuraman"), " at the HeRoLab. Previously: Samsung R&D, IIIT Naya Raipur."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginTop: 20,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: PROFILE.scholar,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "btn-link"
  }, "Scholar"), /*#__PURE__*/React.createElement("a", {
    href: PROFILE.github,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "btn-link"
  }, "GitHub"), /*#__PURE__*/React.createElement("a", {
    href: `mailto:${PROFILE.email}`,
    className: "btn-link"
  }, "Email")))), /*#__PURE__*/React.createElement("div", {
    className: "hero-scene"
  }, /*#__PURE__*/React.createElement(ThreeScene, {
    build: buildHeroDiorama,
    style: {
      width: "100%",
      height: "100%",
      minHeight: 440
    }
  }))))), /*#__PURE__*/React.createElement("section", {
    className: "interests",
    "data-screen-label": "Interests"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("h2", {
    style: {
      textAlign: "center",
      marginBottom: 60
    }
  }, "Research Interests"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 40
    }
  }, INTERESTS.map(int => /*#__PURE__*/React.createElement("div", {
    key: int.id,
    className: "interest-card"
  }, /*#__PURE__*/React.createElement("h3", null, int.title), /*#__PURE__*/React.createElement("p", null, int.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap",
      marginTop: 12
    }
  }, int.topics.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    className: "chip"
  }, t))))))))));
}
function ResearchPage() {
  return /*#__PURE__*/React.createElement("section", {
    className: "research",
    "data-screen-label": "Research"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      marginBottom: 60
    }
  }, "Research Thrusts"), THRUSTS.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: t.num,
    className: "thrust",
    style: {
      marginBottom: 100
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    delay: i * 100
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 40,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "thrust-num"
  }, t.num), /*#__PURE__*/React.createElement("h2", null, t.title), /*#__PURE__*/React.createElement("p", {
    className: "thrust-body"
  }, t.body), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      flexWrap: "wrap"
    }
  }, t.keywords.map(k => /*#__PURE__*/React.createElement("span", {
    key: k,
    className: "chip small"
  }, k)))), /*#__PURE__*/React.createElement("div", {
    className: "thrust-img"
  }, /*#__PURE__*/React.createElement(ThreeScene, {
    build: dioramaScene(t.scene),
    style: {
      width: "100%",
      height: "100%",
      minHeight: 340
    }
  }))))))));
}
function PublicationsPage() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PaperWorld, null), /*#__PURE__*/React.createElement("section", {
    className: "publications",
    "data-screen-label": "Publications"
  }, /*#__PURE__*/React.createElement("div", {
    className: "iw-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      marginBottom: 60
    }
  }, "Publications"), /*#__PURE__*/React.createElement("div", null, PUBLICATIONS.map(p => /*#__PURE__*/React.createElement(PubRow, {
    key: p.title,
    p: p
  })))))));
}
function UpdatesPage() {
  return /*#__PURE__*/React.createElement("div", {
    className: "journey"
  }, /*#__PURE__*/React.createElement(JourneyWorld, null), /*#__PURE__*/React.createElement("div", {
    className: "j-sky",
    id: "j-sky"
  }), /*#__PURE__*/React.createElement("div", {
    className: "j-progress"
  }, /*#__PURE__*/React.createElement("div", {
    id: "j-progress-fill",
    className: "j-progress-bar"
  })), /*#__PURE__*/React.createElement("div", {
    className: "j-content"
  }, /*#__PURE__*/React.createElement("section", {
    className: "updates",
    "data-screen-label": "Updates"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      marginBottom: 60
    }
  }, "Updates"), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 600
    }
  }, UPDATES.map(u => /*#__PURE__*/React.createElement("div", {
    key: u.date,
    className: "update-item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "update-date"
  }, u.date), /*#__PURE__*/React.createElement("p", null, u.text))))))));
}
function CVPage() {
  return /*#__PURE__*/React.createElement("section", {
    className: "cv",
    "data-screen-label": "CV"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("h1", null, "Curriculum Vitae"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 20,
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: PROFILE.cv,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "btn-link"
  }, "Download PDF")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--mono)",
      fontSize: 13,
      lineHeight: 1.8,
      color: "var(--ink-2)"
    }
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Education")), /*#__PURE__*/React.createElement("p", null, "PhD in Artificial Intelligence \xB7 University of Georgia (2024\u2013present)"), /*#__PURE__*/React.createElement("p", null, "B.Tech in Computer Science and Engineering \xB7 IIIT Naya Raipur (2019\u20132023)"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 30
    }
  }, /*#__PURE__*/React.createElement("strong", null, "Experience")), /*#__PURE__*/React.createElement("p", null, "Robotics Research Intern \xB7 HeRoLab, UGA (2024\u2013present)"), /*#__PURE__*/React.createElement("p", null, "Software Engineer Intern \xB7 Samsung R&D (2023)"), /*#__PURE__*/React.createElement("p", null, "AI/ML Researcher \xB7 IIIT Naya Raipur (2021\u20132023)"))));
}
function ContactPage() {
  return /*#__PURE__*/React.createElement("section", {
    className: "contact",
    "data-screen-label": "Contact"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      marginBottom: 40
    }
  }, "Get in Touch"), /*#__PURE__*/React.createElement("div", {
    className: "contact-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "hero-bio"
  }, "I'm always interested in collaborations, research discussions, or just talking robots. Feel free to reach out."), /*#__PURE__*/React.createElement("div", {
    className: "contact-links",
    style: {
      marginTop: 30
    }
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Email:"), " ", /*#__PURE__*/React.createElement("a", {
    href: `mailto:${PROFILE.email}`
  }, PROFILE.email)), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "GitHub:"), " ", /*#__PURE__*/React.createElement("a", {
    href: PROFILE.github,
    target: "_blank",
    rel: "noopener noreferrer"
  }, PROFILE.github)), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Scholar:"), " ", /*#__PURE__*/React.createElement("a", {
    href: PROFILE.scholar,
    target: "_blank",
    rel: "noopener noreferrer"
  }, PROFILE.scholar)))), /*#__PURE__*/React.createElement("div", {
    className: "contact-globe"
  }, /*#__PURE__*/React.createElement(ThreeScene, {
    build: buildGlobeScene,
    style: {
      width: "100%",
      height: "100%",
      minHeight: 460
    }
  }), /*#__PURE__*/React.createElement("p", {
    className: "contact-globe-cap mono"
  }, "Places I've lived, studied & traveled \xB7 drag to spin")))));
}
function BlogList({
  openPost
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(HouseWorld, null), /*#__PURE__*/React.createElement("section", {
    className: "blog",
    "data-screen-label": "Blog"
  }, /*#__PURE__*/React.createElement("div", {
    className: "iw-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      marginBottom: 60
    }
  }, "Blog"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 30
    }
  }, BLOG_POSTS.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    className: "blog-card",
    onClick: () => openPost(p.id),
    style: {
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--ink-3)",
      marginBottom: 8
    }
  }, p.category, " \xB7 ", p.date, " \xB7 ", p.readTime), /*#__PURE__*/React.createElement("h3", null, p.title), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 12,
      marginBottom: 16
    }
  }, p.excerpt), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent)",
      fontWeight: 500
    }
  }, "Read \u2192"))))))));
}
function BlogReader({
  postId,
  back,
  openPost
}) {
  const post = BLOG_POSTS.find(p => p.id === postId);
  if (!post) {
    return /*#__PURE__*/React.createElement("div", {
      className: "container"
    }, /*#__PURE__*/React.createElement("a", {
      onClick: back,
      style: {
        cursor: "pointer",
        color: "var(--accent)"
      }
    }, "\u2190 Back"), /*#__PURE__*/React.createElement("p", null, "Post not found."));
  }
  return /*#__PURE__*/React.createElement("section", {
    className: "blog-reader",
    "data-screen-label": `Blog: ${post.title}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("a", {
    onClick: back,
    style: {
      cursor: "pointer",
      color: "var(--accent)",
      marginBottom: 40,
      display: "inline-block"
    }
  }, "\u2190 Back to blog"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--ink-3)",
      marginBottom: 12
    }
  }, post.category, " \xB7 ", post.date, " \xB7 ", post.readTime), /*#__PURE__*/React.createElement("h1", {
    style: {
      marginBottom: 40
    }
  }, post.title), /*#__PURE__*/React.createElement("article", {
    style: {
      maxWidth: 600,
      lineHeight: 1.8
    }
  }, post.body.map(([tag, content], i) => {
    if (tag === "p") return /*#__PURE__*/React.createElement("p", {
      key: i,
      style: {
        marginBottom: 20
      }
    }, content);
    if (tag === "h2") return /*#__PURE__*/React.createElement("h2", {
      key: i,
      style: {
        marginTop: 40,
        marginBottom: 20
      }
    }, content);
    if (tag === "h3") return /*#__PURE__*/React.createElement("h3", {
      key: i,
      style: {
        marginTop: 30,
        marginBottom: 15
      }
    }, content);
    if (tag === "blockquote") return /*#__PURE__*/React.createElement("blockquote", {
      key: i,
      style: {
        borderLeft: "3px solid var(--accent)",
        paddingLeft: 20,
        marginLeft: 0,
        marginBottom: 20,
        fontStyle: "italic"
      }
    }, content);
    return /*#__PURE__*/React.createElement("p", {
      key: i
    }, content);
  }))));
}

// ===== Nav & Footer =====
function Nav({
  page,
  go,
  blogPostOpen
}) {
  const [open, setOpen] = React.useState(false);
  const items = [{
    id: "home",
    label: "Home"
  }, {
    id: "research",
    label: "Research"
  }, {
    id: "publications",
    label: "Publications"
  }, {
    id: "blog",
    label: "Blog"
  }, {
    id: "updates",
    label: "Updates"
  }, {
    id: "cv",
    label: "CV"
  }, {
    id: "contact",
    label: "Contact"
  }];
  const activeId = blogPostOpen ? "blog" : page;
  return /*#__PURE__*/React.createElement("nav", {
    className: "nav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container nav-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav-brand",
    onClick: () => go("home")
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), /*#__PURE__*/React.createElement("span", null, "Sai Krishna Ghanta")), /*#__PURE__*/React.createElement("div", {
    className: `nav-links ${open ? "open" : ""}`
  }, items.map(it => /*#__PURE__*/React.createElement("span", {
    key: it.id,
    className: `nav-link ${activeId === it.id ? "active" : ""}`,
    onClick: () => {
      go(it.id);
      setOpen(false);
    }
  }, it.label))), /*#__PURE__*/React.createElement("button", {
    className: "menu-btn",
    onClick: () => setOpen(o => !o),
    "aria-label": "menu"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    style: {
      width: 22,
      height: 22
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: open ? "M6 6l12 12M6 18L18 6" : "M4 6h16M4 12h16M4 18h16"
  })))));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, "\xA9 2026 Sai Krishna Ghanta \xB7 Athens, GA"), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 11,
      letterSpacing: "0.06em"
    }
  }, "Built with care \xB7 Last updated ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink-2)"
    }
  }, "June 2026"))));
}

// ===== App =====
function App() {
  const initial = typeof window !== "undefined" && window.location.hash || "";
  const parseHash = h => {
    h = (h || "").replace(/^#\/?/, "");
    if (!h) return {
      page: "home",
      post: null
    };
    if (h.startsWith("blog/")) return {
      page: "blog",
      post: h.slice(5)
    };
    return {
      page: h,
      post: null
    };
  };
  const [route, setRoute] = React.useState(parseHash(initial));
  React.useEffect(() => {
    const onHash = () => setRoute(parseHash(window.location.hash));
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant"
    });
  }, [route.page, route.post]);
  const go = page => {
    window.location.hash = page === "home" ? "" : `#/${page}`;
  };
  const openPost = id => {
    window.location.hash = `#/blog/${id}`;
  };
  const backToBlog = () => {
    window.location.hash = "#/blog";
  };
  let content;
  if (route.page === "home") content = /*#__PURE__*/React.createElement(HomePage, {
    go: go
  });else if (route.page === "research") content = /*#__PURE__*/React.createElement(ResearchPage, null);else if (route.page === "publications") content = /*#__PURE__*/React.createElement(PublicationsPage, null);else if (route.page === "updates") content = /*#__PURE__*/React.createElement(UpdatesPage, null);else if (route.page === "cv" || route.page === "resume") content = /*#__PURE__*/React.createElement(CVPage, null);else if (route.page === "contact") content = /*#__PURE__*/React.createElement(ContactPage, null);else if (route.page === "blog") {
    content = route.post ? /*#__PURE__*/React.createElement(BlogReader, {
      postId: route.post,
      back: backToBlog,
      openPost: openPost
    }) : /*#__PURE__*/React.createElement(BlogList, {
      openPost: openPost
    });
  } else {
    content = /*#__PURE__*/React.createElement(HomePage, {
      go: go
    });
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Nav, {
    page: route.page,
    go: go,
    blogPostOpen: !!route.post
  }), /*#__PURE__*/React.createElement("main", null, content), /*#__PURE__*/React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));

