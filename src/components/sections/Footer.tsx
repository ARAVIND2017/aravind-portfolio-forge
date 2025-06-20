
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950/50 py-12 border-t border-slate-800/50 relative">
      <div className="container mx-auto px-6">
        {/* Back to Top Button */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>

        <div className="text-center">
          {/* Footer Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-8 mb-6"
          >
            <motion.a
              href="#home"
              whileHover={{ scale: 1.05, color: '#60a5fa' }}
              className="text-slate-400 hover:text-blue-400 transition-all duration-300 text-lg"
            >
              Home
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, color: '#60a5fa' }}
              className="text-slate-400 hover:text-blue-400 transition-all duration-300 text-lg"
            >
              Projects
            </motion.a>
            <motion.a
              href="#achievements"
              whileHover={{ scale: 1.05, color: '#60a5fa' }}
              className="text-slate-400 hover:text-blue-400 transition-all duration-300 text-lg"
            >
              Achievements
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, color: '#60a5fa' }}
              className="text-slate-400 hover:text-blue-400 transition-all duration-300 text-lg"
            >
              Contact
            </motion.a>
          </motion.div>

          {/* Copyright */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-slate-400 mb-6 text-lg"
          >
            Built by Aravind using 💻 React & Tailwind CSS
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-slate-500"
          >
            © 2025 B. Aravind • All Rights Reserved
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
