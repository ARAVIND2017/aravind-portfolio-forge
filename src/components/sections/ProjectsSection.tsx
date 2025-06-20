
import { motion } from 'framer-motion';
import { Github, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ProjectsSection = () => {
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

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.1)" 
              }}
              className="group glass-card hover-lift p-8 rounded-2xl border border-slate-700/30 hover:border-blue-500/40 transition-all duration-500"
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
                <p className="text-slate-300 leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>
              <div className="mb-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="outline" 
                      className="border-blue-500/30 text-blue-300 hover:bg-blue-500/10 transition-colors duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                {project.award && (
                  <p className="text-yellow-400 text-sm mb-4 font-medium">{project.award}</p>
                )}
                <div className="flex space-x-3">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="border-slate-600 hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
