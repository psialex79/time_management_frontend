import React from "react";
import icon from "../../../icons/plus_man_pink.png";
import "../WelcomePage.css";

function IconButton({ onClick }) {
  return (
    <div className={`icon-button`} onClick={onClick}>
      <img src={icon} alt="Добавить запись" />
    </div>
  );
}

export default IconButton;
