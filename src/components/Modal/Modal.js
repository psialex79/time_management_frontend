import React, { useState } from "react";
import DateInput from "./components/DateInput";
import TimeInput from "./components/TimeInput";
import NameInput from "./components/NameInput";
import "./Modal.css";

function Modal({ isOpen, onClose }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Логика отправки данных формы
    console.log("Form submitted:", { date, time, name });
    onClose(); // Закрываем модальное окно после отправки
  };

  if (!isOpen) return null; // Если модальное окно не открыто, ничего не рендерим

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button className="modal-close-btn" onClick={onClose}>
          X
        </button>
        <h2>Заполните форму</h2>
        <form onSubmit={handleSubmit}>
          <DateInput value={date} onChange={(e) => setDate(e.target.value)} />
          <TimeInput value={time} onChange={(e) => setTime(e.target.value)} />
          <NameInput value={name} onChange={(e) => setName(e.target.value)} />
          <button type="submit" className="submit-btn">
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
