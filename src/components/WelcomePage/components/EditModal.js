import React from "react";
import "./EditModal.css";

function Modal({ record, closeModal }) {
  return (
    <div className="editmodal-overlay">
      <div className="editmodal-container">
        <div className="editmodal-content">
          <h2>{record.client_name}</h2>
          <p>
            <strong>Время записи:</strong> {record.record_time}
          </p>
          <p>
            <strong>Дата записи:</strong> {record.record_date}
          </p>
          {record.comment && (
            <p>
              <strong>Комментарий:</strong> {record.comment}
            </p>
          )}
        </div>
        <button className="editmodal-close-btn" onClick={closeModal}>
          X
        </button>
      </div>
    </div>
  );
}

export default Modal;
