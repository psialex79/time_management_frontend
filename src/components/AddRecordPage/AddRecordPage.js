import React from "react";
import "./AddRecordPage.css";
import DateInput from "./components/DateInput";
import TimeInput from "./components/TimeInput";
import NameInput from "./components/NameInput";
import SubmitButton from "./components/SubmitButton";
import { useForm } from "react-hook-form";
import { sendFormData } from "../../utils/newMeeting";
import { getTelegramInitData } from "../../utils/telegramInitData";

function AddRecordPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    watch,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const initData = await getTelegramInitData();
      if (initData) {
        data.initData = initData;
      }
      await sendFormData(data);
      window.history.back();
    } catch (error) {
      console.error("Ошибка при отправке данных:", error);
    }
  };

  return (
    <div className="main-container">
      <div className="add-record-page">
        <form onSubmit={handleSubmit(onSubmit)} className="add-record-form">
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
          <div className="buttons-container">
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

export default AddRecordPage;
