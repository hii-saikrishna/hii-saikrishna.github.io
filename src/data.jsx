// ╔═══════════════════════════════════════════════════════════════════════════╗
// ║  CONTENT FILE — read this before editing anything in the site.            ║
// ╠═══════════════════════════════════════════════════════════════════════════╣
// ║                                                                           ║
// ║  WHAT IS LIVE                                                              ║
// ║    The public site (hii-saikrishna.github.io) is served by                ║
// ║    .github/workflows/static.yml, which deploys ONLY these on push to main:║
// ║        index.html · src/ · attached_assets/ · 404.html                    ║
// ║    The browser loads the PRE-COMPILED bundle  src/bundle.js  (NOT the .jsx ║
// ║    files directly).                                                        ║
// ║                                                                           ║
// ║  ★ THE GOLDEN RULE — never skip this ★                                    ║
// ║    1. Edit the SOURCE: src/*.jsx (content lives here in src/data.jsx).     ║
// ║    2. Run  ./build.sh   → regenerates src/bundle.js from the .jsx sources. ║
// ║    3. Commit BOTH the edited .jsx AND src/bundle.js, then push to main.    ║
// ║    If you edit a .jsx but forget ./build.sh, the live site will NOT change.║
// ║                                                                           ║
// ║  ⛔ IGNORE  client/  — it is a legacy/unused React app. It is NOT deployed.║
// ║     Editing client/** has ZERO effect on the live site. Only src/ ships.   ║
// ║                                                                           ║
// ║  WHERE THINGS LIVE                                                         ║
// ║    src/data.jsx  → ALL editable content (this file). Exports below.        ║
// ║    src/app-all.jsx → page layout/components (HomePage, PublicationsPage,   ║
// ║                      UpdatesPage…). Edit only for structure/behavior.      ║
// ║    src/robots.jsx, world.jsx, globe.jsx, scenes-pages.jsx → 3D scenes.     ║
// ║    src/styles.css → all styling (loaded directly, no build needed for it). ║
// ║    attached_assets/ → images & videos. publication_gallery/ = paper media, ║
// ║                       Gallery/ = trip photos. COMPRESS videos before adding ║
// ║                       (see "compress all videos" note); huge files = slow. ║
// ║                                                                           ║
// ║  CONTENT EXPORTS IN THIS FILE (each has its own how-to comment below)      ║
// ║    PROFILE      – name, role, links, CV. Shown in hero/footer/contact.     ║
// ║    HOME_GALLERY – hero portrait photos.                                    ║
// ║    TRIP_GALLERY – About-page photo/video strip.                            ║
// ║    INTERESTS    – 3 Home "Research Interests" cards. id MUST match THRUSTS.║
// ║    THRUSTS      – 3 Research-page deep dives. id MUST match INTERESTS.     ║
// ║    PUBLICATIONS – every paper. Grouped by `kind` via PUB_GROUPS.           ║
// ║    PUB_GROUPS   – order + labels of the publication sections.              ║
// ║    BLOG_POSTS   – blog articles (id is the #/blog/<id> URL).               ║
// ║    UPDATES      – career timeline. Drives BOTH the Milestones page AND the ║
// ║                   Home "Recent Milestones" cards (items with home:true).    ║
// ║    CREDO        – closing quote on the Milestones page.                    ║
// ║                                                                           ║
// ║  All exports are attached to `window` at the bottom so app-all.jsx and the ║
// ║  scene files can read them as globals (e.g. PUBLICATIONS, UPDATES).         ║
// ╚═══════════════════════════════════════════════════════════════════════════╝

// ===== Data =====

// PROFILE — identity + canonical links. Used in the hero, footer, contact button,
// and as a link source elsewhere (e.g. THRUSTS resources reference PROFILE.scholar).
// Update a link here once and it changes everywhere it is referenced.
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

