import React, { useEffect, useState } from "react";
import "./styles/App.css";
import AnimatedBox from "./components/AnimatedBox/AnimatedBox";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import { getTelegramInitData } from "./utils/telegramInitData";
import { sendInitDataToBackend } from "./utils/api";

function App() {
  const [initData, setInitData] = useState(null); // Данные Telegram
  const [backendResponse, setBackendResponse] = useState(null); // Ответ от бэкенда
  const [loading, setLoading] = useState(true); // Состояние загрузки

  useEffect(() => {
    async function fetchAndSendInitData() {
      const data = await getTelegramInitData();
      if (data) {
        setInitData(data); // Устанавливаем данные Telegram
        try {
          const response = await sendInitDataToBackend(data); // Отправляем данные на бэкенд
          setBackendResponse(response); // Устанавливаем ответ от бэкенда
        } catch (error) {
          console.error("Ошибка при отправке данных на бэкенд:", error);
          setBackendResponse(null); // Если ошибка, сбрасываем ответ
        } finally {
          setLoading(false); // Окончание загрузки
        }
      } else {
        setLoading(false); // Окончание загрузки, если initData нет
      }
    }

    fetchAndSendInitData();
  }, []);

  // Показываем "это ТВОЁ время", пока initData или ответ от бэкенда не готовы
  if (loading || !backendResponse) {
    return (
      <div className="app-container">
        <h1 className="app-title">это ТВОЁ время</h1>
        <AnimatedBox />
      </div>
    );
  }

  // Показываем "Добро пожаловать!" при успешном получении ответа от бэкенда
  return <WelcomePage initData={initData} backendResponse={backendResponse} />;
}

export default App;
