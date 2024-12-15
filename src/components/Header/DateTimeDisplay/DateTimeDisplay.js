import React, { useState, useEffect } from "react";
import "./DateTimeDisplay.css";

function DateTimeDisplay() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const weekdays = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];
  const months = [
    "Января",
    "Февраля",
    "Марта",
    "Апреля",
    "Мая",
    "Июня",
    "Июля",
    "Августа",
    "Сентября",
    "Октября",
    "Ноября",
    "Декабря",
  ];

  const dayOfWeek = weekdays[time.getDay()];
  const day = time.getDate();
  const month = months[time.getMonth()];
  const hours = time.getHours();
  const minutes =
    time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes();

  return (
    <div className="date-time-display">
      <span className="date">
        {dayOfWeek}, {day} {month}
      </span>
      <span className="time">
        <span className="hours">{hours}</span>
        <span className="colon">:</span>
        <span className="minutes">{minutes}</span>
      </span>
    </div>
  );
}

export default DateTimeDisplay;
