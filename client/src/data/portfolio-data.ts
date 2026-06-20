export const personalInfo = {
  name: "Sai Krishna Ghanta",
  title: "Ph.D. Candidate in Artificial Intelligence",
  affiliation: "University of Georgia",
  lab: "HeRoLab",
  advisor: "Dr. Ramviyas Parasuraman",
  email: "sai.krishna@uga.edu",
  emailDisplay: "sai[dot]krishna@uga[dot]edu",
  phone: "+1-502-821-2059",
  location: "Athens, Georgia, USA",
  profileImage: "@attached_assets/image_1750648862297.png",
  bio: [
    'I am a third-year Ph.D. candidate in Artificial Intelligence at the <a href="https://www.uga.edu" target="_blank">University of Georgia</a>, working under the supervision of <a href="https://computing.uga.edu/directory/people/ramviyas-nattanmai-parasuraman" target="_blank">Dr. Ramviyas Parasuraman</a>. My research combines multi-robot systems, spatial intelligence, embodied AI to help robots map, localize, plan, and act in complex real-world environments.',
    'Previously, I was a research intern at the <a href="https://engineering.louisville.edu/research/centersinstitutes/larri/" target="_blank">Louisville Automation & Robotics Research Institute (LARRI)</a>, where I worked with <a href="https://engineering.louisville.edu/faculty/sabur-h-baidya/" target="_blank">Dr. Sabur Baidya</a>, and an AI research intern at Samsung R&D Institute through the PRISM program. I received my Bachelor’s degree in Data Science and Artificial Intelligence from Dr. SPM International Institute of Information Technology, Naya Raipur, India.',
    'I was selected as a recipient of the <a href="https://www.chishiki-ai.org/awardees/" target="_blank">2026 NSF Chishiki AI Fellowship</a> at the University of Texas at Austin, and will also be working with <a href="https://oden.utexas.edu/people/directory/Krishna-Kumar/" target="_blank">Dr. Krishna Kumar</a>.'
  ]
};

export const socialLinks = {
  googleScholar: "https://scholar.google.com/citations?user=lrK_Y8AAAAAJ&hl=en&oi=ao",
  github: "https://github.com/sai-krishna-ghanta",
  linkedin: "https://www.linkedin.com/in/sai-krishna-ghanta-320ab0211/"
};

export const researchInterests = [
  {
    title: "Robot Learning",
    description: "Foundation Models, Reasoning Frameworks, Neuro-Symbolic AI",
    icon: "🤖",
    color: "purple"
  },
  {
    title: "Multi-Robot Systems",
    description: "Distributed Localization, Task Planning, Exploration",
    icon: "🔗",
    color: "blue"
  },
  {
    title: "Computer Vision",
    description: "VLMs, SLAM, Scene Graphs",
    icon: "👁️",
    color: "red"
  },
  {
    title: "Machine Learning",
    description: "Gaussian Processes, Reinforcement Learning, Continuous Thought Machines",
    icon: "🧠",
    color: "pink"
  }
];

export const researchProjects = [
  {
    title: "SPACE: 3D Spatial Co-operation and Exploration Framework for Robust Mapping and Coverage with Multi-Robot Systems",
    authors: ["Sai Krishna Ghanta*", "Ramviyas Parasuraman"],
    venue: "arXiv preprint arXiv:2411.02524 (2024), submitted to IEEE RAL",
    year: "2024",
    description: "Developed an online 3D spatial exploration framework for multi-robot systems utilizing situational awareness and dynamic filter to mitigate ghosting trail effect in 3D reconstructions.",
    links: {
      paper: "#",
      code: "#",
      arxiv: "#"
    }
  },
  {
    title: "MGPRL: Distributed Multi-Gaussian Processes for Wi-Fi-based Multi-Robot Relative Localization in Large Indoor Environments",
    authors: ["Sai Krishna Ghanta*", "Ramviyas Parasuraman"],
    venue: "Accepted at IEEE IROS 2025",
    year: "2024",
    description: "Introduced a distributed multi-robot relative localization approach leveraging uncertainty-aware Gaussian Processes and Wi-Fi RSSI signals for robust, efficient pose estimation in GPS-denied environments.",
    links: {
      paper: "#",
      code: "#",
      arxiv: "#"
    }
  },
  {
    title: "3DS-SLAM: A 3D Object Detection based Semantic SLAM towards Dynamic Indoor Environments",
    authors: ["Sai Krishna Ghanta*", "Kundrapu Supriya", "Sabur Baidya"],
    venue: "arXiv preprint arXiv:2310.06385 (2023), Accepted at IEEE IROS 2025",
    year: "2023",
    description: "Developed real-time 3D Object Detection in Visual SLAM with RGB-D and LiDAR sensors for dynamic indoor environments.",
    links: {
      paper: "#",
      code: "#",
      arxiv: "#"
    }
  }
];

