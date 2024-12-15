import React, { useEffect, useState } from "react";
import "./styles/App.css";
import AnimatedBox from "./components/AnimatedBox/AnimatedBox";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import Header from "./components/Header/Header"; // Импортируем Header
import Footer from "./components/Footer/Footer"; // Импортируем Footer
import { getTelegramInitData } from "./utils/telegramInitData";
import { sendInitDataToBackend } from "./utils/authorize";

function App() {
  const [backendResponse, setBackendResponse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAndSendInitData() {
      const data = await getTelegramInitData();
      if (data) {
        try {
          const response = await sendInitDataToBackend(data);
          setBackendResponse(response);
        } catch (error) {
          console.error("Ошибка при отправке данных на бэкенд:", error);
          setBackendResponse(null);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    }

    fetchAndSendInitData();
  }, []);

  if (loading || !backendResponse) {
    return (
      <div className="app-container">
        <Header />
        <h1 className="app-title">это ТВОЁ время</h1>
        <AnimatedBox />
        <Footer />
      </div>
    );
  }

  return (
    <div className="app-container">
      <Header />
      <WelcomePage backendResponse={backendResponse} />
      <Footer />
    </div>
  );
}

export default App;
