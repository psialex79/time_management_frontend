import React from "react";
import "./WelcomePage.css";

function WelcomePage({ initData, backendResponse }) {
  return (
    <div className="welcome-container">
      <h1 className="welcome-title">Добро пожаловать!</h1>
      <p>Ваши данные из initData:</p>
      <pre>{JSON.stringify(initData, null, 2)}</pre>

      {backendResponse ? (
        <>
          <p>Ответ от бэкенда:</p>
          <pre>{JSON.stringify(backendResponse, null, 2)}</pre>
        </>
      ) : (
        <p>Ответ от бэкенда ещё не получен.</p>
      )}
    </div>
  );
}

export default WelcomePage;