export const publications = {
    journal: [
      {
        title: "A Practical Review of Data Preprocessing Techniques for Machine Learning",
        authors: [ "K. Mallikharjuna Rao", "Sai Krishna Ghanta", "Kundrapu Supriya" ],
        venue: "Multimedia Tools and Applications, 2025",
        year: "2023",
        description: "Reviews practical preprocessing choices for ML workflows, including missing values, encoding, discretization, outliers, and scaling.",
        link: "https://link.springer.com/article/10.1007/s11042-023-15087-5",
        github: null,
        video: null,
        image: null
      },
      {
        title: "Deep Learning-Based Holistic Speaker Independent Visual Speech Recognition",
        authors: [
          "P. Nemani",
          "Sai Krishna Ghanta",
          "N. Ramisetty",
          "B. D. S. Sai",
          "S. Kumar"
        ],
        venue: "IEEE Transactions on Artificial Intelligence, 2023",
        year: "2023",
        description: "Builds a holistic deep-learning visual speech recognition system that recognizes speech from facial/mouth motion independent of speaker identity.",
        link: "https://doi.org/10.1109/TAI.2022.3220190",
        github: null,
        video: null,
        image: "attached_assets/publication_gallery/DL based Holistic Visual Speech Recognition.png"
      },
      {
        title: "Speaker Independent Visual Speech Recognition: A Systematic Review and Futuristic Applications",
        authors: [ "P. Nemani", "Sai Krishna Ghanta", "K. Supriya", "Santosh Kumar" ],
        venue: "Image and Vision Computing, 2023",
        year: "2023",
        description: "Surveys speaker-independent visual speech recognition datasets, preprocessing pipelines, model families, applications, and future research directions.",
        link: "https://doi.org/10.1016/j.imavis.2023.104787",
        github: null,
        video: null,
        image: null
      },
      {
        title: "LesionAid: Vision Transformers-Based Skin Lesion Generation and Classification - A Practical Review",
        authors: [ "Sai Krishna Ghanta", "Mallikharjuna Rao", "Kundrapu Supriya" ],
        venue: "Multimedia Tools and Applications, 2025",
        year: "2025",
        description: "Combines ViT-based lesion generation/classification ideas to address skin-lesion data imbalance and improve explainable lesion classification workflows.",
        link: "https://link.springer.com/article/10.1007/s11042-025-20797-z",
        github: null,
        video: null,
        image: "attached_assets/publication_gallery/LesionAID.png"
      }
    ],
    conference: [
      {
        title: "Semantic Kernel",
        authors: ["Sai Krishna Ghanta*", "Ramviyas Parasuraman"],
        venue: "IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS), 2026",
        year: "2026",
        description: "Incorporating semantics directly into spatial modeling preserves spatial heterogeneity, accelerates convergence, and provides reliable uncertainty quantification under both quality and budget constrained regimes, especially in real-world environments where learned kernels often struggle.",
        link: "Coming Soon!",
        github: null,
        video: null,
        image: "attached_assets/publication_gallery/Semantic Kernel.mp4"
      },
      {
        title: "SPACE: 3D Spatial Co-operation and Exploration Framework for Robust Mapping and Coverage with Multi-Robot Systems",
        authors: ["Sai Krishna Ghanta*", "Ramviyas Parasuraman"],
        venue: "IEEE Robotics and Automation Letters (L-RA), 2025",
        year: "2025",
        description: "Coordinates multiple RGB-D robots for cooperative exploration, mapping, and coverage while filtering dynamic robot-induced artifacts.",
        link: "https://doi.org/10.1109/LRA.2025.3627118",
        github: "https://github.com/herolab-uga/SPACE-MAP",
        video: "https://youtu.be/EE0velFrJgI",
        image: "attached_assets/publication_gallery/SPACE-Dont use Audio.mp4"
      },
      {
        title: "A Novel End-to-End Framework for Occluded Pixel Reconstruction with Spatio-Temporal Features for Improved Person Re-Identification",
        authors: [ "P. R. Medi", "P. Nemani", "Sai Krishna Ghanta", "S. Vollala" ],
        venue: "Conference: 2023 8th International Conference on Business and Industrial Research (ICBIR)",
        year: "2023",
        description: "Reconstructs occluded pixels with spatio-temporal modeling and generative refinement to improve person re-identification under occlusion.",
        link: "https://doi.org/10.1109/ICBIR57571.2023.10147408",
        github: "https://github.com/Prathistith/Person-REID-Occlusion-Reconstruction",
        video: null,
        image: null
      },
      {
        title: "Epersist: A Two-Wheeled Self Balancing Robot Using PID Controller and Deep Reinforcement Learning",
        authors: [ "Sai Krishna Ghanta", "Dyavat Sumith", "Garika Akshay" ],
        venue: "Conference: 2022 22nd International Conference on Control, Automation and Systems (ICCAS)",
        year: "2022",
        description: "Compares PID control and deep reinforcement learning strategies for stabilizing a two-wheeled self-balancing robot.",
        link: "https://arxiv.org/abs/2207.11431",
        github: null,
        video: null,
        image: "attached_assets/publication_gallery/ePersist.png"
      },
      {
        title: "3DS-SLAM: A 3D Object Detection Based Semantic SLAM Towards Dynamic Indoor Environments",
        authors: ["Sai Krishna Ghanta*", "Kundrapu Supriya", "Sabur Baidya"],
        venue: "IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS), 2025",
        year: "2025",
        description: "Integrates 3D object detection with dynamic feature filtering to improve semantic SLAM robustness in dynamic indoor environments.",
        link: "https://arxiv.org/abs/2310.06385",
        github: "https://github.com/sai-krishna-ghanta/3DS-SLAM",
        video: null,
        image: "attached_assets/publication_gallery/3DS-SLAM.mp4"
      },
      {
        title: "MGPRL: Distributed Multi-Gaussian Processes for Wi-Fi-based Multi-Robot Relative Localization in Large Indoor Environments",
        authors: ["Sai Krishna Ghanta*", "Ramviyas Parasuraman"],
        venue: "IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS), 2025",
        year: "2025",
        description: "Uses Wi-Fi RSSI fields and distributed multi-output Gaussian Processes for relative localization among robots in GPS-denied indoor environments.",
        link: "https://arxiv.org/abs/2506.23514",
        github: "https://github.com/herolab-uga/MGPRL",
        video: null,
        image: "attached_assets/publication_gallery/MGPRL.mp4"
      },
      {
        title: "Adversarial Security and Differential Privacy in mmWave Beam Prediction in 6G Networks",
        authors: ["Sai Krishna Ghanta*", "Kundrapu Supriya", "Sabur Baidya"],
        venue: "IEEE Cyber Security in Networking Conference (CSNet), 2023",
        year: "2023",
        description: "Studies adversarial robustness and differential privacy for machine-learning-based mmWave beam prediction in 6G communication systems.",
        link: "https://arxiv.org/abs/2305.09679",
        github: null,
        video: null,
        image: "attached_assets/publication_gallery/Adversarial Security.png"
      },
      {
        title: "Policies Over Poses: Reinforcement Learning Based Distributed Pose-Graph Optimization for Multi-Robot SLAM",
        authors: ["Sai Krishna Ghanta*", "Ramviyas Parasuraman"],
        venue: "IEEE International Symposium on Multi-Robot and Multi-Agent Systems (MRS), 2025",
        year: "2025",
        description: "Uses multi-agent reinforcement learning and graph-based representations to improve distributed pose-graph optimization for multi-robot SLAM.",
        link: "https://arxiv.org/abs/2510.22740",
        github: "https://github.com/herolab-uga/policies-over-poses",
        video: "https://www.youtube.com/watch?v=fdKdeQT6cHw",
        image: "attached_assets/publication_gallery/Policies Over Poses.png"
      },
      {
        title: "CAMP-HiVe: Cyclic Pair Merging Based Efficient DNN Pruning with Hessian-Vector Approximation for Resource-Constrained Systems",
        authors: [ "Mohammad Helal Uddin", "Sai Krishna Ghanta", "Liam Seymour", "Sabur Baidya" ],
        venue: "International Conference on Machine Learning and Applications (ICMLA), 2025",
        year: "2025",
        description: "Proposes Hessian-vector-guided cyclic pair merging to prune deep neural networks efficiently for resource-constrained deployment.",
        link: "https://arxiv.org/abs/2511.06265",
        github: null,
        video: null,
        image: "attached_assets/publication_gallery/CampHiVe.png"
      },
      {
        title: "dScout: Unmanned Ground Vehicle for Automatic Disease Detection and Pesticide Atomizer",
        authors: ["Sai Krishna Ghanta*", "Ramviyas Parasuraman"],
        venue: "IEEE 7th International Conference for Convergence in Technology (I2CT), 2022",
        year: "2022",
        description: "Presents an IoT-enabled unmanned ground vehicle that detects plant disease with computer vision and supports targeted pesticide atomization.",
        link: "https://doi.org/10.1109/I2CT54291.2022.9824236",
        github: "https://github.com/sai-krishna-ghanta/Leaf_disease_Detection",
        video: null,
        image: "attached_assets/publication_gallery/dSCOUT.png"
      },
      {
        title: "Parkinson's Disease Detection from Speech Signals Using Explainable Artificial Intelligence",
        authors: [ "Sai Krishna Ghanta", "S. M. K. Chaitanya", "Santosh Kumar" ],
        venue: "IEEE Region 10 Conference (TENCON), 2023",
        year: "2023",
        description: "Uses explainable machine learning on speech signals to detect Parkinson's disease and provide interpretable evidence for predictions.",
        link: "https://conf.papercept.net/images/temp/TENCON/files/0190.pdf",
        github: null,
        video: null,
        image: null
      },
      {
        title: "Estimating Global Horizontal Irradiance of Solar Photovoltaic System from Satellite Data",
        authors: [ "N. Yericherla", "Sai Krishna Ghanta", "K. P. Dutt", "D. Da" ],
        venue: "17th International Congress on Image and Signal Processing, BioMedical Engineering and Informatics (CISP-BMEI), 2024",
        year: "2024",
        description: "Estimates global horizontal irradiance for solar photovoltaic systems from satellite-derived data to support PV analysis and forecasting.",
        link: "https://researchr.org/publication/YericherlaKPD24",
        github: null,
        video: null,
        image: null
      }
    ],
    submitted: [
      {
        title: "Vision Transformers and YOLOv5 based Driver Drowsiness Detection Framework",
        authors: [ "Ghanta Sai Krishna", "Kundrapu Supriya", "Jai Vardhan", "Mallikharjuna Rao K" ],
        venue: "arXiv preprint, 2023",
        year: "2022",
        description: "Combines YOLOv5-based region extraction with Vision Transformers to classify driver drowsiness from visual cues.",
        link: "https://arxiv.org/abs/2209.01401",
        github: null,
        video: null,
        image: "attached_assets/publication_gallery/Drowsiness Detection.png"
      },
      {
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
        year: "2026",
        description: "Frames EV charging research across planning, scheduling, and user behavior while highlighting fidelity-tractability tradeoffs.",
        link: "https://arxiv.org/abs/2605.21665",
        github: null,
        video: null,
        image: "attached_assets/publication_gallery/EV.png"
      },
      {
        title: "Integrated Survey of EV Charging Planning, Scheduling, and Behavior",
        authors: ["Sai Krishna Ghanta*", "Ramviyas Parasuraman"],
        venue: "SSRN working preprint, 2026",
        year: "2026",
        description: "An SSRN-listed version or closely related version of the EV charging planning, scheduling, and behavior survey.",
        link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6697442",
        github: null,
        video: null,
        image: "attached_assets/publication_gallery/EV.png"
      },
      {
        title: "Video Vision Transformers for Violence Detection",
        authors: [
          "Sanskar Singh",
          "Shivaibhav Dewangan",
          "Ghanta Sai Krishna",
          "Vandit Tyagi",
          "Sainath Reddy",
          "Prathistith Raj Medi"
        ],
        venue: "arXiv preprint, 2023",
        year: "2022",
        description: "Uses a Video Vision Transformer architecture with augmentation to detect violent events from video sequences.",
        link: "https://arxiv.org/abs/2209.03561",
        github: null,
        video: null,
        image: null
      }
    ]
  };;

