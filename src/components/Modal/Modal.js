import React, { useState } from "react";
import NameInput from "./components/NameInput";
import DateInput from "./components/DateInput";
import TimeInput from "./components/TimeInput";

function Modal() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Логика отправки данных
  };

  return (
    <div className="modal-form">
      <form onSubmit={handleSubmit}>
        <NameInput value={name} onChange={(e) => setName(e.target.value)} />
        <DateInput value={date} onChange={(e) => setDate(e.target.value)} />
        <TimeInput value={time} onChange={(e) => setTime(e.target.value)} />

        <div className="modal-actions">
          <button type="submit">Отправить</button>
          <button
            type="button"
            onClick={() => {
              /* Закрыть модальное окно */
            }}
          >
            Отменить
          </button>
        </div>
      </form>
    </div>
  );
}

export default Modal;
