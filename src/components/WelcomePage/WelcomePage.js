import React from "react";
import "./WelcomePage.css";

function WelcomePage({ backendResponse }) {
  return (
    <div className="welcome-container">
      {backendResponse ? (
        <>
          <pre>{JSON.stringify(backendResponse.postAuthResponse, null, 2)}</pre>
        </>
      ) : (
        <p>Загрузка</p>
      )}
    </div>
  );
}

export default WelcomePage;
