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
  Microscope
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
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-light text-gray-900">
              {portfolioData.personal.name}
            </div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Research', 'Projects', 'Experience', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm transition-colors hover:text-gray-900 ${
                    activeSection === item.toLowerCase() 
                      ? 'text-gray-900 border-b border-gray-900' 
                      : 'text-gray-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <Button
              onClick={() => window.open(portfolioData.personal.cv_url, '_blank')}
              className="bg-gray-900 hover:bg-gray-800 text-white"
            >
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h1 className="text-6xl font-light text-gray-900 mb-4 tracking-tight">
                  {portfolioData.personal.name}
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {portfolioData.personal.tagline}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button
                  onClick={() => window.open(portfolioData.personal.cv_url, '_blank')}
                  className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </Button>
                <Button
                  variant="outline"
                  onClick={() => window.open(portfolioData.personal.linkedin, '_blank')}
                  className="border-gray-300 hover:bg-gray-50 px-6 py-3"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
                <Button
                  variant="outline"
                  onClick={() => window.open(portfolioData.personal.thesis, '_blank')}
                  className="border-gray-300 hover:bg-gray-50 px-6 py-3"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Master's Thesis
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  {portfolioData.personal.location}
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  {portfolioData.personal.email}
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <Avatar className="w-80 h-80">
                  <AvatarImage src={portfolioData.personal.image} alt={portfolioData.personal.name} />
                  <AvatarFallback className="text-4xl bg-gray-100 text-gray-600">
                    {portfolioData.personal.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gray-100 rounded-full opacity-50"></div>
                <div className="absolute -top-8 -left-8 w-16 h-16 bg-gray-200 rounded-full opacity-30"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-light text-gray-900 mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {portfolioData.about.description}
              </p>
              
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-4">Research Interests</h3>
                <div className="flex flex-wrap gap-2">
                  {portfolioData.about.interests.map((interest, index) => (
                    <Badge key={index} variant="secondary" className="bg-gray-200 text-gray-800">
                      {interest}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Languages</h3>
              <div className="space-y-3">
                {portfolioData.languages.map((lang, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-700">{lang.name}</span>
                    <Badge variant="outline">{lang.level}</Badge>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="research" className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-light text-gray-900 mb-12 text-center">Education & Research</h2>
          <div className="space-y-6">
            {portfolioData.education.map((edu, index) => (
              <Card key={index} className="border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-xl font-medium text-gray-900">
                    {edu.degree}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {edu.institution} • {edu.period}
                  </CardDescription>
                </CardHeader>
                {(edu.thesis || edu.project) && (
                  <CardContent>
                    <p className="text-gray-700">
                      <strong>Research/Project:</strong> {edu.thesis || edu.project}
                    </p>
                    {edu.thesis && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(portfolioData.personal.thesis, '_blank')}
                        className="mt-3"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Thesis
                      </Button>
                    )}
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-light text-gray-900 mb-12 text-center">Projects & Research</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {portfolioData.projects.map((project, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl font-medium text-gray-900 mb-2">
                        {project.title}
                      </CardTitle>
                      <Badge variant="outline" className="mb-3">
                        {project.type}
                      </Badge>
                    </div>
                    {project.link && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => window.open(project.link, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                  <CardDescription className="text-gray-700">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-gray-200 text-gray-800">
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
      <section id="experience" className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-light text-gray-900 mb-12 text-center">Professional Experience</h2>
          <div className="space-y-8">
            {portfolioData.experience.map((exp, index) => (
              <div key={index} className="relative pl-8">
                <div className="absolute left-0 top-2 w-3 h-3 bg-gray-900 rounded-full"></div>
                <div className="absolute left-1.5 top-5 w-0.5 h-full bg-gray-200"></div>
                <Card className="border-0 shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-xl font-medium text-gray-900">
                      {exp.title}
                    </CardTitle>
                    <CardDescription>
                      <div className="flex flex-col sm:flex-row sm:justify-between text-gray-600">
                        <span>{exp.company}, {exp.location}</span>
                        <span>{exp.period}</span>
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed">
                      {exp.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-light text-gray-900 mb-12 text-center">Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(portfolioData.skills).map(([category, skills]) => (
              <Card key={category} className="border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg font-medium text-gray-900">
                    {getSkillIcon(category)}
                    <span className="ml-3">{category}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="bg-gray-200 text-gray-800">
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
      <section id="contact" className="py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-light text-gray-900 mb-8">Get In Touch</h2>
          <p className="text-lg text-gray-600 mb-8">
            Interested in collaboration, research opportunities, or discussing AI & automation projects? 
            I'd love to hear from you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => window.location.href = `mailto:${portfolioData.personal.email}`}
              className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3"
            >
              <Mail className="w-4 h-4 mr-2" />
              Email Me
            </Button>
            <Button
              variant="outline"
              onClick={() => window.open(portfolioData.personal.linkedin, '_blank')}
              className="border-gray-300 hover:bg-gray-50 px-6 py-3"
            >
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </Button>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex justify-center items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                {portfolioData.personal.phone}
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                {portfolioData.personal.location}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 {portfolioData.personal.name}. Designed for excellence in AI & Automation.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;