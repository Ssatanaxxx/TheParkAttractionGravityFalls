import React, { useState } from 'react';
import './BuyTicket.css';
import eyeImage from '../../assets/eye.png';

export const Sidebar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ticketDate, setTicketDate] = useState('');
  const [ticketsCount, setTicketsCount] = useState(1);
  const [isTardisSpinning, setIsTardisSpinning] = useState(false);

  const calculatePrice = () => {
    const basePrice = 15;
    const secretTax = ticketsCount > 2 ? 0.33 : 0; // 33% налог за 3+ билета (мистика!)
    return (basePrice * ticketsCount * (1 + secretTax)).toFixed(2);
  };

  const handleBuyTickets = () => {
    setIsTardisSpinning(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsTardisSpinning(false);
      alert(`Билеты оформлены!\nВы получите их в ${Math.floor(Math.random() * 5) + 1} измерении`);
    }, 2000);
  };

  return (
    <>
      {/* Кнопка ТАРДИС */}
      <button
        className="tardis-button"
        onClick={() => setIsModalOpen(true)}
        aria-label="Забронировать билеты"
      >
        <img
          src={eyeImage}
          alt="ТАРДИС"
          className={`tardis-image ${isTardisSpinning ? 'spinning' : ''}`}
        />
        <span className="tardis-glow"></span>
      </button>

      {/* Модальное окно */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="mystical-modal">
            <div className="modal-header">
              <h3>ПОРТАЛ БРОНИРОВАНИЯ</h3>
              <button
                className="close-button"
                onClick={() => setIsModalOpen(false)}
              >
                ✖
              </button>
            </div>

            <div className="modal-content">
              <div className="mystical-input">
                <label>Дата путешествия:</label>
                <input
                  type="date"
                  value={ticketDate}
                  onChange={(e) => setTicketDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                />
                <div className="time-vortex"></div>
              </div>

              <div className="mystical-input">
                <label>Количество билетов:</label>
                <select
                  value={ticketsCount}
                  onChange={(e) => setTicketsCount(parseInt(e.target.value))}
                >
                  {[1, 2, 3, 4, 5].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
                {ticketsCount > 2 && (
                  <div className="secret-warning">+33% налог межпространственного перехода</div>
                )}
              </div>

              <div className="price-calculation">
                <div className="cipher-wheel-small"></div>
                <span>Итого: ${calculatePrice()}</span>
              </div>
            </div>

            <button
              className={`buy-button ${isTardisSpinning ? 'disabled' : ''}`}
              onClick={handleBuyTickets}
              disabled={isTardisSpinning}
            >
              {isTardisSpinning ? 'АКТИВАЦИЯ ПОРТАЛА...' : 'ЗАБРОНИРОВАТЬ'}
            </button>

            <div className="mystical-footer">
              <small>Билеты могут появиться в любом измерении</small>
              <div className="alien-symbols">⌘ ⍟ ⎈</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;