import React from "react";
import "../WelcomePage.css";

function IconButton({ onClick }) {
  return (
    <div className="icon-button" onClick={onClick}>
      <span className="plus-icon">+</span>
    </div>
  );
}

export default IconButton;
