
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SplineSceneBasic } from '@/components/ui/demo';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  const roles = [
    'AI/ML Enthusiast',
    'Full Stack Developer', 
    'App Builder',
    'Hackathon Winner'
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Dynamic text rotation
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12"
        >
          {/* Enhanced Profile Image */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="w-48 h-48 mx-auto mb-12 rounded-full overflow-hidden relative group"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 p-1 animate-glow">
              <div className="w-full h-full rounded-full overflow-hidden bg-slate-900">
                <img 
                  src="/lovable-uploads/22c6e9db-a4c4-4ef5-ab8c-49fc46b54eb2.png" 
                  alt="B. Aravind" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          </motion.div>

          {/* Enhanced Name */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent"
          >
            Hi, I'm B. Aravind
          </motion.h1>

          {/* Enhanced Dynamic Role Text */}
          <div className="h-20 mb-12 flex items-center justify-center">
            <motion.p 
              key={currentRoleIndex}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.9 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-3xl md:text-4xl text-slate-300 font-medium bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent"
            >
              {roles[currentRoleIndex]}
            </motion.p>
          </div>

          {/* Enhanced Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-xl mb-16 text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            Let's build the future together with innovative technology solutions
          </motion.p>
        </motion.div>
        
        {/* 3D Interactive Scene */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div style={{ background: 'transparent' }}>
            <SplineSceneBasic />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
