import React from "react";
import handShakeIcon from "../../../icons/check_mark_pink.png";

function SubmitButton({ type = "button", onClick, disabled }) {
  return (
    <button
      type={type}
      className="submit-button"
      onClick={onClick}
      disabled={disabled}
    >
      <img src={handShakeIcon} alt="Отправить" className="submit-icon" />
    </button>
  );
}

export default SubmitButton;
