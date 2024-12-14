import React from "react";
import icon from "../../../icons/plus_man_pink.png";
import "../WelcomePage.css";

function IconButton() {
  return (
    <div className="icon-button">
      <img src={icon} alt="Иконка" />
    </div>
  );
}

export default IconButton;
