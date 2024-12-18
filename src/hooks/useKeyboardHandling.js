import { useEffect } from "react";

function useKeyboardHandling() {
  useEffect(() => {
    const modalContainer = document.querySelector(".modal-container");

    // Функция для корректировки высоты модального окна при появлении клавиатуры
    const handleResize = () => {
      const viewportHeight = window.innerHeight;
      const fullHeight = document.documentElement.clientHeight;

      // Если клавиатура открыта, сдвигаем модальное окно
      if (viewportHeight < fullHeight) {
        const keyboardHeight = fullHeight - viewportHeight;
        modalContainer.style.transform = `translateY(-${keyboardHeight}px)`;
      } else {
        // Если клавиатура закрыта, восстанавливаем положение окна
        modalContainer.style.transform = "translateY(0)";
      }
    };

    // Добавляем обработчик на изменение размера окна
    window.addEventListener("resize", handleResize);

    // Убираем обработчик при размонтировании компонента
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
}

export default useKeyboardHandling;
