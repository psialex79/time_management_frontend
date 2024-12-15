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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Проверка на обязательные поля
    if (!date || !time || !name) {
      setError("Пожалуйста, заполните все поля.");
      return;
    }

    setError(""); // Сбрасываем ошибку, если все поля заполнены
    setIsSubmitting(true); // Делаем кнопку неактивной, когда данные отправляются

    const formData = { date, time, name };

    try {
      const initData = await getTelegramInitData();
      if (initData) {
        formData.initData = initData;
      }

      const response = await sendFormData(formData);

      if (response) {
        console.log("Данные успешно отправлены:", response);
      } else {
        console.error("Ошибка при отправке данных.");
      }
    } catch (error) {
      console.error("Ошибка при отправке данных:", error);
    } finally {
      setIsSubmitting(false); // Разблокируем кнопку после отправки данных
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <form>
          <DateInput value={date} onChange={(e) => setDate(e.target.value)} />
          <TimeInput value={time} onChange={(e) => setTime(e.target.value)} />
          <NameInput value={name} onChange={(e) => setName(e.target.value)} />
        </form>

        {/* Отображение ошибки, если форма не заполнена */}
        {error && <div className="error-message">{error}</div>}

        <div className="modal-buttons-container">
          <button className="modal-close-btn" onClick={onClose}>
            х
          </button>
          <SubmitButton
            onClick={handleSubmit}
            disabled={isSubmitting} // Блокируем кнопку при отправке
          />
        </div>
      </div>
    </div>
  );
}

export default Modal;
