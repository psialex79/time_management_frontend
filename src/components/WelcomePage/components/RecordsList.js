import React, { useState } from "react";
import EditModal from "./EditModal";

function RecordsList({ records }) {
  const [openRecord, setOpenRecord] = useState(null);

  const openModal = (record) => {
    setOpenRecord(record);
  };

  const closeModal = () => {
    setOpenRecord(null);
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

      {openRecord && <EditModal record={openRecord} closeModal={closeModal} />}
    </div>
  );
}

export default RecordsList;
