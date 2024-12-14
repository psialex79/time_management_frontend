export async function sendInitDataToBackend(initData) {
  const backendUrl = "https://e1df-49-237-17-185.ngrok-free.app/authorize";

  try {
    const response = await fetch(backendUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ initData }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Ошибка API: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Ошибка при отправке initData на бэкенд:", error);
    return null;
  }
}
