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
      className="fixed top-1/2 right-6 transform -translate-y-1/2 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition duration-300 z-50"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="w-4 h-4 sm:w-6 sm:h-6" />
    </button>
  );
};

export default WhatsAppFloatingButton;