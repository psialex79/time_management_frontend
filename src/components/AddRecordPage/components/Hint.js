import React from "react";
import "./Hint.css";

function Hint({ isSubmitting }) {
  return (
    <div className="hint">
      {isSubmitting
        ? "Записываем встречу в вашу книжку... ✍️"
        : "Заполните все поля формы, чтобы записать встречу."}
    </div>
  );
}

export default Hint;
