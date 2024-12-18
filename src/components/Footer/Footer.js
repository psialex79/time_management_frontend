import React from "react";
import { useNavigate } from "react-router-dom";
import IconButton from "../WelcomePage/components/IconButton";
import "./Footer.css";

function Footer() {
  const navigate = useNavigate();

  const addRecord = () => {
    navigate("/add-record");
  };

  return (
    <footer className="footer">
      <IconButton onClick={addRecord} />
    </footer>
  );
}

export default Footer;
