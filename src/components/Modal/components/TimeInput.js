import React from "react";

function TimeInput({ value, onChange }) {
  return (
    <div className="input-field">
      <label htmlFor="time">Время:</label>
      <input type="time" id="time" value={value} onChange={onChange} required />
    </div>
  );
}

export default TimeInput;
