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
  cv: "attached_assets/Resume.pdf",
};

// Hero gallery — just photos of me (Profile_Pic.png is the main/first). Both are 4:5-ish.
// No location/caption overlays — clean images.
const HOME_GALLERY = [
  { src: "attached_assets/Profile_Pic.png" },
  { src: "attached_assets/profile_picture.jpeg" },
];

// About-page trip gallery. Mixed aspect ratios are fine — the masonry keeps
// each image's natural shape (portrait, landscape, square all work).
// To add a photo: drop the file into attached_assets/ and add an entry here.
//   kind:  "academic" (conferences, labs, fieldwork) | "personal" (travel)
//   place: short location line   title: short caption   desc: optional sentence
// Images & video live in attached_assets/Gallery/ (web-safe filenames).
// A .mp4 src is detected automatically and shown as a playable clip.
// Order: newest first — the strip scrolls from recent to older.
const TRIP_GALLERY = [
  { src: "attached_assets/Gallery/herolab-thanksgiving-2025.jpeg", place: "HeRoLab",
    title: "Thanksgiving with the lab", when: "Nov 2025", desc: "Thanksgiving lunch with the lab." },
  { src: "attached_assets/Gallery/The Romance of the Song Dynasty - IROS 2025 Hangzhou.mp4", place: "Hangzhou, China",
    title: "The Romance of the Song Dynasty", when: "Oct 2025", desc: "A spectacular performance at the Song Dynasty park during IROS 2025." },
  { src: "attached_assets/Gallery/iros-2025-hangzhou.jpeg", place: "Hangzhou, China",
    title: "IROS 2025", when: "Oct 2025", desc: "At the IROS conference in Hangzhou." },
  { src: "attached_assets/Gallery/aimans-farewell-2025.jpeg", place: "HeRoLab",
    title: "Aiman's farewell", when: "Jul 2025", desc: "Sending off a labmate." },
  { src: "attached_assets/Gallery/icra-2025-atlanta.mp4", place: "Atlanta, GA",
    title: "ICRA 2025", when: "May 2025", desc: "My first time watching live demonstrations of all kinds of robots." },
  { src: "attached_assets/Gallery/nsf-supercollider-2024-lexington.jpeg", place: "Lexington, KY",
    title: "NSF EPSCoR SuperCollider", when: "Apr 2024", desc: "The NSF EPSCoR SuperCollider convening." },
  { src: "attached_assets/Gallery/aimslab-louisville-2023.jpeg", place: "Louisville, KY",
    title: "AIMSLab", when: "Jan 2024", desc: "A great learning stretch with Dr. Sabur at the University of Louisville." },
  { src: "attached_assets/Gallery/tencon-2023.png", title: "IEEE TENCON 2023", when: "Oct 2023",
    desc: "The IEEE Region 10 (TENCON) conference." },
  { src: "attached_assets/Gallery/iiitnr-aiml-club-2021.jpeg", place: "IIIT Naya Raipur",
    title: "Teaching AI/ML", when: "Sep 2021", desc: "Running hands-on AI/ML sessions as the AIML Club in-charge." },
  // —— Add more (newest at the top): drop the file in attached_assets/Gallery/ and add a line ——
  // { src: "attached_assets/Gallery/manali.jpg", place: "Manali, India", title: "Road trip", when: "2024" },
];

// Home highlights — the same three directions as the Research page, each with a small 3D scene.
const INTERESTS = [
  { id: "embodied",   scene: "embodied", title: "Robot Learning & Embodied Intelligence",
    desc: "Robots that reason about the world they live in." },
  { id: "multirobot", scene: "swarm",    title: "Multi-Robot Systems",
    desc: "Many robots, one shared map — even when comms drop." },
  { id: "spatial",    scene: "gp",       title: "Spatial Intelligence",
    desc: "Learning a belief over space itself." },
];

