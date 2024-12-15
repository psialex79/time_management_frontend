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

    const formData = { date, time, name }; // Собираем данные формы

    try {
      // Получаем initData из Telegram WebApp
      const initData = await getTelegramInitData();
      if (initData) {
        // Добавляем initData к formData
        formData.initData = initData;
      }
    } catch (error) {
      console.error("Ошибка при получении initData:", error);
    }

    // Отправляем данные на сервер
    const response = await sendFormData(formData);

    if (response) {
      console.log("Данные успешно отправлены:", response);
    } else {
      console.error("Ошибка при отправке данных.");
    }

    onClose(); // Закрываем модальное окно после отправки
  };

  if (!isOpen) return null; // Если модальное окно не открыто, ничего не рендерим

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button className="modal-close-btn" onClick={onClose}>
          X
        </button>
        <form onSubmit={handleSubmit}>
          <DateInput value={date} onChange={(e) => setDate(e.target.value)} />
          <TimeInput value={time} onChange={(e) => setTime(e.target.value)} />
          <NameInput value={name} onChange={(e) => setName(e.target.value)} />
          <SubmitButton onClick={handleSubmit} />
        </form>
      </div>
    </div>
  );
}

export default Modal;
