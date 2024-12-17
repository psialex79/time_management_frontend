import React, { useState, forwardRef } from "react";

const TimeInput = forwardRef(({ error, ...props }, ref) => {
  const [isSelectorVisible, setIsSelectorVisible] = useState(false);
  const [selectedTime, setSelectedTime] = useState("");

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  const handleBlur = () => {
    if (selectedTime) {
      setIsSelectorVisible(false);
    }
  };

  return (
    <div className="input-field">
      {!isSelectorVisible ? (
        selectedTime ? (
          <div
            className="selected-time"
            onClick={() => setIsSelectorVisible(true)}
          >
            {selectedTime} <span className="edit-text">(Изменить)</span>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => setIsSelectorVisible(true)}
            className="select-time-button"
          >
            Выберите время
          </button>
        )
      ) : (
        <input
          type="time"
          ref={ref}
          {...props}
          value={selectedTime}
          onChange={handleTimeChange}
          onBlur={handleBlur}
          autoFocus
          required
        />
      )}
      {error && <span className="error-text">{error}</span>}
    </div>
  );
});

export default TimeInput;
