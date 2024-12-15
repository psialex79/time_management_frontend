import React, { useState } from "react";
import DateInput from "./components/DateInput";
import TimeInput from "./components/TimeInput";
import NameInput from "./components/NameInput";
import SubmitButton from "./components/SubmitButton";
import { sendFormData } from "../../utils/newMeeting";
import { getTelegramInitData } from "../../utils/telegramInitData";
import "./Modal.css";

function Modal({ isOpen, onClose }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = { date, time, name };

    try {
      const initData = await getTelegramInitData();
      if (initData) {
        formData.initData = initData;
      }
    } catch (error) {
      console.error("Ошибка при получении initData:", error);
    }

    const response = await sendFormData(formData);

    if (response) {
      console.log("Данные успешно отправлены:", response);
    } else {
      console.error("Ошибка при отправке данных.");
    }

    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        {/* Контейнер для кнопок */}
        <div className="modal-buttons-container">
          <button className="modal-close-btn" onClick={onClose}>
            х
          </button>
          <SubmitButton onClick={handleSubmit} />
        </div>
        <form onSubmit={handleSubmit}>
          <DateInput value={date} onChange={(e) => setDate(e.target.value)} />
          <TimeInput value={time} onChange={(e) => setTime(e.target.value)} />
          <NameInput value={name} onChange={(e) => setName(e.target.value)} />
        </form>
      </div>
    </div>
  );
}

export default Modal;
