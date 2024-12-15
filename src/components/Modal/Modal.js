function Modal({ isOpen, onClose }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!date || !time || !name) {
      setError("Пожалуйста, заполните все поля.");
      return;
    }

    setError(""); // Сброс ошибки
    setIsSubmitting(true); // Блокируем кнопку

    onClose(); // Закрываем модальное окно сразу

    const formData = { date, time, name };

    try {
      const initData = await getTelegramInitData();
      if (initData) {
        formData.initData = initData;
      }

      await sendFormData(formData);
      window.location.reload(); // Перезагружаем страницу для обновления данных
    } catch (error) {
      console.error("Ошибка при отправке данных:", error);
    } finally {
      setIsSubmitting(false); // Разблокируем кнопку (если потребуется)
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <form>
          <DateInput value={date} onChange={(e) => setDate(e.target.value)} />
          <TimeInput value={time} onChange={(e) => setTime(e.target.value)} />
          <NameInput value={name} onChange={(e) => setName(e.target.value)} />
        </form>

        {error && <div className="error-message">{error}</div>}

        <div className="modal-buttons-container">
          <button className="modal-close-btn" onClick={onClose}>
            х
          </button>
          <SubmitButton
            onClick={handleSubmit}
            disabled={isSubmitting} // Передаём состояние блокировки
          />
        </div>
      </div>
    </div>
  );
}

export default Modal;
