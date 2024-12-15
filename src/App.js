import React, { useEffect, useState } from "react";
import "./styles/App.css";
import AnimatedBox from "./components/AnimatedBox/AnimatedBox";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Modal from "./components/Modal/Modal";
import { getTelegramInitData } from "./utils/telegramInitData";
import { sendInitDataToBackend } from "./utils/authorize";

function App() {
  const [backendResponse, setBackendResponse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false); // Состояние для открытия модального окна

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

  // Функция для открытия модального окна
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  if (loading || !backendResponse) {
    return (
      <div className="app-container">
        <h1 className="app-title">это ТВОЁ время</h1>
        <AnimatedBox />
      </div>
    );
  }

  return (
    <div className="app-container">
      <Header />
      <WelcomePage backendResponse={backendResponse} />
      <Footer openModal={openModal} />{" "}
      {/* Передаем функцию openModal в Footer */}
      <Modal isOpen={isModalOpen} onClose={closeModal} />{" "}
      {/* Управляем модальным окном */}
    </div>
  );
}

export default App;
