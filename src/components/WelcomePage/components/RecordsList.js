function RecordsList({ records }) {
  return (
    <div className="records-list">
      {/* Список записей */}
      <ul>
        {records.map((record, index) => (
          <li key={index}>
            {record.record_date} - {record.record_time} - {record.client_name}
            {record.comment && <div>{record.comment}</div>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecordsList;
