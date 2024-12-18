import React from "react";
import PlusIcon from "../../../icons/plus_icon.png";

function PlusIconButton({ onClick, isDisabled }) {
  return (
    <div
      className={`icon-button ${isDisabled ? "disabled" : ""}`}
      onClick={!isDisabled ? onClick : undefined}
    >
      <img src={PlusIcon} alt="Plus Icon" className="plus-icon" />
    </div>
  );
}

export default PlusIconButton;
