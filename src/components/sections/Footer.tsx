
import { motion } from 'framer-motion';
import { ArrowUp, Phone, Mail, MapPin, Linkedin, Github, Instagram } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950/90 py-16 border-t border-slate-800/50 relative mt-24">
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

        {/* Main 3-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Left Column - Talk to Us */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Talk To Us
            </h3>
            <div className="space-y-4">
              <motion.a
                href="tel:+919591224982"
                whileHover={{ scale: 1.05, x: 5 }}
                className="flex items-center justify-center md:justify-start text-slate-300 hover:text-blue-400 transition-all duration-300"
              >
                <Phone className="h-5 w-5 mr-3" />
                <span>+91 9591224982</span>
              </motion.a>
              <motion.a
                href="tel:+919886172495"
                whileHover={{ scale: 1.05, x: 5 }}
                className="flex items-center justify-center md:justify-start text-slate-300 hover:text-blue-400 transition-all duration-300"
              >
                <Phone className="h-5 w-5 mr-3" />
                <span>+91 9886172495</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Middle Column - E-Mail */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              E-Mail
            </h3>
            <motion.a
              href="mailto:baravind196@gmail.com"
              whileHover={{ scale: 1.05, y: -2 }}
              className="inline-flex items-center text-slate-300 hover:text-blue-400 transition-all duration-300"
            >
              <Mail className="h-5 w-5 mr-3" />
              <span>baravind196@gmail.com</span>
            </motion.a>
          </motion.div>

          {/* Right Column - Location */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center md:text-right"
          >
            <h3 className="text-xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Location
            </h3>
            <motion.a
              href="https://www.google.com/maps/search/Ballari,+Karnataka"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, x: -5 }}
              className="inline-flex items-center text-slate-300 hover:text-blue-400 transition-all duration-300"
            >
              <MapPin className="h-5 w-5 mr-3" />
              <span>Ballari, Karnataka</span>
            </motion.a>
          </motion.div>
        </div>

        {/* Social Media Section - Centered */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center border-t border-slate-800/50 pt-8"
        >
          <div className="flex justify-center space-x-8 mb-8">
            <motion.a
              href="https://www.linkedin.com/in/aravindb196"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              whileHover={{ 
                scale: 1.2, 
                y: -4
              }}
              whileTap={{ scale: 0.9 }}
              className="bg-slate-800/50 p-3 rounded-full text-slate-300 hover:text-white hover:bg-blue-600 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
            >
              <Linkedin className="h-6 w-6" />
            </motion.a>
            
            <motion.a
              href="https://github.com/aravindb196"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              whileHover={{ 
                scale: 1.2, 
                y: -4
              }}
              whileTap={{ scale: 0.9 }}
              className="bg-slate-800/50 p-3 rounded-full text-slate-300 hover:text-white hover:bg-gray-700 transition-all duration-300 hover:shadow-lg hover:shadow-gray-500/20"
            >
              <Github className="h-6 w-6" />
            </motion.a>
            
            <motion.a
              href="https://www.instagram.com/vibe_vith_aravind_?igsh=MTAwbzE5eWlvYTZudA=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              whileHover={{ 
                scale: 1.2, 
                y: -4
              }}
              whileTap={{ scale: 0.9 }}
              className="bg-slate-800/50 p-3 rounded-full text-slate-300 hover:text-white hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20"
            >
              <Instagram className="h-6 w-6" />
            </motion.a>
          </div>

          {/* Copyright */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-slate-500 text-sm"
          >
            <p>© 2025 Aravind B. All rights reserved.</p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
