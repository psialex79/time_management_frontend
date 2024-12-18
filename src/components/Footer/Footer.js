import React from "react";
import { useNavigate } from "react-router-dom";
import PlusIconButton from "./components/PlusIconButton";
import BackIconButton from "./components/BackIconButton";
import "./Footer.css";

function Footer() {
  const navigate = useNavigate();

  const addRecord = () => {
    navigate("/add-record");
  };

  const goToWelcomePage = () => {
    navigate("/");
  };

  return (
    <footer className="footer">
      <BackIconButton onClick={goToWelcomePage} />
      <PlusIconButton onClick={addRecord} />
    </footer>
  );
}

export default Footer;
