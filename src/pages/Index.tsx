import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ArrowDown, Star, Award, MapPin, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import SkillsSection from '@/components/SkillsSection';
import { SplineSceneBasic, NavBarDemo } from '@/components/ui/demo';
import emailjs from '@emailjs/browser';

const Index = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 dark:from-slate-950 dark:via-blue-950 dark:to-slate-900 from-blue-50 via-white to-blue-100 text-white dark:text-white text-slate-900 overflow-x-hidden">
      {/* New Tubelight Navbar */}
      <NavBarDemo />

      {/* Hero Section with SplineSceneBasic */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="container mx-auto px-6 relative z-10">
          <div className={`transition-all duration-1000 mb-12 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-8">
              <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-500 to-purple-600 shadow-2xl">
                <img 
                  src="/lovable-uploads/22c6e9db-a4c4-4ef5-ab8c-49fc46b54eb2.png" 
                  alt="B. Aravind" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent">
                Hi, I'm B. Aravind
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-slate-300 dark:text-slate-300 text-slate-600 max-w-4xl mx-auto leading-relaxed">
                AI/ML Enthusiast | Full Stack Developer | App Builder | Hackathon Winner
              </p>
              <p className="text-lg mb-12 text-slate-400 dark:text-slate-400 text-slate-500 max-w-2xl mx-auto">
                Let's build the future together
              </p>
            </div>
          </div>
          
          {/* 3D Interactive Scene */}
          <div className="max-w-6xl mx-auto">
            <div style={{ background: 'transparent' }}>
              <SplineSceneBasic />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section - Now using the new SkillsSection component */}
      <SkillsSection />

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={project.title} className="bg-slate-800/50 dark:bg-slate-800/50 bg-white/70 backdrop-blur-lg border-slate-700 dark:border-slate-700 border-slate-200 hover:border-blue-500/50 transition-all duration-300 transform hover-scale group">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-white dark:text-white text-slate-900 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </CardTitle>
                    {project.award && (
                      <Badge className="bg-yellow-500/20 text-yellow-300 dark:text-yellow-300 text-yellow-600 text-xs">
                        <Award className="h-3 w-3 mr-1" />
                        Winner
                      </Badge>
                    )}
                  </div>
                  <CardDescription className="text-slate-300 dark:text-slate-300 text-slate-600">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="border-blue-500/30 text-blue-300 dark:text-blue-300 text-blue-600 hover-scale">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  {project.award && (
                    <p className="text-yellow-400 dark:text-yellow-400 text-yellow-600 text-sm mb-4 font-medium">{project.award}</p>
                  )}
                  <div className="flex space-x-3">
                    <Button size="sm" variant="outline" className="border-slate-600 dark:border-slate-600 border-slate-300 hover:border-blue-500 hover-scale">
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
      <section id="achievements" className="py-20 bg-slate-900/50 dark:bg-slate-900/50 bg-slate-100/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={achievement.title} className="bg-slate-800/50 dark:bg-slate-800/50 bg-white/70 backdrop-blur-lg border-slate-700 dark:border-slate-700 border-slate-200 hover:border-yellow-500/50 transition-all duration-300 transform hover-scale text-center">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{achievement.icon}</div>
                  <h3 className="text-xl font-bold text-white dark:text-white text-slate-900 mb-2">{achievement.title}</h3>
                  <p className="text-yellow-400 dark:text-yellow-400 text-yellow-600 font-medium mb-2">{achievement.award}</p>
                  <p className="text-slate-400 dark:text-slate-400 text-slate-500">{achievement.year}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Certifications */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Experience */}
            <div>
              <h3 className="text-3xl font-bold mb-8 text-blue-400">Experience</h3>
              <div className="space-y-6">
                <Card className="bg-slate-800/50 dark:bg-slate-800/50 bg-white/70 backdrop-blur-lg border-slate-700 dark:border-slate-700 border-slate-200 hover-scale">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-xl font-bold text-white dark:text-white text-slate-900">Technical Head</h4>
                      <Badge className="bg-green-500/20 text-green-300 dark:text-green-300 text-green-600">Current</Badge>
                    </div>
                    <p className="text-blue-400 mb-2">Kriya Tech Club, BITM</p>
                    <p className="text-slate-300 dark:text-slate-300 text-slate-600 text-sm mb-3">Led coding events, mentored juniors, organized workshops</p>
                  </CardContent>
                </Card>
                <Card className="bg-slate-800/50 dark:bg-slate-800/50 bg-white/70 backdrop-blur-lg border-slate-700 dark:border-slate-700 border-slate-200 hover-scale">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold text-white dark:text-white text-slate-900 mb-3">Project Diploma Engineer Trainee</h4>
                    <p className="text-blue-400 mb-2">Triveni Turbine Ltd</p>
                    <p className="text-slate-300 dark:text-slate-300 text-slate-600 text-sm">Component alignment, technical troubleshooting, QA</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Certifications */}
            <div id="certifications">
              <h3 className="text-3xl font-bold mb-8 text-blue-400">Certifications</h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <Card key={cert} className="bg-slate-800/50 dark:bg-slate-800/50 bg-white/70 backdrop-blur-lg border-slate-700 dark:border-slate-700 border-slate-200 hover:border-blue-500/50 transition-all duration-300 cursor-pointer hover-scale">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <p className="text-white dark:text-white text-slate-900">{cert}</p>
                        <ExternalLink className="h-4 w-4 text-blue-400" />
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
      <section id="contact" className="py-20 bg-slate-900/50 dark:bg-slate-900/50 bg-slate-100/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div className="max-w-2xl mx-auto">
            <Card className="bg-slate-800/50 dark:bg-slate-800/50 bg-white/70 backdrop-blur-lg border-slate-700 dark:border-slate-700 border-slate-200 hover-scale">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="bg-slate-700/50 dark:bg-slate-700/50 bg-slate-100/50 border-slate-600 dark:border-slate-600 border-slate-300 text-white dark:text-white text-slate-900 placeholder-slate-400 dark:placeholder-slate-400 placeholder-slate-500 hover-scale"
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
                      className="bg-slate-700/50 dark:bg-slate-700/50 bg-slate-100/50 border-slate-600 dark:border-slate-600 border-slate-300 text-white dark:text-white text-slate-900 placeholder-slate-400 dark:placeholder-slate-400 placeholder-slate-500 hover-scale"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="bg-slate-700/50 dark:bg-slate-700/50 bg-slate-100/50 border-slate-600 dark:border-slate-600 border-slate-300 text-white dark:text-white text-slate-900 placeholder-slate-400 dark:placeholder-slate-400 placeholder-slate-500 min-h-[120px] hover-scale"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white py-3 hover-scale"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Mail className="ml-2 h-4 w-4" />
                  </Button>
                </form>
                
                <div className="mt-8 pt-8 border-t border-slate-700 dark:border-slate-700 border-slate-300">
                  <div className="flex justify-center space-x-6">
                    <a href="mailto:baravind196@gmail.com" className="flex items-center text-slate-300 dark:text-slate-300 text-slate-600 hover:text-blue-400 transition-colors hover-scale story-link">
                      <Mail className="h-5 w-5 mr-2" />
                      baravind196@gmail.com
                    </a>
                  </div>
                  <div className="flex justify-center space-x-6 mt-4">
                    <a href="https://linkedin.com/in/aravind2107" target="_blank" rel="noopener noreferrer" className="text-slate-300 dark:text-slate-300 text-slate-600 hover:text-blue-400 transition-colors hover-scale">
                      <Linkedin className="h-6 w-6" />
                    </a>
                    <a href="https://github.com/ARAVIND2017" target="_blank" rel="noopener noreferrer" className="text-slate-300 dark:text-slate-300 text-slate-600 hover:text-blue-400 transition-colors hover-scale">
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
      <footer className="bg-slate-950 dark:bg-slate-950 bg-white py-8 border-t border-slate-800 dark:border-slate-800 border-slate-200">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-400 dark:text-slate-400 text-slate-600 mb-4">
            Built by Aravind using 💻 React & Tailwind CSS
          </p>
          <p className="text-slate-500 dark:text-slate-500 text-slate-500 text-sm">
            © 2024 B. Aravind. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
