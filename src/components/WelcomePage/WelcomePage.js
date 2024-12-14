import React from "react";
import "./WelcomePage.css";
import StatusMessage from "./components/StatusMessage";
import RecordsList from "./components/RecordsList";
import IconButton from "./components/IconButton"; // Импортируем компонент иконки

function WelcomePage({ backendResponse }) {
  // Проверяем, есть ли данные от бэкенда
  const { message, records } = backendResponse?.postAuthResponse || {};

  return (
    <div className="welcome-container">
      <h1 className="welcome-title">Добро пожаловать!</h1>
      {message ? (
        // Если сообщение "Записи отсутствуют", отображаем сообщение
        <StatusMessage message={message} />
      ) : (
        <StatusMessage message="Загрузка..." />
      )}

      {/* Если записи присутствуют, отображаем их */}
      {records && records.length > 0 ? <RecordsList records={records} /> : null}

      {/* Отображаем иконку в правом нижнем углу */}
      <IconButton />
    </div>
  );
}

export default WelcomePage;
