import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingWhatsApp = () => {
  return (
    <div className="fixed bottom-32 right-4 z-50">
      <a
        href="https://wa.me/917330640851?text=Hello%2C%20I%20visited%20your%20portfolio%20website."
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
        style={{
          boxShadow: '0 0 20px rgba(34, 197, 94, 0.5)',
        }}
      >
        <FaWhatsapp size={24} />
      </a>
    </div>
  );
};

export default FloatingWhatsApp;
