import React from "react";
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
  } = useForm();

  const onSubmit = async (data) => {
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

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <DateInput
            {...register("date", { required: "Укажите дату." })}
            error={errors.date?.message}
          />
          <TimeInput
            {...register("time", { required: "Укажите время." })}
            error={errors.time?.message}
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
