// AUTO-GENERATED BUNDLE — do not edit. Edit src/*.jsx then run ./build.sh

/* ===== src/data.jsx ===== */
// ===== Data =====

const PROFILE = {
  name: "Sai Krishna Ghanta",
  role: "Ph.D. Candidate, Artificial Intelligence",
  org: "University of Georgia · HeRoLab",
  advisor: "Dr. Ramviyas Parasuraman",
  location: "Athens, GA",
  email: "sai.krishna@uga.edu",
  scholar: "https://scholar.google.com/citations?user=lrK_Y8AAAAAJ&hl=en&oi=ao",
  github: "https://github.com/sai-krishna-ghanta",
  linkedin: "https://www.linkedin.com/in/sai-krishna-ghanta-320ab0211/",
  cv: "attached_assets/Resume.pdf"
};

// Hero gallery — just photos of me (Profile_Pic.png is the main/first). Both are 4:5-ish.
// No location/caption overlays — clean images.
const HOME_GALLERY = [{
  src: "attached_assets/Profile_Pic.png"
}, {
  src: "attached_assets/profile_picture.jpeg"
}];

// About-page trip gallery. Mixed aspect ratios are fine — the masonry keeps
// each image's natural shape (portrait, landscape, square all work).
// To add a photo: drop the file into attached_assets/ and add an entry here.
//   kind:  "academic" (conferences, labs, fieldwork) | "personal" (travel)
//   place: short location line   title: short caption   desc: optional sentence
// Images & video live in attached_assets/Gallery/ (web-safe filenames).
// A .mp4 src is detected automatically and shown as a playable clip.
// Order: newest first — the strip scrolls from recent to older.
const TRIP_GALLERY = [{
  src: "attached_assets/Gallery/herolab-thanksgiving-2025.jpeg",
  place: "HeRoLab",
  title: "Thanksgiving with the lab",
  when: "Nov 2025",
  desc: "Thanksgiving lunch with the lab."
}, {
  src: "attached_assets/Gallery/The Romance of the Song Dynasty - IROS 2025 Hangzhou.mp4",
  place: "Hangzhou, China",
  title: "The Romance of the Song Dynasty",
  when: "Oct 2025",
  desc: "A spectacular performance at the Song Dynasty park during IROS 2025."
}, {
  src: "attached_assets/Gallery/iros-2025-hangzhou.jpeg",
  place: "Hangzhou, China",
  title: "IROS 2025",
  when: "Oct 2025",
  desc: "At the IROS conference in Hangzhou."
}, {
  src: "attached_assets/Gallery/aimans-farewell-2025.jpeg",
  place: "HeRoLab",
  title: "Aiman's farewell",
  when: "Jul 2025",
  desc: "Sending off a labmate."
}, {
  src: "attached_assets/Gallery/icra-2025-atlanta.mp4",
  place: "Atlanta, GA",
  title: "ICRA 2025",
  when: "May 2025",
  desc: "My first time watching live demonstrations of all kinds of robots."
}, {
  src: "attached_assets/Gallery/nsf-supercollider-2024-lexington.jpeg",
  place: "Lexington, KY",
  title: "NSF EPSCoR SuperCollider",
  when: "Apr 2024",
  desc: "The NSF EPSCoR SuperCollider convening."
}, {
  src: "attached_assets/Gallery/aimslab-louisville-2023.jpeg",
  place: "Louisville, KY",
  title: "AIMSLab",
  when: "Jan 2024",
  desc: "A great learning stretch with Dr. Sabur at the University of Louisville."
}, {
  src: "attached_assets/Gallery/tencon-2023.png",
  title: "IEEE TENCON 2023",
  when: "Oct 2023",
  desc: "The IEEE Region 10 (TENCON) conference."
}, {
  src: "attached_assets/Gallery/iiitnr-aiml-club-2021.jpeg",
  place: "IIIT Naya Raipur",
  title: "Teaching AI/ML",
  when: "Sep 2021",
  desc: "Running hands-on AI/ML sessions as the AIML Club in-charge."
}
// —— Add more (newest at the top): drop the file in attached_assets/Gallery/ and add a line ——
// { src: "attached_assets/Gallery/manali.jpg", place: "Manali, India", title: "Road trip", when: "2024" },
];

// Home highlights — the same three directions as the Research page, each with a small 3D scene.
const INTERESTS = [{
  id: "embodied",
  scene: "embodied",
  title: "Robot Learning & Embodied Intelligence",
  desc: "Robots that reason about the world they live in."
}, {
  id: "multirobot",
  scene: "swarm",
  title: "Multi-Robot Systems",
  desc: "Many robots, one shared map — even when comms drop."
}, {
  id: "spatial",
  scene: "gp",
  title: "Spatial Intelligence",
  desc: "Learning a belief over space itself."
}];

// Research thrusts — colorful, resourceful, no "T#" index.
// accent / tint drive the per-thrust color theme; scene picks the inline 3D diorama.
const THRUSTS = [{
  id: "embodied",
  title: "Robot Learning & Embodied Intelligence",
  tagline: "Robots that reason about the world they live in",
  scene: "embodied",
  accent: "#2e8f5b",
  tint: "#eaf6ee",
  body: "I build reasoning frameworks that let robots understand invisible spatial phenomena — Wi-Fi field strength, humidity, scent — and act on them inside real homes and buildings. The goal is agents that reason in language about a physical environment, then plan and move through it.",
  keywords: ["Embodied AI", "LLM Planning", "Spatial Grounding", "VLM Reasoning"],
  stats: [{
    k: "Domains",
    v: "Homes · Warehouses"
  }, {
    k: "Modalities",
    v: "Vision · Language · RF"
  }],
  resources: [{
    label: "Embodied reasoning — blog",
    href: "#/blog/embodied-reasoning"
  }, {
    label: "Smart-home robotics — blog",
    href: "#/blog/smart-home-robots"
  }]
}, {
  id: "multirobot",
  title: "Multi-Robot Systems",
  tagline: "Many robots, one shared map — even when comms drop",
  scene: "swarm",
  accent: "#2f6df0",
  tint: "#e8f0ff",
  body: "SPACE is our framework for 3D spatial cooperation and exploration — it mitigates the ghosting-trail effect in fused reconstructions and stays robust to communication dropouts. MGPRL recovers relative poses from Wi-Fi RSSI in GPS-denied indoors, and 3DS-SLAM extends semantic SLAM with 3D object detection in dynamic scenes.",
  keywords: ["SPACE", "MGPRL", "3DS-SLAM", "Distributed Mapping"],
  stats: [{
    k: "Boundary artifacts",
    v: "−34%"
  }, {
    k: "Comms dropout",
    v: "robust to 90s"
  }],
  resources: [{
    label: "SPACE — arXiv:2411.02524",
    href: "https://arxiv.org/abs/2411.02524"
  }, {
    label: "3DS-SLAM — arXiv:2310.06385",
    href: "https://arxiv.org/abs/2310.06385"
  }]
}, {
  id: "spatial",
  title: "Spatial Intelligence",
  tagline: "Learning a belief over space itself",
  scene: "gp",
  accent: "#c9821f",
  tint: "#fbf1df",
  body: "Robots that learn a belief over space itself: Gaussian-process fields for Wi-Fi, humidity, and other invisible signals, floating above the real world they describe. MGPRL uses these uncertainty-aware fields for multi-robot relative localization where GPS can't reach.",
  keywords: ["Gaussian Processes", "MGPRL", "Wi-Fi RSSI", "Uncertainty"],
  stats: [{
    k: "Signal",
    v: "Wi-Fi RSSI"
  }, {
    k: "Estimate",
    v: "Uncertainty-aware"
  }],
  resources: [{
    label: "Invisible fields — blog",
    href: "#/blog/gp-fields"
  }, {
    label: "MGPRL — IEEE IROS 2025",
    href: PROFILE.scholar
  }]
}];

// Each paper carries a thumbnail, a one-line overview, and a links object.
// Only links that exist are rendered — add paper / preprint / github / video / blog as available.
const PUBLICATIONS = [{
  year: 2025,
  kind: "conference",
  featured: true,
  title: "SPACE: 3D Spatial Co-operation and Exploration Framework for Robust Mapping and Coverage with Multi-Robot Systems",
  authors: ["Sai Krishna Ghanta*", "Ramviyas Parasuraman"],
  venue: "arXiv:2411.02524 — submitted to IEEE IROS 2025",
  image: "attached_assets/Multi_Robot_Systems.png",
  overview: "A 3D spatial cooperation and exploration framework that mitigates the ghosting-trail effect in fused multi-robot reconstructions and stays robust to communication dropouts — cutting boundary artifacts by 34% in a GPS-denied warehouse.",
  links: {
    preprint: "https://arxiv.org/abs/2411.02524",
    github: "https://github.com/herolab-uga",
    blog: "#/blog/slam-odyssey"
  }
}, {
  year: 2025,
  kind: "conference",
  featured: true,
  title: "MGPRL: Distributed Multi-Gaussian Processes for Wi-Fi-based Multi-Robot Relative Localization in Large Indoor Environments",
  authors: ["Sai Krishna Ghanta*", "Ramviyas Parasuraman"],
  venue: "submitted to IEEE IROS 2025",
  image: "attached_assets/Machine_Learning.png",
  overview: "Distributed multi-Gaussian-process fields recover relative poses from Wi-Fi RSSI where GPS can't reach, giving uncertainty-aware localization across large indoor multi-robot teams.",
  links: {
    blog: "#/blog/gp-fields",
    scholar: "https://scholar.google.com/citations?user=lrK_Y8AAAAAJ&hl=en&oi=ao"
  }
}, {
  year: 2025,
  kind: "submitted",
  title: "Thermographic Fault Diagnosis: An eXplainable Compact Vision in Transformer Approach for Electrical Machines",
  authors: ["Sai Krishna Ghanta", "Anmol Agarwal", "Aparna Sinha", "Debanjan Das"],
  venue: "submitted to IEEE Sensors Journal",
  image: "attached_assets/Machine_Learning.png",
  overview: "A compact, explainable vision-transformer that diagnoses electrical-machine faults directly from thermographic images — accurate yet light enough for edge deployment.",
  links: {}
}, {
  year: 2023,
  kind: "conference",
  title: "3DS-SLAM: A 3D Object Detection-based Semantic SLAM towards Dynamic Indoor Environments",
  authors: ["Sai Krishna Ghanta*", "Kundrapu Supriya", "Sabur Baidya"],
  venue: "arXiv:2310.06385",
  image: "attached_assets/Computer_Vision.png",
  overview: "Semantic SLAM that tracks 3D-detected objects instead of discarding them as noise, reducing drift by 26% and improving loop closure in crowded, dynamic indoor scenes.",
  links: {
    preprint: "https://arxiv.org/abs/2310.06385",
    github: "https://github.com/sai-krishna-ghanta",
    blog: "#/blog/vision-3d"
  }
}, {
  year: 2023,
  kind: "conference",
  title: "Adversarial Security and Differential Privacy in mmWave Beam Prediction in 6G Networks",
  authors: ["Sai Krishna Ghanta", "Kundrapu Supriya", "Sabur Baidya"],
  venue: "IEEE CSNet 2023",
  image: "attached_assets/Robot_Learning.png",
  overview: "Studies adversarial robustness and differential privacy for deep mmWave beam prediction, hardening 6G physical-layer models against poisoning and leakage.",
  links: {
    paper: "https://ieeexplore.ieee.org/"
  }
}, {
  year: 2023,
  kind: "journal",
  title: "Speaker-Independent Visual Speech Recognition: A Systematic Review and Futuristic Applications",
  authors: ["P. Nemani", "Sai Krishna Ghanta", "K. Supriya", "Santosh Kumar"],
  venue: "Elsevier — Image and Vision Computing, vol. 123",
  image: "attached_assets/Computer_Vision.png",
  overview: "A systematic review of speaker-independent lip-reading, surveying datasets, architectures, and open problems, with a roadmap for real-world applications.",
  links: {
    paper: "https://doi.org/10.1016/j.imavis.2022.104477"
  }
}, {
  year: 2023,
  kind: "journal",
  title: "Data Preprocessing Techniques: Emergence and Selection Towards Machine Learning Models — A Practical Review Using the HPA Dataset",
  authors: ["K. Mallikharjuna Rao", "Sai Krishna Ghanta", "Kundrapu Supriya"],
  venue: "Multimedia Tools and Applications, 2023",
  image: "attached_assets/Machine_Learning.png",
  overview: "A practical guide to choosing preprocessing pipelines, benchmarked on the Human Protein Atlas dataset to show how preprocessing choices move model performance.",
  links: {
    paper: "https://link.springer.com/"
  }
}, {
  year: 2022,
  kind: "journal",
  title: "Deep Learning-based Holistic Speaker-Independent Visual Speech Recognition",
  authors: ["P. Nemani", "Sai Krishna Ghanta", "N. Ramisetty", "B. D. S. Sai", "S. Kumar"],
  venue: "IEEE Transactions on Artificial Intelligence, 2022",
  image: "attached_assets/Computer_Vision.png",
  overview: "A holistic deep model for speaker-independent visual speech recognition that generalizes across speakers without per-speaker tuning.",
  links: {
    paper: "https://ieeexplore.ieee.org/"
  }
}];

// Groups for the segregated Publications view (order matters).
const PUB_GROUPS = [{
  kind: "conference",
  label: "Conference Papers"
}, {
  kind: "journal",
  label: "Journal Articles"
}, {
  kind: "submitted",
  label: "Under Review"
}];
const BLOG_POSTS = [{
  id: "smart-home-robots",
  title: "A Day in a Robot Home: What Embodied Intelligence Looks Like",
  category: "Embodied AI",
  date: "Jun 2024",
  readTime: "7 min",
  excerpt: "Vacuums, quadrupeds, drones and humanoids sharing one home. A field note on grounding language plans in a lived-in space.",
  cover: "home",
  body: [["p", "Picture an ordinary apartment: a rover sweeping the living room, a quadruped patrolling the hallway, a drone dusting the shelves, a humanoid prepping the kitchen counter. None of them are impressive on their own. Together, in one space, they are a small model of embodied intelligence."], ["h2", "Why the home is the hard problem"], ["p", "A home is cluttered, dynamic, and full of intent. Furniture moves, people cross paths, and a plan written in language — 'tidy the living room' — has to survive contact with a physical, changing world. That is exactly the setting where robot learning stops being a benchmark and starts being a behavior."], ["p", "We use the home scene as a sandbox for grounding: every object the robots reason about has a place, a cost to reach, and a consequence if you bump it. The language plan is only as good as the spatial grounding underneath it."], ["h2", "From chores to capabilities"], ["p", "Each chore exercises a different capability — coverage, patrolling, manipulation, aerial inspection. Stitching them into one coherent home is what moves us from 'a robot that can' to 'robots that live here.'"]]
}, {
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
  excerpt: "We probed frontier LLMs with spatial reasoning tasks. The results are surprising.",
  cover: "llm",
  body: [["p", "An LLM trained on human text has never felt gravity, never brushed against a wall, never gripped an object. Can it reason about physics at all?"], ["h2", "The Experiment"], ["p", "We created 150 spatial reasoning tasks (e.g., 'A box slides off a table. Where will it land?') and tested state-of-the-art LLMs. Average accuracy: 64%. Humans: 96%."], ["h2", "What This Means"], ["p", "LLMs are useful for high-level planning and communication, but they need grounding. Embodied feedback from robots closes the gap."]]
}];

// Milestones — grouped by year in the UI; tag drives the color pill.
const UPDATES = [{
  date: "Dec 2025",
  year: 2025,
  tag: "Paper",
  text: "SPACE framework submitted to IROS 2025. Excited to see it in the community."
}, {
  date: "Nov 2025",
  year: 2025,
  tag: "Collab",
  text: "Started collaborating with TU Delft on distributed Bayesian optimization for multi-robot exploration."
}, {
  date: "Oct 2025",
  year: 2025,
  tag: "Talk",
  text: "Gave a talk on embodied reasoning at the NeurIPS 2025 workshop on Embodied AI. Great discussions."
}, {
  date: "Sep 2025",
  year: 2025,
  tag: "Field Work",
  text: "Completed field trials of MGPRL in the HeRoLab warehouse. Four quadrupeds, GPS-denied, 10 hours of autonomous operation."
}, {
  date: "Jul 2025",
  year: 2025,
  tag: "Paper",
  text: "MGPRL submitted to IROS 2025 — Wi-Fi-based relative localization for large indoor teams."
}, {
  date: "Aug 2024",
  year: 2024,
  tag: "Milestone",
  text: "Started PhD at UGA under Dr. Ramviyas Parasuraman. Building robots that think."
}, {
  date: "Jun 2024",
  year: 2024,
  tag: "Milestone",
  text: "Graduated from IIIT Naya Raipur with a B.Tech in Computer Science & Engineering."
}, {
  date: "Mar 2024",
  year: 2024,
  tag: "Award",
  text: "Recognized for undergraduate research in semantic SLAM and explainable vision."
}, {
  date: "Oct 2023",
  year: 2023,
  tag: "Paper",
  text: "3DS-SLAM released on arXiv — semantic SLAM for dynamic indoor environments."
}, {
  date: "May 2023",
  year: 2023,
  tag: "Internship",
  text: "Joined Samsung R&D as a Software Engineer Intern, working on on-device ML."
}, {
  date: "Feb 2023",
  year: 2023,
  tag: "Paper",
  text: "Adversarial security & differential privacy for mmWave beam prediction accepted at IEEE CSNet 2023."
}, {
  date: "2022",
  year: 2022,
  tag: "Paper",
  text: "Holistic visual speech recognition published in IEEE Transactions on Artificial Intelligence."
}];

