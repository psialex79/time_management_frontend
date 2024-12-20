import React, { useState } from "react";
import "./EditRecordPage.css";

function EditRecordPage({ record, onSave, onCancel }) {
  const [editedRecord, setEditedRecord] = useState(record);

  const handleInputChange = (field, value) => {
    setEditedRecord({ ...editedRecord, [field]: value });
  };

  const handleSave = () => {
    onSave(editedRecord);
  };

  return (
    <div className="edit-record-page">
      <h2>Редактировать запись</h2>
      <form>
        <div className="form-group">
          <label>Дата:</label>
          <input
            type="text"
            value={editedRecord.record_date}
            onChange={(e) => handleInputChange("record_date", e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Время:</label>
          <input
            type="text"
            value={editedRecord.record_time}
            onChange={(e) => handleInputChange("record_time", e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Описание:</label>
          <input
            type="text"
            value={editedRecord.client_name}
            onChange={(e) => handleInputChange("client_name", e.target.value)}
          />
        </div>
        <button type="button" onClick={handleSave}>
          Сохранить
        </button>
        <button type="button" onClick={onCancel}>
          Отмена
        </button>
      </form>
    </div>
  );
}

export default EditRecordPage;
