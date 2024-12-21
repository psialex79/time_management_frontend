import React from "react";
import "./AddRecordMessage.css";

function AddRecordMessage() {
  return (
    <div className="add-record-message">
      <p className="add-record-text">У вас пока нет встреч на сегодня.</p>
      <div className="animated-arrow"></div>
    </div>
  );
}

export default AddRecordMessage;
