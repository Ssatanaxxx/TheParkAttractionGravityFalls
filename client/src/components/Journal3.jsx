import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Journal3 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  
  const pages = [
    {
      content: "Гравити Фолз - не обычный город. Здесь скрыто больше тайн, чем кажется...",
      image: "https://static.wikia.nocookie.net/gravityfalls/images/7/7e/Journal_3_Hardcover.png"
    },
    {
      content: "Билл Шифр: Опасный обитатель измерения, который может проникнуть в наш мир через сны.",
      image: "https://static.wikia.nocookie.net/gravityfalls/images/5/51/Bill_Cipher.png"
    },
    {
      content: "Портал: Устройство для межпространственных путешествий. Скрыт под Хижиной Чудес.",
      image: "https://static.wikia.nocookie.net/gravityfalls/images/1/1a/Portal.png"
    }
  ];

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 bg-amber-800 text-amber-100 p-3 rounded-full shadow-lg z-50"
      >
        <img src="https://static.wikia.nocookie.net/gravityfalls/images/7/7e/Journal_3_Hardcover.png" 
             alt="Дневник №3" 
             className="w-12 h-12"/>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
            onClick={() => setIsOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              className="bg-amber-50 w-full max-w-2xl h-96 max-h-[80vh] rounded-lg shadow-xl overflow-hidden relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute inset-0 bg-[url('https://i.imgur.com/5Z1Q9Qp.png')] opacity-20"></div>
              
              <div className="relative h-full flex">
                <div className="w-1/2 p-6 border-r border-amber-300">
                  <img 
                    src={pages[currentPage].image} 
                    alt="Иллюстрация" 
                    className="w-full h-full object-contain"
                  />
                </div>
                
                <div className="w-1/2 p-6 overflow-y-auto">
                  <h3 className="text-amber-900 font-bold mb-4">Страница {currentPage + 1}</h3>
                  <p className="text-amber-800 font-handwriting text-lg">
                    {pages[currentPage].content}
                  </p>
                  
                  <div className="absolute bottom-4 right-4 flex gap-2">
                    <button 
                      onClick={() => setCurrentPage(prev => Math.max(0, prev - 1))}
                      className="bg-amber-700 text-white px-3 py-1 rounded"
                    >
                      ←
                    </button>
                    <button 
                      onClick={() => setCurrentPage(prev => Math.min(pages.length - 1, prev + 1))}
                      className="bg-amber-700 text-white px-3 py-1 rounded"
                    >
                      →
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};