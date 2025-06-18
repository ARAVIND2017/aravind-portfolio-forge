
import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ArrowDown, Star, Award, MapPin, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import SkillsSection from '@/components/SkillsSection';
import { SplineSceneBasic } from '@/components/ui/demo';
import emailjs from '@emailjs/browser';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    // Initialize EmailJS with your public key
    emailjs.init('z4p5isoQOASeMMQy8');
  }, []);

  const projects = [
    {
      title: 'Mock Interview + LMS App',
      description: 'AI-powered job preparation platform with personalized learning management',
      tech: ['Python', 'Flask', 'AI', 'MongoDB'],
      award: 'Ignitron 2K24 1st Place',
      github: '#',
      demo: '#'
    },
    {
      title: 'Cloud Cost Estimator',
      description: 'ML-powered tool for estimating AWS, Azure, and GCP infrastructure costs',
      tech: ['Python', 'ML', 'scikit-learn'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Shuddha Utpadah',
      description: 'Android app connecting rural food producers with urban consumers',
      tech: ['Kotlin', 'Android', 'Firebase'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Telegram Automation Bot',
      description: 'Productivity automation bot using n8n for workflow management',
      tech: ['n8n', 'Telegram API', 'Automation'],
      github: '#',
      demo: '#'
    }
  ];

  const achievements = [
    { title: 'Washington Hackathon', award: 'Best Thematic Award', year: '2024', icon: '🏆' },
    { title: 'Ignitron 2K24', award: '1st Place', year: '2024', icon: '🥇' },
    { title: 'Ballari Science Mela', award: '2nd Prize', year: '2024', icon: '🥈' }
  ];

  const certifications = [
    'Google Cloud - Generative AI Launchpad',
    'Simplilearn - Machine Learning',
    'EZ Technology - Python Programming'
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Send email using EmailJS
      await emailjs.send(
        'service_6gf1otk', // Your Service ID
        'template_jxny4fe', // Your Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Aravind', // You can customize this
        }
      );
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Failed to Send Message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white overflow-x-hidden">
      {/* Sticky Header */}
      <header className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-lg border-b border-slate-700/50 animate-slide-up">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-glow">
              Aravind
            </div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="hover:text-blue-400 transition-all duration-300 relative group animate-fade-in hover-scale"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full story-link"></span>
                </button>
              ))}
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section with SplineSceneBasic */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className={`transition-all duration-1000 mb-12 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-8">
              <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-500 to-purple-600 shadow-2xl animate-float">
                <img 
                  src="/lovable-uploads/22c6e9db-a4c4-4ef5-ab8c-49fc46b54eb2.png" 
                  alt="B. Aravind" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent animate-scale-in">
                Hi, I'm B. Aravind
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-slate-300 max-w-4xl mx-auto leading-relaxed animate-delayed-fade-in">
                AI/ML Enthusiast | Full Stack Developer | App Builder | Hackathon Winner
              </p>
              <p className="text-lg mb-12 text-slate-400 max-w-2xl mx-auto animate-slide-in-left">
                Let's build the future together
              </p>
            </div>
          </div>
          
          {/* 3D Interactive Scene */}
          <div className="max-w-6xl mx-auto animate-slide-in-right">
            <div style={{ background: 'transparent' }}>
              <SplineSceneBasic />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-fade-in">
            About Me
          </h2>
          <Card className="bg-slate-800/50 backdrop-blur-lg border-slate-700 max-w-4xl mx-auto hover-scale animate-scale-in">
            <CardContent className="p-8">
              <p className="text-lg text-slate-300 leading-relaxed mb-8 animate-slide-up">
                I'm an AI & ML Engineering student with hands-on experience in full stack and app development, 
                skilled in Python, Flask, React, Next.js, Firebase, MongoDB, Gemini AI, and Docker. I've built 
                real-world AI-powered solutions such as mock interview platforms, civic engagement tools, cloud 
                estimators, and automation bots using n8n, with multiple national and international hackathon wins, 
                strong leadership in tech communities, and a deep passion for creating impactful, intelligent, 
                and user-focused applications.
              </p>
              <div className="flex space-x-4 animate-delayed-fade-in">
                <a href="https://linkedin.com/in/aravind2107" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" className="border-slate-600 hover:border-blue-500 hover-scale">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </a>
                <a href="https://github.com/ARAVIND2017" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" className="border-slate-600 hover:border-blue-500 hover-scale">
                    <Github className="h-4 w-4" />
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section - Now using the new SkillsSection component */}
      <SkillsSection />

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-fade-in">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={project.title} className="bg-slate-800/50 backdrop-blur-lg border-slate-700 hover:border-blue-500/50 transition-all duration-300 transform hover-scale group animate-stagger-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </CardTitle>
                    {project.award && (
                      <Badge className="bg-yellow-500/20 text-yellow-300 text-xs animate-glow">
                        <Award className="h-3 w-3 mr-1" />
                        Winner
                      </Badge>
                    )}
                  </div>
                  <CardDescription className="text-slate-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={tech} variant="outline" className="border-blue-500/30 text-blue-300 hover-scale" style={{ animationDelay: `${techIndex * 0.05}s` }}>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  {project.award && (
                    <p className="text-yellow-400 text-sm mb-4 font-medium animate-float">{project.award}</p>
                  )}
                  <div className="flex space-x-3">
                    <Button size="sm" variant="outline" className="border-slate-600 hover:border-blue-500 hover-scale">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-fade-in">
            Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={achievement.title} className="bg-slate-800/50 backdrop-blur-lg border-slate-700 hover:border-yellow-500/50 transition-all duration-300 transform hover-scale text-center animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-6">
                  <div className="text-4xl mb-4 animate-float" style={{ animationDelay: `${index * 0.5}s` }}>{achievement.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                  <p className="text-yellow-400 font-medium mb-2">{achievement.award}</p>
                  <p className="text-slate-400">{achievement.year}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Certifications */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Experience */}
            <div className="animate-slide-in-left">
              <h3 className="text-3xl font-bold mb-8 text-blue-400">Experience</h3>
              <div className="space-y-6">
                <Card className="bg-slate-800/50 backdrop-blur-lg border-slate-700 hover-scale animate-fade-in">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-xl font-bold text-white">Technical Head</h4>
                      <Badge className="bg-green-500/20 text-green-300 animate-glow">Current</Badge>
                    </div>
                    <p className="text-blue-400 mb-2">Kriya Tech Club, BITM</p>
                    <p className="text-slate-300 text-sm mb-3">Led coding events, mentored juniors, organized workshops</p>
                  </CardContent>
                </Card>
                <Card className="bg-slate-800/50 backdrop-blur-lg border-slate-700 hover-scale animate-delayed-fade-in">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold text-white mb-3">Project Diploma Engineer Trainee</h4>
                    <p className="text-blue-400 mb-2">Triveni Turbine Ltd</p>
                    <p className="text-slate-300 text-sm">Component alignment, technical troubleshooting, QA</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Certifications */}
            <div className="animate-slide-in-right">
              <h3 className="text-3xl font-bold mb-8 text-blue-400">Certifications</h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <Card key={cert} className="bg-slate-800/50 backdrop-blur-lg border-slate-700 hover:border-blue-500/50 transition-all duration-300 cursor-pointer hover-scale animate-stagger-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <p className="text-white">{cert}</p>
                        <ExternalLink className="h-4 w-4 text-blue-400 animate-float" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-fade-in">
            Let's Connect
          </h2>
          <div className="max-w-2xl mx-auto">
            <Card className="bg-slate-800/50 backdrop-blur-lg border-slate-700 hover-scale animate-scale-in">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="animate-slide-up">
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 hover-scale"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 hover-scale"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
                    <Textarea
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 min-h-[120px] hover-scale"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white py-3 hover-scale animate-glow"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Mail className="ml-2 h-4 w-4" />
                  </Button>
                </form>
                
                <div className="mt-8 pt-8 border-t border-slate-700 animate-delayed-fade-in">
                  <div className="flex justify-center space-x-6">
                    <a href="mailto:baravind196@gmail.com" className="flex items-center text-slate-300 hover:text-blue-400 transition-colors hover-scale story-link">
                      <Mail className="h-5 w-5 mr-2" />
                      baravind196@gmail.com
                    </a>
                  </div>
                  <div className="flex justify-center space-x-6 mt-4">
                    <a href="https://linkedin.com/in/aravind2107" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-blue-400 transition-colors hover-scale">
                      <Linkedin className="h-6 w-6" />
                    </a>
                    <a href="https://github.com/ARAVIND2017" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-blue-400 transition-colors hover-scale">
                      <Github className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-8 border-t border-slate-800 animate-slide-up">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-400 mb-4 animate-fade-in">
            Built by Aravind using 💻 React & Tailwind CSS
          </p>
          <p className="text-slate-500 text-sm animate-delayed-fade-in">
            © 2024 B. Aravind. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
