
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    <section id="contact" className="py-24 bg-slate-900/30">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
        >
          Let's Connect
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <Card className="glass-card border-slate-700/30 shadow-2xl shadow-blue-500/5 rounded-3xl overflow-hidden border border-white/10">
            <CardContent className="p-10">
              <form onSubmit={handleSubmit} className="space-y-8">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="bg-slate-700/30 border-slate-600/50 text-white placeholder-slate-400 h-14 rounded-xl text-lg focus:border-blue-500/50 focus:ring-blue-500/20 transition-all duration-300"
                    required
                    disabled={isSubmitting}
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="bg-slate-700/30 border-slate-600/50 text-white placeholder-slate-400 h-14 rounded-xl text-lg focus:border-blue-500/50 focus:ring-blue-500/20 transition-all duration-300"
                    required
                    disabled={isSubmitting}
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="bg-slate-700/30 border-slate-600/50 text-white placeholder-slate-400 min-h-[140px] rounded-xl text-lg focus:border-blue-500/50 focus:ring-blue-500/20 transition-all duration-300 resize-none"
                    required
                    disabled={isSubmitting}
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white h-14 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Mail className="ml-3 h-5 w-5" />
                  </Button>
                </motion.div>
              </form>
              
              <div className="mt-10 pt-10 border-t border-slate-700/50">
                <div className="flex justify-center space-x-8 mb-6">
                  <motion.a 
                    href="mailto:baravind196@gmail.com" 
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="flex items-center text-slate-300 hover:text-blue-400 transition-all duration-300"
                  >
                    <Mail className="h-6 w-6 mr-3" />
                    <span className="text-lg">baravind196@gmail.com</span>
                  </motion.a>
                </div>
                <div className="flex justify-center space-x-8">
                  <motion.a 
                    href="https://linkedin.com/in/aravind2107" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    whileHover={{ scale: 1.3, rotate: 5 }}
                    className="text-slate-300 hover:text-blue-400 transition-all duration-300"
                  >
                    <Linkedin className="h-8 w-8" />
                  </motion.a>
                  <motion.a 
                    href="https://github.com/ARAVIND2017" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    whileHover={{ scale: 1.3, rotate: -5 }}
                    className="text-slate-300 hover:text-blue-400 transition-all duration-300"
                  >
                    <Github className="h-8 w-8" />
                  </motion.a>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
