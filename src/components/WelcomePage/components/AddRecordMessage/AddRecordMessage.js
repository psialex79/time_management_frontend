import React from "react";
import "./AddRecordMessage.css";

function AddRecordMessage() {
  return (
    <div className="add-record-message">
      <p className="add-record-text">У вас пока нет встреч на сегодня.</p>
      <div className="arrow-container">
        <div className="arrow"></div>
      </div>
    </div>
  );
}

export default AddRecordMessage;
