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
  Rocket,
  Database,
  Activity
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
      case 'AI/ML': return <Brain className="w-6 h-6" />;
      case 'Robotics/Automation': return <Cpu className="w-6 h-6" />;
      case 'Programming': return <Code className="w-6 h-6" />;
      case 'Research': return <Microscope className="w-6 h-6" />;
      default: return <BookOpen className="w-6 h-6" />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-green-400/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-xl border-b border-cyan-500/20 z-50 shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
              {portfolioData.personal.name}
            </div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Research', 'Projects', 'Experience', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm transition-all duration-300 hover:text-cyan-400 relative group ${
                    activeSection === item.toLowerCase() 
                      ? 'text-cyan-400 font-medium' 
                      : 'text-gray-300'
                  }`}
                >
                  {item}
                  {activeSection === item.toLowerCase() && (
                    <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full shadow-lg shadow-cyan-400/50"></div>
                  )}
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full group-hover:w-full transition-all duration-300 shadow-lg shadow-cyan-400/50"></div>
                </button>
              ))}
            </div>
            <Button
              onClick={() => window.open(portfolioData.personal.cv_url, '_blank')}
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-black font-semibold shadow-lg hover:shadow-cyan-400/25 transition-all duration-300 border-0 hover:scale-105"
            >
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-500/20 to-cyan-500/20 backdrop-blur-sm border border-green-400/30 rounded-full px-6 py-3 shadow-lg shadow-green-400/10">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
                  <span className="text-sm text-green-400 font-medium">Available for Research Collaborations</span>
                  <Zap className="w-4 h-4 text-green-400" />
                </div>
                
                <h1 className="text-8xl font-black bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent leading-tight tracking-tight">
                  {portfolioData.personal.name.split(' ')[0]}
                  <br />
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
                    {portfolioData.personal.name.split(' ').slice(1).join(' ')}
                  </span>
                </h1>
                
                <div className="relative">
                  <p className="text-2xl text-gray-300 leading-relaxed font-light">
                    {portfolioData.personal.tagline}
                  </p>
                  <div className="absolute -left-6 top-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full shadow-lg shadow-cyan-400/30"></div>
                </div>

                <div className="flex flex-wrap gap-2 pt-4">
                  {portfolioData.about.interests.slice(0, 3).map((interest, index) => (
                    <Badge 
                      key={index}
                      className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 px-4 py-2 text-sm shadow-lg shadow-cyan-500/10"
                    >
                      {interest}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button
                  onClick={() => window.open(portfolioData.personal.cv_url, '_blank')}
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-black px-8 py-4 shadow-2xl hover:shadow-cyan-400/25 transition-all duration-300 group font-semibold border-0 hover:scale-105"
                >
                  <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Download CV
                  <Rocket className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => window.open(portfolioData.personal.linkedin, '_blank')}
                  className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 px-8 py-4 shadow-lg hover:shadow-cyan-400/20 transition-all duration-300 group bg-black/50 backdrop-blur-sm"
                >
                  <Linkedin className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  LinkedIn
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => window.open(portfolioData.personal.thesis, '_blank')}
                  className="border-purple-400/50 text-purple-400 hover:bg-purple-400/10 hover:border-purple-400 px-8 py-4 shadow-lg hover:shadow-purple-400/20 transition-all duration-300 group bg-black/50 backdrop-blur-sm"
                >
                  <ExternalLink className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Research Thesis
                </Button>
              </div>

              <div className="flex items-center space-x-8 text-gray-400 pt-4">
                <div className="flex items-center space-x-2 group hover:text-cyan-400 transition-colors">
                  <MapPin className="w-5 h-5 group-hover:text-cyan-400 transition-colors" />
                  <span className="font-medium">{portfolioData.personal.location}</span>
                </div>
                <div className="flex items-center space-x-2 group hover:text-purple-400 transition-colors">
                  <Mail className="w-5 h-5 group-hover:text-purple-400 transition-colors" />
                  <span className="font-medium">{portfolioData.personal.email}</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative group">
                <div className="absolute -inset-6 bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-green-400/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-full blur-xl animate-pulse"></div>
                <Avatar className="w-96 h-96 relative border-4 border-gradient-to-r from-cyan-400 to-purple-400 shadow-2xl group-hover:scale-105 transition-all duration-500 ring-4 ring-cyan-400/20">
                  <AvatarImage src={portfolioData.personal.image} alt={portfolioData.personal.name} className="object-cover" />
                  <AvatarFallback className="text-6xl bg-gradient-to-br from-gray-800 to-gray-900 text-cyan-400 font-bold border-2 border-cyan-400/30">
                    {portfolioData.personal.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-purple-400/30 to-cyan-400/30 rounded-full blur-xl animate-pulse delay-1000"></div>
                <div className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-br from-green-400/20 to-cyan-400/20 rounded-full blur-xl animate-pulse delay-2000"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-green-400 bg-clip-text text-transparent mb-4">
              About Me
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-green-400 rounded-full mx-auto shadow-lg shadow-cyan-400/30"></div>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <Card className="border-0 shadow-2xl bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm hover:shadow-cyan-400/10 transition-all duration-500 border border-gray-800/50">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl border border-cyan-500/30">
                      <Brain className="w-6 h-6 text-cyan-400" />
                    </div>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      {portfolioData.about.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-2xl bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm hover:shadow-purple-400/10 transition-all duration-500 border border-gray-800/50">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center text-2xl font-semibold text-white">
                    <div className="p-3 bg-gradient-to-br from-purple-500/20 to-green-500/20 rounded-xl border border-purple-500/30 mr-4">
                      <Target className="w-6 h-6 text-purple-400" />
                    </div>
                    Research Focus Areas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {portfolioData.about.interests.map((interest, index) => (
                      <Badge 
                        key={index} 
                        className={`bg-gradient-to-r ${
                          index % 3 === 0 ? 'from-cyan-500/20 to-blue-500/20 text-cyan-300 border-cyan-500/30' :
                          index % 3 === 1 ? 'from-purple-500/20 to-pink-500/20 text-purple-300 border-purple-500/30' :
                          'from-green-500/20 to-emerald-500/20 text-green-300 border-green-500/30'
                        } hover:scale-105 transition-all duration-300 py-3 px-4 text-sm font-medium shadow-lg justify-center border`}
                      >
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="border-0 shadow-2xl bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm hover:shadow-green-400/10 transition-all duration-500 border border-gray-800/50">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl font-semibold text-white">
                    <div className="p-3 bg-gradient-to-br from-green-500/20 to-cyan-500/20 rounded-xl border border-green-500/30 mr-3">
                      <Globe className="w-5 h-5 text-green-400" />
                    </div>
                    Languages
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {portfolioData.languages.map((lang, index) => (
                    <div key={index} className="flex justify-between items-center p-4 rounded-lg bg-gradient-to-r from-gray-800/50 to-gray-900/50 hover:from-gray-800/70 hover:to-gray-900/70 transition-all duration-300 border border-gray-700/30">
                      <span className="font-medium text-gray-200">{lang.name}</span>
                      <Badge 
                        className={`${
                          lang.level === 'Native' ? 'bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 border-green-400/30' :
                          lang.level === 'Fluent' ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 border-cyan-400/30' :
                          'bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-400 border-amber-400/30'
                        } border font-medium`}
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
      <section id="research" className="py-20 px-6 relative z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"></div>
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-green-400 bg-clip-text text-transparent mb-4">
              Education & Research
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-green-400 rounded-full mx-auto shadow-lg shadow-cyan-400/30"></div>
          </div>
          
          <div className="space-y-8">
            {portfolioData.education.map((edu, index) => (
              <Card key={index} className="border-0 shadow-2xl bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm hover:shadow-cyan-400/10 transition-all duration-500 group overflow-hidden border border-gray-800/50">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="p-4 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl border border-cyan-500/30">
                        <GraduationCap className="w-8 h-8 text-cyan-400" />
                      </div>
                      <div>
                        <CardTitle className="text-3xl font-semibold text-white mb-3 group-hover:text-cyan-100 transition-colors">
                          {edu.degree}
                        </CardTitle>
                        <CardDescription className="text-gray-400 text-lg">
                          <span className="text-purple-400 font-medium">{edu.institution}</span> • <span className="font-medium">{edu.period}</span>
                        </CardDescription>
                      </div>
                    </div>
                    {(edu.thesis || edu.project) && (
                      <ChevronRight className="w-6 h-6 text-gray-500 group-hover:text-cyan-400 group-hover:translate-x-2 transition-all duration-300" />
                    )}
                  </div>
                </CardHeader>
                {(edu.thesis || edu.project) && (
                  <CardContent className="relative">
                    <div className="p-6 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/30">
                      <div className="flex items-start space-x-3 mb-4">
                        <Award className="w-5 h-5 text-green-400 mt-1" />
                        <p className="text-white font-semibold">Research/Project:</p>
                      </div>
                      <p className="text-gray-300 leading-relaxed mb-4">{edu.thesis || edu.project}</p>
                      {edu.thesis && (
                        <Button
                          variant="outline"
                          onClick={() => window.open(portfolioData.personal.thesis, '_blank')}
                          className="border-purple-400/50 text-purple-400 hover:bg-purple-400/10 hover:border-purple-400 group bg-black/30 backdrop-blur-sm"
                        >
                          <ExternalLink className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                          View Research
                          <Database className="w-4 h-4 ml-2" />
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
      <section id="projects" className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-green-400 bg-clip-text text-transparent mb-4">
              Projects & Research
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-green-400 rounded-full mx-auto shadow-lg shadow-cyan-400/30"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {portfolioData.projects.map((project, index) => (
              <Card key={index} className="border-0 shadow-2xl bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm hover:shadow-cyan-400/10 transition-all duration-500 group overflow-hidden border border-gray-800/50 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative">
                  <div className="flex justify-between items-start mb-4">
                    <Badge 
                      className={`${
                        project.type === 'Research' ? 'bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 border-green-400/30' :
                        project.type === 'Robotics' ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400 border-purple-400/30' :
                        project.type === 'AI/ML' ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 border-cyan-400/30' :
                        'bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-400 border-amber-400/30'
                      } border px-4 py-2 font-semibold shadow-lg`}
                    >
                      {project.type}
                    </Badge>
                    {project.link && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => window.open(project.link, '_blank')}
                        className="p-2 hover:bg-cyan-400/10 group text-gray-400 hover:text-cyan-400"
                      >
                        <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-all" />
                      </Button>
                    )}
                  </div>
                  <CardTitle className="text-2xl font-semibold text-white mb-4 group-hover:text-cyan-100 transition-colors leading-tight">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300 leading-relaxed text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        className="bg-gradient-to-r from-gray-700/50 to-gray-800/50 text-gray-300 border border-gray-600/30 hover:from-cyan-500/20 hover:to-purple-500/20 hover:text-cyan-300 hover:border-cyan-500/30 transition-all duration-300 text-xs py-1 px-3"
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
      <section id="experience" className="py-20 px-6 relative z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-cyan-500/5"></div>
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-green-400 bg-clip-text text-transparent mb-4">
              Professional Experience
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-green-400 rounded-full mx-auto shadow-lg shadow-cyan-400/30"></div>
          </div>
          
          <div className="space-y-8">
            {portfolioData.experience.map((exp, index) => (
              <div key={index} className="relative pl-16">
                <div className="absolute left-0 top-8 w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-full shadow-2xl border-4 border-black shadow-cyan-400/30"></div>
                <div className="absolute left-4 top-16 w-0.5 h-full bg-gradient-to-b from-cyan-400/50 to-transparent"></div>
                <Card className="border-0 shadow-2xl bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm hover:shadow-purple-400/10 transition-all duration-500 group border border-gray-800/50">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                  <CardHeader className="relative">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className="p-4 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-xl border border-purple-500/30">
                          <Briefcase className="w-8 h-8 text-purple-400" />
                        </div>
                        <div>
                          <CardTitle className="text-3xl font-semibold text-white mb-3 group-hover:text-purple-100 transition-colors">
                            {exp.title}
                          </CardTitle>
                          <CardDescription className="text-lg">
                            <div className="flex flex-col sm:flex-row sm:justify-between text-gray-400">
                              <span className="font-medium text-cyan-400">{exp.company}, {exp.location}</span>
                              <span className="text-gray-500 font-medium">{exp.period}</span>
                            </div>
                          </CardDescription>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="relative">
                    <div className="p-6 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/30">
                      <div className="flex items-start space-x-3">
                        <Activity className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                        <p className="text-gray-300 leading-relaxed">
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
      <section id="skills" className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-green-400 bg-clip-text text-transparent mb-4">
              Technical Arsenal
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-green-400 rounded-full mx-auto shadow-lg shadow-cyan-400/30"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {Object.entries(portfolioData.skills).map(([category, skills], index) => (
              <Card key={category} className="border-0 shadow-2xl bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm hover:shadow-cyan-400/10 transition-all duration-500 group border border-gray-800/50 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                <CardHeader className="relative">
                  <CardTitle className="flex items-center text-3xl font-semibold text-white group-hover:text-cyan-100 transition-colors">
                    <div className={`p-4 bg-gradient-to-br ${
                      index % 4 === 0 ? 'from-cyan-500/20 to-blue-500/20 border-cyan-500/30' :
                      index % 4 === 1 ? 'from-purple-500/20 to-pink-500/20 border-purple-500/30' :
                      index % 4 === 2 ? 'from-green-500/20 to-emerald-500/20 border-green-500/30' :
                      'from-amber-500/20 to-orange-500/20 border-amber-500/30'
                    } rounded-xl mr-4 border`}>
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
                        className={`bg-gradient-to-r ${
                          skillIndex % 4 === 0 ? 'from-cyan-500/20 to-blue-500/20 text-cyan-300 border-cyan-500/30' :
                          skillIndex % 4 === 1 ? 'from-purple-500/20 to-pink-500/20 text-purple-300 border-purple-500/30' :
                          skillIndex % 4 === 2 ? 'from-green-500/20 to-emerald-500/20 text-green-300 border-green-500/30' :
                          'from-amber-500/20 to-orange-500/20 text-amber-300 border-amber-500/30'
                        } hover:scale-105 transition-all duration-300 py-3 px-4 text-sm font-medium justify-center border shadow-lg`}
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
      <section id="contact" className="py-20 px-6 relative z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-cyan-500/5"></div>
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="mb-16">
            <h2 className="text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-green-400 bg-clip-text text-transparent mb-4">
              Let's Collaborate
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-green-400 rounded-full mx-auto shadow-lg shadow-cyan-400/30"></div>
          </div>
          
          <Card className="border-0 shadow-2xl bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm mb-12 border border-gray-800/50">
            <CardContent className="p-12">
              <div className="flex justify-center mb-8">
                <div className="p-6 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl border border-cyan-500/30">
                  <Rocket className="w-12 h-12 text-cyan-400" />
                </div>
              </div>
              <p className="text-2xl text-gray-300 mb-12 leading-relaxed">
                Ready to push the boundaries of AI & Automation? Let's create something extraordinary together.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                <Button
                  onClick={() => window.location.href = `mailto:${portfolioData.personal.email}`}
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-black px-8 py-4 shadow-2xl hover:shadow-cyan-400/25 transition-all duration-300 group font-semibold border-0 hover:scale-105"
                >
                  <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Start Conversation
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => window.open(portfolioData.personal.linkedin, '_blank')}
                  className="border-purple-400/50 text-purple-400 hover:bg-purple-400/10 hover:border-purple-400 px-8 py-4 shadow-lg hover:shadow-purple-400/20 transition-all duration-300 group bg-black/50 backdrop-blur-sm"
                >
                  <Linkedin className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Connect on LinkedIn
                </Button>
              </div>

              <div className="pt-8 border-t border-gray-800/50">
                <div className="flex justify-center items-center space-x-8 text-gray-400">
                  <div className="flex items-center space-x-2 group hover:text-green-400 transition-colors">
                    <Phone className="w-5 h-5 group-hover:text-green-400 transition-colors" />
                    <span className="font-medium">{portfolioData.personal.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2 group hover:text-cyan-400 transition-colors">
                    <MapPin className="w-5 h-5 group-hover:text-cyan-400 transition-colors" />
                    <span className="font-medium">{portfolioData.personal.location}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-black via-gray-900 to-black border-t border-gray-800/50 py-12 px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-green-400 bg-clip-text text-transparent mb-2">
              {portfolioData.personal.name}
            </h3>
            <p className="text-gray-400 text-lg">Pioneering the Future of AI & Automation</p>
          </div>
          <div className="border-t border-gray-800/50 pt-6">
            <p className="text-gray-500">
              © 2024 {portfolioData.personal.name}. Crafted with cutting-edge technology.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;