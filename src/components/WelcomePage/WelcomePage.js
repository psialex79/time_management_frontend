import React, { useState } from "react";
import "./WelcomePage.css";
import StatusMessage from "./components/StatusMessage";
import RecordsList from "./components/RecordsList";
import IconButton from "./components/IconButton"; // Импортируем компонент иконки
import Modal from "../Modal/Modal"; // Импортируем модальное окно

function WelcomePage({ backendResponse }) {
  const [isModalOpen, setIsModalOpen] = useState(false); // Состояние для модального окна

  const { message, records } = backendResponse?.postAuthResponse || {};

  // Функции для открытия и закрытия модального окна
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="welcome-container">
      {message ? (
        // Если сообщение "Записи отсутствуют", отображаем сообщение
        <StatusMessage message={message} />
      ) : (
        <StatusMessage message="Загрузка..." />
      )}

      {/* Если записи присутствуют, отображаем их */}
      {records && records.length > 0 ? <RecordsList records={records} /> : null}

      {/* Отображаем иконку в правом нижнем углу */}
      <IconButton onClick={openModal} />

      {/* Модальное окно */}
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default WelcomePage;
