import React from "react";
import icon from "../../icons/plus_man_pink.png";
import "./Footer.css";

function IconButton({ onClick, extraClass }) {
  return (
    <div className={`icon-button ${extraClass}`} onClick={onClick}>
      <img src={icon} alt="Добавить запись" />
    </div>
  );
}

function Footer({ openModal }) {
  return (
    <footer className="footer">
      <IconButton onClick={openModal} />
    </footer>
  );
}

export default Footer;
