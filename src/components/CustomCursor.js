import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button')
      );
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Main Cursor Dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-purple-600 rounded-full z-[9999] pointer-events-none mix-blend-difference hidden md:block"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isPointer ? 2.5 : 1,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 400, mass: 0.5 }}
      />
      
      {/* Aura / Glow follower */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border-2 border-purple-500/30 rounded-full z-[9998] pointer-events-none hidden md:block"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isPointer ? 1.5 : 1,
          opacity: isPointer ? 0.8 : 0.5,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 200, mass: 0.8 }}
      />

      {/* Large Soft Glow */}
      <div 
        className="fixed top-0 left-0 w-[500px] h-[500px] bg-purple-600/5 blur-[100px] rounded-full z-[-1] pointer-events-none transition-transform duration-300 ease-out hidden lg:block"
        style={{
          transform: `translate(${mousePosition.x - 250}px, ${mousePosition.y - 250}px)`,
        }}
      />
    </>
  );
};

export default CustomCursor;
