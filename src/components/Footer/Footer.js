import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import PlusIconButton from "./components/PlusIconButton";
import BackIconButton from "./components/BackIconButton";
import "./Footer.css";

function Footer({ submitHandler }) {
  const navigate = useNavigate();
  const location = useLocation(); // Определяем текущий путь

  const goToWelcomePage = () => {
    navigate("/");
  };

  const handleAddRecord = async () => {
    if (location.pathname === "/add-record") {
      // Если мы на странице добавления записи
      if (submitHandler) {
        await submitHandler(); // Выполняем отправку данных
      }
      goToWelcomePage(); // Возвращаемся на главную страницу
    } else {
      // Если мы на главной странице
      navigate("/add-record"); // Переходим на страницу добавления записи
    }
  };

  return (
    <footer className="footer">
      <BackIconButton onClick={goToWelcomePage} />
      <PlusIconButton onClick={handleAddRecord} />
    </footer>
  );
}

export default Footer;
