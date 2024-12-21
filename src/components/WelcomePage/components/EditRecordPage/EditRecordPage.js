import React, { useState } from "react";
import "./EditRecordPage.css";
import { updateRecord } from "../../../../utils/updateRecord";

function EditRecordPage({ record, onSave, onCancel }) {
  const [editedRecord, setEditedRecord] = useState(record);
  const [error, setError] = useState(null);

  const handleInputChange = (field, value) => {
    setEditedRecord({ ...editedRecord, [field]: value });
  };

  const handleSave = async () => {
    try {
      const updatedRecord = await updateRecord(editedRecord);
      if (updatedRecord) {
        onSave(updatedRecord);
      } else {
        setError("Не удалось обновить запись. Попробуйте снова.");
      }
    } catch (err) {
      setError(`Ошибка: ${err.message}`);
    }
  };

  return (
    <div className="edit-record-page">
      <h2>Редактировать запись</h2>
      {error && <p className="error">{error}</p>}
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
        <div className="form-group">
          <label>Комментарий:</label>
          <input
            type="text"
            value={editedRecord.comment || ""}
            onChange={(e) => handleInputChange("comment", e.target.value)}
          />
        </div>
        <button type="button" onClick={onCancel}>
          Отмена
        </button>
        <button type="button" onClick={handleSave}>
          Сохранить
        </button>
      </form>
    </div>
  );
}

export default EditRecordPage;
