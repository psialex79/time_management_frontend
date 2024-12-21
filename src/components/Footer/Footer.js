import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import WritingIconButton from "./components/WritingIconButton";
import HomeIconButton from "./components/HomeIconButton";
import CalendarIconButton from "./components/CalendarIconButton";
import "./Footer.css";

function Footer({ submitHandler, isFormValid }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const goToWelcomePage = () => {
    navigate("/");
  };

  const goToCalendarPage = () => {
    navigate("/calendar");
  };

  const handleAddRecord = async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      if (location.pathname === "/add-record") {
        if (submitHandler) {
          await submitHandler();
        }
        goToWelcomePage();
      } else {
        navigate("/add-record");
      }
    } catch (error) {
      console.error("Ошибка отправки данных:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="footer">
      <HomeIconButton onClick={goToWelcomePage} />
      <WritingIconButton
        onClick={handleAddRecord}
        isDisabled={
          isSubmitting || (location.pathname === "/add-record" && !isFormValid)
        }
      />
      <CalendarIconButton onClick={goToCalendarPage} />
    </footer>
  );
}

export default Footer;
