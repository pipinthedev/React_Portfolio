import { useEffect, useState } from 'react';

const TelegramPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem('telegramPopupShown')) {
      const randomTime = Math.floor(Math.random() * (30 - 10 + 1) + 10) * 1000;

      const timer = setTimeout(() => {
        setShowPopup(true);
        sessionStorage.setItem('telegramPopupShown', 'true');
      }, randomTime);

      return () => clearTimeout(timer);
    }
  }, []);

  if (!showPopup) return null;

  return (
    <div className="fixed bottom-6 right-6 w-72 bg-gray-900 text-white p-4 rounded-lg shadow-lg z-50 animate-fade-in flex flex-col items-center text-center">
      <p className="text-sm">
        Are you looking for a website or bot at an affordable price?  
        <br />
        <a href="https://t.me/pipcode" target="_blank" rel="noopener noreferrer" className="text-blue-400 font-bold hover:underline">
          Message me on Telegram!
        </a>
      </p>

      <button
        onClick={() => setShowPopup(false)}
        className="mt-3 bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition"
      >
        Not right now
      </button>
    </div>
  );
};

export default TelegramPopup;
