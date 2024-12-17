import React, { useState, forwardRef } from "react";

const DateInput = forwardRef(({ error, ...props }, ref) => {
  const [isSelectorVisible, setIsSelectorVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleBlur = () => {
    if (selectedDate) {
      setIsSelectorVisible(false);
    }
  };

  return (
    <div className="input-field">
      {!isSelectorVisible ? (
        selectedDate ? (
          <div
            className="selected-date"
            onClick={() => setIsSelectorVisible(true)}
          >
            {selectedDate} <span className="edit-text">(Изменить)</span>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => setIsSelectorVisible(true)}
            className="select-date-button"
          >
            Выберите дату
          </button>
        )
      ) : (
        <input
          type="date"
          ref={ref}
          {...props}
          value={selectedDate}
          onChange={handleDateChange}
          onBlur={handleBlur}
          autoFocus
          required
        />
      )}
      {error && <span className="error-text">{error}</span>}
    </div>
  );
});

export default DateInput;
