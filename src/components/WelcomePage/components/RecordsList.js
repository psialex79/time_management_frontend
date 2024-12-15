function RecordsList({ records }) {
  const getFormattedDate = () => {
    const now = new Date();

    const weekdays = [
      "Воскресенье",
      "Понедельник",
      "Вторник",
      "Среда",
      "Четверг",
      "Пятница",
      "Суббота",
    ];
    const months = [
      "Января",
      "Февраля",
      "Марта",
      "Апреля",
      "Мая",
      "Июня",
      "Июля",
      "Августа",
      "Сентября",
      "Октября",
      "Ноября",
      "Декабря",
    ];

    const dayOfWeek = weekdays[now.getDay()];
    const day = now.getDate();
    const month = months[now.getMonth()];
    const hours = now.getHours();
    const minutes = now.getMinutes();

    return {
      date: `${dayOfWeek}, ${day} ${month}`,
      hours,
      minutes: minutes < 10 ? `0${minutes}` : minutes,
    };
  };

  const { date, hours, minutes } = getFormattedDate();

  return (
    <div className="records-list">
      {/* Текущая дата и время */}
      <h3>
        {date}{" "}
        <span className="time">
          <span className="hours">{hours}</span>
          <span className="colon">:</span>
          <span className="minutes">{minutes}</span>
        </span>
      </h3>

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
