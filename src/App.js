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
      setInitData(data);
      setIsLoading(false);
    }

    fetchInitData();
  }, []);

  if (isLoading) {
    return (
      <div className="app-container">
        <h1 className="app-title">это ТВОЁ время</h1>
        <AnimatedBox />
      </div>
    );
  } else {
    return (
      <div className="app-container">
        <h1 className="app-title">Добро пожаловать!</h1>
        <p>
          {initData
            ? `Ваши данные: ${JSON.stringify(initData)}`
            : "Нет данных."}
        </p>
      </div>
    );
  }
}

export default App;
