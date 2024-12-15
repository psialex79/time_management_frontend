import React, { useEffect, useState } from "react";
import "./WelcomePage.css";
import StatusMessage from "./components/StatusMessage";
import RecordsList from "./components/RecordsList";
import IconButton from "./components/IconButton"; // Импортируем компонент иконки
import Modal from "../Modal/Modal"; // Импортируем модальное окно

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
  const hasNoRecords = !postAuthResponse || postAuthResponse.length === 0;

  console.log("postAuthResponse:", postAuthResponse);
  console.log("hasNoRecords:", hasNoRecords);

  return (
    <div className="welcome-container">
      {isLoading ? <StatusMessage message="Загрузка..." /> : null}

      {/* Если записи присутствуют, отображаем их */}
      {postAuthResponse && postAuthResponse.length > 0 ? (
        <RecordsList records={postAuthResponse} />
      ) : null}

      {/* Отображаем иконку в правом нижнем углу */}
      <IconButton
        onClick={openModal}
        extraClass={hasNoRecords ? "glowing-button" : ""}
      />

      {/* Модальное окно */}
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default WelcomePage;
