import React from "react";

function DateInput({ value, onChange }) {
  return (
    <div className="input-field">
      <label htmlFor="date">Дата (Месяц.Число):</label>
      <input
        type="text"
        id="date"
        value={value}
        onChange={onChange}
        placeholder="Месяц.Число"
        required
      />
    </div>
  );
}

export default DateInput;
