import React, { useEffect, useState } from "react";
import "./styles/App.css";
import AnimatedBox from "./components/AnimatedBox/AnimatedBox";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import { getTelegramInitData } from "./utils/telegramInitData";

function App() {
  const [initData, setInitData] = useState(null);

  useEffect(() => {
    async function fetchInitData() {
      const data = await getTelegramInitData();
      if (data) {
        setInitData(data); // Устанавливаем данные, если они получены
      }
    }

    fetchInitData();
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
  return <WelcomePage initData={initData} />;
}

export default App;
