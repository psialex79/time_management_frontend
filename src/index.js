import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

function applyTelegramTheme(themeParams) {
  const root = document.documentElement;

  if (!themeParams) return;

  Object.keys(themeParams).forEach((key) => {
    const cssVarName = `--${key.replace(/_/g, "-")}`;
    root.style.setProperty(cssVarName, themeParams[key]);
  });
}

if (window.Telegram?.WebApp) {
  const themeParams = window.Telegram.WebApp.themeParams;
  applyTelegramTheme(themeParams);

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
