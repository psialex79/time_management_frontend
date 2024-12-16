import React, { useState } from "react";

function RecordsList({ records }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleComment = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="records-list">
      <ul>
        {records.map((record, index) => (
          <li
            key={index}
            className={`record-item ${openIndex === index ? "open" : ""}`}
            onClick={() => toggleComment(index)}
          >
            <div className="record-header">
              <span className="record-time-label">{record.record_time}</span>
              <span>{record.client_name}</span>
            </div>
            {record.comment && (
              <div className="record-comment">{record.comment}</div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecordsList;
