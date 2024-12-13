import React from "react";
import "./WelcomePage.css";

function WelcomePage({ initData }) {
  return (
    <div className="welcome-container">
      <h1 className="welcome-title">Добро пожаловать!</h1>
      <p>
        {initData ? `Ваши данные: ${JSON.stringify(initData)}` : "Нет данных."}
      </p>
    </div>
  );
}

export default WelcomePage;
