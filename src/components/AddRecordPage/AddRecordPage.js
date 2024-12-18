import React from "react";
import Modal from "../Modal/Modal";

function AddRecordPage() {
  const closeModal = () => {
    window.history.back();
  };

  return (
    <div className="AddRecordPage-page">
      <Modal isOpen={true} onClose={closeModal} />
    </div>
  );
}

export default AddRecordPage;
