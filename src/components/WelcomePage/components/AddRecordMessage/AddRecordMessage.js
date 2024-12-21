import React from "react";
import "./AddRecordMessage.css";

function AddRecordMessage() {
  return (
    <div className="add-record-message">
      <p className="add-record-text">
        У вас пока нет встреч на сегодня. Чтобы добавить запись, нажмите на
        кнопку <span className="add-icon">+</span> внизу экрана.
      </p>
    </div>
  );
}

export default AddRecordMessage;
