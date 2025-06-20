
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const ExperienceSection = () => {
  const certifications = [
    {
      name: 'Google Cloud Training Certificate',
      url: 'https://drive.google.com/file/d/12foAv3N_ldO80U8a29pj9emsT1KmlOcU/view',
      icon: '📄'
    },
    {
      name: 'Simplilearn AI Fundamentals',
      url: 'https://drive.google.com/file/d/17_Qrgd-sVUaQ9_AhR3-hf2fQLW0VjDe_/view',
      icon: '📄'
    },
    {
      name: 'EZ Technology Python Essentials',
      url: 'https://drive.google.com/file/d/1zM5CPKesxZTJJMh20pLMgG5Q5RhOaSBv/view',
      icon: '📄'
    }
  ];

  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold mb-12 text-blue-400">Experience</h3>
            <div className="space-y-8">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="group glass-card hover-lift p-8 rounded-2xl border border-slate-700/30 hover:border-green-500/40 transition-all duration-500"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors duration-300">
                    Technical Head
                  </h4>
                  <Badge className="bg-green-500/20 text-green-300 border-green-500/30">Current</Badge>
                </div>
                <p className="text-blue-400 mb-3 text-lg font-medium">Kriya Tech Club, BITM</p>
                <p className="text-slate-300 leading-relaxed">Led coding events, mentored juniors, organized workshops</p>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="group glass-card hover-lift p-8 rounded-2xl border border-slate-700/30 hover:border-blue-500/40 transition-all duration-500"
              >
                <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                  Project Diploma Engineer Trainee
                </h4>
                <p className="text-blue-400 mb-3 text-lg font-medium">Triveni Turbine Ltd</p>
                <p className="text-slate-300 leading-relaxed">Component alignment, technical troubleshooting, QA</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            id="certifications"
          >
            <h3 className="text-4xl font-bold mb-12 text-blue-400">🎓 Certifications</h3>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <motion.a
                  key={cert.name}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, x: 4 }}
                  className="group glass-card hover-lift p-6 rounded-2xl border border-slate-700/30 hover:border-indigo-500/40 transition-all duration-500 cursor-pointer block"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{cert.icon}</span>
                      <p className="text-white text-lg font-medium group-hover:text-indigo-400 transition-colors duration-300">
                        {cert.name}
                      </p>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 15 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ExternalLink className="h-5 w-5 text-indigo-400 group-hover:text-indigo-300 transition-colors duration-300" />
                    </motion.div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Let's Connect Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
          id="connect"
        >
          <h3 className="text-3xl font-bold mb-8 text-blue-400">🤝 Let's Connect</h3>
          <div className="flex justify-center gap-8">
            <motion.a
              href="https://linkedin.com/in/aravind2107"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -4 }}
              className="text-slate-300 hover:text-blue-400 transition-all duration-300 text-3xl"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </motion.a>
            <motion.a
              href="https://github.com/ARAVIND2017"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -4 }}
              className="text-slate-300 hover:text-blue-400 transition-all duration-300 text-3xl"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
