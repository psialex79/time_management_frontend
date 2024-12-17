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

    if (!date || !time || !name) {
      setError("Пожалуйста, заполните все поля.");
      return;
    }

    setError("");
    setIsSubmitting(true);

    const formData = { date, time, name };

    try {
      const initData = await getTelegramInitData();
      if (initData) {
        formData.initData = initData;
      }

      await sendFormData(formData);
      onClose();
    } catch (error) {
      console.error("Ошибка при отправке данных:", error);
      setError("Произошла ошибка при отправке данных. Попробуйте снова.");
    } finally {
      setIsSubmitting(false);
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

        {error && <div className="error-message">{error}</div>}

        <div className="modal-buttons-container">
          <button className="modal-close-btn" onClick={onClose}>
            ✕
          </button>
          <SubmitButton onClick={handleSubmit} disabled={isSubmitting} />
        </div>
      </div>
    </div>
  );
}

export default Modal;
