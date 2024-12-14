import React, { useState, useEffect } from "react";

function DateInput({ value, onChange }) {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toISOString().split("T")[0]; // Формат: YYYY-MM-DD
    setCurrentDate(formattedDate);
  }, []);

  return (
    <div className="input-field">
      <label htmlFor="date">Дата:</label>
      <input
        type="date"
        id="date"
        value={value || currentDate}
        onChange={onChange}
        required
      />
    </div>
  );
}

export default DateInput;
