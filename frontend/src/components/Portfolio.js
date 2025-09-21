import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { 
  Download, 
  Mail, 
  Linkedin, 
  Github, 
  ExternalLink,
  MapPin,
  Phone,
  Calendar,
  BookOpen,
  Award,
  Code,
  Brain,
  Cpu,
  Microscope,
  ChevronRight,
  GraduationCap,
  Briefcase,
  Target,
  Globe,
  Zap,
  Activity,
  ArrowUpRight
} from 'lucide-react';
import { portfolioData } from '../mock';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      const sections = ['hero', 'about', 'research', 'projects', 'experience', 'skills', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getSkillIcon = (category) => {
    switch (category) {
      case 'AI/ML': return <Brain className="w-5 h-5" />;
      case 'Robotics/Automation': return <Cpu className="w-5 h-5" />;
      case 'Programming': return <Code className="w-5 h-5" />;
      case 'Research': return <Microscope className="w-5 h-5" />;
      default: return <BookOpen className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-blue-500/20">
      {/* Cursor spotlight effect */}
      <div 
        className="fixed pointer-events-none z-50 w-96 h-96 rounded-full opacity-20"
        style={{
          background: `radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)`,
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          transition: 'all 0.1s ease-out'
        }}
      />

      {/* Subtle grid background */}
      <div className="fixed inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(59, 130, 246) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50 z-40">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex justify-between items-center">
            <div className="text-xl font-semibold text-white">
              {portfolioData.personal.name}
            </div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Research', 'Projects', 'Experience', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm transition-all duration-300 relative group ${
                    activeSection === item.toLowerCase() 
                      ? 'text-white' 
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {item}
                  {activeSection === item.toLowerCase() && (
                    <div className="absolute -bottom-1 left-0 w-full h-px bg-blue-500"></div>
                  )}
                  <div className="absolute -bottom-1 left-0 w-0 h-px bg-blue-500 group-hover:w-full transition-all duration-300"></div>
                </button>
              ))}
            </div>
            <Button
              onClick={() => window.open(portfolioData.personal.cv_url, '_blank')}
              className="bg-blue-600 hover:bg-blue-500 text-white border-0 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300"
            >
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-3 bg-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-full px-5 py-2.5">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-slate-300">Available for Research Opportunities</span>
                </div>
                
                <h1 className="text-7xl font-bold text-white leading-[1.1] tracking-tight">
                  {portfolioData.personal.name.split(' ')[0]}
                  <br />
                  <span className="text-blue-400">
                    {portfolioData.personal.name.split(' ').slice(1).join(' ')}
                  </span>
                </h1>
                
                <div className="relative pl-6">
                  <div className="absolute left-0 top-0 w-1 h-full bg-blue-500 rounded-full"></div>
                  <p className="text-xl text-slate-300 leading-relaxed">
                    {portfolioData.personal.tagline}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  {portfolioData.about.interests.slice(0, 3).map((interest, index) => (
                    <Badge 
                      key={index}
                      className="bg-slate-800/60 backdrop-blur-sm text-slate-300 border border-slate-700/50 hover:border-blue-500/50 hover:text-blue-300 transition-all duration-300 px-4 py-1.5"
                    >
                      {interest}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <Button
                  onClick={() => window.open(portfolioData.personal.cv_url, '_blank')}
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 group border-0"
                >
                  <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Download CV
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => window.open(portfolioData.personal.linkedin, '_blank')}
                  className="border-slate-700 text-slate-300 hover:bg-slate-800/60 hover:border-slate-600 px-8 py-3 bg-slate-900/40 backdrop-blur-sm"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => window.open(portfolioData.personal.thesis, '_blank')}
                  className="border-slate-700 text-slate-300 hover:bg-slate-800/60 hover:border-slate-600 px-8 py-3 bg-slate-900/40 backdrop-blur-sm group"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Research Thesis
                  <ArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Button>
              </div>

              <div className="flex items-center space-x-8 text-slate-400 pt-4">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>{portfolioData.personal.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>{portfolioData.personal.email}</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative group">
                <div className="absolute -inset-4 bg-blue-500/20 rounded-full blur-2xl group-hover:bg-blue-500/30 transition-all duration-500"></div>
                <Avatar className="w-80 h-80 relative ring-4 ring-slate-800/50 shadow-2xl group-hover:ring-blue-500/30 transition-all duration-500">
                  <AvatarImage 
                    src={portfolioData.personal.image} 
                    alt={portfolioData.personal.name} 
                    className="object-cover object-top scale-110"
                  />
                  <AvatarFallback className="text-4xl bg-slate-800 text-slate-300 font-semibold">
                    {portfolioData.personal.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">About Me</h2>
            <div className="w-20 h-px bg-blue-500 mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <Card className="border-0 shadow-2xl bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 hover:bg-slate-900/60 transition-all duration-500">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20">
                      <Brain className="w-6 h-6 text-blue-400" />
                    </div>
                    <p className="text-lg text-slate-300 leading-relaxed">
                      {portfolioData.about.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-2xl bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 hover:bg-slate-900/60 transition-all duration-500">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl font-semibold text-white">
                    <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20 mr-4">
                      <Target className="w-5 h-5 text-blue-400" />
                    </div>
                    Research Focus Areas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {portfolioData.about.interests.map((interest, index) => (
                      <Badge 
                        key={index} 
                        className="bg-slate-800/60 backdrop-blur-sm text-slate-300 border border-slate-700/50 hover:border-blue-500/30 hover:text-blue-300 transition-all duration-300 py-2.5 px-4 justify-center"
                      >
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="border-0 shadow-2xl bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 hover:bg-slate-900/60 transition-all duration-500">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl font-semibold text-white">
                    <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20 mr-3">
                      <Globe className="w-5 h-5 text-blue-400" />
                    </div>
                    Languages
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {portfolioData.languages.map((lang, index) => (
                    <div key={index} className="flex justify-between items-center p-3 rounded-lg bg-slate-800/30 backdrop-blur-sm border border-slate-700/30">
                      <span className="text-slate-300">{lang.name}</span>
                      <Badge className="bg-blue-500/10 text-blue-300 border border-blue-500/20">
                        {lang.level}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="research" className="py-24 px-6 bg-slate-900/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">Education & Research</h2>
            <div className="w-20 h-px bg-blue-500 mx-auto"></div>
          </div>
          
          <div className="space-y-6">
            {portfolioData.education.map((edu, index) => (
              <Card key={index} className="border-0 shadow-2xl bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 hover:bg-slate-900/60 transition-all duration-500 group">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="p-4 bg-blue-500/10 rounded-xl border border-blue-500/20">
                        <GraduationCap className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-semibold text-white mb-2">
                          {edu.degree}
                        </CardTitle>
                        <CardDescription className="text-slate-400 text-lg">
                          <span className="text-blue-400">{edu.institution}</span> • {edu.period}
                        </CardDescription>
                      </div>
                    </div>
                    {(edu.thesis || edu.project) && (
                      <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300" />
                    )}
                  </div>
                </CardHeader>
                {(edu.thesis || edu.project) && (
                  <CardContent>
                    <div className="p-6 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/30">
                      <div className="flex items-start space-x-3 mb-3">
                        <Award className="w-4 h-4 text-blue-400 mt-1" />
                        <p className="text-white font-medium">Research/Project:</p>
                      </div>
                      <p className="text-slate-300 leading-relaxed mb-4">{edu.thesis || edu.project}</p>
                      {edu.thesis && (
                        <Button
                          variant="outline"
                          onClick={() => window.open(portfolioData.personal.thesis, '_blank')}
                          className="border-slate-700 text-slate-300 hover:bg-slate-800/60 hover:border-blue-500/50 hover:text-blue-300 bg-slate-900/40 backdrop-blur-sm group"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Research
                          <ArrowUpRight className="w-3 h-3 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </Button>
                      )}
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">Projects & Research</h2>
            <div className="w-20 h-px bg-blue-500 mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {portfolioData.projects.map((project, index) => (
              <Card key={index} className="border-0 shadow-2xl bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 hover:bg-slate-900/60 transition-all duration-500 group hover:-translate-y-1">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <Badge className="bg-blue-500/10 text-blue-300 border border-blue-500/20 px-3 py-1.5">
                      {project.type}
                    </Badge>
                    {project.link && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => window.open(project.link, '_blank')}
                        className="p-2 hover:bg-slate-800/60 text-slate-400 hover:text-blue-400 group"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                  <CardTitle className="text-xl font-semibold text-white mb-3 group-hover:text-blue-100 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-slate-300 leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        className="bg-slate-800/60 backdrop-blur-sm text-slate-400 border border-slate-700/50 text-xs px-3 py-1"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 bg-slate-900/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">Professional Experience</h2>
            <div className="w-20 h-px bg-blue-500 mx-auto"></div>
          </div>
          
          <div className="space-y-8">
            {portfolioData.experience.map((exp, index) => (
              <div key={index} className="relative pl-12">
                <div className="absolute left-0 top-6 w-6 h-6 bg-blue-500 rounded-full border-4 border-slate-950"></div>
                <div className="absolute left-3 top-12 w-px h-full bg-slate-700"></div>
                <Card className="border-0 shadow-2xl bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 hover:bg-slate-900/60 transition-all duration-500">
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20">
                        <Briefcase className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-semibold text-white mb-2">
                          {exp.title}
                        </CardTitle>
                        <CardDescription className="text-lg">
                          <div className="flex flex-col sm:flex-row sm:justify-between text-slate-400">
                            <span className="text-blue-400">{exp.company}, {exp.location}</span>
                            <span className="text-slate-500">{exp.period}</span>
                          </div>
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="p-6 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/30">
                      <div className="flex items-start space-x-3">
                        <Activity className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                        <p className="text-slate-300 leading-relaxed">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">Technical Expertise</h2>
            <div className="w-20 h-px bg-blue-500 mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {Object.entries(portfolioData.skills).map(([category, skills]) => (
              <Card key={category} className="border-0 shadow-2xl bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 hover:bg-slate-900/60 transition-all duration-500 hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl font-semibold text-white">
                    <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20 mr-4">
                      {getSkillIcon(category)}
                    </div>
                    <span>{category}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        className="bg-slate-800/60 backdrop-blur-sm text-slate-300 border border-slate-700/50 hover:border-blue-500/30 hover:text-blue-300 transition-all duration-300 py-2.5 px-4 justify-center"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-slate-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">Let's Connect</h2>
            <div className="w-20 h-px bg-blue-500 mx-auto"></div>
          </div>
          
          <Card className="border-0 shadow-2xl bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 mb-12">
            <CardContent className="p-12">
              <div className="flex justify-center mb-8">
                <div className="p-6 bg-blue-500/10 rounded-2xl border border-blue-500/20">
                  <Mail className="w-10 h-10 text-blue-400" />
                </div>
              </div>
              <p className="text-xl text-slate-300 mb-12 leading-relaxed max-w-2xl mx-auto">
                Interested in cutting-edge AI research collaboration? Let's discuss how we can push the boundaries of technology together.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                <Button
                  onClick={() => window.location.href = `mailto:${portfolioData.personal.email}`}
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 group border-0"
                >
                  <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Start Conversation
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => window.open(portfolioData.personal.linkedin, '_blank')}
                  className="border-slate-700 text-slate-300 hover:bg-slate-800/60 hover:border-blue-500/50 hover:text-blue-300 px-8 py-3 bg-slate-900/40 backdrop-blur-sm"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </Button>
              </div>

              <div className="pt-8 border-t border-slate-800/50">
                <div className="flex justify-center items-center space-x-8 text-slate-400">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span>{portfolioData.personal.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>{portfolioData.personal.location}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800/50 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-white mb-2">
              {portfolioData.personal.name}
            </h3>
            <p className="text-slate-400">AI & Automation Research Engineer</p>
          </div>
          <div className="border-t border-slate-800/50 pt-6">
            <p className="text-slate-500">
              © 2024 {portfolioData.personal.name}. Crafted with precision and innovation.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;