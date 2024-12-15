import React, { useEffect, useState } from "react";
import "./WelcomePage.css";
import StatusMessage from "./components/StatusMessage";
import RecordsList from "./components/RecordsList";

function WelcomePage({ backendResponse }) {
  const [isLoading, setIsLoading] = useState(true);

  const { postAuthResponse } = backendResponse || {};

  useEffect(() => {
    if (backendResponse?.postAuthResponse) {
      setIsLoading(false);
    }
  }, [backendResponse]);

  // Получение текущей даты в формате YYYY-MM-DD
  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  // Проверяем, является ли postAuthResponse массивом
  const isResponseArray = Array.isArray(postAuthResponse);

  // Фильтрация записей с сегодняшней датой, если response - массив
  const todayRecords = isResponseArray
    ? postAuthResponse.filter((record) => record.record_date === getTodayDate())
    : [];

  return (
    <div className="welcome-container">
      {isLoading ? <StatusMessage message="Загрузка..." /> : null}

      {/* Если записи присутствуют, отображаем их */}
      {todayRecords.length > 0 ? (
        <RecordsList records={todayRecords} />
      ) : (
        !isLoading &&
        (isResponseArray ? (
          <StatusMessage message="Сегодня записей нет" />
        ) : (
          <StatusMessage
            message={postAuthResponse.message || "Ошибка данных"}
          />
        ))
      )}
    </div>
  );
}

export default WelcomePage;
