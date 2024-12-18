import React from "react";
import BackIcon from "../../../icons/back_icon.png";

function BackIconButton({ onClick }) {
  return (
    <div className="icon-button" onClick={onClick}>
      <img src={BackIcon} alt="Back Icon" className="back-icon" />
    </div>
  );
}

export default BackIconButton;
