import React from "react";
import "../WelcomePage.css";
import PlusIcon from "../../icons/plus_icon.png";

function PlusIconButton({ onClick }) {
  return (
    <div className="icon-button" onClick={onClick}>
      <img src={PlusIcon} alt="Plus Icon" className="plus-icon" />
    </div>
  );
}

export default PlusIconButton;
