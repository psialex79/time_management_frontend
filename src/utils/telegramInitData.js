export async function getTelegramInitData() {
  try {
    if (!window.Telegram || !window.Telegram.WebApp) {
      throw new Error("Telegram WebApp API не доступен.");
    }

    const initData = window.Telegram.WebApp.initData;
    if (!initData) {
      throw new Error("initData отсутствует.");
    }

    return initData;
  } catch (error) {
    console.error("Ошибка извлечения initData:", error);
    return null;
  }
}
