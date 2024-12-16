function RecordsList({ records }) {
  return (
    <div className="records-list">
      <ul>
        {records.map((record, index) => (
          <li key={index} className="record-item">
            <div className="record-header">
              <span className="record-time-label">{record.record_time}</span>
              <span>{record.record_date}</span>
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
