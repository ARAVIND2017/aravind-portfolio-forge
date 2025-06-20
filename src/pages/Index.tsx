
import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ArrowDown, Star, Award, MapPin, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';
import SkillsSection from '@/components/SkillsSection';
import { SplineSceneBasic, NavBarDemo } from '@/components/ui/demo';
import emailjs from '@emailjs/browser';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  const roles = [
    'AI/ML Enthusiast',
    'Full Stack Developer', 
    'App Builder',
    'Hackathon Winner'
  ];

  useEffect(() => {
    setIsVisible(true);
    emailjs.init('z4p5isoQOASeMMQy8');
    
    // Dynamic text rotation
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    
    return () => clearInterval(interval);
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
    { 
      title: 'Washington Hackathon', 
      award: 'Best Thematic Award', 
      year: '2024', 
      icon: '🏆',
      description: 'AI-based flood detection app'
    },
    { 
      title: 'Ignitron 2K24', 
      award: '1st Place', 
      year: '2024', 
      icon: '🥇',
      description: 'Mock Interview + LMS platform'
    },
    { 
      title: 'Ballari Science Mela', 
      award: '2nd Prize', 
      year: '2024', 
      icon: '🥈',
      description: 'Innovative science project showcase'
    }
  ];

  const certifications = [
    'Google Cloud - Generative AI Launchpad',
    'Simplilearn - Machine Learning',
    'EZ Technology - Python Programming'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await emailjs.send(
        'service_6gf1otk',
        'template_jxny4fe',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Aravind',
        }
      );
      
      toast({
        title: "Thank you for reaching out!",
        description: "Your message has been sent successfully. I'll get back to you soon!",
      });
      
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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white overflow-x-hidden scroll-smooth">
      {/* Enhanced Navbar */}
      <NavBarDemo />

      {/* Modern Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="container mx-auto px-6 relative z-10">
          <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-8">
              <div className="w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-2xl shadow-blue-500/20 hover:scale-105 transition-all duration-500">
                <img 
                  src="/lovable-uploads/22c6e9db-a4c4-4ef5-ab8c-49fc46b54eb2.png" 
                  alt="B. Aravind" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent animate-fade-in">
                Hi, I'm B. Aravind
              </h1>
              <div className="h-16 mb-8 flex items-center justify-center">
                <p className="text-2xl md:text-3xl text-slate-300 font-medium animate-fade-in">
                  <span className="inline-block transition-all duration-500 ease-in-out transform">
                    {roles[currentRoleIndex]}
                  </span>
                </p>
              </div>
              <p className="text-lg mb-12 text-slate-400 max-w-2xl mx-auto leading-relaxed animate-delayed-fade-in">
                Let's build the future together with innovative technology solutions
              </p>
            </div>
          </div>
          
          {/* 3D Interactive Scene */}
          <div className="max-w-6xl mx-auto animate-fade-in">
            <div style={{ background: 'transparent' }}>
              <SplineSceneBasic />
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Skills Section */}
      <SkillsSection />

      {/* Enhanced Projects Section */}
      <section id="projects" className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.title} 
                className="group bg-slate-800/20 backdrop-blur-xl border border-slate-700/30 hover:border-blue-500/40 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 p-8 rounded-2xl"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    {project.award && (
                      <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30 text-xs px-3 py-1">
                        <Award className="h-3 w-3 mr-1" />
                        Winner
                      </Badge>
                    )}
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="border-blue-500/30 text-blue-300 hover:bg-blue-500/10 transition-colors duration-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  {project.award && (
                    <p className="text-yellow-400 text-sm mb-4 font-medium">{project.award}</p>
                  )}
                  <div className="flex space-x-3">
                    <Button size="sm" variant="outline" className="border-slate-600 hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Achievements Section */}
      <section id="achievements" className="py-24 bg-slate-900/30">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={achievement.title} 
                className="group bg-slate-800/20 backdrop-blur-xl border border-slate-700/30 hover:border-yellow-500/40 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/10 text-center p-8 rounded-2xl"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">{achievement.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">{achievement.title}</h3>
                <p className="text-yellow-400 font-semibold mb-3 text-lg">{achievement.award}</p>
                <p className="text-slate-400 text-sm mb-2">{achievement.description}</p>
                <p className="text-slate-500 text-sm">{achievement.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Experience & Certifications */}
      <section id="experience" className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Experience */}
            <div>
              <h3 className="text-4xl font-bold mb-12 text-blue-400">Experience</h3>
              <div className="space-y-8">
                <div className="group bg-slate-800/20 backdrop-blur-xl border border-slate-700/30 hover:border-green-500/40 transition-all duration-500 hover:shadow-xl hover:shadow-green-500/10 p-8 rounded-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors duration-300">Technical Head</h4>
                    <Badge className="bg-green-500/20 text-green-300 border-green-500/30">Current</Badge>
                  </div>
                  <p className="text-blue-400 mb-3 text-lg font-medium">Kriya Tech Club, BITM</p>
                  <p className="text-slate-300 leading-relaxed">Led coding events, mentored juniors, organized workshops</p>
                </div>
                <div className="group bg-slate-800/20 backdrop-blur-xl border border-slate-700/30 hover:border-blue-500/40 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/10 p-8 rounded-2xl">
                  <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">Project Diploma Engineer Trainee</h4>
                  <p className="text-blue-400 mb-3 text-lg font-medium">Triveni Turbine Ltd</p>
                  <p className="text-slate-300 leading-relaxed">Component alignment, technical troubleshooting, QA</p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div id="certifications">
              <h3 className="text-4xl font-bold mb-12 text-blue-400">Certifications</h3>
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <div 
                    key={cert} 
                    className="group bg-slate-800/20 backdrop-blur-xl border border-slate-700/30 hover:border-blue-500/40 transition-all duration-500 cursor-pointer hover:shadow-xl hover:shadow-blue-500/10 p-6 rounded-2xl"
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-white text-lg font-medium group-hover:text-blue-400 transition-colors duration-300">{cert}</p>
                      <ExternalLink className="h-5 w-5 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-24 bg-slate-900/30">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div className="max-w-2xl mx-auto">
            <Card className="bg-slate-800/20 backdrop-blur-xl border-slate-700/30 shadow-2xl shadow-blue-500/5 rounded-3xl overflow-hidden">
              <CardContent className="p-10">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="bg-slate-700/30 border-slate-600/50 text-white placeholder-slate-400 h-14 rounded-xl text-lg focus:border-blue-500/50 focus:ring-blue-500/20 transition-all duration-300"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="bg-slate-700/30 border-slate-600/50 text-white placeholder-slate-400 h-14 rounded-xl text-lg focus:border-blue-500/50 focus:ring-blue-500/20 transition-all duration-300"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="bg-slate-700/30 border-slate-600/50 text-white placeholder-slate-400 min-h-[140px] rounded-xl text-lg focus:border-blue-500/50 focus:ring-blue-500/20 transition-all duration-300 resize-none"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white h-14 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 transform hover:scale-105"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Mail className="ml-3 h-5 w-5" />
                  </Button>
                </form>
                
                <div className="mt-10 pt-10 border-t border-slate-700/50">
                  <div className="flex justify-center space-x-8 mb-6">
                    <a href="mailto:baravind196@gmail.com" className="flex items-center text-slate-300 hover:text-blue-400 transition-all duration-300 hover:scale-105">
                      <Mail className="h-6 w-6 mr-3" />
                      <span className="text-lg">baravind196@gmail.com</span>
                    </a>
                  </div>
                  <div className="flex justify-center space-x-8">
                    <a href="https://linkedin.com/in/aravind2107" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-blue-400 transition-all duration-300 hover:scale-125 transform">
                      <Linkedin className="h-8 w-8" />
                    </a>
                    <a href="https://github.com/ARAVIND2017" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-blue-400 transition-all duration-300 hover:scale-125 transform">
                      <Github className="h-8 w-8" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-slate-950/50 py-12 border-t border-slate-800/50">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-400 mb-6 text-lg">
            Built by Aravind using 💻 React & Tailwind CSS
          </p>
          <p className="text-slate-500">
            © 2024 B. Aravind. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
