import React, { useEffect, useState } from "react";
import "./WelcomePage.css";
import StatusMessage from "./components/StatusMessage";
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
      {isLoading ? <StatusMessage message="Загрузка..." /> : null}

      {/* Если записи присутствуют, отображаем их */}
      {postAuthResponse && postAuthResponse.length > 0 ? (
        <RecordsList records={postAuthResponse} />
      ) : null}
    </div>
  );
}

export default WelcomePage;
