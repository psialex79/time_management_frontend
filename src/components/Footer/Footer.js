import React from "react";
import { useNavigate } from "react-router-dom";
import PlusIconButton from "./components/PlusIconButton";
import BackIconButton from "./components/BackIconButton";
import "./Footer.css";

function Footer({ submitHandler }) {
  const navigate = useNavigate();

  const goToWelcomePage = () => {
    navigate("/");
  };

  const handleAddRecord = async () => {
    if (submitHandler) {
      await submitHandler();
    }
    goToWelcomePage();
  };

  return (
    <footer className="footer">
      <BackIconButton onClick={goToWelcomePage} />
      <PlusIconButton onClick={handleAddRecord} />
    </footer>
  );
}

export default Footer;
