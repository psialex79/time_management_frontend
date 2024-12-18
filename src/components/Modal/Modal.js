import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import DateInput from "./components/DateInput";
import TimeInput from "./components/TimeInput";
import NameInput from "./components/NameInput";
import SubmitButton from "./components/SubmitButton";
import { sendFormData } from "../../utils/newMeeting";
import { getTelegramInitData } from "../../utils/telegramInitData";
import useKeyboardHandling from "../../hooks/useKeyboardHandling";
import "./Modal.css";

function Modal({ isOpen, onClose }) {
  const [isOpenClass, setIsOpenClass] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    watch,
  } = useForm();

  useKeyboardHandling();

  useEffect(() => {
    if (isOpen) {
      setIsOpenClass(true);
    } else {
      setIsOpenClass(false);
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

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div
        className={`modal-container ${isOpenClass ? "open" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
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
