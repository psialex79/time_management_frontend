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
  const [isOpenClass, setIsOpenClass] = useState(false);
  const [bottomOffset, setBottomOffset] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    watch,
  } = useForm();

  useEffect(() => {
    if (isOpen) {
      setIsOpenClass(true);
    } else {
      setIsOpenClass(false);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      const viewportHeight = window.innerHeight;
      const fullHeight = document.documentElement.clientHeight;

      // Сдвигаем модальное окно вверх, если экранная клавиатура открыта
      if (viewportHeight < fullHeight) {
        setBottomOffset(fullHeight - viewportHeight);
      } else {
        setBottomOffset(0);
      }
    };

    if (isOpen) {
      window.addEventListener("resize", handleResize);
      handleResize(); // Проверяем при открытии модального окна
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
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
    // Закрываем модальное окно, только если клик был по overlay
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div
        className={`modal-container ${isOpenClass ? "open" : ""}`}
        style={{ transform: `translateY(-${bottomOffset}px)` }}
        onClick={(e) => e.stopPropagation()} // Предотвращаем всплытие события
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
