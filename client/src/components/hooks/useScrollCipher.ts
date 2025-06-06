// hooks/useScrollCipher.ts
import { useEffect } from 'react';

export const useScrollCipher = () => {
  useEffect(() => {
    const handleScroll = () => {
      // Логика эффекта шифрования
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};