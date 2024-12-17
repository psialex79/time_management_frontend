import React, { useEffect, useState } from "react";
import "./WelcomePage.css";
import RecordsList from "./components/RecordsList";

function WelcomePage({ backendResponse }) {
  const [isLoading, setIsLoading] = useState(true);

  const { postAuthResponse } = backendResponse || {};

  useEffect(() => {
    if (backendResponse?.postAuthResponse) {
      setIsLoading(false);
    }
  }, [backendResponse]);

  return (
    <div className="welcome-container">
      {/* Если записи присутствуют, отображаем их */}
      {postAuthResponse && postAuthResponse.length > 0 ? (
        <RecordsList records={postAuthResponse} />
      ) : (
        <p className="free-today-message">Сегодня вы свободны!</p>
      )}
    </div>
  );
}

export default WelcomePage;