// A short, original line to keep me pointed at the goal — shown at the end of Milestones.
const CREDO = {
  quote: "Curiosity got me here; discipline is what turns it into science. Keep measuring, keep doubting, keep building — the scientist is made on the ordinary days.",
  by: "— Sai, note to self"
};
Object.assign(window, {
  PROFILE,
  HOME_GALLERY,
  TRIP_GALLERY,
  INTERESTS,
  THRUSTS,
  PUBLICATIONS,
  PUB_GROUPS,
  BLOG_POSTS,
  UPDATES,
  CREDO
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
function addPathLine(parent, rx, rz, cx, cz, color = 0x2e8f5b, opacity = 0.2) {
  const points = [];
  const segments = 64;
  for (let i = 0; i <= segments; i++) {
    const theta = i / segments * Math.PI * 2;
    points.push(new THREE.Vector3(cx + Math.sin(theta) * rx, 0.01, cz + Math.cos(theta) * rz));
  }
  const geo = new THREE.BufferGeometry().setFromPoints(points);
  const mat = new THREE.LineBasicMaterial({
    color,
    transparent: true,
    opacity
  });
  const line = new THREE.Line(geo, mat);
  parent.add(line);
  return line;
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
  const visorMat = rMat(RB.visor, {
    emissive: 0x3fc88f,
    emissiveIntensity: 0.8
  });
  const head = rBox(g, mP, 0.2, 0.16, 0.26, 0.56, 0.66, 0);
  rBox(head, visorMat, 0.03, 0.06, 0.16, 0.11, 0, 0);
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
      visorMat.emissiveIntensity = 0.5 + Math.sin(t * 5) * 0.35;
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
  const visorMat = rMat(RB.visor, {
    emissive: 0x3fc88f,
    emissiveIntensity: 0.9,
    roughness: 0.2
  });
  rSph(g, visorMat, 0.07, 0, -0.1, 0.16);
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
      visorMat.emissiveIntensity = 0.6 + Math.sin(t * 6) * 0.35;
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
function dioramaScene(kind, zoom = 1) {
  return ctx => {
    const {
      scene,
      camera
    } = ctx;
    addRobotLights(scene);
    const stage = new THREE.Group();
    scene.add(stage);
    let update = () => {};
    if (kind === "embodied") {
      // open dollhouse room — robots living and working in a real home
      const home = new THREE.Group();
      stage.add(home);
      const mFloor = rMat(0xece2d0, {
        roughness: 0.95
      });
      const mRug = rMat(0xcfe3cf, {
        roughness: 1
      });
      const mWall = rMat(0xf5f5f1, {
        roughness: 0.95
      });
      const mWood = rMat(0xb08a5e, {
        roughness: 0.85
      });
      const mSofa = rMat(RB.grass, {
        roughness: 1
      });
      const mPot = rMat(0xc96f4a, {
        roughness: 0.9
      });
      rBox(home, mFloor, 6, 0.18, 5, 0, -0.09, 0);
      const rug = new THREE.Mesh(new THREE.CylinderGeometry(1.05, 1.05, 0.03, 24), mRug);
      rug.position.set(-1.0, 0.02, 0.7);
      home.add(rug);
      // two open walls (back and left are solid, front and right are open)
      rBox(home, mWall, 6, 0.95, 0.12, 0, 0.47, -2.44);
      rBox(home, mWall, 0.12, 0.95, 5, -2.94, 0.47, 0);

      // kitchen counter + fridge
      rBox(home, mWood, 1.7, 0.5, 0.5, -1.7, 0.25, -2.0);
      rBox(home, mWall, 0.5, 0.8, 0.45, -0.5, 0.4, -2.05);

      // sofa + coffee table
      const sofa = new THREE.Group();
      sofa.position.set(1.7, 0, 0.4);
      sofa.rotation.y = -Math.PI / 2;
      rBox(sofa, mSofa, 1.5, 0.34, 0.6, 0, 0.18, 0);
      rBox(sofa, mSofa, 1.5, 0.4, 0.18, 0, 0.5, -0.22);
      home.add(sofa);
      rBox(home, mWood, 0.7, 0.22, 0.4, 0.7, 0.12, 0.5);

      // plants
      const plantPositions = [new THREE.Vector3(-2.4, 1.4, -1.9),
      // Plant 1
      new THREE.Vector3(2.3, 1.3, -2.0),
      // Plant 2
      new THREE.Vector3(-2.4, 1.4, 1.9) // Plant 3
      ];
      const addPlant = (pos, s = 1) => {
        const p = new THREE.Group();
        rCyl(p, mPot, 0.13, 0.1, 0.2, 0, 0.1, 0, 8);
        const l1 = new THREE.Mesh(new THREE.ConeGeometry(0.2, 0.46, 7), rMat(RB.grass2));
        l1.position.y = 0.42;
        p.add(l1);
        const l2 = new THREE.Mesh(new THREE.ConeGeometry(0.13, 0.32, 7), rMat(RB.grass));
        l2.position.set(0.07, 0.56, 0.04);
        p.add(l2);
        p.position.copy(pos);
        p.position.y = 0; // base on floor
        p.scale.setScalar(s);
        home.add(p);
      };
      addPlant(plantPositions[0], 1.0);
      addPlant(plantPositions[1], 0.85);
      addPlant(plantPositions[2], 0.9);

      // UGV Charging Dock Station
      const dock = new THREE.Group();
      dock.position.set(2.5, 0.05, -2.0);
      const mDock = rMat(0x2d3748, {
        roughness: 0.2
      });
      rBox(dock, mDock, 0.3, 0.1, 0.3, 0, 0, 0);
      rBox(dock, rMat(0xe2e8f0), 0.2, 0.15, 0.05, 0, 0.08, -0.12);
      home.add(dock);

      // robots doing chores
      const vac = buildRoverModel();
      vac.group.scale.setScalar(0.42);
      home.add(vac.group);

      // Humanoid chef in cook (chopping) mode
      const chef = buildHumanoidModel("cook");
      chef.group.scale.setScalar(0.5);
      chef.group.position.set(-1.7, 0, -1.45);
      chef.group.rotation.y = Math.PI;
      home.add(chef.group);

      // Drone duster with scanning spotlight cone
      const duster = buildDroneModel();
      duster.group.scale.setScalar(0.42);
      home.add(duster.group);
      const dScannerMat = new THREE.MeshBasicMaterial({
        color: 0x3fc88f,
        transparent: true,
        opacity: 0.0,
        side: THREE.DoubleSide
      });
      const dScanner = new THREE.Mesh(new THREE.ConeGeometry(0.35, 0.9, 16), dScannerMat);
      dScanner.rotation.x = Math.PI; // point down
      dScanner.position.y = -0.45;
      duster.group.add(dScanner);
      const patrol = buildQuadrupedModel();
      patrol.group.scale.setScalar(0.4);
      home.add(patrol.group);

      // Systematic zigzag waypoints for vacuum cleaner avoiding sofa
      const vacWaypoints = [new THREE.Vector3(2.5, 0, -2.0),
      // Dock
      new THREE.Vector3(0.8, 0, -1.2),
      // Sweep starts
      new THREE.Vector3(-2.2, 0, -1.2), new THREE.Vector3(-2.2, 0, -0.5), new THREE.Vector3(0.8, 0, -0.5), new THREE.Vector3(0.8, 0, 0.2), new THREE.Vector3(-2.2, 0, 0.2), new THREE.Vector3(-2.2, 0, 0.9), new THREE.Vector3(0.8, 0, 0.9), new THREE.Vector3(0.8, 0, 1.6), new THREE.Vector3(-2.2, 0, 1.6), new THREE.Vector3(2.5, 0, -2.0) // Back to dock
      ];

      // Draw patrol path line loop
      const waypoints = [new THREE.Vector3(2.2, 0, 1.7), new THREE.Vector3(2.2, 0, -1.4), new THREE.Vector3(0.4, 0, -1.4), new THREE.Vector3(0.4, 0, 1.7), new THREE.Vector3(2.2, 0, 1.7)];
      const patrolPathGeo = new THREE.BufferGeometry().setFromPoints(waypoints);
      const patrolPathLine = new THREE.Line(patrolPathGeo, new THREE.LineBasicMaterial({
        color: 0x2e8f5b,
        transparent: true,
        opacity: 0.15
      }));
      home.add(patrolPathLine);
      update = t => {
        // 1. UGV systematic sweeping path
        const vTotal = vacWaypoints.length;
        const vProg = t * 0.12 % vTotal;
        const v0 = Math.floor(vProg),
          v1 = (v0 + 1) % vTotal,
          vf = vProg - v0;
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
        let activePlantIdx = tc < 8 ? 0 : tc < 16 ? 1 : 2;
        const lookTarget = plantPositions[activePlantIdx];
        const dirToPlant = lookTarget.clone().sub(duster.group.position);
        duster.group.rotation.y = Math.atan2(dirToPlant.x, dirToPlant.z);
        dScannerMat.opacity = isInspecting ? 0.3 + Math.sin(t * 6) * 0.12 : 0.0;

        // 4. Quadruped patroller
        patrol.update(t);
        const total = 4;
        const prog = t * 0.18 % total;
        const i0 = Math.floor(prog),
          i1 = i0 + 1,
          f = prog - i0;
        patrol.group.position.lerpVectors(waypoints[i0], waypoints[i1], f);
        const dir = waypoints[i1].clone().sub(waypoints[i0]);
        patrol.group.rotation.y = Math.atan2(dir.x, dir.z) - Math.PI / 2;

        // 5. Cinematic panning camera (orbits within open front-right sector)
        const camRadius = zoom < 1 ? 14.5 : 10.5;
        const angle = Math.PI / 4 + Math.sin(t * 0.08) * 0.5 + ctx.mouse.x * 0.4;
        camera.position.set(Math.sin(angle) * camRadius, (zoom < 1 ? 9.5 : 7.0) + ctx.mouse.y * 1.5, Math.cos(angle) * camRadius);
        camera.lookAt(0, zoom < 1 ? -0.8 : -0.2, 0);
      };
    }
    if (kind === "swarm") {
      // Search & Rescue themed diorama with cinematic camera orbit
      addMeadow(stage, 4.2);

      // Add more trees & rocks
      addTree(stage, -2.6, -1.8, 0.95);
      addTree(stage, 2.8, 2.0, 0.85);
      addTree(stage, -1.2, 2.8, 0.7);
      addTree(stage, 3.0, -1.4, 0.65);
      const r1 = new THREE.Mesh(new THREE.DodecahedronGeometry(0.15, 0), rMat(RB.rock));
      r1.position.set(-2.0, 0.07, 1.8);
      r1.scale.set(1.2, 0.8, 1.4);
      stage.add(r1);
      const r2 = new THREE.Mesh(new THREE.DodecahedronGeometry(0.12, 0), rMat(RB.rock));
      r2.position.set(2.2, 0.06, -1.6);
      r2.scale.set(1, 0.6, 1.2);
      stage.add(r2);

      // Search & Rescue collapsed concrete wall / ruins
      const ruins = new THREE.Group();
      ruins.position.set(2.0, 0, -2.0);
      stage.add(ruins);
      const mDebris = rMat(0x6b7280, {
        roughness: 0.9
      });
      const mDebris2 = rMat(0x4b5563, {
        roughness: 0.95
      });
      const b1 = rBox(ruins, mDebris, 0.4, 0.8, 0.4, -0.2, 0.4, 0.1);
      b1.rotation.set(0.2, 0.1, -0.4);
      const b2 = rBox(ruins, mDebris2, 0.35, 0.6, 0.35, 0.2, 0.3, -0.2);
      b2.rotation.set(-0.5, 0.3, 0.2);
      const b3 = rBox(ruins, mDebris, 0.5, 0.2, 0.8, 0, 0.1, 0.3);
      b3.rotation.set(0.1, -0.6, 0.4);

      // Pulsing rescue target beacon
      const beaconGeo = new THREE.SphereGeometry(0.12, 16, 16);
      const beaconMat = new THREE.MeshBasicMaterial({
        color: 0xff3b30,
        transparent: true,
        opacity: 0.9
      });
      const beacon = new THREE.Mesh(beaconGeo, beaconMat);
      beacon.position.set(0, 0.5, 0);
      ruins.add(beacon);

      // Low-poly animated fire clusters around ruins (no humans)
      const fireGroup = new THREE.Group();
      fireGroup.position.set(2.0, 0, -2.0);
      stage.add(fireGroup);
      const mFlame = rMat(0xff7700, {
        emissive: 0xff3300,
        emissiveIntensity: 1.2,
        roughness: 0.1
      });
      const mFlameInner = rMat(0xffcc00, {
        emissive: 0xffaa00,
        emissiveIntensity: 1.5,
        roughness: 0.1
      });
      const flames = [];
      const makeFlame = (x, z, s) => {
        const f = new THREE.Group();
        f.position.set(x, 0.05, z);
        f.scale.setScalar(s);
        // Outer orange flame cone
        const outCone = new THREE.Mesh(new THREE.ConeGeometry(0.16, 0.44, 5), mFlame);
        outCone.position.y = 0.22;
        f.add(outCone);
        // Inner yellow core cone
        const inCone = new THREE.Mesh(new THREE.ConeGeometry(0.09, 0.26, 5), mFlameInner);
        inCone.position.y = 0.13;
        f.add(inCone);
        fireGroup.add(f);
        flames.push({
          group: f,
          outCone,
          inCone,
          baseScale: s,
          seed: Math.random() * 10
        });
      };
      // Spawn fire spots around ruins
      makeFlame(-0.3, 0.4, 1.2);
      makeFlame(0.4, 0.2, 0.85);
      makeFlame(0.1, -0.3, 1.05);

      // flickering fire pointlight
      const fireLight = new THREE.PointLight(0xff5500, 1.8, 5.0);
      fireLight.position.set(2.0, 0.5, -2.0);
      stage.add(fireLight);
      const q1 = buildQuadrupedModel();
      q1.group.scale.setScalar(0.85);
      stage.add(q1.group);
      const q2 = buildQuadrupedModel();
      q2.group.scale.setScalar(0.85);
      stage.add(q2.group);
      const d = buildDroneModel();
      d.group.scale.setScalar(0.8);
      stage.add(d.group);

      // Trajectory paths for quadrupeds
      addPathLine(stage, 1.8, 1.2, 0, 0.2, 0x2f6df0, 0.15); // blue path
      addPathLine(stage, 1.4, 0.9, 0, -0.4, 0x2f6df0, 0.15);

      // shared map: point cloud growing over a wider area
      const MN = 300;
      const mapPos = new Float32Array(MN * 3);
      for (let i = 0; i < MN; i++) {
        const a = Math.random() * Math.PI * 2,
          r = Math.random() * 2.8;
        mapPos[i * 3] = Math.cos(a) * r;
        mapPos[i * 3 + 1] = 0.02 + Math.random() * 0.04;
        mapPos[i * 3 + 2] = Math.sin(a) * r;
      }
      const mapGeo = new THREE.BufferGeometry();
      mapGeo.setAttribute("position", new THREE.BufferAttribute(mapPos, 3));
      const mapPts = new THREE.Points(mapGeo, new THREE.PointsMaterial({
        color: 0x2f6df0,
        size: 0.035,
        transparent: true,
        opacity: 0.0
      }));
      stage.add(mapPts);
      const rings = [q1.group, q2.group].map(() => {
        const r = new THREE.Mesh(new THREE.RingGeometry(0.3, 0.32, 32), new THREE.MeshBasicMaterial({
          color: 0x2f6df0,
          transparent: true,
          opacity: 0.5,
          side: THREE.DoubleSide
        }));
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
      update = t => {
        // Pulse beacon
        beacon.material.opacity = 0.5 + Math.sin(t * 8) * 0.4;
        beacon.scale.setScalar(0.9 + Math.sin(t * 8) * 0.25);

        // Flicker fires
        flames.forEach(f => {
          const wave = Math.sin(t * 14.0 + f.seed);
          const cosWave = Math.cos(t * 12.0 + f.seed);
          f.group.scale.set(f.baseScale * (0.9 + wave * 0.15), f.baseScale * (1.0 + cosWave * 0.25), f.baseScale * (0.9 + wave * 0.15));
          f.outCone.rotation.y = t * 3.0 + f.seed;
          f.inCone.rotation.y = -t * 5.0 + f.seed;
        });

        // Flicker fire pointlight
        fireLight.intensity = 1.4 + Math.sin(t * 16.0) * 0.5;

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
        const pb = new THREE.Vector3(2.0, 0.5, -2.0); // beacon world position

        const linePoints = new Float32Array([p1.x, p1.y + 0.5, p1.z, p2.x, p2.y + 0.5, p2.z,
        // q1 to q2
        p1.x, p1.y + 0.5, p1.z, pd.x, pd.y, pd.z,
        // q1 to drone
        p2.x, p2.y + 0.5, p2.z, pd.x, pd.y, pd.z,
        // q2 to drone
        p1.x, p1.y + 0.5, p1.z, pb.x, pb.y, pb.z,
        // q1 to beacon
        p2.x, p2.y + 0.5, p2.z, pb.x, pb.y, pb.z,
        // q2 to beacon
        pd.x, pd.y, pd.z, pb.x, pb.y, pb.z // drone to beacon
        ]);
        commLineGeo.setAttribute("position", new THREE.BufferAttribute(linePoints, 3));
        commLineGeo.attributes.position.needsUpdate = true;

        // Cinematic moving camera (orbits stage)
        const camRadius = zoom < 1 ? 13.5 : 9.5;
        const angle = t * 0.08 + ctx.mouse.x * 0.45;
        camera.position.set(Math.sin(angle) * camRadius, (zoom < 1 ? 8.0 : 5.5) + ctx.mouse.y * 1.5, Math.cos(angle) * camRadius);
        camera.lookAt(0, zoom < 1 ? 0.2 : 0.4, 0);
      };
    }
    if (kind === "gp") {
      // Environmental Monitoring themed diorama with cinematic camera orbit
      addMeadow(stage, 4.2);

      // Add winding river
      const mRiver = rMat(0x3498db, {
        roughness: 0.2,
        metalness: 0.8
      });
      const river = rBox(stage, mRiver, 8.4, 0.02, 1.2, 0, 0.015, 0);
      river.rotation.y = Math.PI / 4;

      // Current streaks (flowing water effect)
      const mFoam = rMat(0xffffff, {
        roughness: 1,
        transparent: true,
        opacity: 0.65
      });
      const current1 = rBox(river, mFoam, 0.8, 0.005, 0.03, -3.0, 0.012, -0.2);
      const current2 = rBox(river, mFoam, 1.2, 0.005, 0.02, 0.0, 0.012, 0.3);
      const current3 = rBox(river, mFoam, 0.6, 0.005, 0.02, 2.5, 0.012, -0.4);

      // Add rocks along river banks
      const addRiverRock = (x, z, s = 1) => {
        const r = new THREE.Mesh(new THREE.DodecahedronGeometry(0.12, 0), rMat(RB.rock, {
          roughness: 0.9
        }));
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
      const mMetal = rMat(0x7f8c8d, {
        metalness: 0.8,
        roughness: 0.2
      });
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
      const rover = buildRoverModel();
      rover.group.scale.setScalar(0.8);
      stage.add(rover.group);

      // Draw rover trajectory path on ground
      addPathLine(stage, 2.0, 2.0, 0, 0, 0xc59f3f, 0.15);

      // Floating GP surface (expanded to cover the wider scene)
      const sGeo = new THREE.PlaneGeometry(5.2, 5.2, 26, 26);
      sGeo.rotateX(-Math.PI / 2);
      const surf = new THREE.Mesh(sGeo, new THREE.MeshBasicMaterial({
        color: 0x2e8f5b,
        wireframe: true,
        transparent: true,
        opacity: 0.45
      }));
      surf.position.y = 1.8;
      stage.add(surf);
      const base = sGeo.attributes.position.array.slice();

      // measurement pillars spread across the wider environment
      const samples = [];
      for (let i = 0; i < 12; i++) {
        const x = -2.2 + Math.random() * 4.4,
          z = -2.2 + Math.random() * 4.4;
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

      // Gold-colored scanning cone under drone
      const gpScannerMat = new THREE.MeshBasicMaterial({
        color: 0xc59f3f,
        transparent: true,
        opacity: 0.15,
        side: THREE.DoubleSide
      });
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
      update = t => {
        // Spin anemometer on tower
        animHead.rotation.y = t * 4.0;

        // Flow river currents
        current1.position.x = -4.2 + (t * 0.6 + 0) % 8.4;
        current2.position.x = -4.2 + (t * 0.8 + 3) % 8.4;
        current3.position.x = -4.2 + (t * 0.7 + 6) % 8.4;

        // Pulse drone scanning cone opacity
        gpScannerMat.opacity = 0.12 + Math.sin(t * 4) * 0.04;
        const p = sGeo.attributes.position;
        for (let i = 0; i < p.count; i++) {
          const x = base[i * 3],
            z = base[i * 3 + 2];
          p.array[i * 3 + 1] = Math.sin(x * 1.4 + t) * 0.24 + Math.cos(z * 1.6 + t * 0.6) * 0.18;
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
        const laserPoints = new Float32Array([px, 0.25, pz, px, ry, pz, dx, dy - 0.05, dz, dx, dSurfY, dz]);
        laserGeo.setAttribute("position", new THREE.BufferAttribute(laserPoints, 3));
        laserGeo.attributes.position.needsUpdate = true;

        // Cinematic moving camera (orbits stage)
        const camRadius = zoom < 1 ? 13.5 : 9.5;
        const angle = t * 0.08 + ctx.mouse.x * 0.45;
        camera.position.set(Math.sin(angle) * camRadius, (zoom < 1 ? 8.0 : 5.5) + ctx.mouse.y * 1.5, Math.cos(angle) * camRadius);
        camera.lookAt(0, zoom < 1 ? 0.2 : 0.4, 0);
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
    let cleanup = null;
    try {
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

      // ---- Clouds ----
      const cloudGeo = track(new THREE.SphereGeometry(1, 7, 7));
      const cloudMat = track(new THREE.MeshStandardMaterial({
        color: 0xffffff,
        flatShading: true,
        roughness: 1,
        transparent: true,
        opacity: 0.85
      }));
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

        // Animate outro text (credo quote + button) to fade in and slide up near the end
        const outro = document.querySelector(".j-outro");
        if (outro) {
          const startFade = 0.75;
          const endFade = 0.95;
          const alpha = Math.min(1, Math.max(0, (p - startFade) / (endFade - startFade)));
          outro.style.opacity = alpha;
          outro.style.transform = `translate3d(0, ${(1 - alpha) * 45}px, 0)`;
        }
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
      cleanup = () => {
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
        try {
          renderer.forceContextLoss();
        } catch (e2) {/* older three */}
        while (el.firstChild) el.removeChild(el.firstChild);
      };
    } catch (e) {
      // WebGL/scene failure must not blank the Milestones page — drop the 3D bg only.
      if (el) while (el.firstChild) el.removeChild(el.firstChild);
    }
    return () => {
      cleanup && cleanup();
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
// ===== Fixed background world for Publications (calm paper archive) =====

function fixedWorldHost(buildFn) {
  return function WorldComp() {
    const ref = React.useRef(null);
    React.useEffect(() => {
      const el = ref.current;
      if (!el || !window.THREE) return;
      let cleanup = null;
      try {
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
        cleanup = () => {
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
          try {
            renderer.forceContextLoss();
          } catch (e2) {/* older three */}
          while (el.firstChild) el.removeChild(el.firstChild);
        };
      } catch (e) {
        // A WebGL/scene failure must never blank the page — leave the empty host.
        while (el.firstChild) el.removeChild(el.firstChild);
      }
      return () => {
        cleanup && cleanup();
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

// ---------- Publications: calm floating paper archive (papers + courier drone) ----------
// Kept deliberately quiet and pushed to the sides/back so it never competes with text.
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
  for (let i = 0; i < 12; i++) {
    const m = new THREE.Mesh(paperGeo, new THREE.MeshBasicMaterial({
      map: paperTex,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.28 + Math.random() * 0.22 // faint, so body copy stays readable
    }));
    const side = i % 2 ? 1 : -1;
    // hold them out toward the edges and pushed back behind the content column
    m.position.set(side * (4.0 + Math.random() * 2.6), Math.random() * 7 - 1.5, -2.5 - Math.random() * 3.5);
    m.rotation.set(Math.random() * 0.4 - 0.2, Math.random() * 0.8 - 0.4, Math.random() * 0.25 - 0.12);
    m.userData = {
      sp: 0.05 + Math.random() * 0.09,
      rs: (Math.random() - 0.5) * 0.12,
      ph: Math.random() * 6
    };
    scene.add(m);
    papers.push(m);
  }

  // a single courier drone carrying a paper, drifting slowly along the back
  const courier = buildDroneModel();
  courier.group.scale.setScalar(0.6);
  scene.add(courier.group);
  const carried = new THREE.Mesh(paperGeo, new THREE.MeshBasicMaterial({
    map: paperTex,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.85
  }));
  carried.scale.setScalar(0.7);
  carried.position.y = -0.45;
  carried.rotation.x = 0.15;
  courier.group.add(carried);
  return {
    update(t) {
      papers.forEach(m => {
        m.position.y += m.userData.sp * 0.012;
        m.rotation.y += m.userData.rs * 0.004;
        m.position.x += Math.sin(t * 0.25 + m.userData.ph) * 0.0008;
        if (m.position.y > 5.6) m.position.y = -1.8;
      });
      courier.update(t * 0.6);
      const a = t * 0.07; // slow, wide arc kept to the back
      courier.group.position.set(Math.sin(a) * 5.0, 3.2 + Math.sin(t * 0.5) * 0.2, -3.0 + Math.cos(a) * 1.0);
      courier.group.rotation.y = -a;
      // very gentle parallax only — no scroll-driven dolly over the text
      camera.position.x = state.mouse.x * 0.25;
      camera.position.y = 1.3 - state.mouse.y * 0.15;
      camera.lookAt(0, 1.2, 0);
    }
  };
});
Object.assign(window, {
  PaperWorld
});

/* ===== src/globe.jsx ===== */
// ===== 3D Globe — local high-resolution earth texture + visit heatmap =====

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
  g.addColorStop(0, color + "aa");
  g.addColorStop(0.38, color + "3c");
  g.addColorStop(1, color + "00");
  x.fillStyle = g;
  x.fillRect(0, 0, 128, 128);
  return new THREE.CanvasTexture(c);
}

// Procedural earth — always available, no network. Ocean + clearly-readable land
// masses with a touch of relief, so the globe never renders as a flat single color.
function makeProceduralEarth() {
  const W = 768,
    H = 384;
  const c = document.createElement("canvas");
  c.width = W;
  c.height = H;
  const x = c.getContext("2d");

  // ocean
  const og = x.createLinearGradient(0, 0, 0, H);
  og.addColorStop(0, "#2b5f96");
  og.addColorStop(0.5, "#2f6ea8");
  og.addColorStop(1, "#2b5f96");
  x.fillStyle = og;
  x.fillRect(0, 0, W, H);

  // helper: lon/lat (deg) -> equirectangular px
  const P = (lon, lat) => [(lon + 180) / 360 * W, (90 - lat) / 180 * H];
  // rough continent outlines (lon, lat) — readable, not survey-accurate
  const LAND = [
  // North America
  [[-168, 65], [-150, 70], [-95, 72], [-60, 60], [-55, 48], [-80, 25], [-97, 17], [-110, 23], [-125, 40], [-130, 55], [-168, 65]],
  // South America
  [[-80, 9], [-60, 7], [-50, -5], [-38, -12], [-55, -35], [-72, -52], [-75, -30], [-81, -5], [-80, 9]],
  // Africa
  [[-17, 15], [10, 33], [32, 31], [43, 12], [40, -5], [35, -26], [20, -35], [12, -18], [-5, 5], [-17, 15]],
  // Europe
  [[-10, 43], [0, 51], [10, 55], [28, 60], [40, 48], [28, 40], [10, 38], [-10, 43]],
  // Asia
  [[40, 48], [60, 55], [90, 72], [140, 72], [170, 66], [140, 52], [122, 40], [105, 20], [95, 8], [78, 8], [70, 25], [55, 38], [40, 48]],
  // India peninsula accent
  [[70, 25], [88, 22], [80, 8], [72, 18], [70, 25]],
  // Australia
  [[113, -22], [130, -12], [145, -15], [153, -28], [140, -38], [120, -34], [113, -22]],
  // Antarctica strip
  [[-180, -78], [180, -78], [180, -90], [-180, -90], [-180, -78]],
  // Greenland
  [[-55, 60], [-30, 60], [-22, 70], [-40, 82], [-58, 76], [-55, 60]]];
  const drawBlob = (pts, fill) => {
    x.beginPath();
    pts.forEach((p, i) => {
      const [px, py] = P(p[0], p[1]);
      i ? x.lineTo(px, py) : x.moveTo(px, py);
    });
    x.closePath();
    x.fillStyle = fill;
    x.fill();
  };
  LAND.forEach(pts => drawBlob(pts, "#5a9e5e"));
  // relief speckle for a hint of terrain — read the field once (per-pixel getImageData is slow)
  const fld = x.getImageData(0, 0, W, H).data;
  for (let i = 0; i < 2600; i++) {
    const px = Math.random() * W | 0,
      py = Math.random() * H | 0;
    const o = (py * W + px) * 4;
    if (fld[o + 1] > fld[o + 2]) {
      // only over land (green > blue)
      x.fillStyle = Math.random() > 0.5 ? "rgba(80,130,70,0.5)" : "rgba(170,150,110,0.4)";
      x.fillRect(px, py, 2, 2);
    }
  }
  // ice caps
  x.fillStyle = "rgba(244,249,250,0.85)";
  x.fillRect(0, 0, W, 16);
  x.fillRect(0, H - 22, W, 22);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}
const EARTH_TEXTURES = {
  day: "attached_assets/earth-atmos-2048.jpg",
  clouds: "attached_assets/earth-clouds-1024.png",
  normal: "attached_assets/earth-normal-2048.jpg",
  specular: "attached_assets/earth-specular-2048.jpg"
};
function configureGlobeTexture(tex, renderer, colorManaged) {
  if (!tex) return tex;
  if (colorManaged && THREE.SRGBColorSpace) tex.colorSpace = THREE.SRGBColorSpace;
  if (renderer && renderer.capabilities && renderer.capabilities.getMaxAnisotropy) {
    tex.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());
  }
  tex.needsUpdate = true;
  return tex;
}
function buildGlobeScene(ctx) {
  const {
    scene,
    camera,
    renderer,
    el
  } = ctx;
  // Globe framed for the About panel (text column on the left, globe to the right).
  camera.position.set(0, 0.3, 4.0);
  camera.lookAt(0, 0, 0);
  scene.add(new THREE.HemisphereLight(0xffffff, 0xbcd0e8, 1.1));
  const dir = new THREE.DirectionalLight(0xffffff, 0.85);
  dir.position.set(3, 4, 5);
  scene.add(dir);
  const R = 1.0;
  const globe = new THREE.Group();
  scene.add(globe);
  let alive = true;
  const loader = new THREE.TextureLoader();
  const ownedTextures = [];
  const trackTexture = (tex, colorManaged) => {
    configureGlobeTexture(tex, renderer, colorManaged);
    ownedTextures.push(tex);
    return tex;
  };
  const loadTexture = (url, colorManaged, onReady) => {
    const tex = trackTexture(loader.load(url, loaded => {
      configureGlobeTexture(loaded, renderer, colorManaged);
      if (!alive) {
        loaded.dispose();
        return;
      }
      onReady(loaded);
    }, undefined, () => {/* keep the local procedural fallback */}), colorManaged);
    return tex;
  };
  const earthTexture = trackTexture(makeProceduralEarth(), true);
  const sphereGeo = new THREE.SphereGeometry(R, 96, 96);
  const sphereMat = new THREE.MeshPhongMaterial({
    map: earthTexture,
    color: 0xffffff,
    shininess: 18,
    specular: 0x26384f
  });
  globe.add(new THREE.Mesh(sphereGeo, sphereMat));
  const cloudMat = new THREE.MeshPhongMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0,
    depthWrite: false,
    shininess: 2
  });
  const clouds = new THREE.Mesh(new THREE.SphereGeometry(R * 1.012, 96, 96), cloudMat);
  globe.add(clouds);
  loadTexture(EARTH_TEXTURES.day, true, tex => {
    sphereMat.map = tex;
    sphereMat.needsUpdate = true;
  });
  loadTexture(EARTH_TEXTURES.normal, false, tex => {
    sphereMat.normalMap = tex;
    sphereMat.normalScale = new THREE.Vector2(0.16, 0.16);
    sphereMat.needsUpdate = true;
  });
  loadTexture(EARTH_TEXTURES.specular, false, tex => {
    sphereMat.specularMap = tex;
    sphereMat.needsUpdate = true;
  });
  loadTexture(EARTH_TEXTURES.clouds, true, tex => {
    cloudMat.map = tex;
    cloudMat.opacity = 0.36;
    cloudMat.needsUpdate = true;
  });

  // soft atmospheric halo (cool blue)
  const halo = new THREE.Mesh(new THREE.SphereGeometry(R * 1.07, 32, 32), new THREE.MeshBasicMaterial({
    color: 0x9cc4ec,
    transparent: true,
    opacity: 0.22,
    side: THREE.BackSide
  }));
  scene.add(halo);

  // subtle graticule
  const gratMat = new THREE.LineBasicMaterial({
    color: 0xbfd6ea,
    transparent: true,
    opacity: 0.12
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
      opacity: 0.72,
      depthWrite: false
    }));
    const s = 0.11 + p.w * 0.24;
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
      clouds.rotation.y += 0.00045;
      halo.rotation.copy(globe.rotation);
      rings.forEach((r, i) => {
        const ph = (t * 0.7 + i * 0.5) % 1;
        r.scale.setScalar(1 + ph * 1.6);
        r.material.opacity = 0.9 * (1 - ph);
      });
    },
    dispose() {
      alive = false;
      el.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      el.removeEventListener("pointermove", onDrag);
      const disposed = new Set();
      const disposeOnce = obj => {
        if (obj && obj.dispose && !disposed.has(obj)) {
          disposed.add(obj);
          obj.dispose();
        }
      };
      scene.traverse(o => {
        disposeOnce(o.geometry);
        const materials = Array.isArray(o.material) ? o.material : [o.material];
        materials.forEach(mat => {
          if (!mat) return;
          disposeOnce(mat.map);
          disposeOnce(mat);
        });
      });
      ownedTextures.forEach(disposeOnce);
      disposeOnce(heatGreen);
      disposeOnce(heatAmber);
    }
  };
}
Object.assign(window, {
  buildGlobeScene,
  VISITED_PLACES
});

/* ===== src/app-all.jsx ===== */
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// ===== CONSOLIDATED APP =====
// Rich 3D scenes live in their own files and are loaded BEFORE this one:
//   data.jsx → robots.jsx → world.jsx → scenes-pages.jsx → globe.jsx → app-all.jsx
// This file owns the inline ThreeScene host + page components + routing.

// ===== Error boundary — a thrown render/effect error must never blank the page =====
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      failed: false
    };
  }
  static getDerivedStateFromError() {
    return {
      failed: true
    };
  }
  componentDidCatch() {/* swallow — keep the shell usable */}
  render() {
    if (this.state.failed) {
      return /*#__PURE__*/React.createElement("section", {
        className: "page"
      }, /*#__PURE__*/React.createElement("div", {
        className: "container"
      }, /*#__PURE__*/React.createElement("div", {
        className: "page-eyebrow"
      }, "Something hiccuped"), /*#__PURE__*/React.createElement("h1", {
        className: "page-title"
      }, "A piece didn't load"), /*#__PURE__*/React.createElement("p", {
        className: "page-lede"
      }, "Try refreshing the page. The rest of the site is still here in the menu above.")));
    }
    return this.props.children;
  }
}

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
    let cleanup = null;
    try {
      const w = el.clientWidth || 400;
      const h = el.clientHeight || 400;
      const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "high-performance"
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.setSize(w, h, false);
      renderer.setClearColor(0x000000, 0);
      // Start canvas invisible; fade in after first render to avoid flash
      renderer.domElement.style.opacity = "0";
      renderer.domElement.style.transition = "opacity .4s ease";
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
        running = false,
        firstFrame = true;
      const start = performance.now();
      const tick = () => {
        if (!running) return;
        const t = (performance.now() - start) / 1000;
        api.update && api.update(t);
        renderer.render(scene, camera);
        // Show canvas after first render completes — no blank flash
        if (firstFrame) {
          firstFrame = false;
          renderer.domElement.style.opacity = "1";
        }
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
        rootMargin: "200px"
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
      const ro = new ResizeObserver(scheduleResize);
      ro.observe(el);
      const onMove = e => {
        const r = el.getBoundingClientRect();
        ctx.mouse.x = (e.clientX - r.left) / r.width * 2 - 1;
        ctx.mouse.y = -((e.clientY - r.top) / r.height * 2 - 1);
      };
      el.addEventListener("pointermove", onMove);
      cleanup = () => {
        stopLoop();
        cancelAnimationFrame(resizeRaf);
        io.disconnect();
        ro.disconnect();
        document.removeEventListener("visibilitychange", onVis);
        el.removeEventListener("pointermove", onMove);
        api.dispose && api.dispose();
        renderer.dispose();
        // Actually release the GPU context — Safari caps simultaneous WebGL
        // contexts low, and dispose() alone leaves them allocated across navigation,
        // which makes later scenes (the globe, the hero drone) silently fail to show.
        try {
          renderer.forceContextLoss();
        } catch (e) {/* older three */}
        while (el.firstChild) el.removeChild(el.firstChild);
      };
    } catch (e) {
      // WebGL unavailable / scene build failed — leave the host empty, page stays alive.
      if (el) while (el.firstChild) el.removeChild(el.firstChild);
    }
    return () => {
      cleanup && cleanup();
    };
  }, [build]);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: className,
    style: style
  });
}

// ===== Reveal on scroll =====
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
const Arrow = ({
  dir = "right"
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, dir === "left" ? /*#__PURE__*/React.createElement("path", {
  d: "M15 18l-6-6 6-6"
}) : /*#__PURE__*/React.createElement("path", {
  d: "M9 18l6-6-6-6"
}));

// ===== Hero photo gallery — passive auto-rotating portraits with manual controls =====
function LeafIcon({
  active = false,
  sage = false,
  className = ""
}) {
  const gradId = React.useId();
  const veinColor = active ? "#eefce3" : sage ? "#d5e4d2" : "#eefce3";
  const fillUrl = active ? `url(#leaf-grad-active-${gradId})` : sage ? `url(#leaf-grad-sage-${gradId})` : `url(#leaf-grad-normal-${gradId})`;
  return /*#__PURE__*/React.createElement("svg", {
    className: `leaf-svg-icon ${className}`,
    viewBox: "0 0 24 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: {
      display: 'block',
      width: '100%',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: `leaf-grad-normal-${gradId}`,
    x1: "0%",
    y1: "0%",
    x2: "100%",
    y2: "100%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#aae452"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "50%",
    stopColor: "#5bb21a"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#2a630e"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: `leaf-grad-active-${gradId}`,
    x1: "0%",
    y1: "0%",
    x2: "100%",
    y2: "100%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#c5ff68"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "45%",
    stopColor: "#7cdb26"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#3d8515"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: `leaf-grad-sage-${gradId}`,
    x1: "0%",
    y1: "0%",
    x2: "100%",
    y2: "100%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#b5cbb0"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "55%",
    stopColor: "#7c9676"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#4f624b"
  }))), /*#__PURE__*/React.createElement("path", {
    d: "M 3.5,8 C 6.5,2 14,1 21,8 C 14,15 6.5,14 3.5,8 Z",
    fill: fillUrl,
    stroke: "#000",
    strokeWidth: "0.25",
    strokeOpacity: "0.12"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 3.5,8 Q 12,7.5 21,8",
    stroke: veinColor,
    strokeWidth: "0.8",
    strokeLinecap: "round",
    opacity: "0.8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 7.5,7.8 Q 10,5.2 12.5,4.2",
    stroke: veinColor,
    strokeWidth: "0.45",
    strokeLinecap: "round",
    opacity: "0.65"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 12.5,7.7 Q 15,4.8 18,4.0",
    stroke: veinColor,
    strokeWidth: "0.45",
    strokeLinecap: "round",
    opacity: "0.65"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 7.5,8.2 Q 9,10.8 11.5,11.8",
    stroke: veinColor,
    strokeWidth: "0.45",
    strokeLinecap: "round",
    opacity: "0.65"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 12.5,8.3 Q 14.5,11.2 17,12.0",
    stroke: veinColor,
    strokeWidth: "0.45",
    strokeLinecap: "round",
    opacity: "0.65"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 1,9 Q 2,8.8 3.5,8",
    stroke: "#5d3b24",
    strokeWidth: "1.3",
    strokeLinecap: "round"
  }));
}

