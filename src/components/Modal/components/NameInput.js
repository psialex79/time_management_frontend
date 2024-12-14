import React from "react";

function NameInput({ value, onChange }) {
  return (
    <div className="input-field">
      <input
        type="text"
        id="name"
        value={value}
        onChange={onChange}
        placeholder="Описание"
        required
      />
    </div>
  );
}

export default NameInput;