export const updates = [
  {
    date: "Oct 2025",
    type: "Presentation",
    description: "Presented MGPRL and 3DS-SLAM papers at IROS 2025 in Hangzhou, China",
    color: "orange"
  },
  {
    date: "Oct 2025",
    type: "Publication",
    description: "Policies over Poses paper accepted to MRS 2025",
    color: "red"
  },
  {
    date: "Jun 2025",
    type: "Publication",
    description: "Two papers (MGPRL and 3DS-SLAM) accepted to IROS 2025",
    color: "purple"
  },
  {
    date: "May 2025",
    type: "Presentation",
    description: "Presented SPACE workshop paper at ICRA 2025 in Atlanta",
    color: "teal"
  },
  {
    date: "Nov 2024",
    type: "Publication",
    description: "SPACE Framework Paper Submitted to IROS 2025",
    color: "green"
  },
  {
    date: "Aug 2024",
    type: "Education",
    description: "Started PhD Journey at University of Georgia with GPA 3.97/4",
    color: "blue"
  },
  {
    date: "Jun 2024",
    type: "Experience",
    description: "Completed Research Internship at Louisville Automation & Robotics Research Institute",
    color: "yellow"
  },
  {
    date: "Mar 2024",
    type: "Recognition",
    description: "Appointed as IEEE Technical Reviewer for IROS 2025",
    color: "pink"
  }
];

