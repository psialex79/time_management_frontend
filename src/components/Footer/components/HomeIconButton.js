import React from "react";
import HomeIcon from "../../../icons/home_icon.png";

function HomeIconButton({ onClick }) {
  return (
    <div className="icon-button" onClick={onClick}>
      <img src={HomeIcon} alt="Back Icon" className="back-icon" />
    </div>
  );
}

export default HomeIconButton;
