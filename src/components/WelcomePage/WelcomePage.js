import React from "react";
import "./WelcomePage.css";
import RecordsList from "./components/RecordsList";

function WelcomePage({ backendResponse }) {
  const { postAuthResponse } = backendResponse || {};

  return (
    <div className="welcome-container">
      {postAuthResponse && postAuthResponse.length > 0 ? (
        <RecordsList records={postAuthResponse} />
      ) : (
        <p className="free-today-message">Сегодня вы свободны!</p>
      )}
    </div>
  );
}

export default WelcomePage;
