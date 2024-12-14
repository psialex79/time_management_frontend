import React from "react";

function NameInput({ value, onChange }) {
  return (
    <div className="input-field">
      <label htmlFor="name">Клиент:</label>
      <input
        type="text"
        id="name"
        value={value}
        onChange={onChange}
        placeholder="Введите имя клиента"
        required
      />
    </div>
  );
}

export default NameInput;
