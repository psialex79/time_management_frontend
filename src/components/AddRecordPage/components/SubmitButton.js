import React from "react";
import plusManIcon from "../../../icons/plus_man_pink.png";

function SubmitButton({ type = "button", onClick, disabled }) {
  return (
    <button
      type={type}
      className="submit-button"
      onClick={onClick}
      disabled={disabled}
    >
      <img src={plusManIcon} alt="Отправить" className="submit-icon" />
    </button>
  );
}

export default SubmitButton;