// ===== Hero photo gallery — passive auto-rotating portraits with manual controls =====
function HeroGallery() {
  const items = window.HOME_GALLERY || [];
  const n = items.length;
  const [idx, setIdx] = React.useState(0);
  React.useEffect(() => {
    if (n < 2) return;
    const id = setInterval(() => setIdx(i => (i + 1) % n), 5000);
    return () => clearInterval(id);
  }, [n]);
  if (!n) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "hero-gallery"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hg-stage",
    onClick: () => setIdx(i => (i + 1) % n),
    style: {
      cursor: "pointer"
    },
    title: "Click to see next photo"
  }, items.map((g, i) => /*#__PURE__*/React.createElement("img", {
    key: g.src,
    src: g.src,
    alt: PROFILE.name,
    className: `hg-img ${i === idx ? "active" : ""}`,
    draggable: "false",
    fetchpriority: i === 0 ? "high" : "auto",
    decoding: "async"
  }))), n > 1 && /*#__PURE__*/React.createElement("div", {
    className: "hg-dots"
  }, /*#__PURE__*/React.createElement("svg", {
    className: "hg-twig-svg",
    viewBox: "0 0 120 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "hg-twig-grad",
    x1: "0%",
    y1: "0%",
    x2: "0%",
    y2: "100%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#8a5a36"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "60%",
    stopColor: "#5d3b24"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#3a2212"
  })), /*#__PURE__*/React.createElement("filter", {
    id: "hg-twig-shadow",
    x: "-10%",
    y: "-10%",
    width: "120%",
    height: "130%"
  }, /*#__PURE__*/React.createElement("feDropShadow", {
    dx: "0",
    dy: "1",
    stdDeviation: "1",
    floodOpacity: "0.25"
  }))), /*#__PURE__*/React.createElement("path", {
    d: "M 10,12 C 40,6 80,14 110,10",
    stroke: "url(#hg-twig-grad)",
    strokeWidth: "4.5",
    strokeLinecap: "round",
    filter: "url(#hg-twig-shadow)"
  })), items.map((_, i) => {
    const pct = n > 1 ? i / (n - 1) : 0;
    const y = Math.sin(pct * Math.PI) * -3; // organic curve offset
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: `hg-dot ${i === idx ? "active" : ""}`,
      style: {
        left: `calc(18% + ${pct * 64}%)`,
        '--y': `${y}px`,
        '--rot': `${i % 2 === 0 ? 15 : -15}deg`
      },
      onClick: e => {
        e.stopPropagation();
        setIdx(i);
      },
      "aria-label": `Go to slide ${i + 1}`
    }, /*#__PURE__*/React.createElement(LeafIcon, {
      active: i === idx,
      sage: i !== idx
    }));
  })));
}

