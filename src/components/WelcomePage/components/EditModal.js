import React from "react";

function Modal({ record, closeModal }) {
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button className="modal-close-btn" onClick={closeModal}>
          X
        </button>
        <div className="modal-content">
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
      </div>
    </div>
  );
}

export default Modal;
