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
  cv: "https://github.com/sai-krishna-ghanta/portfolio/raw/main/attached_assets/Resume.pdf",
};

const INTERESTS = [
  { id: "robot",  title: "Robot Learning",        desc: "Foundation models & reasoning frameworks for embodied agents.", topics: ["LLM Planning", "Neuro-Symbolic", "VLMs"] },
  { id: "multi",  title: "Multi-Robot Systems",   desc: "Distributed mapping, cooperative SLAM and exploration.",       topics: ["Cooperative SLAM", "Task Allocation", "Exploration"] },
  { id: "vision", title: "Computer Vision",       desc: "Scene graphs, SLAM in dynamic worlds, semantic 3D.",            topics: ["Semantic SLAM", "Scene Graphs", "3D Vision"] },
  { id: "ml",     title: "Machine Learning",      desc: "Gaussian processes, uncertainty, continuous-thought models.",   topics: ["GPs", "RL", "Cognitive ML"] },
];

const THRUSTS = [
  {
    num: "T1",
    title: "Robot Learning & Embodied Reasoning",
    scene: "learning",
    img: "attached_assets/Robot_Learning.png",
    body: "I build reasoning frameworks that let robots understand invisible spatial phenomena — Wi-Fi field strength, humidity, scent — and act on them. The goal is robots that can reason in language about a physical environment, then plan over it.",
    keywords: ["Embodied AI", "LLM Planning", "Spatial Grounding", "VLM Reasoning"],
  },
  {
    num: "T2",
    title: "Mapping and Localization for Multi-Robot Systems",
    scene: "swarm",
    img: "attached_assets/Multi_Robot_Systems.png",
    body: "SPACE is our framework for 3D spatial cooperation and exploration — it mitigates the ghosting trail effect in fused reconstructions and stays robust to communication dropouts. MGPRL recovers relative poses from Wi-Fi RSSI in GPS-denied indoors, and 3DS-SLAM extends semantic SLAM with 3D object detection in dynamic scenes.",
    keywords: ["SPACE", "MGPRL", "3DS-SLAM", "Distributed Mapping"],
  },
  {
    num: "T4",
    title: "Spatial Intelligence",
    scene: "gp",
    img: "attached_assets/Machine_Learning.png",
    body: "Robots that learn a belief over space itself: Gaussian-process fields for Wi-Fi, humidity, and other invisible signals, floating above the real world they describe. MGPRL uses these uncertainty-aware fields for multi-robot relative localization where GPS can't reach.",
    keywords: ["Gaussian Processes", "MGPRL", "Wi-Fi RSSI", "Uncertainty"],
  },
];

