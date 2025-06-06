import { useState } from 'react';
import Head from 'next/head';

export default function SecretPage() {
  const [code, setCode] = useState('');
  const [access, setAccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (code.toLowerCase() === 'waddles') {
      setAccess(true);
    }
  };

  return (
    <div className="min-h-screen bg-black text-green-400 p-8 font-mono">
      <Head>
        <title>Секретная страница | Гравити Фолз</title>
      </Head>
      
      {!access ? (
        <div className="max-w-md mx-auto mt-20">
          <h1 className="text-2xl mb-6 text-center">ВВЕДИТЕ КОД ДОСТУПА</h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="password"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="bg-black border border-green-400 p-2 text-green-400"
              placeholder="Подсказка: Любимец Мэйбл"
            />
            <button
              type="submit"
              className="bg-green-400/20 border border-green-400 p-2 hover:bg-green-400/30"
            >
              ПОДТВЕРДИТЬ
            </button>
          </form>
        </div>
      ) : (
        <div className="text-center mt-20">
          <h2 className="text-3xl mb-6 glitch-text">ДОСТУП РАЗРЕШЕН</h2>
          <p className="mb-4">СЕКРЕТНЫЕ МАТЕРИАЛЫ:</p>
          <ul className="space-y-2">
            <li>• Координаты портала: 46°54'16"N 123°35'56"W</li>
            <li>• Пароль от бункера: STANL3Y</li>
            <li>• Телефон автора: 555-0100</li>
          </ul>
          <img 
            src="https://static.wikia.nocookie.net/gravityfalls/images/5/51/Bill_Cipher.png" 
            className="mx-auto mt-8 w-32 h-32 animate-spin-slow"
            alt="Билл Шифр"
          />
        </div>
      )}
    </div>
  );
}