import React from "react";
import "./WelcomePage.css";
import RecordsList from "./components/RecordsList";
import AddRecordMessage from "./components/AddRecordMessage/AddRecordMessage";

function WelcomePage({ initialRecords }) {
  return (
    <div className="main-container">
      {initialRecords.length > 0 ? (
        <RecordsList records={initialRecords} />
      ) : (
        <AddRecordMessage />
      )}
    </div>
  );
}

export default WelcomePage;
