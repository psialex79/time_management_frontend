export async function updateRecord(recordData) {
  const backendUrl = "https://e1df-49-237-17-185.ngrok-free.app/updateMeeting";

  try {
    const response = await fetch(backendUrl, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recordData),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Ошибка API: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Ошибка при обновлении записи на бэкенде:", error);
    return null;
  }
}
