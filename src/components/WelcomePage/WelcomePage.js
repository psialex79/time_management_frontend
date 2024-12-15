import React, { useEffect, useState } from "react";
import "./WelcomePage.css";
import StatusMessage from "./components/StatusMessage";
import RecordsList from "./components/RecordsList";
import Footer from "../Footer/Footer";
import Modal from "../Modal/Modal";

function WelcomePage({ backendResponse }) {
  const [isModalOpen, setIsModalOpen] = useState(false); // Состояние для модального окна
  const [isLoading, setIsLoading] = useState(true);

  const { postAuthResponse } = backendResponse || {};

  // Функции для открытия и закрытия модального окна
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    if (backendResponse?.postAuthResponse) {
      setIsLoading(false);
    }
  }, [backendResponse]);

  // Проверка на наличие записей
  const hasNoRecords =
    !postAuthResponse ||
    (Array.isArray(postAuthResponse) && postAuthResponse.length === 0) ||
    (postAuthResponse.message && typeof postAuthResponse.message === "string");

  return (
    <div className="welcome-container">
      {isLoading ? <StatusMessage message="Загрузка..." /> : null}

      {/* Если записи присутствуют, отображаем их */}
      {postAuthResponse && postAuthResponse.length > 0 ? (
        <RecordsList records={postAuthResponse} />
      ) : null}

      {/* Компонент Footer с кнопкой */}
      <Footer openModal={openModal} hasNoRecords={hasNoRecords} />

      {/* Модальное окно */}
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default WelcomePage;
