import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Функция для применения темы из Telegram
function applyTelegramTheme(themeParams) {
  const root = document.documentElement;

  if (!themeParams) return;

  // Устанавливаем значения CSS переменных
  Object.keys(themeParams).forEach((key) => {
    const cssVarName = `--${key.replace(/_/g, "-")}`; // Преобразуем snake_case в kebab-case
    root.style.setProperty(cssVarName, themeParams[key]);
  });
}

// Пример использования
if (window.Telegram?.WebApp) {
  const themeParams = window.Telegram.WebApp.themeParams;
  applyTelegramTheme(themeParams);

  // Подписываемся на событие изменения темы
  window.Telegram.WebApp.onEvent("theme_changed", () => {
    const updatedThemeParams = window.Telegram.WebApp.themeParams;
    applyTelegramTheme(updatedThemeParams);
  });
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