// ===== Publication link buttons =====
const PUB_LINK_DEFS = [["paper", "Paper"], ["preprint", "Preprint"], ["github", "Code"], ["video", "Video"], ["blog", "Blog"], ["scholar", "Scholar"]];
function PubLinks({
  links
}) {
  const present = PUB_LINK_DEFS.filter(([k]) => links && links[k]);
  if (!present.length) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "pub-links"
  }, present.map(([k, label]) => {
    const href = links[k];
    const internal = href.charAt(0) === "#";
    return /*#__PURE__*/React.createElement("a", _extends({
      key: k,
      className: `pub-linkbtn ${k}`,
      href: href
    }, internal ? {} : {
      target: "_blank",
      rel: "noopener noreferrer"
    }), /*#__PURE__*/React.createElement("span", {
      className: "dot"
    }), label);
  }));
}

// ===== Publication card =====
function PubRow({
  p
}) {
  return /*#__PURE__*/React.createElement("article", {
    className: "pub-card"
  }, p.image && /*#__PURE__*/React.createElement("div", {
    className: "pub-thumb"
  }, /*#__PURE__*/React.createElement("img", {
    src: p.image,
    alt: "",
    loading: "lazy"
  }), p.featured && /*#__PURE__*/React.createElement("span", {
    className: "pub-feat"
  }, "Featured")), /*#__PURE__*/React.createElement("div", {
    className: "pub-main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pub-meta-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pub-year"
  }, p.year), /*#__PURE__*/React.createElement("span", {
    className: "pub-kind"
  }, p.kind)), /*#__PURE__*/React.createElement("h4", null, p.title), /*#__PURE__*/React.createElement("p", {
    className: "pub-authors"
  }, p.authors.map((a, idx) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: idx
  }, idx > 0 && ", ", /*#__PURE__*/React.createElement("span", {
    className: a.toLowerCase().includes("sai krishna") ? "me" : ""
  }, a)))), /*#__PURE__*/React.createElement("div", {
    className: "pub-venue"
  }, p.venue), p.overview && /*#__PURE__*/React.createElement("p", {
    className: "pub-overview"
  }, p.overview), /*#__PURE__*/React.createElement(PubLinks, {
    links: p.links
  })));
}

