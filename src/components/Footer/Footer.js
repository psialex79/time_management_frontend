import React, { useState } from "react";
import IconButton from "../WelcomePage/components/IconButton";
import Modal from "../Modal/Modal";
import "./Footer.css";

function Footer({ addNewRecord }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <footer className="footer">
      <IconButton onClick={openModal} />

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        onRecordAdded={addNewRecord} // Передаём функцию добавления записи
      />
    </footer>
  );
}

export default Footer;