export const education = [
  {
    degree: "PhD in Artificial Intelligence",
    institution: "Franklin College of Arts and Sciences, University of Georgia, Athens",
    period: "August 2024 - June 2027",
    gpa: "3.97/4.0",
    description: "Research focus on multi-robot systems, computer vision, and autonomous navigation under Dr. Ramviyas Parasuraman at HeRoLab. Developing frameworks for distributed localization and cooperative exploration in complex environments."
  },
  {
    degree: "Bachelor of Technology in Data Science and Artificial Intelligence", 
    institution: "Dr. SPM International Institute of Information Technology",
    period: "November 2020 - June 2024",
    gpa: "8.96/10.0",
    awards: ["Dean's List of Academic Excellence Award 2021, 2023"],
    description: "Comprehensive program covering machine learning, deep learning, computer vision, and robotics applications. Completed advanced coursework in statistical learning theory and representation learning."
  },
  {
    degree: "Secondary Education",
    institution: "FIITJEE, Board Of Secondary Education Andhra Pradesh", 
    period: "June 2018 - March 2020",
    gpa: "9.94/10.0",
    achievements: ["Secured 99.5 percentile in JEE with over 10+ Lakh Test Takers - Math and Physics"],
    description: "Focused on advanced mathematics and physics with exceptional performance in national competitive examinations."
  }
];

