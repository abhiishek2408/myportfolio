import React, { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    // Reset form fields
    setFormData({
      name: '',
      email: '',
      message: ''
    });

    // Optionally hide success message after a few seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="mt-16 mx-4 md:mx-10 lg:mx-20 font-lato">
      <h4 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 bg-clip-text text-transparent tracking-wide relative pb-2">
        Get in Touch
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 rounded-full"></span>
      </h4>
      <div className="max-w-xl mx-auto p-8 mt-8 bg-[#2a1b2d] rounded-2xl shadow-2xl">
        {isSubmitted && (
          <p className="text-center text-green-400 font-semibold mb-4 animate-fade-in">
            Message Sent Successfully!
          </p>
        )}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 bg-[#3a2a3e] rounded-lg border border-gray-600 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 bg-[#3a2a3e] rounded-lg border border-gray-600 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <textarea
            name="message"
            placeholder="Message"
            required
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-4 bg-[#3a2a3e] rounded-lg border border-gray-600 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none"
          ></textarea>
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-pink-600 text-white font-bold rounded-lg shadow-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-blu-500 focus:ring-offset-2 transition-colors duration-200"
          >
            <FaPaperPlane /> Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;