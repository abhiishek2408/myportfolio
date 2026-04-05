import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle, FaUser, FaAt, FaComment } from 'react-icons/fa';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFocused, setIsFocused] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactItems = [
    { icon: <FaEnvelope />, label: "Email", val: "abhishekydv2408@gmail.com", color: "text-purple-500", bg: "bg-purple-500/10" },
    { icon: <FaPhoneAlt />, label: "Phone", val: "+91 9305963544", color: "text-pink-500", bg: "bg-pink-500/10" },
    { icon: <FaMapMarkerAlt />, label: "Location", val: "Ghazipur, UP, India", color: "text-cyan-500", bg: "bg-cyan-500/10" }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="contact" className="relative w-full py-10 bg-slate-50 dark:bg-[#020617] transition-colors duration-500">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-600/5 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-pink-600/5 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-8 space-y-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-200 dark:bg-white/5 text-slate-500 font-bold text-xs uppercase tracking-[0.3em] mb-4">
            <FaPaperPlane /> Connectivity Hub
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-tight">
            Let's Start a <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-black">Conversation</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-500 font-medium">
            Interested in collaborating or just want to say hi? My inbox is always open. Let's create something extraordinary together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Contact Details */}
          <motion.div 
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {contactItems.map((item, i) => (
              <motion.div 
                key={i}
                variants={cardVariants}
                className="group p-4 px-5 bg-slate-100 dark:bg-slate-900/60 rounded-2xl border border-slate-400 dark:border-white/30 flex items-center gap-4 transition-all duration-300 hover:border-purple-500/50"
              >
                <div className={`w-16 h-16 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center text-2xl transition-transform group-hover:rotate-12`}>
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{item.label}</h4>
                  <p className="text-lg font-bold text-slate-900 dark:text-white transition-colors group-hover:text-purple-500">{item.val}</p>
                </div>
              </motion.div>
            ))}

            {/* <div className="p-8 bg-slate-100 dark:bg-slate-900/60 glass-dark rounded-[2.5rem] border border-slate-400 dark:border-white/30 mt-8">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Wanna jump on a call?</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                I'm currently available for freelance work and full-time positions. Let's discuss your project and see how I can help.
              </p>
              <div className="flex -space-x-3">
                {[1, 2, 3].map((_, i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-950 bg-slate-800 flex items-center justify-center text-slate-400 text-xs font-bold">
                    {i === 2 ? 'JD' : i === 1 ? 'AK' : 'AY'}
                  </div>
                ))}
              </div>
              <div className="mt-4 text-xs text-slate-400 font-bold">Join 50+ satisfied clients</div>
            </div> */}
          </motion.div>

          {/* Right: Modern Form */}
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="p-6 md:p-8 bg-slate-100 dark:bg-slate-900/60 bglass-dark rounded-[2.5rem] border border-slate-400 dark:border-white/30 hover:border-purple-500/30 transition-all duration-500 group relative overflow-hidden shadow-none">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 blur-3xl rounded-full"></div>
              
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex flex-col items-center justify-center p-12 text-center"
                  >
                    <FaCheckCircle className="text-6xl text-green-500 mb-6 animate-bounce" />
                    <h3 className="text-3xl font-black text-white mb-2">Message Dispatched!</h3>
                    <p className="text-slate-400 font-medium">Thank you for reaching out. I'll get back to you within 24 hours.</p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="mt-6 text-[10px] font-black uppercase tracking-widest text-purple-500 underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-4">Your Identity</label>
                    <div className={`relative flex items-center transition-all duration-300 ${isFocused === 'name' ? 'scale-105' : ''}`}>
                      <FaUser className="absolute left-5 text-slate-500" />
                      <input
                        type="text"
                        placeholder="Name"
                        className="w-full bg-slate-100 dark:bg-slate-900/60 border border-slate-300 dark:border-white/10 rounded-xl py-2.5 pl-12 pr-5 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all text-sm"
                        required
                        onFocus={() => setIsFocused('name')}
                        onBlur={() => setIsFocused('')}
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-4">Digital Address</label>
                    <div className={`relative flex items-center transition-all duration-300 ${isFocused === 'email' ? 'scale-105' : ''}`}>
                      <FaAt className="absolute left-5 text-slate-500" />
                      <input
                        type="email"
                        placeholder="Email"
                        className="w-full bg-slate-100 dark:bg-slate-900/60 border border-slate-300 dark:border-white/10 rounded-xl py-2.5 pl-12 pr-5 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all text-sm"
                        required
                        onFocus={() => setIsFocused('email')}
                        onBlur={() => setIsFocused('')}
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-4">Requirement Details</label>
                  <div className={`relative flex items-start transition-all duration-300 ${isFocused === 'message' ? 'scale-105' : ''}`}>
                    <FaComment className="absolute left-5 top-4 text-slate-500" />
                    <textarea
                      rows="4"
                      placeholder="Your message..."
                      className="w-full bg-slate-100 dark:bg-slate-900/60 border border-slate-300 dark:border-white/10 rounded-2xl py-3.5 pl-12 pr-5 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all resize-none text-sm"
                      required
                      onFocus={() => setIsFocused('message')}
                      onBlur={() => setIsFocused('')}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-black uppercase tracking-widest rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-3 text-[10px]"
                >
                  <FaPaperPlane /> Initiate Protocol
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;