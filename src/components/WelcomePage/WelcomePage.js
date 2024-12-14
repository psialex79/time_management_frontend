import React from "react";
import "./WelcomePage.css";

function WelcomePage({ backendResponse }) {
  // Проверяем, есть ли данные от бэкенда
  const { message, records } = backendResponse?.postAuthResponse || {};

  return (
    <div className="welcome-container">
      <h1 className="welcome-title">Добро пожаловать!</h1>
      {message ? (
        // Если сообщение "Записи отсутствуют", отображаем сообщение
        <p className="status-message">{message}</p>
      ) : (
        <p className="status-message">Загрузка...</p>
      )}

      {/* Если записи присутствуют, отображаем их */}
      {records && records.length > 0 ? (
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
      ) : null}
    </div>
  );
}

export default WelcomePage;
