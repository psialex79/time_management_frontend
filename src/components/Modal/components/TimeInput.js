import React, { useState, forwardRef } from "react";

const TimeInput = forwardRef(({ error, ...props }, ref) => {
  const [isSelectorVisible, setIsSelectorVisible] = useState(false);
  const [selectedTime, setSelectedTime] = useState("");

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
    setIsSelectorVisible(false); // Скрываем селектор после выбора времени
  };

  return (
    <div className="input-field">
      {!isSelectorVisible ? (
        selectedTime ? (
          // Если время выбрано, отображаем его
          <div
            className="selected-time"
            onClick={() => setIsSelectorVisible(true)}
          >
            {selectedTime} <span className="edit-text">(Изменить)</span>
          </div>
        ) : (
          // Если время не выбрано, показываем кнопку
          <button
            type="button"
            onClick={() => setIsSelectorVisible(true)}
            className="select-time-button"
          >
            Выберите время
          </button>
        )
      ) : (
        // Если селектор активен, показываем input для выбора времени
        <input
          type="time"
          ref={ref}
          {...props}
          onChange={handleTimeChange}
          autoFocus
          required
        />
      )}
      {error && <span className="error-text">{error}</span>}
    </div>
  );
});

export default TimeInput;
