import React from "react";

function RecordsList({ records }) {
  return (
    <div className="records-list">
      <h3>Ваши записи:</h3>
      <ul>
        {records.map((record, index) => (
          <li key={index}>
            <strong>Дата:</strong> {record.record_date} |{" "}
            <strong>Время:</strong> {record.record_time} |{" "}
            <strong>Клиент:</strong> {record.client_name}
            {record.comment && (
              <div>
                <strong>Комментарий:</strong> {record.comment}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecordsList;
