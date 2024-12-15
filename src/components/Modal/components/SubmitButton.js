import React from "react";
import handShakeIcon from "../../../icons/check_mark_pink.png";

function SubmitButton({ onClick }) {
  return (
    <button className="submit-button" onClick={onClick}>
      <img src={handShakeIcon} alt="Отправить" className="submit-icon" />
    </button>
  );
}

export default SubmitButton;
