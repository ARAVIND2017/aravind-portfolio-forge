
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const ExperienceSection = () => {
  const certifications = [
    {
      name: 'Google Cloud - Generative AI Launchpad',
      url: 'https://www.cloudskillsboost.google/public_profiles/your-profile'
    },
    {
      name: 'Simplilearn - Machine Learning',
      url: 'https://simplilearn.com/verify-certificate'
    },
    {
      name: 'EZ Technology - Python Programming',
      url: 'https://eztechnology.com/certificates'
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
            <h3 className="text-4xl font-bold mb-12 text-blue-400">Certifications</h3>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <motion.a
                  key={cert.name}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  className="group glass-card hover-lift p-6 rounded-2xl border border-slate-700/30 hover:border-blue-500/40 transition-all duration-500 cursor-pointer block"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-white text-lg font-medium group-hover:text-blue-400 transition-colors duration-300">
                      {cert.name}
                    </p>
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 15 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ExternalLink className="h-5 w-5 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                    </motion.div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
