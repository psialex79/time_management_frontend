export async function sendInitDataToBackend(initData) {
  const backendUrl = "https://e1df-49-237-17-185.ngrok-free.app/authorize"; // URL эндпоинта бэкенда

  try {
    const response = await fetch(backendUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ initData }), // Передаём initData в теле запроса
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Ошибка API: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    console.log("Данные от бэкенда:", data);
    return data;
  } catch (error) {
    console.error("Ошибка при отправке initData на бэкенд:", error);
    return null;
  }
}