// ===== Pages =====
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
  }, "Sai Krishna ", /*#__PURE__*/React.createElement("span", {
    className: "italic"
  }, "Ghanta")), /*#__PURE__*/React.createElement("p", {
    className: "hero-pronounce"
  }, /*#__PURE__*/React.createElement("span", {
    className: "hp-say"
  }, "say ", /*#__PURE__*/React.createElement("em", null, "\u201Csigh \xB7 krish-na \xB7 gun-ta\u201D")), /*#__PURE__*/React.createElement("span", {
    className: "hp-dot"
  }, "\xB7"), /*#__PURE__*/React.createElement("span", {
    className: "hp-call"
  }, "just call me ", /*#__PURE__*/React.createElement("strong", null, "Sai"))), /*#__PURE__*/React.createElement("p", {
    className: "hero-bio"
  }, "I am a third-year Ph.D. candidate in Artificial Intelligence at the", " ", /*#__PURE__*/React.createElement("a", {
    href: "https://www.uga.edu",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "University of Georgia"), ", working under the supervision of", " ", /*#__PURE__*/React.createElement("a", {
    href: "https://computing.uga.edu/directory/people/ramviyas-nattanmai-parasuraman",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Dr. Ramviyas Parasuraman"), ". My research combines multi-robot systems, spatial intelligence, embodied AI to help robots map, localize, plan, and act in complex real-world environments."), /*#__PURE__*/React.createElement("p", {
    className: "hero-bio"
  }, "Previously, I was a research intern at the", " ", /*#__PURE__*/React.createElement("a", {
    href: "https://engineering.louisville.edu/research/centersinstitutes/larri/",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Louisville Automation & Robotics Research Institute"), ", where I worked with", " ", /*#__PURE__*/React.createElement("a", {
    href: "https://engineering.louisville.edu/faculty/sabur-h-baidya/",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Dr. Sabur Baidya"), ", and an AI research intern at Samsung R&D Institute through the PRISM program."), /*#__PURE__*/React.createElement("div", {
    className: "hero-socials",
    "aria-label": "Academic and social links"
  }, /*#__PURE__*/React.createElement("a", {
    href: PROFILE.scholar,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "btn-link social-link",
    "aria-label": "Google Scholar profile"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 3 2.8 8.1 12 13.2l9.2-5.1L12 3Zm-6.6 7.5v4.2c0 2.3 3 4.3 6.6 4.3s6.6-2 6.6-4.3v-4.2L12 14.2l-6.6-3.7Z",
    fill: "currentColor"
  })), /*#__PURE__*/React.createElement("span", null, "Scholar")), /*#__PURE__*/React.createElement("a", {
    href: PROFILE.github,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "btn-link social-link",
    "aria-label": "GitHub profile"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 2.4a9.6 9.6 0 0 0-3 18.7c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.4-1.1.6-1.3-2.2-.2-4.5-1.1-4.5-4.8 0-1.1.4-1.9 1-2.6-.1-.2-.4-1.2.1-2.5 0 0 .8-.3 2.7 1a9.5 9.5 0 0 1 4.8 0c1.8-1.3 2.7-1 2.7-1 .5 1.3.2 2.3.1 2.5.6.7 1 1.5 1 2.6 0 3.7-2.3 4.6-4.5 4.8.4.3.7.9.7 1.8v2.7c0 .3.2.6.7.5A9.6 9.6 0 0 0 12 2.4Z",
    fill: "currentColor"
  })), /*#__PURE__*/React.createElement("span", null, "GitHub")), /*#__PURE__*/React.createElement("a", {
    href: PROFILE.linkedin,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "btn-link social-link",
    "aria-label": "LinkedIn profile"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5.1 8.8H2.4v12.1h2.7V8.8ZM3.8 3.1a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2Zm17.8 10.9c0-3.4-1.8-5-4.3-5-2 0-2.9 1.1-3.4 1.9h-.1V8.8h-2.6v12.1h2.7v-6c0-1.6.3-3.1 2.2-3.1s1.9 1.8 1.9 3.2v5.9h2.7l-.1-6.9Z",
    fill: "currentColor"
  })), /*#__PURE__*/React.createElement("span", null, "LinkedIn")), /*#__PURE__*/React.createElement("a", {
    href: PROFILE.cv,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "btn-link social-link",
    "aria-label": "Download CV or r\xE9sum\xE9"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6.4 2.8h7.8L19 7.6v13.6H6.4V2.8Zm7 1.7v4h4l-4-4ZM8.7 12.4h6.6v-1.5H8.7v1.5Zm0 3.1h6.6V14H8.7v1.5Zm0 3.1h4.8v-1.5H8.7v1.5Z",
    fill: "currentColor"
  })), /*#__PURE__*/React.createElement("span", null, "CV / R\xE9sum\xE9"))), /*#__PURE__*/React.createElement("a", {
    href: `mailto:${PROFILE.email}`,
    className: "hero-email hero-email-card",
    "aria-label": "Email Sai Krishna Ghanta"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4.5 6.5h15v11h-15v-11Zm1.4 1.4 6.1 4.2 6.1-4.2H5.9Zm12.2 8.2V9.6L12 13.8 5.9 9.6v6.5h12.2Z",
    fill: "currentColor"
  })), /*#__PURE__*/React.createElement("span", null, "I\u2019ll be happy to hear from you about research, collaboration, ideas, or anything else \u2014 feel free to reach out to ", /*#__PURE__*/React.createElement("span", {
    className: "email-inline"
  }, PROFILE.email), ".")))), /*#__PURE__*/React.createElement(HeroGallery, null)))), /*#__PURE__*/React.createElement("section", {
    className: "section recent-milestones",
    onClick: () => go("updates"),
    style: {
      cursor: "pointer"
    },
    "aria-label": "Recent Milestones"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "page-eyebrow",
    style: {
      textAlign: "center"
    }
  }, "Recent Achievements"), /*#__PURE__*/React.createElement("h2", {
    style: {
      textAlign: "center",
      marginBottom: 30
    }
  }, "Recent ", /*#__PURE__*/React.createElement("span", {
    className: "ital"
  }, "Milestones")), /*#__PURE__*/React.createElement("div", {
    className: "milestones-cards-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "milestone-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mc-header"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mc-badge"
  }, "Award"), /*#__PURE__*/React.createElement("span", {
    className: "mc-date"
  }, "2026")), /*#__PURE__*/React.createElement("h3", {
    className: "mc-title"
  }, "NSF Fellowship"), /*#__PURE__*/React.createElement("p", {
    className: "mc-text"
  }, "NSF Chishiki AI Fellow at UT Austin, working with Dr. Krishna Kumar.")), /*#__PURE__*/React.createElement("div", {
    className: "milestone-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mc-header"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mc-badge"
  }, "School"), /*#__PURE__*/React.createElement("span", {
    className: "mc-date"
  }, "Summer 2026")), /*#__PURE__*/React.createElement("h3", {
    className: "mc-title"
  }, "KTH RPL School"), /*#__PURE__*/React.createElement("p", {
    className: "mc-text"
  }, "Attending KTH RPL Summer School 2026 in Stockholm, Sweden.")), /*#__PURE__*/React.createElement("div", {
    className: "milestone-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mc-header"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mc-badge"
  }, "Academic"), /*#__PURE__*/React.createElement("span", {
    className: "mc-date"
  }, "Spring 2026")), /*#__PURE__*/React.createElement("h3", {
    className: "mc-title"
  }, "Candidacy Exam"), /*#__PURE__*/React.createElement("p", {
    className: "mc-text"
  }, "Passed Ph.D. candidacy exam at the University of Georgia."))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginTop: 24
    },
    className: "milestones-more-link"
  }, /*#__PURE__*/React.createElement("span", {
    className: "btn-link"
  }, "View complete journey \u2192"))))), /*#__PURE__*/React.createElement("section", {
    className: "section interests",
    "data-screen-label": "Interests"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "page-eyebrow",
    style: {
      textAlign: "center"
    }
  }, "Focus areas"), /*#__PURE__*/React.createElement("h2", {
    style: {
      textAlign: "center",
      marginBottom: 48
    }
  }, "Research ", /*#__PURE__*/React.createElement("span", {
    className: "ital"
  }, "Interests")), /*#__PURE__*/React.createElement("div", {
    className: "interest-grid"
  }, INTERESTS.map(int => /*#__PURE__*/React.createElement("button", {
    key: int.id,
    type: "button",
    className: "interest-card interest-card-link",
    onClick: () => go("research", int.id),
    "aria-label": `Read more about ${int.title}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "glyph-wrap"
  }, /*#__PURE__*/React.createElement(ThreeScene, {
    build: dioramaScene(int.scene, 0.8)
  })), /*#__PURE__*/React.createElement("h3", null, int.title), /*#__PURE__*/React.createElement("p", null, int.desc))))))), /*#__PURE__*/React.createElement(MountainHome, null));
}
function ResearchPage() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "research page",
    "data-screen-label": "Research"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "page-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "page-eyebrow"
  }, "What I work on"), /*#__PURE__*/React.createElement("h1", {
    className: "page-title"
  }, "Research ", /*#__PURE__*/React.createElement("span", {
    className: "ital"
  }, "Interests")), /*#__PURE__*/React.createElement("p", {
    className: "page-lede"
  }, "Three intertwined directions \u2014 embodied reasoning in real spaces, cooperative mapping across many robots, and learning a belief over the invisible fields that fill a room.")), THRUSTS.map((t, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: t.id,
    delay: i * 80
  }, /*#__PURE__*/React.createElement("div", {
    id: `research-${t.id}`,
    className: "thrust",
    style: {
      "--t-accent": t.accent,
      "--t-tint": t.tint
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "thrust-body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "thrust-badge"
  }, /*#__PURE__*/React.createElement("span", {
    className: "b-dot"
  }), "Interest ", String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("h3", null, t.title), /*#__PURE__*/React.createElement("p", {
    className: "thrust-tagline"
  }, t.tagline), /*#__PURE__*/React.createElement("p", null, t.body), /*#__PURE__*/React.createElement("div", {
    className: "thrust-stats"
  }, t.stats.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.k,
    className: "thrust-stat"
  }, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, s.k), /*#__PURE__*/React.createElement("span", {
    className: "v"
  }, s.v)))), /*#__PURE__*/React.createElement("div", {
    className: "thrust-keywords"
  }, t.keywords.map(k => /*#__PURE__*/React.createElement("span", {
    key: k,
    className: "thrust-keyword"
  }, k))), /*#__PURE__*/React.createElement("div", {
    className: "thrust-resources"
  }, t.resources.map(r => /*#__PURE__*/React.createElement("a", _extends({
    key: r.label,
    className: "thrust-resource",
    href: r.href
  }, r.href.startsWith("#") ? {} : {
    target: "_blank",
    rel: "noopener noreferrer"
  }), /*#__PURE__*/React.createElement("span", null, r.label), /*#__PURE__*/React.createElement("span", {
    className: "arr"
  }, "\u2192"))))), /*#__PURE__*/React.createElement("div", {
    className: "thrust-media"
  }, /*#__PURE__*/React.createElement(ThreeScene, {
    build: dioramaScene(t.scene),
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%"
    }
  }))))))), /*#__PURE__*/React.createElement(MountainResearch, null));
}
function PublicationsPage() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PaperWorld, null), /*#__PURE__*/React.createElement("section", {
    className: "publications",
    "data-screen-label": "Publications"
  }, /*#__PURE__*/React.createElement("div", {
    className: "iw-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "iw-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "page-eyebrow"
  }, "Selected work"), /*#__PURE__*/React.createElement("h1", {
    className: "iw-title"
  }, "Publications"), /*#__PURE__*/React.createElement("p", {
    className: "page-lede",
    style: {
      marginTop: 14
    }
  }, "Peer-reviewed and in-review work on multi-robot mapping, semantic SLAM, and spatial learning. ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent-ink)"
    }
  }, "* indicates lead / first author."))), PUB_GROUPS.map(group => {
    const items = PUBLICATIONS.filter(p => p.kind === group.kind).sort((a, b) => b.year - a.year);
    if (!items.length) return null;
    return /*#__PURE__*/React.createElement("div", {
      key: group.kind,
      className: "iw-card"
    }, /*#__PURE__*/React.createElement("div", {
      className: "pub-group-head"
    }, /*#__PURE__*/React.createElement("h2", null, group.label), /*#__PURE__*/React.createElement("span", {
      className: "count"
    }, items.length)), items.map(p => /*#__PURE__*/React.createElement(PubRow, {
      key: p.title,
      p: p
    })));
  }))), /*#__PURE__*/React.createElement(MountainPublications, null));
}
function UpdatesPage() {
  const years = [];
  UPDATES.forEach(u => {
    if (!years.includes(u.year)) years.push(u.year);
  });
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
    "data-screen-label": "Milestones"
  }, /*#__PURE__*/React.createElement("div", {
    className: "j-eyebrow"
  }, "The road so far"), /*#__PURE__*/React.createElement("h1", {
    className: "j-title"
  }, "Mile", /*#__PURE__*/React.createElement("span", {
    className: "outline"
  }, "stones")), /*#__PURE__*/React.createElement("p", {
    className: "j-lede"
  }, "A scrolling trail through the work \u2014 papers shipped, field trials run, and the moves that got me here."), /*#__PURE__*/React.createElement("div", {
    className: "j-cue"
  }, /*#__PURE__*/React.createElement("span", {
    className: "j-cue-line"
  }), "Scroll to travel")), years.map((y, yi) => /*#__PURE__*/React.createElement("section", {
    key: y,
    className: "j-section",
    "data-screen-label": String(y)
  }, /*#__PURE__*/React.createElement("div", {
    className: "j-zone"
  }, /*#__PURE__*/React.createElement("span", {
    className: "j-zone-num"
  }, String(yi + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("span", {
    className: "j-zone-word"
  }, y)), /*#__PURE__*/React.createElement("div", {
    className: "j-card year-card"
  }, UPDATES.filter(u => u.year === y).map((u, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "ms-item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ms-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ms-date"
  }, u.date), /*#__PURE__*/React.createElement("span", {
    className: "ms-tag"
  }, u.tag)), /*#__PURE__*/React.createElement("p", {
    className: "ms-text"
  }, u.text)))))), /*#__PURE__*/React.createElement("footer", {
    className: "j-outro"
  }, /*#__PURE__*/React.createElement("blockquote", {
    className: "credo"
  }, /*#__PURE__*/React.createElement("p", {
    className: "credo-quote"
  }, CREDO.quote), /*#__PURE__*/React.createElement("cite", {
    className: "credo-by"
  }, CREDO.by)), /*#__PURE__*/React.createElement("button", {
    className: "btn",
    onClick: () => window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }, "Back to the trailhead \u2191")), /*#__PURE__*/React.createElement(MountainMilestones, null)));
}

// The CSS earth disc is a *fallback* for when WebGL can't run. The WebGL canvas
// is transparent, so if we always render the fallback it shows through behind the
// real 3D globe — you'd see two globes. Render it only when no canvas mounted.
function ContactGlobe() {
  const hostRef = React.useRef(null);
  const [showFallback, setShowFallback] = React.useState(false);
  React.useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    // Only show fallback if WebGL truly failed — wait long enough for the scene
    // to build and render its first frame before deciding.
    const t = setTimeout(() => {
      if (!host.querySelector("canvas")) setShowFallback(true);
    }, 800);
    return () => clearTimeout(t);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "contact-globe",
    ref: hostRef
  }, showFallback && /*#__PURE__*/React.createElement("span", {
    className: "contact-globe-fallback",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", {
    className: "contact-globe-earth"
  })), /*#__PURE__*/React.createElement(ThreeScene, {
    build: buildGlobeScene,
    style: {
      width: "100%",
      height: "100%",
      minHeight: "var(--contact-globe-h)"
    }
  }), /*#__PURE__*/React.createElement("p", {
    className: "contact-globe-cap mono"
  }, "every dot is a place I've been \xB7 drag to spin"));
}

// ===== Trip gallery — horizontal scroll strip (mixed sizes) + fitted lightbox =====
const isVideo = s => /\.(mp4|webm|mov|m4v)$/i.test(s || "");
function TripGallery() {
  const items = React.useMemo(() => {
    return [...(window.TRIP_GALLERY || [])].sort((a, b) => {
      const parseDate = d => {
        if (!d) return 0;
        const parts = d.split(" ");
        if (parts.length === 2) {
          const mos = {
            Jan: 1,
            Feb: 2,
            Mar: 3,
            Apr: 4,
            May: 5,
            Jun: 6,
            Jul: 7,
            Aug: 8,
            Sep: 9,
            Oct: 10,
            Nov: 11,
            Dec: 12
          };
          return parseInt(parts[1], 10) * 12 + (mos[parts[0]] || 0);
        }
        const y = parseInt(d, 10);
        return isNaN(y) ? 0 : y * 12;
      };
      return parseDate(b.when) - parseDate(a.when);
    });
  }, []);
  const [active, setActive] = React.useState(null);
  const [featured, setFeatured] = React.useState(0);
  const stripRef = React.useRef(null);
  const dragged = React.useRef(false);
  const [scrollPct, setScrollPct] = React.useState(0);

  // Lightbox: keyboard nav + lock the page so it can't scroll behind the photo.
  React.useEffect(() => {
    if (active === null) return;
    const onKey = e => {
      if (e.key === "Escape") setActive(null);else if (e.key === "ArrowRight") setActive(i => (i + 1) % items.length);else if (e.key === "ArrowLeft") setActive(i => (i - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [active, items.length]);

  // Drag-to-scroll the strip (so a plain mouse can pan it, not just a trackpad).
  React.useEffect(() => {
    const el = stripRef.current;
    if (!el) return;
    let down = false,
      startX = 0,
      startScroll = 0;
    const onDown = e => {
      down = true;
      dragged.current = false;
      startX = e.clientX;
      startScroll = el.scrollLeft;
      el.classList.add("dragging");
    };
    const onMove = e => {
      if (!down) return;
      const dx = e.clientX - startX;
      if (Math.abs(dx) > 5) dragged.current = true;
      el.scrollLeft = startScroll - dx;
    };
    const onUp = () => {
      down = false;
      el.classList.remove("dragging");
    };
    el.addEventListener("pointerdown", onDown);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      el.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, []);

  // Twig scroll progress track sync
  React.useEffect(() => {
    const el = stripRef.current;
    if (!el) return;
    const onScroll = () => {
      const max = el.scrollWidth - el.clientWidth;
      setScrollPct(max > 0 ? el.scrollLeft / max : 0);
    };
    el.addEventListener("scroll", onScroll, {
      passive: true
    });
    onScroll();
    window.addEventListener("resize", onScroll);
    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [items.length]);

  // Center active thumbnail in the rail when featured changes
  React.useEffect(() => {
    const rail = stripRef.current;
    if (!rail) return;
    // The children inside .trips-rail are the individual thumbnail buttons
    const activeThumb = rail.children[featured];
    if (activeThumb) {
      const railWidth = rail.clientWidth;
      const thumbWidth = activeThumb.clientWidth;
      const thumbLeft = activeThumb.offsetLeft;
      const targetScroll = thumbLeft - railWidth / 2 + thumbWidth / 2;
      rail.scrollTo({
        left: targetScroll,
        behavior: "smooth"
      });
    }
  }, [featured]);
  if (!items.length) return null;
  const cur = active !== null ? items[active] : null;
  const safeFeatured = Math.min(featured, items.length - 1);
  const feat = items[safeFeatured];
  const selectThumb = i => {
    if (!dragged.current) setFeatured(i);
  };
  const handleLeafClick = i => {
    setFeatured(i);
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "section trips",
    "data-screen-label": "Trips"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "page-eyebrow"
  }, "Out in the world"), /*#__PURE__*/React.createElement("h2", {
    className: "trips-title"
  }, "Places I've ", /*#__PURE__*/React.createElement("span", {
    className: "ital"
  }, "wandered")), /*#__PURE__*/React.createElement("p", {
    className: "trips-lede"
  }, "Conferences, labs, and the people along the way \u2014 newest first. Pick a moment below; tap the big one to open it full screen."), /*#__PURE__*/React.createElement("figure", {
    className: "trips-featured",
    role: "button",
    tabIndex: 0,
    "aria-label": `Open ${feat.title}`,
    onClick: () => setActive(safeFeatured),
    onKeyDown: e => {
      if (e.key === "Enter") {
        e.preventDefault();
        setActive(safeFeatured);
      }
    }
  }, isVideo(feat.src) ? /*#__PURE__*/React.createElement("video", {
    key: feat.src,
    ref: el => {
      if (el) el.muted = true;
    },
    src: feat.src,
    muted: true,
    loop: true,
    autoPlay: true,
    playsInline: true,
    preload: "auto",
    draggable: "false"
  }) : /*#__PURE__*/React.createElement("img", {
    key: feat.src,
    src: feat.src,
    alt: feat.title,
    draggable: "false"
  }), /*#__PURE__*/React.createElement("span", {
    className: "tf-zoom",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement(Arrow, {
    dir: "right"
  })), /*#__PURE__*/React.createElement("figcaption", {
    className: "tf-cap"
  }, (feat.place || feat.when) && /*#__PURE__*/React.createElement("span", {
    className: "tf-sub"
  }, feat.place && /*#__PURE__*/React.createElement("span", null, feat.place), feat.place && feat.when && /*#__PURE__*/React.createElement("span", {
    className: "trip-dot"
  }, "\xB7"), feat.when && /*#__PURE__*/React.createElement("span", null, feat.when)), feat.title && /*#__PURE__*/React.createElement("span", {
    className: "tf-title"
  }, feat.title), feat.desc && /*#__PURE__*/React.createElement("span", {
    className: "tf-desc"
  }, feat.desc))), /*#__PURE__*/React.createElement("div", {
    className: "trips-rail-container",
    style: {
      position: "relative"
    }
  }, items.length > 1 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    className: "trips-nav-btn prev",
    onClick: () => {
      if (stripRef.current) stripRef.current.scrollBy({
        left: -240,
        behavior: "smooth"
      });
    },
    "aria-label": "Scroll left"
  }, /*#__PURE__*/React.createElement(LeafIcon, {
    active: true,
    className: "btn-leaf-bg"
  }), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M15 18l-6-6 6-6",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), /*#__PURE__*/React.createElement("button", {
    className: "trips-nav-btn next",
    onClick: () => {
      if (stripRef.current) stripRef.current.scrollBy({
        left: 240,
        behavior: "smooth"
      });
    },
    "aria-label": "Scroll right"
  }, /*#__PURE__*/React.createElement(LeafIcon, {
    active: true,
    className: "btn-leaf-bg"
  }), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9 18l6-6-6-6",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "trips-rail",
    ref: stripRef
  }, items.map((g, i) => /*#__PURE__*/React.createElement("button", {
    key: g.src + i,
    type: "button",
    className: `trip-thumb ${i === safeFeatured ? "active" : ""}`,
    "aria-label": `${g.place || ""} ${g.title || ""}`.trim(),
    onClick: () => selectThumb(i)
  }, isVideo(g.src) ? /*#__PURE__*/React.createElement("video", {
    src: g.src + "#t=0.1",
    muted: true,
    playsInline: true,
    preload: "metadata"
  }) : /*#__PURE__*/React.createElement("img", {
    src: g.src,
    alt: g.title,
    loading: "lazy",
    draggable: "false"
  }), isVideo(g.src) && /*#__PURE__*/React.createElement("span", {
    className: "tt-vid",
    "aria-hidden": "true"
  }, "\u25B6"), g.when && /*#__PURE__*/React.createElement("span", {
    className: "tt-when"
  }, g.when))))), items.length > 1 && /*#__PURE__*/React.createElement("div", {
    className: "trips-scroll-track"
  }, /*#__PURE__*/React.createElement("svg", {
    className: "trips-scroll-twig-svg",
    viewBox: "0 0 320 24",
    preserveAspectRatio: "none",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "trips-twig-grad",
    x1: "0%",
    y1: "0%",
    x2: "100%",
    y2: "0%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#8a5a36"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "30%",
    stopColor: "#5d3b24"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "70%",
    stopColor: "#7a4f2e"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#3a2212"
  })), /*#__PURE__*/React.createElement("filter", {
    id: "twig-shadow",
    x: "-5%",
    y: "-10%",
    width: "110%",
    height: "130%"
  }, /*#__PURE__*/React.createElement("feDropShadow", {
    dx: "0",
    dy: "1.5",
    stdDeviation: "1.5",
    floodOpacity: "0.35"
  }))), /*#__PURE__*/React.createElement("path", {
    d: "M 5,12 C 40,6 80,18 120,12 C 160,6 200,18 240,12 C 270,7 295,15 315,11",
    stroke: "url(#trips-twig-grad)",
    strokeWidth: "5",
    strokeLinecap: "round",
    filter: "url(#twig-shadow)"
  })), /*#__PURE__*/React.createElement("div", {
    className: "trips-scroll-leaves"
  }, items.map((_, i) => {
    const pct = items.length > 1 ? i / (items.length - 1) : 0;
    const y = Math.sin(pct * Math.PI * 5.2) * -5.5; // Wave offset matching SVG path
    const activeLeaf = Math.min(Math.round(scrollPct * (items.length - 1)), items.length - 1);
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: `trips-scroll-leaf-dot ${i === activeLeaf ? "active" : ""}`,
      style: {
        left: `${pct * 100}%`,
        '--y': `${y}px`,
        '--rot': `${i % 2 === 0 ? 25 : -25}deg`
      },
      onClick: () => handleLeafClick(i),
      "aria-label": `Go to image ${i + 1}`
    }, /*#__PURE__*/React.createElement(LeafIcon, {
      active: i === activeLeaf,
      sage: i !== activeLeaf
    }));
  })))), cur && /*#__PURE__*/React.createElement("div", {
    className: "trip-lightbox",
    onClick: () => setActive(null),
    role: "dialog",
    "aria-modal": "true"
  }, /*#__PURE__*/React.createElement("button", {
    className: "tl-close",
    onClick: () => setActive(null),
    "aria-label": "Close"
  }, "\xD7"), items.length > 1 && /*#__PURE__*/React.createElement("button", {
    className: "tl-nav prev",
    "aria-label": "Previous",
    onClick: e => {
      e.stopPropagation();
      setActive(i => (i - 1 + items.length) % items.length);
    }
  }, /*#__PURE__*/React.createElement(LeafIcon, {
    active: true,
    className: "btn-leaf-bg"
  }), /*#__PURE__*/React.createElement(Arrow, {
    dir: "left"
  })), /*#__PURE__*/React.createElement("figure", {
    className: "tl-figure",
    onClick: e => e.stopPropagation()
  }, isVideo(cur.src) ? /*#__PURE__*/React.createElement("video", {
    src: cur.src,
    controls: true,
    autoPlay: true,
    playsInline: true,
    muted: true,
    loop: true
  }) : /*#__PURE__*/React.createElement("img", {
    src: cur.src,
    alt: cur.title
  }), /*#__PURE__*/React.createElement("figcaption", null, /*#__PURE__*/React.createElement("div", {
    className: "tl-head"
  }, cur.place && /*#__PURE__*/React.createElement("span", {
    className: "tl-place"
  }, cur.place), cur.when && /*#__PURE__*/React.createElement("span", {
    className: "tl-when"
  }, cur.when)), cur.title && /*#__PURE__*/React.createElement("div", {
    className: "tl-title"
  }, cur.title), cur.desc && /*#__PURE__*/React.createElement("p", {
    className: "tl-desc"
  }, cur.desc))), items.length > 1 && /*#__PURE__*/React.createElement("button", {
    className: "tl-nav next",
    "aria-label": "Next",
    onClick: e => {
      e.stopPropagation();
      setActive(i => (i + 1) % items.length);
    }
  }, /*#__PURE__*/React.createElement(LeafIcon, {
    active: true,
    className: "btn-leaf-bg"
  }), /*#__PURE__*/React.createElement(Arrow, {
    dir: "right"
  }))));
}
function AboutPage() {
  const nature = /*#__PURE__*/React.createElement(NatureBackdrop, null);
  return /*#__PURE__*/React.createElement("div", {
    className: "nature-page about-nature-page"
  }, nature, /*#__PURE__*/React.createElement("section", {
    className: "about page",
    "data-screen-label": "About"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "page-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "page-eyebrow"
  }, "About"), /*#__PURE__*/React.createElement("h1", {
    className: "page-title"
  }, "A bit about ", /*#__PURE__*/React.createElement("span", {
    className: "ital"
  }, "me"))), /*#__PURE__*/React.createElement("div", {
    className: "about-combined"
  }, /*#__PURE__*/React.createElement("div", {
    className: "about-intro"
  }, /*#__PURE__*/React.createElement("p", null, "I'm happiest outdoors \u2014 a quiet trail, a good viewpoint, somewhere to slow down and just look. I'm also a creature of habit. I'll run the exact same routine, every single day, and be perfectly content about it. ", /*#__PURE__*/React.createElement("span", {
    className: "about-wink"
  }, ":)")), /*#__PURE__*/React.createElement("p", null, "The one thing that breaks the routine is travel. I want to see as much of this planet as I possibly can. In robotics we have a word for it, ", /*#__PURE__*/React.createElement("em", null, "exploration"), " \u2014 pushing an agent out to fill in the unknown parts of a map. This globe is mine. Every dot is a place I've actually stood, and I'm nowhere near done filling it in.")), /*#__PURE__*/React.createElement(ContactGlobe, null)))), /*#__PURE__*/React.createElement(TripGallery, null), /*#__PURE__*/React.createElement(MountainLandscape, null));
}
function NatureBackdrop() {
  return /*#__PURE__*/React.createElement("div", {
    className: "nature-backdrop",
    "aria-hidden": "true"
  }, Array.from({
    length: 14
  }).map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: `maple-leaf leaf-${i + 1}`
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 124",
    focusable: "false",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    className: "leaf-stem",
    d: "M47 87 53 87 51 121 49 121Z"
  }), /*#__PURE__*/React.createElement("path", {
    className: "leaf-blade",
    d: "M50 6 58 28 67 22 61 41 90 33 68 55 85 75 60 77 57 90 43 90 40 77 15 75 32 55 10 33 39 41 33 22 42 28Z"
  }), /*#__PURE__*/React.createElement("path", {
    className: "leaf-veins",
    d: "M50 86V12 M50 70 86 36 M50 78 80 72 M50 70 14 36 M50 78 20 72"
  })))));
}

// Realistic 3D mountain footer — procedural displaced terrain (elevation-coloured
// green slopes → rock → snow), atmospheric haze, a sky and a sun rising behind the range.
function buildMountainFooter({
  scene,
  camera,
  renderer
}) {
  renderer.setClearColor(0x000000, 0);
  const disposables = [];
  const track = o => {
    disposables.push(o);
    return o;
  };

  // ---- value-noise + ridged fractal for the heightfield ----
  const hash = (x, y) => {
    const s = Math.sin(x * 127.1 + y * 311.7) * 43758.5453;
    return s - Math.floor(s);
  };
  const vnoise = (x, y) => {
    const xi = Math.floor(x),
      yi = Math.floor(y),
      xf = x - xi,
      yf = y - yi;
    const u = xf * xf * (3 - 2 * xf),
      v = yf * yf * (3 - 2 * yf);
    const a = hash(xi, yi),
      b = hash(xi + 1, yi),
      c = hash(xi, yi + 1),
      d = hash(xi + 1, yi + 1);
    return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
  };
  const ridged = (x, y, p) => {
    let val = 0,
      amp = 0.5,
      f = 1;
    for (let i = 0; i < 6; i++) {
      let n = vnoise(x * f + i * 7.3, y * f - i * 3.1);
      n = 1 - Math.abs(2 * n - 1);
      val += amp * Math.pow(n, p);
      amp *= 0.5;
      f *= 2.07;
    }
    return val;
  };
  const ampZ = z => 1.6 + 20 * Math.exp(-Math.pow((z + 15) / 18, 2)); // tall range mid-scene, low valley + far
  const heightAt = (x, z) => ridged(x * 0.03 + 10, z * 0.05 + 5, 2.4) * ampZ(z) + ridged(x * 0.10 + 2, z * 0.12 - 4, 3.0) * 2.4 // crisp mid-frequency ridges → definition
  + vnoise(x * 0.02 - 3, z * 0.02 + 8) * 0.8;

  // ---- sky + atmospheric fog ----
  const skyC = document.createElement("canvas");
  skyC.width = 8;
  skyC.height = 256;
  const sc = skyC.getContext("2d");
  const sg = sc.createLinearGradient(0, 0, 0, 256);
  sg.addColorStop(0, "#9ec9ec");
  sg.addColorStop(0.5, "#c2e0ee");
  sg.addColorStop(0.8, "#dcefe9");
  sg.addColorStop(1, "#e9f4ea");
  sc.fillStyle = sg;
  sc.fillRect(0, 0, 8, 256);
  scene.background = track(new THREE.CanvasTexture(skyC));
  scene.fog = new THREE.Fog(0xdcece4, 28, 96);
  camera.fov = 40;
  camera.position.set(0, 6.6, 20);
  camera.updateProjectionMatrix();
  camera.lookAt(0, 8.5, -16); // Look higher to crop bottom 25%

  scene.add(new THREE.HemisphereLight(0xffffff, 0x9fb39a, 0.8));
  const sunLight = new THREE.DirectionalLight(0xfff0d2, 2.2); // strong key light → crisp relief
  sunLight.position.set(-16, 14, 7);
  scene.add(sunLight);
  scene.add(new THREE.AmbientLight(0xdfeef0, 0.22));

  // ---- displaced terrain, elevation-coloured ----
  const geo = track(new THREE.PlaneGeometry(160, 130, 260, 200));
  geo.rotateX(-Math.PI / 2);
  const pos = geo.attributes.position;
  const col = new Float32Array(pos.count * 3);
  const cMeadow = new THREE.Color(0x8aac63),
    cForest = new THREE.Color(0x4f8a4c),
    cHigh = new THREE.Color(0x3a6b40),
    cRock = new THREE.Color(0x8c9081),
    cSnow = new THREE.Color(0xf4f9f4);
  const outC = new THREE.Color(),
    baseC = new THREE.Color();
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i),
      z = pos.getZ(i);
    const h = heightAt(x, z);
    pos.setY(i, h);
    const dd = 0.7,
      hx = heightAt(x + dd, z) - heightAt(x - dd, z),
      hz = heightAt(x, z + dd) - heightAt(x, z - dd);
    const slope = Math.sqrt(hx * hx + hz * hz) / (2 * dd);
    if (h < 5) baseC.copy(cMeadow).lerp(cForest, h / 5);else if (h < 10) baseC.copy(cForest).lerp(cHigh, (h - 5) / 5);else if (h < 13) baseC.copy(cHigh).lerp(cRock, (h - 10) / 3);else baseC.copy(cRock).lerp(cSnow, Math.min(1, (h - 13) / 2.5));
    outC.copy(baseC);
    outC.lerp(cRock, Math.min(0.4, Math.max(0, slope - 1.15) * 0.4)); // steep faces → rock
    if (h > 12 && slope < 0.8) outC.lerp(cSnow, 0.6); // flat high → snow
    col[i * 3] = outC.r;
    col[i * 3 + 1] = outC.g;
    col[i * 3 + 2] = outC.b;
  }
  geo.setAttribute("color", new THREE.BufferAttribute(col, 3));
  geo.computeVertexNormals();
  scene.add(new THREE.Mesh(geo, track(new THREE.MeshStandardMaterial({
    vertexColors: true,
    roughness: 0.97,
    metalness: 0
  }))));

  // ---- shining sun: golden disc rising behind the range ----
  const sunPos = new THREE.Vector3(-12, 20.5, -30);
  const disc = new THREE.Mesh(track(new THREE.CircleGeometry(2.0, 40)), track(new THREE.MeshBasicMaterial({
    color: 0xffe9a6,
    fog: false,
    transparent: true
  })));
  disc.position.copy(sunPos);
  disc.renderOrder = 1;
  scene.add(disc);
  return {
    update(t) {},
    dispose() {
      scene.background = null;
      disposables.forEach(d => d.dispose && d.dispose());
    }
  };
}
function MountainLandscape() {
  return /*#__PURE__*/React.createElement(ThreeScene, {
    className: "mountain-3d",
    build: buildMountainFooter
  });
}

// ===== Shared noise utilities for all mountain scenes =====
const _mHash = (x, y) => {
  const s = Math.sin(x * 127.1 + y * 311.7) * 43758.5453;
  return s - Math.floor(s);
};
const _mNoise = (x, y) => {
  const xi = Math.floor(x),
    yi = Math.floor(y),
    xf = x - xi,
    yf = y - yi;
  const u = xf * xf * (3 - 2 * xf),
    v = yf * yf * (3 - 2 * yf);
  const a = _mHash(xi, yi),
    b = _mHash(xi + 1, yi),
    c = _mHash(xi, yi + 1),
    d = _mHash(xi + 1, yi + 1);
  return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
};
const _mRidged = (x, y, p, oct) => {
  let val = 0,
    amp = 0.5,
    f = 1;
  for (let i = 0; i < (oct || 6); i++) {
    let n = _mNoise(x * f + i * 7.3, y * f - i * 3.1);
    n = 1 - Math.abs(2 * n - 1);
    val += amp * Math.pow(n, p);
    amp *= 0.5;
    f *= 2.07;
  }
  return val;
};
const _mSmooth = (x, y, oct) => {
  let val = 0,
    amp = 0.5,
    f = 1;
  for (let i = 0; i < (oct || 5); i++) {
    val += amp * _mNoise(x * f + i * 5.1, y * f - i * 2.7);
    amp *= 0.48;
    f *= 2.03;
  }
  return val;
};

// Helper: build a sky canvas texture from gradient stops
function _makeSky(stops) {
  const c = document.createElement("canvas");
  c.width = 8;
  c.height = 256;
  const ctx = c.getContext("2d");
  const g = ctx.createLinearGradient(0, 0, 0, 256);
  stops.forEach(([pos, col]) => g.addColorStop(pos, col));
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 8, 256);
  return c;
}

// Helper: build soft billboard clouds
function _makeClouds(scene, track, count, opts) {
  const {
    yBase,
    yRand,
    zBase,
    zRand,
    xSpread,
    scaleW,
    scaleH,
    opacity,
    color
  } = {
    yBase: 12,
    yRand: 3,
    zBase: -22,
    zRand: 6,
    xSpread: 20,
    scaleW: 20,
    scaleH: 10,
    opacity: 0.82,
    color: [255, 255, 255],
    ...opts
  };
  const cloudTex = (() => {
    const c = document.createElement("canvas");
    c.width = 256;
    c.height = 128;
    const g = c.getContext("2d");
    for (let k = 0; k < 7; k++) {
      const cx = 40 + Math.random() * 176,
        cy = 54 + Math.random() * 30,
        r = 26 + Math.random() * 30;
      const rg = g.createRadialGradient(cx, cy, 0, cx, cy, r);
      const [cr, cg, cb] = color;
      rg.addColorStop(0, `rgba(${cr},${cg},${cb},0.95)`);
      rg.addColorStop(1, `rgba(${cr},${cg},${cb},0)`);
      g.fillStyle = rg;
      g.beginPath();
      g.arc(cx, cy, r, 0, 7);
      g.fill();
    }
    return track(new THREE.CanvasTexture(c));
  })();
  const clouds = [];
  for (let i = 0; i < count; i++) {
    const sp = new THREE.Sprite(track(new THREE.SpriteMaterial({
      map: cloudTex,
      transparent: true,
      depthWrite: false,
      opacity,
      fog: false
    })));
    sp.scale.set(scaleW, scaleH, 1);
    sp.position.set(-xSpread + i * (2 * xSpread / count), yBase + Math.random() * yRand, zBase - Math.random() * zRand);
    clouds.push(sp);
    scene.add(sp);
  }
  return clouds;
}

// ===== 1. Waterfall Valley — Home page =====
function buildWaterfallValley({
  scene,
  camera,
  renderer
}) {
  renderer.setClearColor(0x000000, 0);
  const disposables = [];
  const track = o => {
    disposables.push(o);
    return o;
  };

  // Terrain: lush valley with natural gullies where waterfalls form
  const ampZ = z => 2.4 + 18 * Math.exp(-Math.pow((z + 12) / 16, 2));
  // Noise-based drainage channels — natural gully paths
  const gully = (x, z) => {
    const g1 = Math.exp(-Math.pow((_mNoise(x * 0.06 + 1.5, z * 0.02 + 3.0) - 0.5) * 6, 2));
    const g2 = Math.exp(-Math.pow((_mNoise(x * 0.04 - 2.3, z * 0.03 + 7.1) - 0.48) * 5.5, 2));
    const g3 = Math.exp(-Math.pow((_mNoise(x * 0.05 + 4.2, z * 0.025 - 1.8) - 0.52) * 6.5, 2));
    return Math.max(g1, g2, g3);
  };
  const heightAt = (x, z) => {
    const valleyW = 14;
    const valleyFactor = Math.min(1, Math.pow(Math.abs(x) / valleyW, 1.8));
    const base = _mRidged(x * 0.025 + 3, z * 0.04 + 7, 2.6) * ampZ(z) * (0.35 + 0.65 * valleyFactor);
    const detail = _mRidged(x * 0.07 + 1, z * 0.09 - 2, 2.5) * 2.2;
    const micro = _mSmooth(x * 0.18 + 5, z * 0.16 - 7, 3) * 0.6;
    const broad = _mSmooth(x * 0.015 - 1, z * 0.02 + 4) * 1.2;
    // Carve gullies slightly into the terrain
    const g = gully(x, z);
    const carve = g > 0.3 ? (g - 0.3) * 1.8 : 0;
    return base + detail + micro + broad - carve;
  };

  // Misty morning sky
  const skyTex = track(new THREE.CanvasTexture(_makeSky([[0, "#a8d5e2"], [0.35, "#c5e4d9"], [0.6, "#d8efe0"], [0.85, "#e4f5e8"], [1, "#edf8ed"]])));
  scene.background = skyTex;
  scene.fog = new THREE.Fog(0xd8efe0, 22, 85);
  camera.fov = 42;
  camera.position.set(0, 8.2, 22);
  camera.updateProjectionMatrix();
  camera.lookAt(0, 7.5, -18); // Look higher to crop bottom 25%

  scene.add(new THREE.HemisphereLight(0xffffff, 0x8fb89a, 0.9));
  const sun = new THREE.DirectionalLight(0xfff5d6, 1.8);
  sun.position.set(-10, 16, 5);
  scene.add(sun);
  scene.add(new THREE.AmbientLight(0xe2f0e8, 0.25));

  // Terrain mesh with animated waterfall channels
  const geo = track(new THREE.PlaneGeometry(160, 130, 280, 220));
  geo.rotateX(-Math.PI / 2);
  const pos = geo.attributes.position;
  const col = new Float32Array(pos.count * 3);
  const cMeadow = new THREE.Color(0x72b858),
    cLushGrass = new THREE.Color(0x5a9e48),
    cForest = new THREE.Color(0x3d7a3e),
    cDeepGreen = new THREE.Color(0x2a5c30),
    cEarth = new THREE.Color(0x6a7a5a),
    cCliff = new THREE.Color(0x7a8872),
    cHighMoss = new THREE.Color(0x9aaa82),
    cHaze = new THREE.Color(0xc0d8c4);
  // Waterfall colors — white foam with subtle green-teal tint
  const cFoam = new THREE.Color(0xe8f4ee),
    cSpray = new THREE.Color(0xd5ebe0),
    cWetRock = new THREE.Color(0x4a6a4e);
  const outC = new THREE.Color(),
    baseC = new THREE.Color();

  // Track waterfall vertices for animation
  const wfVerts = []; // { idx, strength, h, z, baseR, baseG, baseB }

  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i),
      z = pos.getZ(i);
    const h = heightAt(x, z);
    pos.setY(i, h);
    const dd = 0.6,
      hx = heightAt(x + dd, z) - heightAt(x - dd, z),
      hz = heightAt(x, z + dd) - heightAt(x, z - dd);
    const slope = Math.sqrt(hx * hx + hz * hz) / (2 * dd);
    const g = gully(x, z);

    // Base vegetation coloring (clean, smooth gradients)
    if (h < 3) baseC.copy(cMeadow).lerp(cLushGrass, h / 3);else if (h < 6) baseC.copy(cLushGrass).lerp(cForest, (h - 3) / 3);else if (h < 9) baseC.copy(cForest).lerp(cDeepGreen, (h - 6) / 3);else if (h < 12) baseC.copy(cDeepGreen).lerp(cCliff, (h - 9) / 3);else baseC.copy(cCliff).lerp(cHaze, Math.min(1, (h - 12) / 4));
    outC.copy(baseC);
    outC.lerp(cEarth, Math.min(0.4, Math.max(0, slope - 0.8) * 0.35));
    outC.lerp(cCliff, Math.min(0.35, Math.max(0, slope - 1.4) * 0.4));
    if (h > 10 && slope < 0.6) outC.lerp(cHighMoss, 0.3);

    // Waterfall: where gully channel meets steep slope at mid-to-high elevation
    const isWaterfall = g > 0.35 && slope > 0.7 && h > 3.5 && h < 15;
    const isSplash = g > 0.3 && h < 4 && h > 1; // pool/splash zone at bottom
    if (isWaterfall) {
      const wStr = Math.min(1, (g - 0.35) / 0.3) * Math.min(1, (slope - 0.7) / 0.8);
      // Blend: steep + strong channel = more foam; less steep = wet rock
      outC.lerp(cWetRock, wStr * 0.3);
      outC.lerp(cFoam, wStr * 0.5);
      wfVerts.push({
        idx: i,
        strength: wStr,
        h,
        z,
        baseR: outC.r,
        baseG: outC.g,
        baseB: outC.b
      });
    } else if (isSplash) {
      const sStr = Math.min(1, (g - 0.3) / 0.35) * 0.35;
      outC.lerp(cSpray, sStr);
    }
    col[i * 3] = outC.r;
    col[i * 3 + 1] = outC.g;
    col[i * 3 + 2] = outC.b;
  }
  const colAttr = new THREE.BufferAttribute(col, 3);
  geo.setAttribute("color", colAttr);
  geo.computeVertexNormals();
  scene.add(new THREE.Mesh(geo, track(new THREE.MeshStandardMaterial({
    vertexColors: true,
    roughness: 0.95,
    metalness: 0
  }))));

  // Pre-compute static foam/spray colors for animation blending
  const foamR = cFoam.r,
    foamG = cFoam.g,
    foamB = cFoam.b;
  return {
    update(t) {
      // Animate waterfall vertices — flowing shimmer effect
      const arr = colAttr.array;
      for (let w = 0; w < wfVerts.length; w++) {
        const v = wfVerts[w];
        // Flow pattern: noise that scrolls downward over time (using z + time offset)
        const flow = _mNoise(v.h * 0.8 + t * 1.2 + v.z * 0.05, v.z * 0.15 - t * 0.8);
        // Shimmer: high-frequency sparkle
        const sparkle = _mNoise(v.h * 2.5 + t * 3.0, v.z * 0.3 + t * 1.5);
        // Combine: base color ↔ foam, modulated by flow + sparkle
        const blend = v.strength * (0.3 + flow * 0.5 + sparkle * 0.2);
        const i3 = v.idx * 3;
        arr[i3] = v.baseR + (foamR - v.baseR) * blend;
        arr[i3 + 1] = v.baseG + (foamG - v.baseG) * blend;
        arr[i3 + 2] = v.baseB + (foamB - v.baseB) * blend;
      }
      if (wfVerts.length) colAttr.needsUpdate = true;
    },
    dispose() {
      scene.background = null;
      disposables.forEach(d => d.dispose && d.dispose());
    }
  };
}
function MountainHome() {
  return /*#__PURE__*/React.createElement(ThreeScene, {
    className: "mountain-3d mountain-home",
    build: buildWaterfallValley
  });
}

// ===== 2. Snowy Peaks — Research page =====
function buildSnowyPeaks({
  scene,
  camera,
  renderer
}) {
  renderer.setClearColor(0x000000, 0);
  const disposables = [];
  const track = o => {
    disposables.push(o);
    return o;
  };

  // Tall, sharp alpine ridges with heavy snow
  const ampZ = z => 2.0 + 24 * Math.exp(-Math.pow((z + 14) / 20, 2));
  const heightAt = (x, z) => {
    const r = _mRidged(x * 0.028 + 5, z * 0.045 + 2, 3.0) * ampZ(z);
    const sharp = _mRidged(x * 0.12 + 4, z * 0.14 - 1, 3.5) * 2.8;
    const broad = _mSmooth(x * 0.018 - 5, z * 0.015 + 3) * 1.0;
    return r + sharp + broad;
  };

  // Crisp winter sky
  const skyTex = track(new THREE.CanvasTexture(_makeSky([[0, "#b0d4e8"], [0.3, "#c8dfe8"], [0.6, "#dce9e6"], [0.85, "#e6f0ea"], [1, "#eef5ef"]])));
  scene.background = skyTex;
  scene.fog = new THREE.Fog(0xe2ecea, 30, 100);
  camera.fov = 38;
  camera.position.set(0, 7.5, 21);
  camera.updateProjectionMatrix();
  camera.lookAt(0, 9.5, -18); // Look higher to crop bottom 25%

  scene.add(new THREE.HemisphereLight(0xffffff, 0x9abaaa, 0.7));
  const keyLight = new THREE.DirectionalLight(0xfff8e0, 2.4);
  keyLight.position.set(-14, 18, 8);
  scene.add(keyLight);
  scene.add(new THREE.AmbientLight(0xd8eae4, 0.2));

  // Terrain: evergreen base → alpine meadow → rock → heavy snow
  const geo = track(new THREE.PlaneGeometry(160, 130, 260, 200));
  geo.rotateX(-Math.PI / 2);
  const pos = geo.attributes.position;
  const col = new Float32Array(pos.count * 3);
  const cPine = new THREE.Color(0x3a6b42),
    cAlpine = new THREE.Color(0x5a8a55),
    cTreeline = new THREE.Color(0x4a7a4a),
    cRock = new THREE.Color(0x8a9580),
    cSnow = new THREE.Color(0xf0f7f2),
    cIce = new THREE.Color(0xe5f0f2);
  const outC = new THREE.Color(),
    baseC = new THREE.Color();
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i),
      z = pos.getZ(i);
    const h = heightAt(x, z);
    pos.setY(i, h);
    const dd = 0.7,
      hx = heightAt(x + dd, z) - heightAt(x - dd, z),
      hz = heightAt(x, z + dd) - heightAt(x, z - dd);
    const slope = Math.sqrt(hx * hx + hz * hz) / (2 * dd);
    if (h < 3) baseC.copy(cPine).lerp(cAlpine, h / 3);else if (h < 6) baseC.copy(cAlpine).lerp(cTreeline, (h - 3) / 3);else if (h < 10) baseC.copy(cTreeline).lerp(cRock, (h - 6) / 4);else if (h < 13) baseC.copy(cRock).lerp(cSnow, (h - 10) / 3);else baseC.copy(cSnow).lerp(cIce, Math.min(1, (h - 13) / 3));
    outC.copy(baseC);
    outC.lerp(cRock, Math.min(0.5, Math.max(0, slope - 1.1) * 0.5));
    // Heavy snow on flat high areas
    if (h > 9 && slope < 0.7) outC.lerp(cSnow, 0.75);else if (h > 7 && slope < 0.5) outC.lerp(cSnow, 0.35);
    col[i * 3] = outC.r;
    col[i * 3 + 1] = outC.g;
    col[i * 3 + 2] = outC.b;
  }
  geo.setAttribute("color", new THREE.BufferAttribute(col, 3));
  geo.computeVertexNormals();
  scene.add(new THREE.Mesh(geo, track(new THREE.MeshStandardMaterial({
    vertexColors: true,
    roughness: 0.94,
    metalness: 0
  }))));
  return {
    update(t) {},
    dispose() {
      scene.background = null;
      disposables.forEach(d => d.dispose && d.dispose());
    }
  };
}
function MountainResearch() {
  return /*#__PURE__*/React.createElement(ThreeScene, {
    className: "mountain-3d mountain-research",
    build: buildSnowyPeaks
  });
}

// ===== 3. Mossy Cliffs — Publications page =====
function buildMossyCliffs({
  scene,
  camera,
  renderer
}) {
  renderer.setClearColor(0x000000, 0);
  const disposables = [];
  const track = o => {
    disposables.push(o);
    return o;
  };

  // Steep mossy cliff formations
  const ampZ = z => 1.8 + 16 * Math.exp(-Math.pow((z + 10) / 14, 2));
  const heightAt = (x, z) => {
    const cliff = _mRidged(x * 0.035 + 8, z * 0.055 + 1, 2.2) * ampZ(z);
    const crag = _mRidged(x * 0.14 - 3, z * 0.12 + 6, 3.2) * 3.0;
    const base = _mSmooth(x * 0.02 + 2, z * 0.025 - 3) * 0.9;
    return cliff + crag + base;
  };

  // Overcast sky — moody greens
  const skyTex = track(new THREE.CanvasTexture(_makeSky([[0, "#97b5a6"], [0.3, "#aec5b4"], [0.55, "#c2d5c4"], [0.8, "#d5e2d4"], [1, "#e0ebe0"]])));
  scene.background = skyTex;
  scene.fog = new THREE.Fog(0xc8dbc8, 24, 80);
  camera.fov = 44;
  camera.position.set(0, 7.0, 19);
  camera.updateProjectionMatrix();
  camera.lookAt(0, 8.0, -15); // Look higher to crop bottom 25%

  // Soft diffuse lighting — overcast feel
  scene.add(new THREE.HemisphereLight(0xe0e8e0, 0x7a9a78, 1.0));
  const fill = new THREE.DirectionalLight(0xe8eed6, 1.2);
  fill.position.set(-8, 12, 6);
  scene.add(fill);
  scene.add(new THREE.AmbientLight(0xd0e0d0, 0.35));
  const geo = track(new THREE.PlaneGeometry(160, 130, 260, 200));
  geo.rotateX(-Math.PI / 2);
  const pos = geo.attributes.position;
  const col = new Float32Array(pos.count * 3);
  const cMoss = new THREE.Color(0x5a8a4a),
    cDeepMoss = new THREE.Color(0x3a6a35),
    cWetRock = new THREE.Color(0x6a7a68),
    cDarkCliff = new THREE.Color(0x5a6a58),
    cLichen = new THREE.Color(0x88a878),
    cDampEarth = new THREE.Color(0x5a6e50),
    cPaleMoss = new THREE.Color(0x7a9a6a);
  const outC = new THREE.Color(),
    baseC = new THREE.Color();
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i),
      z = pos.getZ(i);
    const h = heightAt(x, z);
    pos.setY(i, h);
    const dd = 0.6,
      hx = heightAt(x + dd, z) - heightAt(x - dd, z),
      hz = heightAt(x, z + dd) - heightAt(x, z - dd);
    const slope = Math.sqrt(hx * hx + hz * hz) / (2 * dd);

    // Base vegetation/moss (clean gradient)
    if (h < 4) baseC.copy(cMoss).lerp(cDeepMoss, h / 4);else if (h < 8) baseC.copy(cDeepMoss).lerp(cLichen, (h - 4) / 4);else if (h < 12) baseC.copy(cLichen).lerp(cWetRock, (h - 8) / 4);else baseC.copy(cWetRock).lerp(cDarkCliff, Math.min(1, (h - 12) / 3));
    outC.copy(baseC);
    // Steep faces → dark wet rock with damp earth
    outC.lerp(cDampEarth, Math.min(0.35, Math.max(0, slope - 0.8) * 0.35));
    outC.lerp(cDarkCliff, Math.min(0.5, Math.max(0, slope - 1.3) * 0.45));
    // Flat areas → moss patches
    if (slope < 0.4 && h < 10) outC.lerp(cMoss, 0.45);
    // Mid-height lichen variation
    if (h > 5 && h < 10 && slope < 0.8) outC.lerp(cPaleMoss, 0.1);
    col[i * 3] = outC.r;
    col[i * 3 + 1] = outC.g;
    col[i * 3 + 2] = outC.b;
  }
  geo.setAttribute("color", new THREE.BufferAttribute(col, 3));
  geo.computeVertexNormals();
  scene.add(new THREE.Mesh(geo, track(new THREE.MeshStandardMaterial({
    vertexColors: true,
    roughness: 0.98,
    metalness: 0
  }))));
  return {
    update(t) {},
    dispose() {
      scene.background = null;
      disposables.forEach(d => d.dispose && d.dispose());
    }
  };
}
function MountainPublications() {
  return /*#__PURE__*/React.createElement(ThreeScene, {
    className: "mountain-3d mountain-publications",
    build: buildMossyCliffs
  });
}

// ===== 4. Rolling Hills — Milestones page =====
function buildRollingHills({
  scene,
  camera,
  renderer
}) {
  renderer.setClearColor(0x000000, 0);
  const disposables = [];
  const track = o => {
    disposables.push(o);
    return o;
  };

  // Gentle rolling terrain — soft, pastoral
  const ampZ = z => 1.0 + 8 * Math.exp(-Math.pow((z + 12) / 22, 2));
  const heightAt = (x, z) => {
    const roll = _mSmooth(x * 0.022 + 6, z * 0.03 + 4, 5) * ampZ(z) * 1.4;
    const gentle = _mSmooth(x * 0.06 + 1, z * 0.08 - 2, 4) * 2.5;
    const far = _mRidged(x * 0.015 - 4, z * 0.025 + 8, 2.0) * ampZ(z) * 0.5;
    // Distant taller ridges
    const distFactor = Math.max(0, (-z - 20) / 30);
    return roll + gentle + far + distFactor * 6;
  };

  // Blue sky gradient to match milestones journey end
  const skyTex = track(new THREE.CanvasTexture(_makeSky([[0, "#6fb1e8"], [0.35, "#a7d2f2"], [0.65, "#cbe3f7"], [0.9, "#d8edfa"], [1, "#eef7fc"]])));
  scene.background = skyTex;
  scene.fog = new THREE.Fog(0xd8edfa, 28, 95);
  camera.fov = 40;
  camera.position.set(0, 5.5, 22);
  camera.updateProjectionMatrix();
  camera.lookAt(0, 6.5, -20); // Look higher to crop bottom 25%

  scene.add(new THREE.HemisphereLight(0xffffff, 0x9abaaa, 0.85));
  const goldenSun = new THREE.DirectionalLight(0xfff5d6, 1.8);
  goldenSun.position.set(-18, 10, 4);
  scene.add(goldenSun);
  scene.add(new THREE.AmbientLight(0xeef7fc, 0.25));
  const geo = track(new THREE.PlaneGeometry(160, 130, 260, 200));
  geo.rotateX(-Math.PI / 2);
  const pos = geo.attributes.position;
  const col = new Float32Array(pos.count * 3);
  const cGrass = new THREE.Color(0x7ab862),
    cMeadow = new THREE.Color(0x68a856),
    cDarkGreen = new THREE.Color(0x4a8a3e),
    cDistant = new THREE.Color(0x6a9a8a),
    cHaze = new THREE.Color(0xb5ccba);
  const outC = new THREE.Color(),
    baseC = new THREE.Color();
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i),
      z = pos.getZ(i);
    const h = heightAt(x, z);
    pos.setY(i, h);
    const dd = 0.7,
      hx = heightAt(x + dd, z) - heightAt(x - dd, z),
      hz = heightAt(x, z + dd) - heightAt(x, z - dd);
    const slope = Math.sqrt(hx * hx + hz * hz) / (2 * dd);
    if (h < 3) baseC.copy(cGrass).lerp(cMeadow, h / 3);else if (h < 6) baseC.copy(cMeadow).lerp(cDarkGreen, (h - 3) / 3);else if (h < 10) baseC.copy(cDarkGreen).lerp(cDistant, (h - 6) / 4);else baseC.copy(cDistant).lerp(cHaze, Math.min(1, (h - 10) / 5));
    outC.copy(baseC);
    // Distance atmospheric fade
    const distFade = Math.max(0, Math.min(1, (-z - 15) / 40));
    outC.lerp(cHaze, distFade * 0.5);
    col[i * 3] = outC.r;
    col[i * 3 + 1] = outC.g;
    col[i * 3 + 2] = outC.b;
  }
  geo.setAttribute("color", new THREE.BufferAttribute(col, 3));
  geo.computeVertexNormals();
  scene.add(new THREE.Mesh(geo, track(new THREE.MeshStandardMaterial({
    vertexColors: true,
    roughness: 0.96,
    metalness: 0
  }))));
  return {
    update(t) {},
    dispose() {
      scene.background = null;
      disposables.forEach(d => d.dispose && d.dispose());
    }
  };
}
function MountainMilestones() {
  return /*#__PURE__*/React.createElement(ThreeScene, {
    className: "mountain-3d mountain-milestones",
    build: buildRollingHills
  });
}

// ===== 5. Misty Forest Ridge — Blog Reader =====
function buildMistyForestRidge({
  scene,
  camera,
  renderer
}) {
  renderer.setClearColor(0x000000, 0);
  const disposables = [];
  const track = o => {
    disposables.push(o);
    return o;
  };

  // Dark forested ridge, subdued
  const ampZ = z => 1.5 + 12 * Math.exp(-Math.pow((z + 13) / 16, 2));
  const heightAt = (x, z) => {
    const ridge = _mRidged(x * 0.03 + 12, z * 0.04 + 9, 2.4) * ampZ(z);
    const trees = _mSmooth(x * 0.1 + 3, z * 0.08 - 5, 5) * 1.8;
    const wave = _mSmooth(x * 0.015 - 2, z * 0.02 + 6) * 1.0;
    return ridge + trees + wave;
  };

  // Subdued misty sky
  const skyTex = track(new THREE.CanvasTexture(_makeSky([[0, "#9ab0a4"], [0.3, "#b0c4b4"], [0.55, "#c4d4c4"], [0.8, "#d6e0d4"], [1, "#e2eae0"]])));
  scene.background = skyTex;
  scene.fog = new THREE.Fog(0xc4d4c4, 20, 72);
  camera.fov = 42;
  camera.position.set(0, 6.8, 20);
  camera.updateProjectionMatrix();
  camera.lookAt(0, 7.5, -16); // Look higher to crop bottom 25%

  scene.add(new THREE.HemisphereLight(0xe0e8e0, 0x6a8a68, 0.85));
  const soft = new THREE.DirectionalLight(0xe8e8d8, 1.0);
  soft.position.set(-6, 10, 5);
  scene.add(soft);
  scene.add(new THREE.AmbientLight(0xd0dcd0, 0.3));
  const geo = track(new THREE.PlaneGeometry(160, 130, 260, 200));
  geo.rotateX(-Math.PI / 2);
  const pos = geo.attributes.position;
  const col = new Float32Array(pos.count * 3);
  const cDarkForest = new THREE.Color(0x2e5a32),
    cForest = new THREE.Color(0x3a6a3a),
    cCanopy = new THREE.Color(0x4a7a48),
    cMossRock = new THREE.Color(0x6a7a65),
    cMistGreen = new THREE.Color(0xb0c8b4);
  const outC = new THREE.Color(),
    baseC = new THREE.Color();
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i),
      z = pos.getZ(i);
    const h = heightAt(x, z);
    pos.setY(i, h);
    const dd = 0.7,
      hx = heightAt(x + dd, z) - heightAt(x - dd, z),
      hz = heightAt(x, z + dd) - heightAt(x, z - dd);
    const slope = Math.sqrt(hx * hx + hz * hz) / (2 * dd);
    if (h < 3) baseC.copy(cDarkForest).lerp(cForest, h / 3);else if (h < 7) baseC.copy(cForest).lerp(cCanopy, (h - 3) / 4);else if (h < 11) baseC.copy(cCanopy).lerp(cMossRock, (h - 7) / 4);else baseC.copy(cMossRock).lerp(cMistGreen, Math.min(1, (h - 11) / 4));
    outC.copy(baseC);
    outC.lerp(cMossRock, Math.min(0.35, Math.max(0, slope - 1.0) * 0.4));
    // Fog blend for distance
    const fogFade = Math.max(0, Math.min(1, (-z - 10) / 35));
    outC.lerp(cMistGreen, fogFade * 0.45);
    col[i * 3] = outC.r;
    col[i * 3 + 1] = outC.g;
    col[i * 3 + 2] = outC.b;
  }
  geo.setAttribute("color", new THREE.BufferAttribute(col, 3));
  geo.computeVertexNormals();
  scene.add(new THREE.Mesh(geo, track(new THREE.MeshStandardMaterial({
    vertexColors: true,
    roughness: 0.97,
    metalness: 0
  }))));
  return {
    update(t) {},
    dispose() {
      scene.background = null;
      disposables.forEach(d => d.dispose && d.dispose());
    }
  };
}
function MountainBlogReader() {
  return /*#__PURE__*/React.createElement(ThreeScene, {
    className: "mountain-3d mountain-blog-reader",
    build: buildMistyForestRidge
  });
}
function BlogList({
  openPost
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "blog-page nature-page blog-nature-page",
    "data-screen-label": "Blog"
  }, /*#__PURE__*/React.createElement(NatureBackdrop, null), /*#__PURE__*/React.createElement("div", {
    className: "container nature-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "page-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "page-eyebrow"
  }, "Writing"), /*#__PURE__*/React.createElement("h1", {
    className: "page-title"
  }, "Blog"), /*#__PURE__*/React.createElement("p", {
    className: "page-lede"
  }, "Notes on robots, perception, and the messy gap between a language plan and the physical world it has to survive.")), /*#__PURE__*/React.createElement("div", {
    className: "blog-grid"
  }, BLOG_POSTS.map((p, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: p.id,
    delay: i * 70
  }, /*#__PURE__*/React.createElement("div", {
    className: "blog-card",
    onClick: () => openPost(p.id)
  }, /*#__PURE__*/React.createElement("span", {
    className: "blog-aurora",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "meta"
  }, /*#__PURE__*/React.createElement("span", null, p.category), /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), /*#__PURE__*/React.createElement("span", null, p.date), /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), /*#__PURE__*/React.createElement("span", null, p.readTime)), /*#__PURE__*/React.createElement("h3", null, p.title), /*#__PURE__*/React.createElement("p", null, p.excerpt), /*#__PURE__*/React.createElement("span", {
    className: "arrow"
  }, "Read ", /*#__PURE__*/React.createElement(Arrow, {
    dir: "right"
  }))))))), /*#__PURE__*/React.createElement(MountainLandscape, null));
}
function BlogReader({
  postId,
  back
}) {
  const post = BLOG_POSTS.find(p => p.id === postId);
  if (!post) {
    return /*#__PURE__*/React.createElement("div", {
      className: "blog-reader"
    }, /*#__PURE__*/React.createElement("a", {
      onClick: back,
      className: "blog-back",
      style: {
        cursor: "pointer"
      }
    }, /*#__PURE__*/React.createElement(Arrow, {
      dir: "left"
    }), " Back"), /*#__PURE__*/React.createElement("p", null, "Post not found."));
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("article", {
    className: "blog-reader",
    "data-screen-label": `Blog: ${post.title}`
  }, /*#__PURE__*/React.createElement("a", {
    onClick: back,
    className: "blog-back",
    style: {
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(Arrow, {
    dir: "left"
  }), " Back to blog"), /*#__PURE__*/React.createElement("div", {
    className: "reader-meta"
  }, post.category, " \xB7 ", post.date, " \xB7 ", post.readTime), /*#__PURE__*/React.createElement("h1", null, post.title), /*#__PURE__*/React.createElement("div", null, post.body.map(([tag, content], i) => {
    if (tag === "h2") return /*#__PURE__*/React.createElement("h2", {
      key: i
    }, content);
    if (tag === "h3") return /*#__PURE__*/React.createElement("h3", {
      key: i
    }, content);
    if (tag === "blockquote") return /*#__PURE__*/React.createElement("blockquote", {
      key: i
    }, content);
    return /*#__PURE__*/React.createElement("p", {
      key: i
    }, content);
  }))), /*#__PURE__*/React.createElement(MountainBlogReader, null));
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
    label: "Milestones"
  }, {
    id: "about",
    label: "About"
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
    const [page, anchor] = h.split("/");
    return {
      page,
      post: null,
      anchor: anchor || null
    };
  };
  const [route, setRoute] = React.useState(parseHash(initial));
  React.useEffect(() => {
    const onHash = () => setRoute(parseHash(window.location.hash));
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  React.useEffect(() => {
    // Safe scroll-to-top — older Safari throws on { behavior: "instant" }.
    if (route.anchor) {
      window.requestAnimationFrame(() => {
        const target = document.getElementById(`research-${route.anchor}`);
        if (target) target.scrollIntoView({
          block: "start",
          behavior: "smooth"
        });
      });
      return;
    }
    try {
      window.scrollTo(0, 0);
    } catch (e) {/* no-op */}
  }, [route.page, route.post, route.anchor]);
  const go = (page, anchor) => {
    window.location.hash = page === "home" ? "" : `#/${page}${anchor ? `/${anchor}` : ""}`;
  };
  const openPost = id => {
    window.location.hash = `#/blog/${id}`;
  };
  const backToBlog = () => {
    window.location.hash = "#/blog";
  };
  let content;
  if (route.page === "research") content = /*#__PURE__*/React.createElement(ResearchPage, null);else if (route.page === "publications") content = /*#__PURE__*/React.createElement(PublicationsPage, null);else if (route.page === "updates") content = /*#__PURE__*/React.createElement(UpdatesPage, null);else if (route.page === "about" || route.page === "contact") content = /*#__PURE__*/React.createElement(AboutPage, null);else if (route.page === "blog") {
    content = route.post ? /*#__PURE__*/React.createElement(BlogReader, {
      postId: route.post,
      back: backToBlog
    }) : /*#__PURE__*/React.createElement(BlogList, {
      openPost: openPost
    });
  } else {
    // home (also catches the retired cv/resume routes)
    content = /*#__PURE__*/React.createElement(HomePage, {
      go: go
    });
  }

  // Every page now ends with a mountain landscape — hide the copyright footer bar.
  const hasRange = true;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Nav, {
    page: route.page,
    go: go,
    blogPostOpen: !!route.post
  }), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(ErrorBoundary, null, content)), !hasRange && /*#__PURE__*/React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));

