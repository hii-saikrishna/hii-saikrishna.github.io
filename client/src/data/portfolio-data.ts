export const personalInfo = {
  name: "Sai Krishna Ghanta",
  title: "Ph.D. Candidate in Artificial Intelligence",
  affiliation: "University of Georgia",
  lab: "HeRoLab",
  advisor: "Dr. Ramviyas Parasuraman",
  email: "saikrishna311002@gmail.com",
  phone: "+1-502-821-2059",
  location: "Athens, Georgia, USA",
  profileImage: "@attached_assets/image_1750648862297.png",
  bio: [
    'I am a third-year Ph.D. candidate in Artificial Intelligence at the <a href="https://www.uga.edu" target="_blank">University of Georgia</a>, working under the supervision of <a href="https://computing.uga.edu/directory/people/ramviyas-nattanmai-parasuraman" target="_blank">Dr. Ramviyas Parasuraman</a>. My research combines multi-robot systems, spatial intelligence, embodied AI, foundation models, world models, and reinforcement learning to help robots map, localize, plan, and act in complex real-world environments.',
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
    authors: ["Sai Krishna Ghanta", "Ramviyas Parasuraman"],
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
    authors: ["Sai Krishna Ghanta", "Ramviyas Parasuraman"],
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
    authors: ["Sai Krishna Ghanta", "Kundrapu Supriya", "Sabur Baidya"],
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
      title: "Deep Learning based Holistic Speaker Independent Visual Speech Recognition",
      authors: ["P. Nemani", "Sai Krishna Ghanta", "N. Ramisetty", "B. D. S. Sai", "S. Kumar"],
      venue: "IEEE Transactions on Artificial Intelligence, 2022, doi: 10.1109/TAI.2022.3220190"
    },
    {
      title: "Data preprocessing techniques: emergence and selection towards machine learning models-a practical review using HPA dataset",
      authors: ["Mallikharjuna Rao, K.", "Sai Krishna Ghanta", "Kundrapu Supriya"],
      venue: "Multimedia Tools and Applications (2023): 1-20."
    },
    {
      title: "Speaker Independent Visual Speech Recognition: A Systematic Review and Futuristic Applications",
      authors: ["P. Nemani", "Sai Krishna Ghanta", "K. Supriya", "Santosh Kumar"],
      venue: "Elsevier Journal of Image and Vision Computing 123 (2023)"
    }
  ],
  conference: [
    {
      title: "SPACE: 3D Spatial Co-operation and Exploration Framework for Robust Mapping and Coverage with Multi-Robot Systems",
      authors: ["Sai Krishna Ghanta", "Ramviyas Parasuraman"],
      venue: "arXiv preprint arXiv:2411.02524 (2024), submitted to IEEE IROS 2025"
    },
    {
      title: "MGPRL: Distributed Multi-Gaussian Processes for Wi-Fi-based Multi-Robot Relative Localization in Large Indoor Environments",
      authors: ["Sai Krishna Ghanta", "Ramviyas Parasuraman"],
      venue: "submitted to IEEE IROS 2025"
    },
    {
      title: "3DS-SLAM: A 3D Object Detection based Semantic SLAM towards Dynamic Indoor Environments",
      authors: ["Sai Krishna Ghanta", "Kundrapu Supriya", "Sabur Baidya"],
      venue: "arXiv preprint arXiv:2310.06385 (2023), submitted to IEEE IROS 2025"
    },
    {
      title: "Adversarial Security and Differential Privacy in mmWave Beam Prediction in 6G networks",
      authors: ["Sai Krishna Ghanta", "Kundrapu Supriya", "Sabur Baidya"],
      venue: "IEEE CSNet 2023"
    },
    {
      title: "A Novel end-to-end Framework for Occluded Pixel Reconstruction with Spatio-temporal Features for Improved Person Re-identification",
      authors: ["P. R. Medi", "P. Nemani", "Sai Krishna Ghanta", "S.Vollala"],
      venue: "IEEE 2023 8th International Conference on Business and Industrial Research"
    },
    {
      title: "Epersist: A Two-Wheeled Self Balancing Robot Using PID Controller And Deep Reinforcement Learning",
      authors: ["Sai Krishna Ghanta", "Dyavat Sumith", "Garika Akshay"],
      venue: "2022 22nd International Conference on Control, Automation and Systems (ICCAS). IEEE, 2022"
    },
    {
      title: "dScout: Unmanned Ground Vehicle for Automatic Disease Detection and Pesticide Atomizer",
      authors: ["Sai Krishna Ghanta", "et al."],
      venue: "2022 IEEE 7th International conference for Convergence in Technology (I2CT). IEEE, 2022"
    }
  ],
  submitted: [
    {
      title: "Thermographic Fault Diagnosis: An eXplainable Compact Vision in Transformer Approach for Electrical Machine",
      authors: ["Sai Krishna Ghanta", "Anmol Agarwal", "Aparna Sinha", "Debanjan Da"],
      venue: "submitted to IEEE Sensors Journal"
    }
  ]
};

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
