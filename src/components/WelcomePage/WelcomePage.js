import React, { useState } from "react";
import "./WelcomePage.css";
import RecordsList from "./components/RecordsList";
import Footer from "../Footer/Footer";

function WelcomePage({ initialRecords }) {
  const [records, setRecords] = useState(initialRecords || []); // Состояние записей

  // Функция для добавления новой записи
  const addNewRecord = (newRecord) => {
    setRecords((prevRecords) => [...prevRecords, newRecord]);
  };

  return (
    <div className="welcome-container">
      {records.length > 0 ? (
        <RecordsList records={records} />
      ) : (
        <p className="free-today-message">Сегодня вы свободны!</p>
      )}
      <Footer addNewRecord={addNewRecord} />
    </div>
  );
}

export default WelcomePage;
