
import { motion } from 'framer-motion';

const AchievementsSection = () => {
  const achievements = [
    { 
      title: 'Washington Hackathon', 
      award: 'Best Thematic Award', 
      year: '2025', 
      icon: '🏆',
      description: 'Urban Intelligence: Smart and Sustainable Cities'
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

  return (
    <section id="achievements" className="py-24 bg-slate-900/30">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
        >
          Achievements
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div 
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(234, 179, 8, 0.1)"
              }}
              className="group glass-card hover-lift text-center p-8 rounded-2xl border border-slate-700/30 hover:border-yellow-500/40 transition-all duration-500"
            >
              <motion.div 
                className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
              >
                {achievement.icon}
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                {achievement.title}
              </h3>
              <p className="text-yellow-400 font-semibold mb-3 text-lg">{achievement.award}</p>
              <p className="text-slate-400 text-sm mb-2">{achievement.description}</p>
              <p className="text-slate-500 text-sm">{achievement.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
