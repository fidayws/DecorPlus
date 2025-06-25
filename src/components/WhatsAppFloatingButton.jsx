import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppFloatingButton = ({ phoneNumber }) => {
  const openWhatsApp = () => {
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition duration-300 z-50"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="w-6 h-6 sm:w-8 sm:h-8" />
    </button>
  );
};

export default WhatsAppFloatingButton;
