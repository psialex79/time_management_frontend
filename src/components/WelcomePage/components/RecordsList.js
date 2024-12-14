import React from "react";

function RecordsList({ records }) {
  // Функция для форматирования текущей даты
  const getFormattedDate = () => {
    const now = new Date();

    // Список дней недели и месяцев
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

    // Получаем текущие значения
    const dayOfWeek = weekdays[now.getDay()]; // День недели
    const day = now.getDate(); // Число месяца
    const month = months[now.getMonth()]; // Месяц
    const hours = now.getHours(); // Часы
    const minutes = now.getMinutes(); // Минуты

    // Форматируем время, добавляя ведущий ноль, если минуты меньше 10
    const formattedTime = `${hours}:${minutes < 10 ? "0" + minutes : minutes}`;

    // Форматируем дату
    return `${dayOfWeek}, ${day} ${month} ${formattedTime}`;
  };

  return (
    <div className="records-list">
      {/* Показываем текущий день недели, время и дату */}
      <h3>{getFormattedDate()}</h3>

      {/* Отображаем записи */}
      <ul>
        {records.map((record, index) => (
          <li key={index}>
            {record.record_date} | {record.record_time} | {record.client_name}
            {record.comment && <div>{record.comment}</div>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecordsList;
