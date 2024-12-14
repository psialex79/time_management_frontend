import React from "react";

function NameInput({ value, onChange }) {
  return (
    <div className="input-field">
      <label htmlFor="name">Имя:</label>
      <input
        type="text"
        id="name"
        value={value}
        onChange={onChange}
        placeholder="Введите имя"
        required
      />
    </div>
  );
}

export default NameInput;
