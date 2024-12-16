import React from "react";
import IconButton from "../WelcomePage/components/IconButton"; // Импорт нового компонента
import "./Footer.css"; // Стили для футера (не кнопки)

function Footer({ openModal }) {
  return (
    <footer className="footer">
      <IconButton onClick={openModal} />
    </footer>
  );
}

export default Footer;