export const experience = [
  {
    title: "Graduate Research Assistant",
    organization: "HeRoLab Lab, School Of Computing UGA",
    period: "August 2024 - April 2025",
    location: "Athens, Georgia",
    advisor: "Dr. Ramviyas Parasuraman",
    description: "Developed an online 3D spatial exploration framework (SPACE) for multi-robot systems utilizing situational awareness and dynamic filter to mitigate ghosting trail effect in 3D reconstructions. Introduced a distributed multi-robot relative localization approach (MGPRL) leveraging uncertainty-aware Gaussian Processes and Wi-Fi RSSI signals for robust, efficient pose estimation in GPS-denied environments. Currently working on Multi-Agent Robot Task Planning using Large Language Models with a focus on visual reconstructions for embodied multi-robot task allocation.",
    color: "green"
  },
  {
    title: "Visiting Research Intern (Summer 2023)",
    organization: "Louisville Automation & Robotics Research Institute",
    period: "January 2023 - June 2024",
    location: "Kentucky, USA",
    advisor: "Dr. Sabur Baidya, Dr. Madan Mohan",
    description: "Developed 3DS-SLAM, a real-time 3D Object Detection in the Visual SLAM with RGB-D and LiDAR. Investigated on reliability of Camera-LiDAR sensor fusion calibration mechanisms for robotics use-cases. Worked on developing Physical Twin with Franka Emika Panda robotic arm and Haption Virtuose 6D RV.",
    color: "yellow"
  },
  {
    title: "AI Research Intern",
    organization: "Samsung R&D Institute, India",
    period: "July 2022 - January 2023",
    location: "Remote",
    description: "Designed and Developed Deep Learning based Generative Adversarial Networks (GAN) approaches for synthetic data generation for Optical Character Recognition (OCR) in Bixby Vision. Streamlined ViTGAN, designed morphological operations for handwritten text synthetic data generation for OCR.",
    color: "purple"
  },
  {
    title: "Machine Learning Intern",
    organization: "SOIL Ltd - School of Innovation and Leadership",
    period: "September 2021 - December 2021",
    location: "Hyderabad, India",
    description: "Worked on implementing an NLP-based curation engine to assess the educational materials with OCR. Constructed an integrated NLP and CV pipeline to recognize the hand-written text and text summarization consolidated with harmful corpus detection in educational materials for 6D educational model.",
    color: "blue"
  },
  {
    title: "Undergraduate Research Assistant",
    organization: "Data Science Lab, IIIT Naya Raipur",
    period: "January 2021 - August 2021",
    location: "Naya Raipur, India",
    advisor: "Dr. Santosh Kumar, Dr. Mallikharjuna Rao K",
    description: "Developed a scalable AI systems such as LIPAR: a person independent spatio-temporal visual speech recognition system via a mobile application, ViTDD: Vision Transformers based Drowsiness detection in real-time. Partly lectured, graded quizes for Data Preprocessing, Statistical Learning Theory, Representation Learning.",
    color: "cyan"
  }
];

