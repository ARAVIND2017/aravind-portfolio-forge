
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950/80 py-12 border-t border-slate-800/50 relative mt-24">
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

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <p className="text-lg text-slate-300">
              Built by <span className="text-white font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">B. Aravind</span>
            </p>
            <p className="text-sm text-slate-500 mt-1">
              © {new Date().getFullYear()} All Rights Reserved
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.ul 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-6 text-lg justify-center"
          >
            <li>
              <motion.a
                href="#home"
                whileHover={{ scale: 1.05, color: '#60a5fa' }}
                className="text-slate-400 hover:text-indigo-400 transition-all duration-300"
              >
                Home
              </motion.a>
            </li>
            <li>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, color: '#60a5fa' }}
                className="text-slate-400 hover:text-indigo-400 transition-all duration-300"
              >
                Projects
              </motion.a>
            </li>
            <li>
              <motion.a
                href="#achievements"
                whileHover={{ scale: 1.05, color: '#60a5fa' }}
                className="text-slate-400 hover:text-indigo-400 transition-all duration-300"
              >
                Achievements
              </motion.a>
            </li>
            <li>
              <motion.a
                href="#certifications"
                whileHover={{ scale: 1.05, color: '#60a5fa' }}
                className="text-slate-400 hover:text-indigo-400 transition-all duration-300"
              >
                Certifications
              </motion.a>
            </li>
            <li>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, color: '#60a5fa' }}
                className="text-slate-400 hover:text-indigo-400 transition-all duration-300"
              >
                Contact
              </motion.a>
            </li>
          </motion.ul>

          {/* Social Icons */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex gap-6 items-center justify-center"
          >
            <motion.a
              href="https://github.com/ARAVIND2017"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              whileHover={{ scale: 1.2, y: -2 }}
              className="text-slate-400 hover:text-white transition-all duration-300"
            >
              <i className="fa-brands fa-github text-2xl"></i>
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/aravind2107"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              whileHover={{ scale: 1.2, y: -2 }}
              className="text-slate-400 hover:text-white transition-all duration-300"
            >
              <i className="fa-brands fa-linkedin text-2xl"></i>
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom section with additional info */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-8 pt-8 border-t border-slate-800/50"
        >
          <p className="text-slate-500 text-sm">
            Built with 💻 React & Tailwind CSS • Designed with ❤️
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
