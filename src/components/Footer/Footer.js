import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import PlusIconButton from "./components/PlusIconButton";
import BackIconButton from "./components/BackIconButton";
import "./Footer.css";

function Footer({ submitHandler, isFormValid }) {
  const navigate = useNavigate();
  const location = useLocation();

  const goToWelcomePage = () => {
    navigate("/");
  };

  const handleAddRecord = async () => {
    if (location.pathname === "/add-record") {
      if (submitHandler) {
        await submitHandler();
      }
      goToWelcomePage();
    } else {
      navigate("/add-record");
    }
  };

  return (
    <footer className="footer">
      <BackIconButton onClick={goToWelcomePage} />
      <PlusIconButton
        onClick={handleAddRecord}
        isDisabled={location.pathname === "/add-record" && !isFormValid}
      />
    </footer>
  );
}

export default Footer;