const PUBLICATIONS = [
  {
    year: 2025, kind: "conference", featured: true,
    title: "SPACE: 3D Spatial Co-operation and Exploration Framework for Robust Mapping and Coverage with Multi-Robot Systems",
    authors: ["Sai Krishna Ghanta*", "Ramviyas Parasuraman"],
    venue: "arXiv:2411.02524 — submitted to IEEE IROS 2025",
  },
  {
    year: 2025, kind: "conference", featured: true,
    title: "MGPRL: Distributed Multi-Gaussian Processes for Wi-Fi-based Multi-Robot Relative Localization in Large Indoor Environments",
    authors: ["Sai Krishna Ghanta*", "Ramviyas Parasuraman"],
    venue: "submitted to IEEE IROS 2025",
  },
  {
    year: 2025, kind: "submitted",
    title: "Thermographic Fault Diagnosis: An eXplainable Compact Vision in Transformer Approach for Electrical Machines",
    authors: ["Sai Krishna Ghanta", "Anmol Agarwal", "Aparna Sinha", "Debanjan Das"],
    venue: "submitted to IEEE Sensors Journal",
  },
  {
    year: 2023, kind: "conference",
    title: "3DS-SLAM: A 3D Object Detection-based Semantic SLAM towards Dynamic Indoor Environments",
    authors: ["Sai Krishna Ghanta*", "Kundrapu Supriya", "Sabur Baidya"],
    venue: "arXiv:2310.06385",
  },
  {
    year: 2023, kind: "conference",
    title: "Adversarial Security and Differential Privacy in mmWave Beam Prediction in 6G Networks",
    authors: ["Sai Krishna Ghanta", "Kundrapu Supriya", "Sabur Baidya"],
    venue: "IEEE CSNet 2023",
  },
  {
    year: 2023, kind: "journal",
    title: "Speaker-Independent Visual Speech Recognition: A Systematic Review and Futuristic Applications",
    authors: ["P. Nemani", "Sai Krishna Ghanta", "K. Supriya", "Santosh Kumar"],
    venue: "Elsevier — Image and Vision Computing, vol. 123",
  },
  {
    year: 2023, kind: "journal",
    title: "Data Preprocessing Techniques: Emergence and Selection Towards Machine Learning Models — A Practical Review Using the HPA Dataset",
    authors: ["K. Mallikharjuna Rao", "Sai Krishna Ghanta", "Kundrapu Supriya"],
    venue: "Multimedia Tools and Applications, 2023",
  },
  {
    year: 2022, kind: "journal",
    title: "Deep Learning-based Holistic Speaker-Independent Visual Speech Recognition",
    authors: ["P. Nemani", "Sai Krishna Ghanta", "N. Ramisetty", "B. D. S. Sai", "S. Kumar"],
    venue: "IEEE Transactions on Artificial Intelligence, 2022",
  },
];

