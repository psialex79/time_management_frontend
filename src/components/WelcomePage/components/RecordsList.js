import React, { useState } from "react";
import Modal from "./EditModal";

function RecordsList({ records }) {
  const [openRecord, setOpenRecord] = useState(null); // Состояние для отслеживания открытой записи

  const openModal = (record) => {
    setOpenRecord(record); // Открываем модальное окно и передаем запись
  };

  const closeModal = () => {
    setOpenRecord(null); // Закрываем модальное окно
  };

  return (
    <div className="records-list">
      <ul>
        {records.map((record, index) => (
          <li
            key={index}
            className="record-item"
            onClick={() => openModal(record)}
          >
            <div className="record-header">
              <span className="record-time-label">{record.record_time}</span>
              <span>{record.client_name}</span>
            </div>
          </li>
        ))}
      </ul>

      {openRecord && <Modal record={openRecord} closeModal={closeModal} />}
    </div>
  );
}

export default RecordsList;
