import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaAddressCard } from 'react-icons/fa';

const PAPER_PLANE_ICON = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
  </svg>
);

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const sectionVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const formVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.3, ease: "easeOut" } },
  };

  const successVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    setIsSubmitted(true);

    setFormData({
      name: '',
      email: '',
      message: ''
    });

    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-[#2d1333] text-[#e0e0e0] font-inter pt-2 md:pt-16 pb-8 overflow-hidden">
      <motion.h4
        className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#6b21a8] to-[#a855f7] tracking-wide relative pb-2"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        Get in Touch
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-[#6b21a8] to-[#a855f7] rounded-full"></span>
      </motion.h4>

      <motion.div
        className="flex flex-col md:flex-row gap-10 mt-12 mx-auto max-w-[1200px] px-4"
        variants={formVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left side: Contact Information */}
        <div className="md:w-1/2 bg-[#3a2a3e] rounded-2xl p-8 shadow-2xl flex flex-col gap-6">
          <h3 className="text-3xl font-extrabold text-[#a855f7] flex items-center gap-3 mb-4">
            <FaAddressCard /> Contact Information
          </h3>
          <p className="text-gray-300 mb-2">
            Feel free to reach out via email, phone, or visit my location.
          </p>
          <div className="flex flex-col gap-4 text-gray-200">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-[#a855f7]" />
              <span><span className="font-semibold">Email:</span> abhishekydv2408@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#a855f7]" />
              <span><span className="font-semibold">Phone:</span> +91 9305963544</span>
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-[#a855f7]" />
              <span><span className="font-semibold">Location:</span> Ghazipur, Uttar Pradesh, India</span>
            </div>
          </div>
        </div>

        {/* Right side: Contact Form */}
        <div className="md:w-1/2 bg-[#3a2a3e] rounded-2xl shadow-2xl p-8 transition-all duration-300 hover:scale-[1.01] hover:shadow-xl">
          {isSubmitted && (
            <motion.p
              className="text-center text-[#10b981] font-semibold mb-4"
              variants={successVariants}
              initial="hidden"
              animate="visible"
            >
              Message Sent Successfully!
            </motion.p>
          )}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 bg-[#2d1333] rounded-lg border border-gray-600 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#a855f7]"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 bg-[#2d1333] rounded-lg border border-gray-600 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#a855f7]"
            />
            <textarea
              name="message"
              placeholder="Message"
              required
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-4 bg-[#2d1333] rounded-lg border border-gray-600 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#a855f7] resize-none"
            ></textarea>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#a855f7] text-white font-bold rounded-lg shadow-md hover:bg-[#8b5cf6] focus:outline-none focus:ring-2 focus:ring-[#a855f7] focus:ring-offset-2 transition-colors duration-200 no-underline"
            >
              {PAPER_PLANE_ICON} Send Message
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
