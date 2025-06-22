import React, { useState } from 'react';
import './sidebar.css';

interface Attraction {
  id: number;
  name: string;
  icon: string;
  isSecret?: boolean;
}

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Данные аттракционов
  const attractions: Attraction[] = [
    { id: 1, name: 'Тайная комната', icon: '🔮', isSecret: true },
    { id: 2, name: 'Лабиринт Гномов', icon: '🧙' },
    { id: 3, name: 'Колесо Чудес', icon: '🎡' },
    { id: 4, name: 'Дом-перевёртыш', icon: '🏠' },
    { id: 5, name: 'Туннель Ужасов', icon: '👻', isSecret: true },
    { id: 6, name: 'Кафе "У Зеты"', icon: '☕' }
  ];

  const [activeAttraction, setActiveAttraction] = useState<number | null>(null);

  return (
    <>
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-content">
          {/* Заголовок в стиле Gravity Falls */}
          <div className="park-header">
            <h2>ТАЙНЫЙ ПАРК</h2>
            <p>Аттракционы и загадки</p>
            <div className="divider"></div>
          </div>

          {/* Меню аттракционов */}
          <nav className="attractions-menu">
            <ul>
              {attractions.map((attraction) => (
                <li
                  key={attraction.id}
                  className={`${attraction.isSecret ? 'secret' : ''} ${activeAttraction === attraction.id ? 'active' : ''}`}
                  onClick={() => setActiveAttraction(attraction.id)}
                >
                  <span className="attraction-icon">{attraction.icon}</span>
                  <span className="attraction-name">{attraction.name}</span>
                  {attraction.isSecret && <span className="secret-badge">СЕКРЕТ</span>}
                </li>
              ))}
            </ul>
          </nav>

          {/* Секция с загадкой дня */}
          <div className="riddle-section">
            <div className="divider"></div>
            <h3>Загадка дня:</h3>
            <p>"Что всегда перед тобой, но невидимо?"</p>
            <button className="riddle-button">Показать ответ</button>
          </div>
        </div>

        {/* Декоративные элементы */}
        <div className="sidebar-decoration">
          <div className="cipher-wheel"></div>
        </div>
      </aside>

      <button
        className={`toggle-btn ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{isOpen ? '◀' : '▶'}</span>
      </button>
    </>
  );
};

export default Sidebar;