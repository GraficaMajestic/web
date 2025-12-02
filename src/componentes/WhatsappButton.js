import React from "react";
import "../estilos/WhatsappButton.css";
import whatsappIcon from "../imagenes/wasap2.png";

function WhatsappButton() {
  return (
    <a
      href="https://wa.me/51983480623"
      className="whatsapp-btn"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={whatsappIcon} alt="WhatsApp" />
    </a>
  );
}

export default WhatsappButton;