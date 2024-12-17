import React from "react";
import "./WelcomePage.css";
import RecordsList from "./components/RecordsList";
import Footer from "../Footer/Footer";

function WelcomePage({ initialRecords }) {
  return (
    <div className="welcome-container">
      {initialRecords.length > 0 ? (
        <RecordsList records={initialRecords} />
      ) : (
        <p className="free-today-message">Сегодня вы свободны!</p>
      )}
    </div>
  );
}

export default WelcomePage;
