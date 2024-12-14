import React, { useState, useEffect } from "react";

function DateInput({ value, onChange }) {
  // Состояние для текущей даты
  const [currentDate, setCurrentDate] = useState("");

  // Устанавливаем текущую дату по умолчанию при монтировании компонента
  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toISOString().split("T")[0]; // Получаем дату в формате YYYY-MM-DD
    setCurrentDate(formattedDate);
  }, []);

  return (
    <div className="input-field">
      <label htmlFor="date">Дата (Месяц.Число):</label>
      <input
        type="date" // Изменяем тип на date
        id="date"
        value={value || currentDate} // Используем value из пропсов или текущую дату по умолчанию
        onChange={onChange}
        required
      />
    </div>
  );
}

export default DateInput;