// INTERESTS — the 3 cards in the Home "Research Interests" row. These are the
// short teasers for the longer THRUSTS below.
//   id    : MUST match a THRUSTS id — clicking a card opens that thrust on the
//           Research page. If you add/rename one here, mirror it in THRUSTS.
//   scene : key of the inline 3D diorama (built in src/robots.jsx → dioramaScene).
//           Valid keys: "embodied", "swarm", "gp". Don't invent new ones without
//           also adding the scene in robots.jsx.
const INTERESTS = [
  { id: "embodied",   scene: "embodied", title: "Robot Learning & Embodied Intelligence",
    desc: "Foundation Models, World Action Models" },
  { id: "multirobot", scene: "swarm",    title: "Multi-Robot Systems",
    desc: "Distributed Mapping, Localization and Task Planning" },
  { id: "spatial",    scene: "gp",       title: "Spatial Intelligence",
    desc: "Spatial Intelligence Models for Information Gathering" },
];

// ─────────────────────────────────────────────────────────────────────────────
// THRUSTS — the deep-dive sections on the Research page. One per INTERESTS card.
// The Research page renders, for each thrust: a numbered title, the focus
// keywords, the paragraph, a sliding MEDIA window, and the related papers + blogs.
//
//   id       : MUST match the INTERESTS id (the Home card links here by id).
//   title    : section heading. The page auto-numbers it ("1. …", "2. …").
//   accent/tint : on-theme colors for that section (kept in the green family so
//              they match the site). accent = text/border, tint = soft background.
//   body     : the paragraph (rough draft — safe to rewrite).
//   keywords : small focus pills under the title.
//   media    : slides for the sliding media window (MediaCarousel). Each slide is
//                { src, caption }  where src is an image (.png/.jpg) OR a video
//                (.mp4 → plays muted, only while on-screen) and caption is the
//                narrative under it. A slide with no src ({ caption, note }) renders
//                a labeled placeholder, useful to reserve space for media you will
//                add later. ADD MORE by appending objects — order = display order.
//   papers / blogs : related-work links shown under the paragraph. {label, href}.
//                Use a full URL for papers, "#/blog/<id>" for posts, "#/publications"
//                for the full list. Append to either array to cite more.
//   scene    : (currently unused) old 3D diorama key, kept for when the animated
//              dioramas come back; the Research page shows the media window instead.
// ─────────────────────────────────────────────────────────────────────────────
const THRUSTS = [
  {
    id: "embodied",
    title: "Robot Learning & Embodied Intelligence",
    scene: "embodied",
    accent: "#2e8f5b", tint: "#eaf6ee",
    body: "I'm drawn to robots that learn to act from large pretrained models: foundation models that carry broad visual and language priors, and world / action models that let an agent imagine the result of a move before it commits to it. The aim is behaviour that transfers across tasks and rooms instead of being tuned to a single demo.",
    keywords: ["Foundation Models", "World Action Models"],
    media: [
      { src: "attached_assets/Robot Learning Gallery/door_open_inward_00.mp4", caption: "A learned policy opening a door from perception alone, with no scripted trajectory." },
      { src: "attached_assets/Robot Learning Gallery/go1_pushbox_front_seed0.mp4", caption: "A Go1 quadruped pushing a box to its goal: a whole-body skill learned in simulation and run on hardware." },
      // { src: "attached_assets/Robot Learning Gallery/<new clip>.mp4", caption: "…" },  // ← add more slides here
    ],
    papers: [],
    blogs: [
      { label: "Embodied reasoning", href: "#/blog/embodied-reasoning" },
      { label: "A day in a robot home", href: "#/blog/smart-home-robots" },
    ],
  },
  {
    id: "multirobot",
    title: "Multi-Robot Systems",
    scene: "swarm",
    accent: "#1f8a86", tint: "#e3f4f1",
    body: "SPACE is my framework for 3D spatial cooperation and exploration; it reduces the ghosting artifacts in fused reconstructions and holds up when communication drops. MGPRL recovers relative poses from Wi-Fi RSSI where GPS can't reach, and a thread through all of it is distributing the mapping, localization, and task planning so a team stays consistent without a central node.",
    keywords: ["Distributed Mapping", "Localization", "Task Planning"],
    media: [
      { src: "attached_assets/Multi Robot Systems Gallery/MRS.mp4", caption: "A robot team cooperatively mapping and dividing a space, staying consistent as communication links drop." },
      { src: "attached_assets/Multi Robot Systems Gallery/SPACE.mp4", caption: "SPACE fusing multi-robot reconstructions into one clean 3D map, without the usual ghosting artifacts." },
      // { src: "…", caption: "…" },  // ← add more slides here
    ],
    papers: [
      { label: "SPACE — IEEE RA-L 2025", href: "https://doi.org/10.1109/LRA.2025.3627118" },
      { label: "3DS-SLAM — IROS 2025", href: "https://arxiv.org/abs/2310.06385" },
      { label: "MGPRL — IROS 2025", href: "https://arxiv.org/abs/2506.23514" },
      { label: "Policies Over Poses — MRS 2025", href: "https://arxiv.org/abs/2510.22740" },
    ],
    blogs: [
      { label: "The SLAM odyssey", href: "#/blog/slam-odyssey" },
    ],
  },
  {
    id: "spatial",
    title: "Spatial Intelligence",
    scene: "gp",
    accent: "#5f8c3a", tint: "#eef4e2",
    body: "I build models that learn a belief over space itself: Gaussian-process and semantic-kernel fields over invisible signals like Wi-Fi and humidity, and use that belief to decide where to sense next. Good spatial models turn raw measurements into uncertainty-aware maps, which is what makes active information gathering efficient.",
    keywords: ["Spatial Intelligence Models", "Information Gathering"],
    media: [
      { src: "attached_assets/Spatial Intellgience Gallery/spatial-intelligence-1.mp4", caption: "A learned spatial belief guiding where to sense next: uncertainty-aware information gathering." },
      // { src: "…", caption: "…" },  // ← add more slides here
    ],
    papers: [
      { label: "SK: Semantic Kernel — IROS 2026 (accepted)", href: "#/publications" },
      { label: "MGPRL — IROS 2025", href: "https://arxiv.org/abs/2506.23514" },
    ],
    blogs: [
      { label: "Learning invisible fields", href: "#/blog/gp-fields" },
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// PUBLICATIONS — every paper. The Publications page splits them into sections by
// `kind` and in the section order defined by PUB_GROUPS (below).
//
// Each entry:
//   year     : number — shown as the meta pill and used to sort newest-first.
//   kind     : "conference" | "journal" | "submitted"  → which PUB_GROUPS section
//              it lands in. (A journal-venue paper presented at a conference may be
//              listed as "conference" intentionally, e.g. SPACE/RA-L.)
//   featured : true → shows a small "Featured" badge on the media.
//   title    : full paper title.
//   authors  : array of names, in order. Put "*" after a name to mark lead/first
//              author. Any name containing "Sai Krishna" is highlighted automatically.
//   venue    : full venue name WITH year, and for CONFERENCES the host city +
//              country, e.g. "... (IROS), 2025, Hangzhou, China". (Journals have no
//              city — just the journal name + year.) If a paper is accepted but the
//              camera-ready/preprint is NOT yet available, prefix the venue with
//              "Accepted at " (or "To be presented at " for already-published work
//              not yet presented).
//   image    : path under attached_assets/publication_gallery/, OR null.
//              • .png/.jpg/.jpeg  → shown as an <img>
//              • .mp4/.webm/.mov  → shown as an autoplaying, muted, viewport-gated
//                                   <video> (LazyVideo) — COMPRESS it first.
//              • null             → a generated contour/node placeholder is drawn.
//              Any aspect ratio fits (the media window adapts; nothing is cropped).
//   overview : one-line summary shown under the venue.
//   links    : object — only the keys present are rendered, as buttons. Supported
//              keys: paper, preprint, github, video, blog, scholar. Values are URLs
//              (use "#/blog/<id>" for an internal blog link). SPECIAL: set a value
//              to the exact string "Coming Soon!" to render a non-clickable
//              "<Label>: Coming Soon!" chip (used for unreleased preprints).
//
// To ADD a paper: copy an entry, fill the fields, drop its media in
// attached_assets/publication_gallery/, then run ./build.sh.
// ─────────────────────────────────────────────────────────────────────────────
const PUBLICATIONS = [
    {
      year: 2026,
      kind: "conference",
      featured: true,
      title: "SK: Semantic Kernel for Robotic Information Gathering",
      authors: ["Sai Krishna Ghanta*", "Ramviyas Parasuraman"],
      venue: "Accepted at IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS), 2026, Pittsburgh, USA",
      image: "attached_assets/publication_gallery/Semantic Kernel.mp4",
      overview: "Incorporating semantics directly into spatial modeling preserves spatial heterogeneity, accelerates convergence, and provides reliable uncertainty quantification under both quality and budget constrained regimes, especially in real-world environments where learned kernels often struggle.",
      links: {
        preprint: "Coming Soon!"
      }
    },
    {
      year: 2023,
      kind: "journal",
      featured: false,
      title: "A Practical Review of Data Preprocessing Techniques for Machine Learning",
      authors: [ "K. Mallikharjuna Rao", "Sai Krishna Ghanta", "Kundrapu Supriya" ],
      venue: "Multimedia Tools and Applications, 2023",
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
      image: "attached_assets/publication_gallery/Drowsiness Detection.png",
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
      venue: "8th International Conference on Business and Industrial Research (ICBIR), 2023, Bangkok, Thailand",
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
      venue: "22nd International Conference on Control, Automation and Systems (ICCAS), 2022, Busan, Korea",
      image: "attached_assets/publication_gallery/ePersist.png",
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
      image: "attached_assets/publication_gallery/DL based Holistic Visual Speech Recognition.png",
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
      venue: "IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS), 2025, Hangzhou, China",
      image: "attached_assets/publication_gallery/3DS-SLAM.mp4",
      overview: "Integrates 3D object detection with dynamic feature filtering to improve semantic SLAM robustness in dynamic indoor environments.",
      links: {
        preprint: "https://arxiv.org/abs/2310.06385",
        github: "https://github.com/sai-krishna-ghanta/3DS-SLAM",
        blog: "#/blog/vision-3d"
      }
    },
    {
      year: 2025,
      kind: "conference",
      featured: true,
      title: "SPACE: 3D Spatial Co-operation and Exploration Framework for Robust Mapping and Coverage with Multi-Robot Systems",
      authors: ["Sai Krishna Ghanta*", "Ramviyas Parasuraman"],
      venue: "To be presented at IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS), 2026, Pittsburgh, USA; also presented at the Block-by-Block Workshop, ICRA 2025, Atlanta, USA",
      image: "attached_assets/publication_gallery/SPACE-Dont use Audio.mp4",
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
      venue: "IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS), 2025, Hangzhou, China",
      image: "attached_assets/publication_gallery/MGPRL.mp4",
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
      venue: "IEEE Cyber Security in Networking Conference (CSNet), 2023, Montreal, Canada",
      image: "attached_assets/publication_gallery/Adversarial Security.png",
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
      venue: "IEEE International Symposium on Multi-Robot and Multi-Agent Systems (MRS), 2025, Singapore",
      image: "attached_assets/publication_gallery/Policies Over Poses.png",
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
      venue: "Renewable and Sustainable Energy Reviews (under review), 2026",
      image: "attached_assets/publication_gallery/EV.png",
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
      venue: "International Conference on Machine Learning and Applications (ICMLA), 2025, Miami, USA",
      image: "attached_assets/publication_gallery/CampHiVe.png",
      overview: "Proposes Hessian-vector-guided cyclic pair merging to prune deep neural networks efficiently for resource-constrained deployment.",
      links: {
        preprint: "https://arxiv.org/abs/2511.06265"
      }
    },
    {
      year: 2025,
      kind: "journal",
      featured: false,
      title: "LesionAid: Vision Transformers-Based Skin Lesion Generation and Classification - A Practical Review",
      authors: [ "Sai Krishna Ghanta", "Mallikharjuna Rao", "Kundrapu Supriya" ],
      venue: "Multimedia Tools and Applications, 2025",
      image: "attached_assets/publication_gallery/LesionAID.png",
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
      venue: "IEEE 7th International Conference for Convergence in Technology (I2CT), 2022, Pune, India",
      image: "attached_assets/publication_gallery/dSCOUT.png",
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
      venue: "IEEE Region 10 Conference (TENCON), 2023, Chiang Mai, Thailand",
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
      venue: "17th International Congress on Image and Signal Processing, BioMedical Engineering and Informatics (CISP-BMEI), 2024, Shanghai, China",
      image: null,
      overview: "Estimates global horizontal irradiance for solar photovoltaic systems from satellite-derived data to support PV analysis and forecasting.",
      links: {
        paper: "https://researchr.org/publication/YericherlaKPD24"
      }
    }
  ];

// Groups for the segregated Publications view (order matters: conferences first,
// then journals, then preprints/under-review last).
const PUB_GROUPS = [
  { kind: "conference", label: "Conference Papers" },
  { kind: "journal",    label: "Journal Articles" },
  { kind: "submitted",  label: "Preprints" },
];

// BLOG_POSTS — the articles on the Blog page and at #/blog/<id>.
//   id       : URL slug. The post lives at #/blog/<id>; THRUSTS/PUBLICATIONS link
//              to posts with "#/blog/<id>" — keep ids stable or fix the links too.
//   title, category, date, readTime, excerpt : list-card + header metadata.
//   cover    : key of the generated cover art (see app-all.jsx). Reuse an existing
//              value ("home", "slam", "gp", …) unless you add a new cover renderer.
//   body     : array of [tag, text] tuples rendered in order. tag is "p" or "h2".
//              Add paragraphs/sub-headings by appending more tuples.
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

// ─────────────────────────────────────────────────────────────────────────────
// UPDATES — the career timeline. SINGLE SOURCE OF TRUTH for BOTH:
//   1. the full "Milestones" page  (every item, grouped by `year`, newest first)
//   2. the "Recent Milestones" cards on the Home page (only items with `home:true`)
// Editing this one array updates both places. Do NOT hard-code milestone cards
// anywhere else.
//
// Each item:
//   date  : "Mon YYYY" shown on the row/card (e.g. "Jun 2026"). Keep the year here
//           matching the `year` field below.
//   year  : number — groups rows on the Milestones page. One heading per distinct year.
//   tag   : short label shown as the colored pill / card badge (e.g. Grant, Talk,
//           Fellowship, Candidacy, Milestone, Research, Internship). Any string works;
//           reuse existing tags for visual consistency.
//   text  : one full sentence describing the milestone.
//   home  : OPTIONAL boolean. Add `home: true` to surface this item as a card in the
//           Home page "Recent Milestones" row. The Home page shows the FIRST 3 items
//           (top of this array = newest) that have `home: true`. Flag exactly 3.
//   title : OPTIONAL short headline (2–4 words) — only used for the Home card heading.
//           Required whenever `home: true`. The Milestones page ignores `title`.
//
// ORDER: keep the whole array newest-first (top = most recent). Within a year, list
// newest month first. After editing, run ./build.sh and commit src/bundle.js.
// ─────────────────────────────────────────────────────────────────────────────
const UPDATES = [
  // 2026
  { date: "Jun 2026", year: 2026, tag: "Grant",      home: true, title: "KTH RPL Summer School", text: "Received a travel grant for the KTH RPL Summer School 2026 in Stockholm, Sweden." },
  { date: "May 2026", year: 2026, tag: "Fellowship", home: true, title: "NSF Chishiki AI Fellowship", text: "Awarded the 2026–27 NSF Chishiki AI Fellowship from the University of Texas at Austin, working with Dr. Krishna Kumar." },
  { date: "May 2026", year: 2026, tag: "Candidacy",  home: true, title: "PhD Candidacy", text: "Passed my PhD candidacy exam, before a committee of Dr. Ramviyas Parasuraman, Dr. Jin Sun, Dr. Fei Duo, and Dr. Sabur Baidya." },
  { date: "Apr 2026", year: 2026, tag: "Talk",       text: "Presented “Spatial Intelligence Models for Reasoning” at UGA AI Research Day 2026." },
  // 2025
  { date: "Oct 2025", year: 2025, tag: "Talk",       text: "Presented MGPRL and 3DS-SLAM at IROS 2025 in Hangzhou, China (travel grant awarded)." },
  { date: "May 2025", year: 2025, tag: "Talk",       text: "Presented SPACE at the Block-by-Block Workshop, ICRA 2025 in Atlanta, USA (travel grant awarded)." },
  { date: "Apr 2025", year: 2025, tag: "Talk",       text: "Presented SPACE at UGA AI Research Day 2025." },
  // 2024
  { date: "Aug 2024", year: 2024, tag: "Milestone",  text: "Joined the University of Georgia as a PhD student in Artificial Intelligence, advised by Dr. Ramviyas Parasuraman." },
  { date: "Mar 2024", year: 2024, tag: "Talk",       text: "Presented 3DS-SLAM at the KY NSF EPSCoR SuperCollider in Lexington, Kentucky." },
  { date: "Jan 2024", year: 2024, tag: "Research",   text: "Continued as a visiting research intern at the Louisville Automation & Robotics Research Institute (LARRI) for Spring 2024." },
  { date: "Jan 2024", year: 2024, tag: "Grant",      text: "Received a $1,200 travel grant for IEEE TENCON 2023 (IIIT-NR TEQIP)." },
  // 2023
  { date: "May 2023", year: 2023, tag: "Research",   text: "Began as a visiting research intern at the Louisville Automation & Robotics Research Institute (LARRI) for Summer 2023, where I authored 3DS-SLAM." },
  { date: "May 2023", year: 2023, tag: "Grant",      text: "Recipient of IIIT-NR TEQIP-II international travel grants ($2,500 and $6,000)." },
  { date: "Jan 2023", year: 2023, tag: "Research",   text: "Started working remotely with Dr. Sabur Baidya on adversarial security and differential privacy for 6G networks, which led to an onsite internship that summer." },
  // 2022
  { date: "Jul 2022", year: 2022, tag: "Internship", text: "Started as a research intern at Samsung R&D Institute India through the PRISM program at IIIT Naya Raipur." },
  // 2021
  { date: "Dec 2021", year: 2021, tag: "Research",   text: "Began tackling my own problems — drowsiness detection, LesionAid, and Vision-Transformer methods — as minor projects and published them, including LIPAR, a person-independent spatio-temporal visual speech recognition app, and ViTDD, real-time Vision-Transformer drowsiness detection." },
  { date: "Sep 2021", year: 2021, tag: "Internship", text: "Served as a volunteer intern at the School of Innovation and Leadership." },
  { date: "Jan 2021", year: 2021, tag: "Research",   text: "Joined Dr. Venkanna’s work on dScout — my first publication, and where I really started to understand research." },
  // 2020
  { date: "Aug 2020", year: 2020, tag: "Milestone",  text: "Admitted to IIIT Naya Raipur after scoring in the 98.69 percentile on India’s largest engineering entrance exam." },
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
