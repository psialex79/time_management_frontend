import React from "react";

function DateInput({ value, onChange }) {
  return (
    <div className="input-field">
      <input type="date" id="date" value={value} onChange={onChange} required />
    </div>
  );
}

export default DateInput;