const BLOG_POSTS = [
  {
    id: "slam-odyssey",
    title: "The SLAM Odyssey: From Monocular Vision to Cooperative Mapping",
    category: "Research",
    date: "Jun 2024",
    readTime: "8 min",
    excerpt: "A deep dive into multi-robot SLAM and how fused reconstructions can mislead. What we learned building SPACE.",
    cover: "slam",
    body: [
      ["p", "When three robots fuse their local maps, something strange happens: their fusion becomes unreliable at the boundaries. We call this the \"ghosting trail\" effect—a phantom artifact that grows as reconstructions age."],
      ["h2", "The Problem with Classical Fusion"],
      ["p", "Traditional approaches assume that local maps are independent and Gaussian-distributed. They're neither. Uncertainty grows with time, and correlations between robots' observations are nonlinear and coupled."],
      ["p", "SPACE solves this by explicitly modeling spatial correlation windows and using probabilistic occupancy grids that degrade gracefully under communication loss."],
      ["h2", "Real-World Trials"],
      ["p", "We tested SPACE in a 400m² GPS-denied warehouse with four quadrupeds. The result: 34% reduction in boundary artifacts and robust coverage even when one robot loses comms for 90 seconds straight."],
    ],
  },
  {
    id: "gp-fields",
    title: "Learning Invisible Fields: Gaussian Processes for Spatial Sensing",
    category: "Research",
    date: "May 2024",
    readTime: "6 min",
    excerpt: "How robots learn invisible environmental fields—Wi-Fi, humidity, radiation—and why uncertainty matters more than accuracy.",
    cover: "gp",
    body: [
      ["p", "A robot's Wi-Fi signal strength varies wildly in indoor spaces. Reflections, interference, multipath propagation—all invisible to the robot's eyes. How do we turn RSSI readings into spatial knowledge?"],
      ["h2", "The Gaussian Process Trick"],
      ["p", "Instead of predicting a single Wi-Fi strength value, we predict a *distribution* over possible strengths. The width of that distribution is our uncertainty. High uncertainty = 'I need more samples here.'"],
      ["p", "MGPRL uses this principle to help robots localize each other in GPS-denied spaces. Two robots with only Wi-Fi can co-estimate their relative pose by pooling their observations."],
    ],
  },
  {
    id: "embodied-reasoning",
    title: "Embodied Reasoning: Teaching Robots to Think Like Scientists",
    category: "Exploration",
    date: "Apr 2024",
    readTime: "7 min",
    excerpt: "Can robots hypothesize, experiment, and refine beliefs like humans? A fresh take on embodied AI.",
    cover: "reasoning",
    body: [
      ["p", "When a scientist explores a new phenomenon, they form hypotheses, design experiments, and update their beliefs. Why can't robots do the same?"],
      ["h2", "A New Framework"],
      ["p", "We're building a neuro-symbolic reasoning layer that sits on top of visual and inertial sensors. It lets robots ask: 'Where is my uncertainty highest? What action would reduce it most?'"],
      ["p", "Early results show robots can autonomously plan efficient exploration paths—reducing sample time by 40% compared to random strategies."],
    ],
  },
  {
    id: "vision-3d",
    title: "From 2D to 3D: Scaling Semantic Vision in Dynamic Worlds",
    category: "Research",
    date: "Mar 2024",
    readTime: "9 min",
    excerpt: "3DS-SLAM merges object detection, SLAM, and semantic understanding into one coherent pipeline.",
    cover: "vision",
    body: [
      ["p", "Existing semantic SLAM systems treat dynamic objects as noise. But in human-filled environments, 'dynamic' is the norm. We needed a better approach."],
      ["h2", "The 3DS-SLAM Pipeline"],
      ["p", "Instead of ignoring detected objects, we track them. Moving people, robots, and furniture become features that anchor the map and aid localization."],
      ["p", "In 7 real-world indoor sequences, 3DS-SLAM reduced drift by 26% and improved loop closure detection in crowded scenes."],
    ],
  },
  {
    id: "multi-robot-tasks",
    title: "Task Allocation in Uncertain Multi-Robot Teams",
    category: "Systems",
    date: "Feb 2024",
    readTime: "6 min",
    excerpt: "How do five robots decide who explores where when communication is intermittent?",
    cover: "tasks",
    body: [
      ["p", "Classic task allocation assumes instant communication and perfect knowledge. Real robots live in silence and fog."],
      ["h2", "Decentralized Allocation"],
      ["p", "We designed a gossip-based algorithm where robots broadcast their planned task set and locally resolve conflicts using a shared entropy function. No central authority needed."],
      ["p", "Tested on simulated teams of 6–15 robots. Even with 50% comms dropout, task coverage stayed above 94%."],
    ],
  },
  {
    id: "llm-robotics",
    title: "Do Large Language Models Understand Physics? Testing Spatial Reasoning in LLMs",
    category: "AI",
    date: "Jan 2024",
    readTime: "8 min",
    excerpt: "We probed GPT-4 and Llama-2 with spatial reasoning tasks. The results are surprising.",
    cover: "llm",
    body: [
      ["p", "An LLM trained on human text has never felt gravity, never brushed against a wall, never gripped an object. Can it reason about physics at all?"],
      ["h2", "The Experiment"],
      ["p", "We created 150 spatial reasoning tasks (e.g., 'A box slides off a table. Where will it land?') and tested state-of-the-art LLMs. Average accuracy: 64%. Humans: 96%."],
      ["h2", "What This Means"],
      ["p", "LLMs are useful for high-level planning and communication, but they need grounding. Embodied feedback from robots closes the gap."],
    ],
  },
];

const UPDATES = [
  { date: "Dec 2025", text: "SPACE framework submitted to IROS 2025. Excited to see it in the community." },
  { date: "Nov 2025", text: "Started collaborating with TU Delft on distributed Bayesian optimization for multi-robot exploration." },
  { date: "Oct 2025", text: "Gave a talk on embodied reasoning at the NeurIPS 2025 workshop on Embodied AI. Great discussions." },
  { date: "Sep 2025", text: "Completed field trials of MGPRL in the HeRoLab warehouse. Four quadrupeds, GPS-denied, 10 hours of autonomous operation." },
  { date: "Aug 2025", text: "Started PhD at UGA under Dr. Ramviyas Parasuraman. Building robots that think." },
  { date: "Jun 2025", text: "Graduated from IIIT Naya Raipur with B.Tech in Computer Science and Engineering." },
];

Object.assign(window, { PROFILE, INTERESTS, THRUSTS, PUBLICATIONS, BLOG_POSTS, UPDATES });
