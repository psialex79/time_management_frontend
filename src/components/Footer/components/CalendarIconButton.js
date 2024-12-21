import React from "react";
import CalendarIcon from "../../../icons/calendar_icon.png";

function CalendarIconButton({ onClick }) {
  return (
    <div className="icon-button" onClick={onClick}>
      <img src={CalendarIcon} alt="Calendar Icon" className="calendar-icon" />
    </div>
  );
}

export default CalendarIconButton;
