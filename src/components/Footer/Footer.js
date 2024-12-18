import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import PlusIconButton from "./components/PlusIconButton";
import BackIconButton from "./components/BackIconButton";
import "./Footer.css";

function Footer({ submitHandler, isFormValid }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const goToWelcomePage = () => {
    navigate("/");
  };

  const handleAddRecord = async () => {
    if (isSubmitting) return; // Блокируем повторные клики
    setIsSubmitting(true); // Устанавливаем состояние отправки

    try {
      if (location.pathname === "/add-record") {
        if (submitHandler) {
          await submitHandler(); // Выполняем отправку данных
        }
        goToWelcomePage(); // Возвращаемся на главную страницу
      } else {
        navigate("/add-record"); // Переходим на страницу добавления записи
      }
    } catch (error) {
      console.error("Ошибка отправки данных:", error);
    } finally {
      setIsSubmitting(false); // Сбрасываем состояние отправки
    }
  };

  return (
    <footer className="footer">
      <BackIconButton onClick={goToWelcomePage} />
      <PlusIconButton
        onClick={handleAddRecord}
        isDisabled={
          isSubmitting || (location.pathname === "/add-record" && !isFormValid)
        }
      />
    </footer>
  );
}

export default Footer;
