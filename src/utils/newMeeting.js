export async function sendFormData(formData) {
  const backendUrl = "https://e1df-49-237-17-185.ngrok-free.app/newMeeting"; // Укажите правильный URL для вашего бэкенда

  try {
    const response = await fetch(backendUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData), // Отправляем данные формы
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Ошибка API: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    return data; // Возвращаем данные ответа от сервера
  } catch (error) {
    console.error("Ошибка при отправке данных формы на бэкенд:", error);
    return null;
  }
}
