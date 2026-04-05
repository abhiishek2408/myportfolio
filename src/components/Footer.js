import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaChevronRight, FaHeart } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaGithub />, href: "https://github.com/abhiishek2408", label: "GitHub" },
    { icon: <FaLinkedin />, href: "https://linkedin.com/in/abhishek", label: "LinkedIn" },
    { icon: <FaTwitter />, href: "https://twitter.com/abhishek", label: "Twitter" },
    { icon: <FaEnvelope />, href: "mailto:abhishekydv2408@gmail.com", label: "Email" }
  ];

  const quickLinks = [
    { name: "Evolution", href: "#about" },
    { name: "Creations", href: "#projects" },
    { name: "Insights", href: "#blog" },
    { name: "Connect", href: "#contact" }
  ];

  return (
    <footer className="relative w-full py-20 bg-slate-950 border-t border-white/5 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom,rgba(124,58,237,0.05)_0,transparent_70%)]"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Logo & Manifesto */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-3xl font-black text-white">
                Abhishek<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">.</span>
              </h2>
              <p className="text-slate-400 font-medium leading-relaxed max-w-sm">
                Architecting high-performance digital experiences through technical precision and user-centric design. Building the web of tomorrow, today.
              </p>
            </motion.div>

            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-xl text-slate-400 hover:text-white hover:bg-purple-600/20 hover:border-purple-500/50 transition-all no-underline"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-8">Navigation</h4>
            <ul className="space-y-4 p-0 list-none">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a 
                    href={link.href} 
                    className="group flex items-center gap-3 text-slate-400 hover:text-white font-bold no-underline transition-colors"
                  >
                    <FaChevronRight className="text-[10px] text-purple-600 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Status & Availability */}
          <div className="lg:col-span-4">
            <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-8">Current Status</h4>
            <div className="p-8 glass-dark rounded-[2.5rem] border border-white/5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_#22c55e]"></div>
                <span className="text-xs font-black text-white uppercase tracking-widest">Available for hire</span>
              </div>
              <p className="text-slate-400 text-sm font-medium">
                Seeking ambitious projects where I can apply full-stack expertise and AI integration.
              </p>
              <a 
                href="#contact" 
                className="inline-block py-3 px-6 bg-white/5 hover:bg-white/10 rounded-xl text-white text-[10px] font-black uppercase tracking-widest transition-all no-underline"
              >
                Let's Discuss
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">
            &copy; {currentYear} Abhishek Yadav. Built with <FaHeart className="text-pink-600 animate-pulse mx-1 inline" /> using React
          </p>
          <div className="flex gap-8">
            <a href="#about" className="text-slate-500 hover:text-white text-xs font-bold uppercase tracking-widest no-underline transition-colors">Privacy Policy</a>
            <a href="#contact" className="text-slate-500 hover:text-white text-xs font-bold uppercase tracking-widest no-underline transition-colors">Security Legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
