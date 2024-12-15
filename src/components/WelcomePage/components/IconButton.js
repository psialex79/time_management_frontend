import React from "react";
import icon from "../../../icons/plus_man_pink.png";
import "../WelcomePage.css";

function IconButton({ onClick, extraClass }) {
  return (
    <div className={`icon-button ${extraClass}`} onClick={onClick}>
      <img src={icon} alt="Иконка" />
    </div>
  );
}

export default IconButton;
