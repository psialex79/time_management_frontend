import React, { useEffect, useState } from "react";
import "./styles/App.css";
import AnimatedBox from "./components/AnimatedBox/AnimatedBox";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import { getTelegramInitData } from "./utils/telegramInitData";
import { sendInitDataToBackend } from "./utils/api"; // Импортируем новый модуль

function App() {
  const [initData, setInitData] = useState(null);
  const [backendResponse, setBackendResponse] = useState(null);

  useEffect(() => {
    async function fetchAndSendInitData() {
      const data = await getTelegramInitData();
      if (data) {
        setInitData(data); // Устанавливаем данные
        const response = await sendInitDataToBackend(data); // Отправляем данные на бэкенд
        setBackendResponse(response); // Сохраняем ответ от бэкенда
      }
    }

    fetchAndSendInitData();
  }, []);

  // Показываем "это ТВОЁ время", пока initData не получены
  if (!initData) {
    return (
      <div className="app-container">
        <h1 className="app-title">это ТВОЁ время</h1>
        <AnimatedBox />
      </div>
    );
  }

  // Показываем "Добро пожаловать!" при успешном получении данных
  return <WelcomePage initData={initData} backendResponse={backendResponse} />;
}

export default App;