// Research thrusts — colorful, resourceful, no "T#" index.
// accent / tint drive the per-thrust color theme; scene picks the inline 3D diorama.
const THRUSTS = [
  {
    id: "embodied",
    title: "Robot Learning & Embodied Intelligence",
    tagline: "Robots that reason about the world they live in",
    scene: "embodied",
    accent: "#2e8f5b", tint: "#eaf6ee",
    body: "I build reasoning frameworks that let robots understand invisible spatial phenomena — Wi-Fi field strength, humidity, scent — and act on them inside real homes and buildings. The goal is agents that reason in language about a physical environment, then plan and move through it.",
    keywords: ["Embodied AI", "LLM Planning", "Spatial Grounding", "VLM Reasoning"],
    stats: [{ k: "Domains", v: "Homes · Warehouses" }, { k: "Modalities", v: "Vision · Language · RF" }],
    resources: [
      { label: "Embodied reasoning — blog", href: "#/blog/embodied-reasoning" },
      { label: "Smart-home robotics — blog", href: "#/blog/smart-home-robots" },
    ],
  },
  {
    id: "multirobot",
    title: "Multi-Robot Systems",
    tagline: "Many robots, one shared map — even when comms drop",
    scene: "swarm",
    accent: "#2f6df0", tint: "#e8f0ff",
    body: "SPACE is our framework for 3D spatial cooperation and exploration — it mitigates the ghosting-trail effect in fused reconstructions and stays robust to communication dropouts. MGPRL recovers relative poses from Wi-Fi RSSI in GPS-denied indoors, and 3DS-SLAM extends semantic SLAM with 3D object detection in dynamic scenes.",
    keywords: ["SPACE", "MGPRL", "3DS-SLAM", "Distributed Mapping"],
    stats: [{ k: "Boundary artifacts", v: "−34%" }, { k: "Comms dropout", v: "robust to 90s" }],
    resources: [
      { label: "SPACE — arXiv:2411.02524", href: "https://arxiv.org/abs/2411.02524" },
      { label: "3DS-SLAM — arXiv:2310.06385", href: "https://arxiv.org/abs/2310.06385" },
    ],
  },
  {
    id: "spatial",
    title: "Spatial Intelligence",
    tagline: "Learning a belief over space itself",
    scene: "gp",
    accent: "#c9821f", tint: "#fbf1df",
    body: "Robots that learn a belief over space itself: Gaussian-process fields for Wi-Fi, humidity, and other invisible signals, floating above the real world they describe. MGPRL uses these uncertainty-aware fields for multi-robot relative localization where GPS can't reach.",
    keywords: ["Gaussian Processes", "MGPRL", "Wi-Fi RSSI", "Uncertainty"],
    stats: [{ k: "Signal", v: "Wi-Fi RSSI" }, { k: "Estimate", v: "Uncertainty-aware" }],
    resources: [
      { label: "Invisible fields — blog", href: "#/blog/gp-fields" },
      { label: "MGPRL — IEEE IROS 2025", href: PROFILE.scholar },
    ],
  },
];

