import React from "react";
import WritingIcon from "../../../icons/writing_icon.png";

function WritingIconButton({ onClick, isDisabled }) {
  return (
    <div
      className={`icon-button ${isDisabled ? "disabled" : ""}`}
      onClick={!isDisabled ? onClick : undefined}
    >
      <img src={WritingIcon} alt="Plus Icon" className="plus-icon" />
    </div>
  );
}

export default WritingIconButton;
