// Mock data for Fathima Hisa Faiyaz Portfolio
export const portfolioData = {
  personal: {
    name: "Fathima Hisa Faiyaz",
    tagline: "AI & Automation Engineer | Researcher in Human-Centric Robotics & Machine Learning",
    location: "Calicut, IN",
    phone: "+91 8129871218",
    email: "hisafaiyaz91@gmail.com",
    linkedin: "https://www.linkedin.com/in/fathima-hisa-faiyaz-b12aba239/",
    thesis: "http://hv.diva-portal.org/smash/record.jsf?pid=diva2:1886498",
    cv_url: "https://customer-assets.emergentagent.com/job_2622c647-fde3-4919-956d-768628b8122a/artifacts/73be1viu_Fathima%20Hisa_Faiyaz_CV.pdf",
    image: "https://customer-assets.emergentagent.com/job_robotics-resume/artifacts/ffgedxae_pp.jpg" // Your professional photo
  },
  
  about: {
    description: "I am an AI & Automation Engineer with a strong research foundation in production technology, robotics, and industrial AI. My Master's research at University West focused on machine learning-based anomaly detection in vessel sensor data, bridging academic methods with real-world industrial applications. My goal is to advance flexible, human-centric automation systems through doctoral research.",
    interests: [
      "Human-Robot Collaboration",
      "ML for Automation", 
      "Computer Vision",
      "Anomaly Detection",
      "AR-LLMs"
    ]
  },

  education: [
    {
      degree: "Master of Science in Production Technology (AI & Automation)",
      institution: "University West, Trollhättan, Sweden",
      period: "August 2022 – July 2024",
      thesis: "Machine Learning-Based Automated Anomaly Detection System for Vessel Sensor Data"
    },
    {
      degree: "Additive Manufacturing with Laser (Short Course)",
      institution: "University West, Trollhättan, Sweden", 
      period: "April 2025 – May 2025"
    },
    {
      degree: "Bachelor of Technology in Electronics & Communication Engineering",
      institution: "University of Calicut, Kerala, India",
      period: "August 2009 – April 2013",
      project: "Automated billing trolley with barcode-based 3D shopping system"
    }
  ],

  experience: [
    {
      title: "Research Engineer",
      company: "RISE (Research Institutes of Sweden)",
      location: "Göteborg, Sweden",
      period: "January 2024 – June 2024",
      description: "Conducted advanced data analysis on high-dimensional vessel sensor time series for anomaly detection. Developed and fine-tuned AI/ML models for autonomous monitoring. Applied dimensionality reduction, preprocessing, and EDA for improved detection accuracy."
    },
    {
      title: "Sorting Specialist (Automation Systems)",
      company: "RTL Logistik",
      location: "Skövde, Sweden",
      period: "December 2022 – December 2023",
      description: "Monitored and optimized automated parcel sorting systems. Applied process automation & root-cause analysis using sensor data and WMS."
    },
    {
      title: "Intern Python Developer",
      company: "Technovalley Software",
      location: "Kerala, India",
      period: "February 2022 – August 2022",
      description: "Built and debugged Python, SQL, Django, Flask projects. Gained professional experience in full-stack development and data-driven applications."
    }
  ],

  projects: [
    {
      title: "Master Thesis: ML-Based Anomaly Detection for Vessel Sensor Data",
      description: "Developed machine learning models for real-time monitoring of vessel operations using dimensionality reduction and anomaly detection pipelines",
      technologies: ["Machine Learning", "Python", "TensorFlow", "Data Analysis"],
      link: "http://hv.diva-portal.org/smash/record.jsf?pid=diva2:1886498",
      type: "Research"
    },
    {
      title: "Automated Compressor Recognition System",
      description: "Computer vision system using ABB Robot Studio, YOLOv8, and 3D cameras for industrial automation",
      technologies: ["YOLOv8", "OpenCV", "ABB Robot Studio", "Computer Vision"],
      type: "Robotics"
    },
    {
      title: "AR-LLM Integration for Aerospace Inspection",
      description: "Advanced system combining augmented reality with language models for quality control in aerospace manufacturing",
      technologies: ["AR", "LLMs", "Machine Vision", "Quality Control"],
      type: "AI/ML"
    },
    {
      title: "PLC & ABB Robotics Integration",
      description: "Seamless integration of programmable logic controllers with ABB robotics for automated production lines",
      technologies: ["PLC", "ABB Robotics", "TwinCat", "Automation"],
      type: "Automation" 
    }
  ],

  skills: {
    "AI/ML": ["TensorFlow", "PyTorch", "YOLOv8", "scikit-learn", "Anomaly Detection", "Deep Learning"],
    "Robotics/Automation": ["ABB Robot Studio", "PLC Programming", "TwinCat", "Computer Vision", "HRC"],
    "Programming": ["Python", "C++", "C#", "SQL", "Django", "OpenCV"],
    "Research": ["Data Preprocessing", "EDA", "Feature Engineering", "Model Optimization"],
    "Tools": ["Git", "NumPy", "pandas", "Jupyter", "LaTeX"]
  },

  languages: [
    { name: "English", level: "Fluent" },
    { name: "Swedish", level: "Basic" },
    { name: "Malayalam", level: "Native" },
    { name: "Hindi", level: "Proficient" }
  ]
};