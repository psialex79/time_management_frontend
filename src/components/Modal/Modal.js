import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import DateInput from "./components/DateInput";
import TimeInput from "./components/TimeInput";
import NameInput from "./components/NameInput";
import SubmitButton from "./components/SubmitButton";
import { sendFormData } from "../../utils/newMeeting";
import { getTelegramInitData } from "../../utils/telegramInitData";
import "./Modal.css";

function Modal({ isOpen, onClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    watch,
  } = useForm();

  const [isModalVisible, setIsModalVisible] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setIsModalVisible(true);
    } else {
      setTimeout(() => setIsModalVisible(false), 300);
    }
  }, [isOpen]);

  const onSubmit = async (data) => {
    onClose();

    try {
      const initData = await getTelegramInitData();
      if (initData) {
        data.initData = initData;
      }
      await sendFormData(data);
    } catch (error) {
      console.error("Ошибка при отправке данных:", error);
    }
  };

  return (
    <div className={`modal-overlay ${isModalVisible ? "open" : ""}`}>
      <div className={`modal-container ${isModalVisible ? "open" : ""}`}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DateInput
            {...register("date", { required: "Укажите дату." })}
            error={errors.date?.message}
            value={watch("date")}
            onChange={(e) => setValue("date", e.target.value)}
          />
          <TimeInput
            {...register("time", { required: "Укажите время." })}
            error={errors.time?.message}
            value={watch("time")}
            onChange={(e) => setValue("time", e.target.value)}
          />
          <NameInput
            {...register("name", { required: "Укажите описание." })}
            error={errors.name?.message}
          />

          <div className="modal-buttons-container">
            <button className="modal-close-btn" type="button" onClick={onClose}>
              ✕
            </button>
            <SubmitButton type="submit" disabled={isSubmitting} />
          </div>
        </form>

        {Object.keys(errors).length > 0 && (
          <div className="error-message">
            Пожалуйста, исправьте ошибки в форме.
          </div>
        )}
      </div>
    </div>
  );
}

export default Modal;
