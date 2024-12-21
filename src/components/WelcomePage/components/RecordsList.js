import React, { useState, useMemo } from "react";
import EditRecordPage from "./EditRecordPage/EditRecordPage";

function RecordsList({ records }) {
  const [editingRecord, setEditingRecord] = useState(null);

  const getCurrentTimeInMinutes = () => {
    const now = new Date();
    return now.getHours() * 60 + now.getMinutes();
  };

  const currentMinutes = useMemo(getCurrentTimeInMinutes, []);

  const sortedRecords = useMemo(() => {
    const recordsWithMinutes = records.map((record) => {
      const [hours, minutes] = record.record_time.split(":").map(Number);
      const timeInMinutes = hours * 60 + minutes;
      return { ...record, timeInMinutes };
    });

    const upcoming = recordsWithMinutes.filter(
      (record) => record.timeInMinutes >= currentMinutes
    );
    const passed = recordsWithMinutes.filter(
      (record) => record.timeInMinutes < currentMinutes
    );

    upcoming.sort((a, b) => a.timeInMinutes - b.timeInMinutes);
    passed.sort((a, b) => a.timeInMinutes - b.timeInMinutes);

    return [...upcoming, ...passed];
  }, [records, currentMinutes]);

  const getBackgroundColor = (timeInMinutes, index) => {
    if (timeInMinutes < currentMinutes) return "var(--section-separator-color)";
    if (index === 0) return "var(--accent-text-color)";
    return "var(--button-color)";
  };

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
          {sortedRecords.map((record, index) => (
            <li
              key={index}
              className="record-item"
              onClick={() => handleRecordClick(record)}
            >
              <div className="record-header">
                <span className="record-date-label">{record.record_date}</span>
                <span
                  className="record-time-label"
                  style={{
                    backgroundColor: getBackgroundColor(
                      record.timeInMinutes,
                      index
                    ),
                  }}
                >
                  {record.record_time}
                </span>
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
