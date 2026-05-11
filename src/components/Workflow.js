import React from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb, FaCode, FaRocket, FaShieldAlt } from 'react-icons/fa';

const Workflow = () => {
  const steps = [
    {
      title: "Discovery & Planning",
      icon: <FaLightbulb />,
      desc: "Deep diving into requirements, user personas, and core business objectives to define the perfect technical roadmap.",
      color: "from-blue-600 to-cyan-500"
    },
    {
      title: "Architecture & Design",
      icon: <FaCode />,
      desc: "Crafting scalable system architectures and pixel-perfect UIs with a focus on performance, accessibility, and clean code.",
      color: "from-purple-600 to-pink-500"
    },
    {
      title: "Development & Testing",
      icon: <FaShieldAlt />,
      desc: "Agile sprints, continuous integration, and rigorous testing to ensure a bug-free, production-ready digital ecosystem.",
      color: "from-orange-600 to-red-500"
    },
    {
      title: "Deployment & Growth",
      icon: <FaRocket />,
      desc: "Seamless cloud deployment, performance monitoring, and iterative enhancements to drive long-term digital success.",
      color: "from-emerald-600 to-teal-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative w-full py-24 bg-slate-50 dark:bg-[#020617] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-20 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-200 dark:bg-white/5 text-slate-500 font-bold text-xs uppercase tracking-[0.3em] mb-4">
            <FaRocket /> The Engineering Standard
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-tight">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Blueprint</span> of Success
          </h2>
          <p className="max-w-2xl mx-auto text-slate-500 font-medium">
            My systematic approach to problem-solving and software engineering ensures every project is built for scale and success.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step, i) => (
            <motion.div 
              key={i} 
              variants={itemVariants}
              className="group relative h-full p-10 bg-slate-200 dark:bg-white/5 glass-dark rounded-[3rem] border-none transition-all duration-500 shadow-none overflow-hidden text-center"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white text-2xl mb-8 shadow-xl transition-transform group-hover:scale-110 group-hover:rotate-6`}>
                {step.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-purple-500 transition-colors">
                {step.title}
              </h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed">
                {step.desc}
              </p>
              
              {/* Step indicator */}
              <div className="absolute top-8 right-10 text-4xl font-black text-slate-900/5 dark:text-white/5 group-hover:text-purple-500/10 transition-colors">
                0{i + 1}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-purple-600/5 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-600/5 blur-[120px] rounded-full"></div>
    </section>
  );
};

export default Workflow;
