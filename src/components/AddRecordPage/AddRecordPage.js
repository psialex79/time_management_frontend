import React, { useRef, useState } from "react";
import "./AddRecordPage.css";
import DateInput from "./components/DateInput";
import TimeInput from "./components/TimeInput";
import NameInput from "./components/NameInput";
import Hint from "./components/Hint";
import { useForm } from "react-hook-form";
import { sendFormData } from "../../utils/newMeeting";
import { getTelegramInitData } from "../../utils/telegramInitData";

function AddRecordPage({ setSubmitHandler, setFormValid }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const initData = await getTelegramInitData();
      if (initData) {
        data.initData = initData;
      }
      await sendFormData(data);
    } catch (error) {
      console.error("Ошибка при отправке данных:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const formRef = useRef(null);

  const formValues = watch();
  React.useEffect(() => {
    const isFormValid =
      formValues.date &&
      formValues.time &&
      formValues.name &&
      Object.keys(errors).length === 0;
    setFormValid(isFormValid);
  }, [formValues, errors, setFormValid]);

  React.useEffect(() => {
    if (setSubmitHandler) {
      setSubmitHandler(() => handleSubmit(onSubmit));
    }
  }, [setSubmitHandler, handleSubmit]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  return (
    <div className="main-container">
      <div className="add-record-page">
        <form
          ref={formRef}
          className="add-record-form"
          onKeyDown={handleKeyDown}
        >
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
        </form>

        {Object.keys(errors).length > 0 && (
          <div className="error-message">
            Пожалуйста, исправьте ошибки в форме.
          </div>
        )}

        <Hint isSubmitting={isSubmitting} />
      </div>
    </div>
  );
}

export default AddRecordPage;
