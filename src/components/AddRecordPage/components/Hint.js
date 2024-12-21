import React from "react";
import "./Hint.css";

function Hint({ isSubmitting }) {
  return (
    <div className="hint">
      {isSubmitting
        ? "Отлично! Создаем новую запись..."
        : "Заполните все поля формы, чтобы создать запись."}
    </div>
  );
}

export default Hint;