// Each paper carries a thumbnail, a one-line overview, and a links object.
// Only links that exist are rendered — add paper / preprint / github / video / blog as available.
const PUBLICATIONS = [
    {
      year: 2023,
      kind: "journal",
      featured: false,
      title: "A Practical Review of Data Preprocessing Techniques for Machine Learning",
      authors: [ "K. Mallikharjuna Rao", "Sai Krishna Ghanta", "Kundrapu Supriya" ],
      venue: "Multimedia Tools and Applications (2023)",
      image: null,
      overview: "Reviews practical preprocessing choices for ML workflows, including missing values, encoding, discretization, outliers, and scaling.",
      links: {
        paper: "https://link.springer.com/article/10.1007/s11042-023-15087-5"
      }
    },
    {
      year: 2022,
      kind: "submitted",
      featured: false,
      title: "Vision Transformers and YOLOv5 based Driver Drowsiness Detection Framework",
      authors: [ "Ghanta Sai Krishna", "Kundrapu Supriya", "Jai Vardhan", "Mallikharjuna Rao K" ],
      venue: "arXiv preprint, 2022",
      image: null,
      overview: "Combines YOLOv5-based region extraction with Vision Transformers to classify driver drowsiness from visual cues.",
      links: {
        preprint: "https://arxiv.org/abs/2209.01401"
      }
    },
    {
      year: 2023,
      kind: "conference",
      featured: false,
      title: "A Novel End-to-End Framework for Occluded Pixel Reconstruction with Spatio-Temporal Features for Improved Person Re-Identification",
      authors: [ "P. R. Medi", "P. Nemani", "Sai Krishna Ghanta", "S. Vollala" ],
      venue: "2023 8th International Conference on Business and Industrial Research (ICBIR) (2023)",
      image: null,
      overview: "Reconstructs occluded pixels with spatio-temporal modeling and generative refinement to improve person re-identification under occlusion.",
      links: {
        paper: "https://doi.org/10.1109/ICBIR57571.2023.10147408",
        github: "https://github.com/Prathistith/Person-REID-Occlusion-Reconstruction"
      }
    },
    {
      year: 2022,
      kind: "conference",
      featured: false,
      title: "Epersist: A Two-Wheeled Self Balancing Robot Using PID Controller and Deep Reinforcement Learning",
      authors: [ "Sai Krishna Ghanta", "Dyavat Sumith", "Garika Akshay" ],
      venue: "2022 22nd International Conference on Control, Automation and Systems (ICCAS) (2022)",
      image: null,
      overview: "Compares PID control and deep reinforcement learning strategies for stabilizing a two-wheeled self-balancing robot.",
      links: {
        preprint: "https://arxiv.org/abs/2207.11431"
      }
    },
    {
      year: 2023,
      kind: "journal",
      featured: false,
      title: "Deep Learning-Based Holistic Speaker Independent Visual Speech Recognition",
      authors: [
        "P. Nemani",
        "Sai Krishna Ghanta",
        "N. Ramisetty",
        "B. D. S. Sai",
        "S. Kumar"
      ],
      venue: "IEEE Transactions on Artificial Intelligence, 2023",
      image: null,
      overview: "Builds a holistic deep-learning visual speech recognition system that recognizes speech from facial/mouth motion independent of speaker identity.",
      links: {
        paper: "https://doi.org/10.1109/TAI.2022.3220190"
      }
    },
    {
      year: 2023,
      kind: "journal",
      featured: false,
      title: "Speaker Independent Visual Speech Recognition: A Systematic Review and Futuristic Applications",
      authors: [ "P. Nemani", "Sai Krishna Ghanta", "K. Supriya", "Santosh Kumar" ],
      venue: "Image and Vision Computing, 2023",
      image: null,
      overview: "Surveys speaker-independent visual speech recognition datasets, preprocessing pipelines, model families, applications, and future research directions.",
      links: {
        paper: "https://doi.org/10.1016/j.imavis.2023.104787"
      }
    },
    {
      year: 2025,
      kind: "conference",
      featured: true,
      title: "3DS-SLAM: A 3D Object Detection Based Semantic SLAM Towards Dynamic Indoor Environments",
      authors: ["Sai Krishna Ghanta*", "Kundrapu Supriya", "Sabur Baidya"],
      venue: "IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS), 2025",
      image: "attached_assets/publication_gallery/3ds-slam_figure_2.jpeg",
      overview: "Integrates 3D object detection with dynamic feature filtering to improve semantic SLAM robustness in dynamic indoor environments.",
      links: {
        preprint: "https://arxiv.org/abs/2310.06385",
        github: "https://github.com/sai-krishna-ghanta/3DS-SLAM",
        blog: "#/blog/vision-3d"
      }
    },
    {
      year: 2025,
      kind: "journal",
      featured: true,
      title: "SPACE: 3D Spatial Co-operation and Exploration Framework for Robust Mapping and Coverage with Multi-Robot Systems",
      authors: ["Sai Krishna Ghanta*", "Ramviyas Parasuraman"],
      venue: "IEEE Robotics and Automation Letters (L-RA), 2025",
      image: "attached_assets/publication_gallery/space_figure_1.jpeg",
      overview: "Coordinates multiple RGB-D robots for cooperative exploration, mapping, and coverage while filtering dynamic robot-induced artifacts.",
      links: {
        paper: "https://doi.org/10.1109/LRA.2025.3627118",
        github: "https://github.com/herolab-uga/SPACE-MAP",
        video: "https://youtu.be/EE0velFrJgI",
        blog: "#/blog/slam-odyssey"
      }
    },
    {
      year: 2025,
      kind: "conference",
      featured: true,
      title: "MGPRL: Distributed Multi-Gaussian Processes for Wi-Fi-based Multi-Robot Relative Localization in Large Indoor Environments",
      authors: ["Sai Krishna Ghanta*", "Ramviyas Parasuraman"],
      venue: "IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS), 2025",
      image: "attached_assets/publication_gallery/mgprl_figure_3.png",
      overview: "Uses Wi-Fi RSSI fields and distributed multi-output Gaussian Processes for relative localization among robots in GPS-denied indoor environments.",
      links: {
        preprint: "https://arxiv.org/abs/2506.23514",
        github: "https://github.com/herolab-uga/MGPRL",
        blog: "#/blog/gp-fields"
      }
    },
    {
      year: 2023,
      kind: "conference",
      featured: false,
      title: "Adversarial Security and Differential Privacy in mmWave Beam Prediction in 6G Networks",
      authors: ["Sai Krishna Ghanta*", "Kundrapu Supriya", "Sabur Baidya"],
      venue: "IEEE Cyber Security in Networking Conference (CSNet), 2023",
      image: null,
      overview: "Studies adversarial robustness and differential privacy for machine-learning-based mmWave beam prediction in 6G communication systems.",
      links: {
        preprint: "https://arxiv.org/abs/2305.09679"
      }
    },
    {
      year: 2025,
      kind: "conference",
      featured: false,
      title: "Policies Over Poses: Reinforcement Learning Based Distributed Pose-Graph Optimization for Multi-Robot SLAM",
      authors: ["Sai Krishna Ghanta*", "Ramviyas Parasuraman"],
      venue: "IEEE International Symposium on Multi-Robot and Multi-Agent Systems (MRS), 2025",
      image: null,
      overview: "Uses multi-agent reinforcement learning and graph-based representations to improve distributed pose-graph optimization for multi-robot SLAM.",
      links: {
        preprint: "https://arxiv.org/abs/2510.22740",
        github: "https://github.com/herolab-uga/policies-over-poses",
        video: "https://www.youtube.com/watch?v=fdKdeQT6cHw"
      }
    },
    {
      year: 2026,
      kind: "submitted",
      featured: false,
      title: "Planning, Scheduling, and Behavior in EV Charging Systems: A Critical Survey and Trilemma Framework",
      authors: [
        "Peiyan Xiao",
        "Yuheng Li",
        "Ayan Mukhopadhyay",
        "Sai Krishna Ghanta",
        "Sabur Baidya",
        "Yanhai Xiong"
      ],
      venue: "arXiv review preprint, 2026",
      image: null,
      overview: "Frames EV charging research across planning, scheduling, and user behavior while highlighting fidelity-tractability tradeoffs.",
      links: {
        preprint: "https://arxiv.org/abs/2605.21665"
      }
    },
    {
      year: 2025,
      kind: "conference",
      featured: false,
      title: "CAMP-HiVe: Cyclic Pair Merging Based Efficient DNN Pruning with Hessian-Vector Approximation for Resource-Constrained Systems",
      authors: [ "Mohammad Helal Uddin", "Sai Krishna Ghanta", "Liam Seymour", "Sabur Baidya" ],
      venue: "International Conference on Machine Learning and Applications (ICMLA), 2025",
      image: null,
      overview: "Proposes Hessian-vector-guided cyclic pair merging to prune deep neural networks efficiently for resource-constrained deployment.",
      links: {
        preprint: "https://arxiv.org/abs/2511.06265"
      }
    },
    {
      year: 2026,
      kind: "submitted",
      featured: false,
      title: "Integrated Survey of EV Charging Planning, Scheduling, and Behavior",
      authors: ["Sai Krishna Ghanta*", "Ramviyas Parasuraman"],
      venue: "SSRN working preprint, 2026",
      image: null,
      overview: "An SSRN-listed version or closely related version of the EV charging planning, scheduling, and behavior survey.",
      links: {
        preprint: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6697442"
      }
    },
    {
      year: 2025,
      kind: "journal",
      featured: false,
      title: "LesionAid: Vision Transformers-Based Skin Lesion Generation and Classification - A Practical Review",
      authors: [ "Sai Krishna Ghanta", "Mallikharjuna Rao", "Kundrapu Supriya" ],
      venue: "Multimedia Tools and Applications, 2025",
      image: null,
      overview: "Combines ViT-based lesion generation/classification ideas to address skin-lesion data imbalance and improve explainable lesion classification workflows.",
      links: {
        paper: "https://link.springer.com/article/10.1007/s11042-025-20797-z"
      }
    },
    {
      year: 2022,
      kind: "conference",
      featured: false,
      title: "dScout: Unmanned Ground Vehicle for Automatic Disease Detection and Pesticide Atomizer",
      authors: ["Sai Krishna Ghanta*", "Ramviyas Parasuraman"],
      venue: "IEEE 7th International Conference for Convergence in Technology (I2CT), 2022",
      image: null,
      overview: "Presents an IoT-enabled unmanned ground vehicle that detects plant disease with computer vision and supports targeted pesticide atomization.",
      links: {
        paper: "https://doi.org/10.1109/I2CT54291.2022.9824236",
        github: "https://github.com/sai-krishna-ghanta/Leaf_disease_Detection"
      }
    },
    {
      year: 2023,
      kind: "conference",
      featured: false,
      title: "Parkinson's Disease Detection from Speech Signals Using Explainable Artificial Intelligence",
      authors: [ "Sai Krishna Ghanta", "S. M. K. Chaitanya", "Santosh Kumar" ],
      venue: "IEEE Region 10 Conference (TENCON), 2023",
      image: null,
      overview: "Uses explainable machine learning on speech signals to detect Parkinson's disease and provide interpretable evidence for predictions.",
      links: {
        paper: "https://conf.papercept.net/images/temp/TENCON/files/0190.pdf"
      }
    },
    {
      year: 2023,
      kind: "submitted",
      featured: false,
      title: "Breast Cancer Segmentation Using Attention-Based Convolutional Network and Explainable AI",
      authors: [
        "Jai Vardhan",
        "Taraka Satya Krishna Teja Malisetti"
      ],
      venue: "arXiv preprint, 2023",
      image: null,
      overview: "Applies an attention-based convolutional segmentation network with explainable-AI visualization to breast cancer screening images.",
      links: {
        preprint: "https://arxiv.org/abs/2305.14389"
      }
    },
    {
      year: 2022,
      kind: "submitted",
      featured: false,
      title: "Video Vision Transformers for Violence Detection",
      authors: [
        "Sanskar Singh",
        "Shivaibhav Dewangan",
        "Ghanta Sai Krishna",
        "Vandit Tyagi",
        "Sainath Reddy",
        "Prathistith Raj Medi"
      ],
      venue: "arXiv preprint, 2022",
      image: null,
      overview: "Uses a Video Vision Transformer architecture with augmentation to detect violent events from video sequences.",
      links: {
        preprint: "https://arxiv.org/abs/2209.03561"
      }
    },
    {
      year: 2024,
      kind: "conference",
      featured: false,
      title: "Estimating Global Horizontal Irradiance of Solar Photovoltaic System from Satellite Data",
      authors: [ "N. Yericherla", "Sai Krishna Ghanta", "K. P. Dutt", "D. Da" ],
      venue: "17th International Congress on Image and Signal Processing, BioMedical Engineering and Informatics (CISP-BMEI), 2024",
      image: null,
      overview: "Estimates global horizontal irradiance for solar photovoltaic systems from satellite-derived data to support PV analysis and forecasting.",
      links: {
        paper: "https://researchr.org/publication/YericherlaKPD24"
      }
    }
  ];