export const skills = {
  programming: ["Python", "C", "C++", "HTML", "CSS"],
  mlFrameworks: ["OpenCV", "Open3D", "NLTK", "Tensorflow", "PyTorch", "Pyspark", "CUDA", "cuDNN", "OpenAI API"],
  roboticFrameworks: ["ROS", "Gazebo", "RViz", "PCL", "MoveIt", "V-REP"],
  cloudDatabase: ["Azure AI Search", "ML Studio", "MS SQL"]
};

export const achievements = [
  "Recipient of International Travel Grant of 2500$, 6000$ - IIITNR's TEQIP II (2023,2024)",
  "Recipient of Travel Grant for TENCON2023 Conference 1200$ - IIITNR's TEQIP (2023)",
  "1st Position (2400+ developers): Ernst and Young GDS (EY-GDS) Hackpions 3.0 (2021)",
  "Recipient of the 100 Percent Scholarship honor in 10+2 Pre-University Programme - FIITJEE (2016)"
];

export const positions = [
  "Secretary of Artificial Intelligence and Machine Learning Club, IIIT Naya Raipur (June 2021 - June 2022)",
  "Student Volunteer at National Service Schema, NSS - IIIT Naya Raipur (December 2020 - June 2021)",
  "IEEE Student Member (Jan 2022 - Present)",
  "Technical Reviewer IEEE AiDaS 2023 and IROS 2025"
];
