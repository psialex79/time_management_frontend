import React from "react";
import handShakeIcon from "../../../icons/check_mark_pink.png";

function SubmitButton({ onClick, disabled }) {
  return (
    <button
      className="submit-button"
      onClick={(e) => {
        if (!disabled) {
          onClick(e);
        }
      }}
      disabled={disabled}
    >
      <img src={handShakeIcon} alt="Отправить" className="submit-icon" />
    </button>
  );
}

export default SubmitButton;
