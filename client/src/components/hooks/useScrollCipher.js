import { useEffect } from 'react';

const symbols = ['~','!','@','#','$','%','^','&','*','(',')','_','+','=','{','}','[',']','|',':',';','"','<','>','?'];

export const useScrollCipher = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.cipher-text');
      elements.forEach(el => {
        if (isInViewport(el)) {
          const originalText = el.dataset.original || el.textContent;
          el.dataset.original = originalText;
          
          let cipherText = '';
          for (let i = 0; i < originalText.length; i++) {
            cipherText += symbols[Math.floor(Math.random() * symbols.length)];
          }
          
          el.textContent = cipherText;
          setTimeout(() => {
            el.textContent = originalText;
          }, 500);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.bottom >= 0
  );
}