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
  Globe
} from 'lucide-react';
import { portfolioData } from '../mock';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-xl border-b border-slate-200/60 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-semibold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              {portfolioData.personal.name}
            </div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Research', 'Projects', 'Experience', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm transition-all duration-300 hover:text-slate-900 relative ${
                    activeSection === item.toLowerCase() 
                      ? 'text-slate-900 font-medium' 
                      : 'text-slate-600'
                  }`}
                >
                  {item}
                  {activeSection === item.toLowerCase() && (
                    <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
                  )}
                </button>
              ))}
            </div>
            <Button
              onClick={() => window.open(portfolioData.personal.cv_url, '_blank')}
              className="bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-700 hover:to-slate-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-indigo-50/30 to-slate-50/50"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-blue-200/20 to-indigo-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-slate-200/20 to-gray-200/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-slate-200/60 rounded-full px-4 py-2 shadow-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-slate-600">Available for Research Opportunities</span>
                </div>
                
                <h1 className="text-7xl font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-transparent leading-tight">
                  {portfolioData.personal.name}
                </h1>
                
                <div className="relative">
                  <p className="text-2xl text-slate-600 leading-relaxed font-light">
                    {portfolioData.personal.tagline}
                  </p>
                  <div className="absolute -left-4 top-0 w-0.5 h-full bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full"></div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button
                  onClick={() => window.open(portfolioData.personal.cv_url, '_blank')}
                  size="lg"
                  className="bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-700 hover:to-slate-600 text-white px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Download CV
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => window.open(portfolioData.personal.linkedin, '_blank')}
                  className="border-slate-300 hover:bg-slate-50 px-8 py-4 shadow-sm hover:shadow-md transition-all duration-300 group"
                >
                  <Linkedin className="w-5 h-5 mr-2 text-blue-600 group-hover:scale-110 transition-transform" />
                  LinkedIn
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => window.open(portfolioData.personal.thesis, '_blank')}
                  className="border-slate-300 hover:bg-slate-50 px-8 py-4 shadow-sm hover:shadow-md transition-all duration-300 group"
                >
                  <ExternalLink className="w-5 h-5 mr-2 text-indigo-600 group-hover:scale-110 transition-transform" />
                  Master's Thesis
                </Button>
              </div>

              <div className="flex items-center space-x-8 text-slate-600">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-slate-400" />
                  <span className="font-medium">{portfolioData.personal.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-5 h-5 text-slate-400" />
                  <span className="font-medium">{portfolioData.personal.email}</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-200/50 to-indigo-200/50 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <Avatar className="w-96 h-96 relative border-4 border-white shadow-2xl group-hover:scale-105 transition-all duration-500">
                  <AvatarImage src={portfolioData.personal.image} alt={portfolioData.personal.name} />
                  <AvatarFallback className="text-6xl bg-gradient-to-br from-slate-100 to-slate-200 text-slate-700 font-semibold">
                    {portfolioData.personal.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-indigo-200/30 rounded-full blur-lg"></div>
                <div className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-br from-slate-200/40 to-gray-200/40 rounded-full blur-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500">
                <CardContent className="p-8">
                  <p className="text-lg text-slate-700 leading-relaxed">
                    {portfolioData.about.description}
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center text-2xl font-semibold text-slate-800">
                    <Target className="w-6 h-6 mr-3 text-indigo-600" />
                    Research Interests
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {portfolioData.about.interests.map((interest, index) => (
                      <Badge 
                        key={index} 
                        variant="secondary" 
                        className="bg-gradient-to-r from-slate-100 to-slate-50 text-slate-700 border border-slate-200 hover:from-blue-50 hover:to-indigo-50 hover:border-blue-200 transition-all duration-300 py-2 px-4 text-sm font-medium"
                      >
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl font-semibold text-slate-800">
                    <Globe className="w-5 h-5 mr-3 text-blue-600" />
                    Languages
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {portfolioData.languages.map((lang, index) => (
                    <div key={index} className="flex justify-between items-center p-3 rounded-lg bg-slate-50/80 hover:bg-slate-100/80 transition-colors">
                      <span className="font-medium text-slate-700">{lang.name}</span>
                      <Badge 
                        variant="outline" 
                        className={`${
                          lang.level === 'Native' ? 'border-green-200 text-green-700 bg-green-50' :
                          lang.level === 'Fluent' ? 'border-blue-200 text-blue-700 bg-blue-50' :
                          'border-amber-200 text-amber-700 bg-amber-50'
                        }`}
                      >
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
      <section id="research" className="py-20 px-6 bg-gradient-to-br from-slate-50/50 to-blue-50/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-4">
              Education & Research
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mx-auto"></div>
          </div>
          
          <div className="space-y-8">
            {portfolioData.education.map((edu, index) => (
              <Card key={index} className="border-0 shadow-xl bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl">
                        <GraduationCap className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-semibold text-slate-800 mb-2 group-hover:text-slate-900 transition-colors">
                          {edu.degree}
                        </CardTitle>
                        <CardDescription className="text-slate-600 text-lg">
                          {edu.institution} • <span className="font-medium">{edu.period}</span>
                        </CardDescription>
                      </div>
                    </div>
                    {(edu.thesis || edu.project) && (
                      <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
                    )}
                  </div>
                </CardHeader>
                {(edu.thesis || edu.project) && (
                  <CardContent className="relative">
                    <div className="p-4 bg-slate-50/80 rounded-xl border border-slate-100">
                      <p className="text-slate-700 font-medium mb-3">
                        <Award className="w-4 h-4 inline mr-2 text-amber-500" />
                        Research/Project:
                      </p>
                      <p className="text-slate-600 leading-relaxed">{edu.thesis || edu.project}</p>
                      {edu.thesis && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => window.open(portfolioData.personal.thesis, '_blank')}
                          className="mt-4 border-blue-200 text-blue-700 hover:bg-blue-50 group"
                        >
                          <ExternalLink className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                          View Thesis
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
      <section id="projects" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-4">
              Projects & Research
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {portfolioData.projects.map((project, index) => (
              <Card key={index} className="border-0 shadow-xl bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center mb-3">
                        <Badge 
                          variant="outline" 
                          className={`mr-3 ${
                            project.type === 'Research' ? 'border-green-200 text-green-700 bg-green-50' :
                            project.type === 'Robotics' ? 'border-purple-200 text-purple-700 bg-purple-50' :
                            project.type === 'AI/ML' ? 'border-blue-200 text-blue-700 bg-blue-50' :
                            'border-amber-200 text-amber-700 bg-amber-50'
                          }`}
                        >
                          {project.type}
                        </Badge>
                        {project.link && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => window.open(project.link, '_blank')}
                            className="p-2 hover:bg-blue-50 group"
                          >
                            <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:scale-110 transition-all" />
                          </Button>
                        )}
                      </div>
                      <CardTitle className="text-xl font-semibold text-slate-800 mb-3 group-hover:text-slate-900 transition-colors leading-tight">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-slate-600 leading-relaxed">
                        {project.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="relative">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary" 
                        className="bg-gradient-to-r from-slate-100 to-slate-50 text-slate-700 border border-slate-200 hover:from-blue-50 hover:to-indigo-50 hover:border-blue-200 transition-all duration-300 text-xs"
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
      <section id="experience" className="py-20 px-6 bg-gradient-to-br from-slate-50/50 to-blue-50/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-4">
              Professional Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mx-auto"></div>
          </div>
          
          <div className="space-y-8">
            {portfolioData.experience.map((exp, index) => (
              <div key={index} className="relative pl-12">
                <div className="absolute left-0 top-6 w-6 h-6 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full shadow-lg border-4 border-white"></div>
                <div className="absolute left-3 top-12 w-0.5 h-full bg-gradient-to-b from-blue-200 to-transparent"></div>
                <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                  <CardHeader className="relative">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl">
                          <Briefcase className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl font-semibold text-slate-800 mb-2 group-hover:text-slate-900 transition-colors">
                            {exp.title}
                          </CardTitle>
                          <CardDescription className="text-lg">
                            <div className="flex flex-col sm:flex-row sm:justify-between text-slate-600">
                              <span className="font-medium">{exp.company}, {exp.location}</span>
                              <span className="text-slate-500">{exp.period}</span>
                            </div>
                          </CardDescription>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="relative">
                    <div className="p-4 bg-slate-50/80 rounded-xl border border-slate-100">
                      <p className="text-slate-700 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-4">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {Object.entries(portfolioData.skills).map(([category, skills]) => (
              <Card key={category} className="border-0 shadow-xl bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                <CardHeader className="relative">
                  <CardTitle className="flex items-center text-2xl font-semibold text-slate-800 group-hover:text-slate-900 transition-colors">
                    <div className="p-3 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl mr-4">
                      {getSkillIcon(category)}
                    </div>
                    <span>{category}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <div className="grid grid-cols-2 gap-3">
                    {skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className="bg-gradient-to-r from-slate-100 to-slate-50 text-slate-700 border border-slate-200 hover:from-blue-50 hover:to-indigo-50 hover:border-blue-200 transition-all duration-300 py-2 px-3 text-sm font-medium justify-center"
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
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-slate-50/50 to-blue-50/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-4">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mx-auto"></div>
          </div>
          
          <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-sm mb-12">
            <CardContent className="p-12">
              <p className="text-xl text-slate-600 mb-12 leading-relaxed">
                Interested in collaboration, research opportunities, or discussing AI & automation projects? 
                I'd love to hear from you.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                <Button
                  onClick={() => window.location.href = `mailto:${portfolioData.personal.email}`}
                  size="lg"
                  className="bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-700 hover:to-slate-600 text-white px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Email Me
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => window.open(portfolioData.personal.linkedin, '_blank')}
                  className="border-slate-300 hover:bg-slate-50 px-8 py-4 shadow-sm hover:shadow-md transition-all duration-300 group"
                >
                  <Linkedin className="w-5 h-5 mr-2 text-blue-600 group-hover:scale-110 transition-transform" />
                  LinkedIn
                </Button>
              </div>

              <div className="pt-8 border-t border-slate-200">
                <div className="flex justify-center items-center space-x-8 text-slate-600">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-5 h-5 text-slate-400" />
                    <span className="font-medium">{portfolioData.personal.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-slate-400" />
                    <span className="font-medium">{portfolioData.personal.location}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-2">{portfolioData.personal.name}</h3>
            <p className="text-slate-300">AI & Automation Engineer</p>
          </div>
          <div className="border-t border-slate-700 pt-6">
            <p className="text-slate-400">
              © 2024 {portfolioData.personal.name}. Designed for excellence in AI & Automation.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;