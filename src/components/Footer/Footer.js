import React, { useState } from "react";
import IconButton from "../WelcomePage/components/IconButton";
import Modal from "../Modal/Modal";
import "./Footer.css";

function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <footer className="footer">
      <IconButton onClick={openModal} />
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </footer>
  );
}

export default Footer;
