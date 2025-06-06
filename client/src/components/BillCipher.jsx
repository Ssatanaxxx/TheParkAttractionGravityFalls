import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

export const BillCipher = () => {
  const controls = useAnimation();

  useEffect(() => {
    const animateBill = async () => {
      while (true) {
        await controls.start({
          x: Math.random() * window.innerWidth - 100,
          y: Math.random() * window.innerHeight - 100,
          rotate: Math.random() * 360,
          scale: [1, 1.2, 1],
          transition: { duration: 5 }
        });
        await new Promise(resolve => setTimeout(resolve, 8000));
      }
    };

    animateBill();
  }, [controls]);

  return (
    <motion.img
      src="https://static.wikia.nocookie.net/gravityfalls/images/5/51/Bill_Cipher.png"
      alt="Билл Шифр"
      className="fixed w-24 h-24 pointer-events-none z-40"
      initial={{ x: -100, y: -100 }}
      animate={controls}
    />
  );
};