// Groups for the segregated Publications view (order matters).
const PUB_GROUPS = [
  { kind: "conference", label: "Conference Papers" },
  { kind: "journal",    label: "Journal Articles" },
  { kind: "submitted",  label: "Under Review" },
];

const BLOG_POSTS = [
  {
    id: "smart-home-robots",
    title: "A Day in a Robot Home: What Embodied Intelligence Looks Like",
    category: "Embodied AI",
    date: "Jun 2024",
    readTime: "7 min",
    excerpt: "Vacuums, quadrupeds, drones and humanoids sharing one home. A field note on grounding language plans in a lived-in space.",
    cover: "home",
    body: [
      ["p", "Picture an ordinary apartment: a rover sweeping the living room, a quadruped patrolling the hallway, a drone dusting the shelves, a humanoid prepping the kitchen counter. None of them are impressive on their own. Together, in one space, they are a small model of embodied intelligence."],
      ["h2", "Why the home is the hard problem"],
      ["p", "A home is cluttered, dynamic, and full of intent. Furniture moves, people cross paths, and a plan written in language — 'tidy the living room' — has to survive contact with a physical, changing world. That is exactly the setting where robot learning stops being a benchmark and starts being a behavior."],
      ["p", "We use the home scene as a sandbox for grounding: every object the robots reason about has a place, a cost to reach, and a consequence if you bump it. The language plan is only as good as the spatial grounding underneath it."],
      ["h2", "From chores to capabilities"],
      ["p", "Each chore exercises a different capability — coverage, patrolling, manipulation, aerial inspection. Stitching them into one coherent home is what moves us from 'a robot that can' to 'robots that live here.'"],
    ],
  },
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
    excerpt: "We probed frontier LLMs with spatial reasoning tasks. The results are surprising.",
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

// Milestones — grouped by year in the UI; tag drives the color pill.
const UPDATES = [
  { date: "Dec 2025", year: 2025, tag: "Paper",      text: "SPACE framework submitted to IROS 2025. Excited to see it in the community." },
  { date: "Nov 2025", year: 2025, tag: "Collab",     text: "Started collaborating with TU Delft on distributed Bayesian optimization for multi-robot exploration." },
  { date: "Oct 2025", year: 2025, tag: "Talk",       text: "Gave a talk on embodied reasoning at the NeurIPS 2025 workshop on Embodied AI. Great discussions." },
  { date: "Sep 2025", year: 2025, tag: "Field Work", text: "Completed field trials of MGPRL in the HeRoLab warehouse. Four quadrupeds, GPS-denied, 10 hours of autonomous operation." },
  { date: "Jul 2025", year: 2025, tag: "Paper",      text: "MGPRL submitted to IROS 2025 — Wi-Fi-based relative localization for large indoor teams." },
  { date: "Aug 2024", year: 2024, tag: "Milestone",  text: "Started PhD at UGA under Dr. Ramviyas Parasuraman. Building robots that think." },
  { date: "Jun 2024", year: 2024, tag: "Milestone",  text: "Graduated from IIIT Naya Raipur with a B.Tech in Computer Science & Engineering." },
  { date: "Mar 2024", year: 2024, tag: "Award",      text: "Recognized for undergraduate research in semantic SLAM and explainable vision." },
  { date: "Oct 2023", year: 2023, tag: "Paper",      text: "3DS-SLAM released on arXiv — semantic SLAM for dynamic indoor environments." },
  { date: "May 2023", year: 2023, tag: "Internship", text: "Joined Samsung R&D as a Software Engineer Intern, working on on-device ML." },
  { date: "Feb 2023", year: 2023, tag: "Paper",      text: "Adversarial security & differential privacy for mmWave beam prediction accepted at IEEE CSNet 2023." },
  { date: "2022",     year: 2022, tag: "Paper",      text: "Holistic visual speech recognition published in IEEE Transactions on Artificial Intelligence." },
];

// A short, original line to keep me pointed at the goal — shown at the end of Milestones.
const CREDO = {
  quote: "Curiosity got me here; discipline is what turns it into science. Keep measuring, keep doubting, keep building — the scientist is made on the ordinary days.",
  by: "— Sai, note to self",
};

Object.assign(window, {
  PROFILE, HOME_GALLERY, TRIP_GALLERY, INTERESTS, THRUSTS, PUBLICATIONS, PUB_GROUPS,
  BLOG_POSTS, UPDATES, CREDO,
});
