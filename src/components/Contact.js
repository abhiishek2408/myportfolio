import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const PAPER_PLANE_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
  </svg>
);

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="contact-section w-full py-6 dark:bg-[#2d1333] dark:text-[#e0e0e0]">
      <motion.section 
        className="mt-8 mx-auto max-w-7xl px-6 bg-white/90 backdrop-blur-sm py-10 rounded-[2rem] shadow-[0_20px_60px_-40px_rgba(113,62,235,0.35)] border border-[#713eeb]/10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
      {/* Compact Header */}
      <div className="text-center mb-10 relative">
        <h4 className="text-xl md:text-2xl font-black text-gray-900 tracking-tight uppercase relative inline-block">
          Get In Touch
          <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-10 h-0.5 bg-[#713eeb] rounded-full"></span>
        </h4>
        <p className="text-gray-400 mt-2 font-bold uppercase tracking-widest text-[9px]">Let's Build Something Together</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 max-w-5xl mx-auto">
        {/* Left: Contact Info (Slimmed Down) */}
        <div className="lg:w-1/3 space-y-4">
          <div className="bg-[#f9fafb] p-5 rounded-xl border border-gray-100 h-full shadow-sm">
            <h3 className="text-sm font-black text-gray-900 uppercase tracking-widest mb-4">Contact Info</h3>
            
            <div className="space-y-4">
              {[
                { icon: <FaEnvelope />, label: "Email", val: "abhishekydv2408@gmail.com" },
                { icon: <FaPhoneAlt />, label: "Phone", val: "+91 9305963544" },
                { icon: <FaMapMarkerAlt />, label: "Location", val: "Ghazipur, UP, India" }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-1 text-[#713eeb] text-xs">{item.icon}</div>
                  <div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-tighter">{item.label}</p>
                    <p className="text-xs font-bold text-gray-700">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Form (Compressed Inputs) */}
        <div className="lg:w-2/3">
          <div className="bg-[#f9fafb] p-5 rounded-xl border border-gray-100 shadow-sm">
            {isSubmitted && (
              <p className="text-[10px] font-bold text-green-600 bg-green-50 p-2 rounded mb-4 text-center uppercase tracking-widest">
                <i className="fas fa-check mr-2"></i>
                Message Sent Successfully!
              </p>
            )}
            <form className="space-y-3" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  className="w-full px-4 py-2.5 bg-white rounded-lg border border-gray-200 text-xs text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#713eeb]/40 focus:border-[#713eeb]/40 transition-all"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  className="w-full px-4 py-2.5 bg-white rounded-lg border border-gray-200 text-xs text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#713eeb]/40 focus:border-[#713eeb]/40 transition-all"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <textarea
                placeholder="How can I help you?"
                required
                rows="3"
                className="w-full px-4 py-2.5 bg-white rounded-lg border border-gray-200 text-xs text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#713eeb]/40 focus:border-[#713eeb]/40 transition-all resize-none"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
              <button
                type="submit"
                className="w-full md:w-max px-8 py-2.5 bg-gradient-to-r from-[#7c3aed] to-[#4f46e5] text-white font-black text-[10px] uppercase tracking-[0.2em] rounded-lg shadow-md hover:shadow-lg hover:from-[#6d28d9] hover:to-[#4338ca] transition-all flex items-center justify-center gap-2"
              >
                {PAPER_PLANE_ICON} Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      </motion.section>
    </div>
  );
};

export default Contact;