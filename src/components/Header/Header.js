import React from "react";
import "./Header.css";
import DateTimeDisplay from "./DateTimeDisplay/DateTimeDisplay";

function Header() {
  return (
    <header className="header">
      <DateTimeDisplay />
    </header>
  );
}

export default Header;
