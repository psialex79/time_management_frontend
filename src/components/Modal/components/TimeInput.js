import React from "react";

function TimeInput({ value, onChange }) {
  return (
    <div className="input-field">
      <input type="time" id="time" value={value} onChange={onChange} required />
    </div>
  );
}

export default TimeInput;
