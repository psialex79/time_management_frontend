import React, { useEffect, useState } from "react";
import "./styles/App.css";
import AnimatedBox from "./components/AnimatedBox/AnimatedBox";
import { getTelegramInitData } from "./utils/telegramInitData";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [initData, setInitData] = useState(null);

  useEffect(() => {
    async function fetchInitData() {
      const data = await getTelegramInitData();
      setInitData(data); // Здесь можно передать данные initData в приложение
      setIsLoading(false);
    }

    fetchInitData();
  }, []);

  if (isLoading) {
    // Стартовая страница отображается, пока идет загрузка
    return (
      <div className="app-container">
        <h1 className="app-title">это ТВОЁ время</h1>
        <AnimatedBox />
      </div>
    );
  }

  // Основная логика приложения после загрузки initData
  return (
    <div className="app-container">
      <h1 className="app-title">Добро пожаловать!</h1>
      <p>
        {initData ? `Ваши данные: ${JSON.stringify(initData)}` : "Нет данных."}
      </p>
    </div>
  );
}

export default App;
