import React from "react";

function TimeInput({ value, onChange }) {
  return (
    <div className="input-field">
      <label htmlFor="time">Время (Часы:Минуты):</label>
      <input
        type="text"
        id="time"
        value={value}
        onChange={onChange}
        placeholder="Часы:Минуты"
        required
      />
    </div>
  );
}

export default TimeInput;
