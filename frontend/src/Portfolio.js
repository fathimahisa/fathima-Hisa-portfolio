import React from 'react';
import { Download, Mail, Linkedin, ExternalLink, MapPin, Phone, Calendar, Award, Code, Brain, Cpu, Microscope } from 'lucide-react';

const portfolioData = {
  personal: {
    name: "Fathima Hisa Faiyaz",
    tagline: "AI & Automation Engineer | Researcher in Human-Centric Robotics & Machine Learning",
    location: "Calicut, IN",
    phone: "+91 8129871218",
    email: "hisafaiyaz91@gmail.com",
    linkedin: "https://www.linkedin.com/in/fathima-hisa-faiyaz-b12aba239/",
    thesis: "http://hv.diva-portal.org/smash/record.jsf?pid=diva2:1886498",
    cv_url: "https://customer-assets.emergentagent.com/job_2622c647-fde3-4919-956d-768628b8122a/artifacts/73be1viu_Fathima%20Hisa_Faiyaz_CV.pdf",
    image: "https://customer-assets.emergentagent.com/job_robotics-resume/artifacts/ffgedxae_pp.jpg"
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

const Portfolio = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="portfolio-container">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container">
          <div className="nav-logo">{portfolioData.personal.name}</div>
          <ul className="nav-links">
            <li><a href="#about" onClick={() => scrollToSection('about')}>About</a></li>
            <li><a href="#education" onClick={() => scrollToSection('education')}>Education</a></li>
            <li><a href="#projects" onClick={() => scrollToSection('projects')}>Projects</a></li>
            <li><a href="#experience" onClick={() => scrollToSection('experience')}>Experience</a></li>
            <li><a href="#skills" onClick={() => scrollToSection('skills')}>Skills</a></li>
            <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section" id="hero">
        <div>
          <div className="avatar">
            {portfolioData.personal.name.split(' ').map(n => n[0]).join('')}
          </div>
          <h1 className="hero-title">{portfolioData.personal.name}</h1>
          <p className="hero-subtitle">{portfolioData.personal.tagline}</p>
          <div>
            <a 
              href={portfolioData.personal.cv_url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <Download size={20} style={{marginRight: '8px', display: 'inline'}} />
              Download CV
            </a>
            <a 
              href={portfolioData.personal.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <Linkedin size={20} style={{marginRight: '8px', display: 'inline'}} />
              LinkedIn
            </a>
            <a 
              href={portfolioData.personal.thesis} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <ExternalLink size={20} style={{marginRight: '8px', display: 'inline'}} />
              Research Thesis
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section" id="about">
        <h2 style={{fontSize: '3rem', textAlign: 'center', marginBottom: '3rem'}}>About Me</h2>
        <div className="card">
          <p style={{fontSize: '1.1rem', lineHeight: '1.8'}}>{portfolioData.about.description}</p>
        </div>
        
        <div className="card">
          <h3 className="card-title">Research Interests</h3>
          <div style={{display: 'flex', flexWrap: 'wrap', gap: '1rem'}}>
            {portfolioData.about.interests.map((interest, index) => (
              <span key={index} style={{
                background: 'rgba(59, 130, 246, 0.2)', 
                padding: '0.5rem 1rem', 
                borderRadius: '2rem',
                border: '1px solid rgba(59, 130, 246, 0.3)'
              }}>
                {interest}
              </span>
            ))}
          </div>
        </div>

        <div className="card">
          <h3 className="card-title">Languages</h3>
          <div className="skills-grid">
            {portfolioData.languages.map((lang, index) => (
              <div key={index} style={{
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                background: 'rgba(30, 41, 59, 0.5)',
                padding: '1rem',
                borderRadius: '0.5rem'
              }}>
                <span>{lang.name}</span>
                <span style={{color: '#3b82f6', fontWeight: '600'}}>{lang.level}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="section" id="education">
        <h2 style={{fontSize: '3rem', textAlign: 'center', marginBottom: '3rem'}}>Education & Research</h2>
        {portfolioData.education.map((edu, index) => (
          <div key={index} className="card">
            <div style={{display: 'flex', alignItems: 'flex-start', gap: '1rem'}}>
              <div style={{
                background: 'rgba(59, 130, 246, 0.2)', 
                padding: '1rem', 
                borderRadius: '1rem',
                border: '1px solid rgba(59, 130, 246, 0.3)'
              }}>
                <Award size={24} color="#3b82f6" />
              </div>
              <div style={{flex: 1}}>
                <h3 className="card-title">{edu.degree}</h3>
                <p style={{color: '#94a3b8', marginBottom: '1rem'}}>
                  <strong style={{color: '#3b82f6'}}>{edu.institution}</strong> • {edu.period}
                </p>
                {(edu.thesis || edu.project) && (
                  <div style={{
                    background: 'rgba(30, 41, 59, 0.5)', 
                    padding: '1rem', 
                    borderRadius: '0.5rem',
                    border: '1px solid rgba(59, 130, 246, 0.1)'
                  }}>
                    <p><strong>Research/Project:</strong> {edu.thesis || edu.project}</p>
                    {edu.thesis && (
                      <a 
                        href={portfolioData.personal.thesis} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-outline"
                        style={{marginTop: '1rem', display: 'inline-block'}}
                      >
                        <ExternalLink size={16} style={{marginRight: '8px', display: 'inline'}} />
                        View Research
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Projects Section */}
      <section className="section" id="projects">
        <h2 style={{fontSize: '3rem', textAlign: 'center', marginBottom: '3rem'}}>Projects & Research</h2>
        <div className="skills-grid">
          {portfolioData.projects.map((project, index) => (
            <div key={index} className="card" style={{height: 'fit-content'}}>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem'}}>
                <span style={{
                  background: 'rgba(59, 130, 246, 0.2)', 
                  padding: '0.5rem 1rem', 
                  borderRadius: '2rem',
                  border: '1px solid rgba(59, 130, 246, 0.3)',
                  fontSize: '0.9rem'
                }}>
                  {project.type}
                </span>
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{color: '#3b82f6', textDecoration: 'none'}}
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
              <h3 className="card-title">{project.title}</h3>
              <p style={{color: '#94a3b8', marginBottom: '1rem', lineHeight: '1.6'}}>{project.description}</p>
              <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem'}}>
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} style={{
                    background: 'rgba(30, 41, 59, 0.8)', 
                    padding: '0.25rem 0.75rem', 
                    borderRadius: '1rem',
                    fontSize: '0.8rem',
                    border: '1px solid rgba(94, 234, 212, 0.2)'
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="section" id="experience">
        <h2 style={{fontSize: '3rem', textAlign: 'center', marginBottom: '3rem'}}>Professional Experience</h2>
        <div className="experience-timeline">
          {portfolioData.experience.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="card">
                <div style={{display: 'flex', alignItems: 'flex-start', gap: '1rem'}}>
                  <div style={{
                    background: 'rgba(59, 130, 246, 0.2)', 
                    padding: '1rem', 
                    borderRadius: '1rem',
                    border: '1px solid rgba(59, 130, 246, 0.3)'
                  }}>
                    <Code size={24} color="#3b82f6" />
                  </div>
                  <div style={{flex: 1}}>
                    <h3 className="card-title">{exp.title}</h3>
                    <div style={{color: '#94a3b8', marginBottom: '1rem'}}>
                      <div style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>
                        <span style={{color: '#3b82f6', fontWeight: '600'}}>{exp.company}, {exp.location}</span>
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    <div style={{
                      background: 'rgba(30, 41, 59, 0.5)', 
                      padding: '1rem', 
                      borderRadius: '0.5rem',
                      border: '1px solid rgba(59, 130, 246, 0.1)'
                    }}>
                      <p style={{lineHeight: '1.6'}}>{exp.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="section" id="skills">
        <h2 style={{fontSize: '3rem', textAlign: 'center', marginBottom: '3rem'}}>Technical Expertise</h2>
        <div className="skills-grid">
          {Object.entries(portfolioData.skills).map(([category, skills]) => (
            <div key={category} className="card">
              <div style={{display: 'flex', alignItems: 'center', marginBottom: '1rem'}}>
                <div style={{
                  background: 'rgba(59, 130, 246, 0.2)', 
                  padding: '1rem', 
                  borderRadius: '1rem',
                  border: '1px solid rgba(59, 130, 246, 0.3)',
                  marginRight: '1rem'
                }}>
                  {category === 'AI/ML' && <Brain size={24} color="#3b82f6" />}
                  {category === 'Robotics/Automation' && <Cpu size={24} color="#3b82f6" />}
                  {category === 'Programming' && <Code size={24} color="#3b82f6" />}
                  {category === 'Research' && <Microscope size={24} color="#3b82f6" />}
                  {category === 'Tools' && <Award size={24} color="#3b82f6" />}
                </div>
                <h3 className="card-title" style={{margin: 0}}>{category}</h3>
              </div>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '0.5rem'}}>
                {skills.map((skill, skillIndex) => (
                  <span key={skillIndex} style={{
                    background: 'rgba(30, 41, 59, 0.8)', 
                    padding: '0.5rem 1rem', 
                    borderRadius: '2rem',
                    textAlign: 'center',
                    border: '1px solid rgba(59, 130, 246, 0.2)',
                    fontSize: '0.9rem'
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="section" id="contact">
        <h2 style={{fontSize: '3rem', textAlign: 'center', marginBottom: '3rem'}}>Let's Connect</h2>
        <div className="card" style={{textAlign: 'center'}}>
          <div style={{
            background: 'rgba(59, 130, 246, 0.2)', 
            padding: '2rem', 
            borderRadius: '2rem',
            border: '1px solid rgba(59, 130, 246, 0.3)',
            width: 'fit-content',
            margin: '0 auto 2rem auto'
          }}>
            <Mail size={48} color="#3b82f6" />
          </div>
          <p style={{fontSize: '1.2rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem auto', lineHeight: '1.6'}}>
            Interested in cutting-edge AI research collaboration? Let's discuss how we can push the boundaries of technology together.
          </p>
          
          <div className="contact-links">
            <a 
              href={`mailto:${portfolioData.personal.email}`}
              className="btn btn-primary"
            >
              <Mail size={20} style={{marginRight: '8px', display: 'inline'}} />
              Start Conversation
            </a>
            <a 
              href={portfolioData.personal.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <Linkedin size={20} style={{marginRight: '8px', display: 'inline'}} />
              LinkedIn
            </a>
          </div>

          <div style={{marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid rgba(59, 130, 246, 0.2)'}}>
            <div style={{display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', color: '#94a3b8'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                <Phone size={16} />
                <span>{portfolioData.personal.phone}</span>
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                <MapPin size={16} />
                <span>{portfolioData.personal.location}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: 'rgba(15, 23, 42, 0.9)', 
        borderTop: '1px solid rgba(59, 130, 246, 0.2)', 
        padding: '3rem 2rem',
        textAlign: 'center'
      }}>
        <div style={{maxWidth: '1200px', margin: '0 auto'}}>
          <h3 style={{fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.5rem'}}>
            {portfolioData.personal.name}
          </h3>
          <p style={{color: '#94a3b8', marginBottom: '2rem'}}>AI & Automation Research Engineer</p>
          <div style={{borderTop: '1px solid rgba(59, 130, 246, 0.2)', paddingTop: '2rem'}}>
            <p style={{color: '#64748b'}}>
              © 2024 {portfolioData.personal.name}. Crafted with precision and innovation.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;