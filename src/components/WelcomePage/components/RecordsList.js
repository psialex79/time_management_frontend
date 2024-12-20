import React, { useState } from "react";
import EditRecordPage from "./EditRecordPage/EditRecordPage";

function RecordsList({ records }) {
  const [editingRecord, setEditingRecord] = useState(null);

  const handleRecordClick = (record) => {
    setEditingRecord(record);
  };

  const handleSave = (updatedRecord) => {
    console.log("Сохраненная запись:", updatedRecord);
    setEditingRecord(null);
  };

  const handleCancel = () => {
    setEditingRecord(null);
  };

  return (
    <div className="records-list">
      {editingRecord ? (
        <EditRecordPage
          record={editingRecord}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      ) : (
        <ul>
          {records.map((record, index) => (
            <li
              key={index}
              className="record-item"
              onClick={() => handleRecordClick(record)}
            >
              <div className="record-header">
                <span className="record-date-label">{record.record_date}</span>
                <span className="record-time-label">{record.record_time}</span>
                <span>{record.client_name}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default RecordsList;
