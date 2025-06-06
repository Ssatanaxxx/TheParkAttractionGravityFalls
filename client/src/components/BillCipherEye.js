import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const BillEye = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    // Показываем глаз каждые 3-5 секунд
    const interval = setInterval(() => {
      setVisible(true);
      setTimeout(() => setVisible(false), 2000);
    }, 3000 + Math.random() * 2000);

    // Следим за курсором
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX + 20, y: e.clientY + 20 });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      clearInterval(interval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed pointer-events-none z-50"
          style={{
            left: position.x,
            top: position.y
          }}
        >
          <svg width="40" height="40" viewBox="0 0 40 40">
            <circle cx="20" cy="20" r="15" fill="yellow" />
            <circle cx="20" cy="20" r="10" fill="black" />
            <circle cx="25" cy="15" r="3" fill="white" />
            <path 
              d="M10,10 Q20,5 30,10" 
              stroke="black" 
              strokeWidth="2" 
              fill="none"
            />
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
};