import { useState, useEffect } from "react";
import { getTelegramInitData } from "../utils/telegramInitData";
import { sendInitDataToBackend } from "../utils/authorize";

export function useFetchInitData() {
  const [backendResponse, setBackendResponse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const data = await getTelegramInitData();
      if (data) {
        try {
          const response = await sendInitDataToBackend(data);
          setBackendResponse(response);
        } catch (error) {
          console.error("Ошибка при отправке данных на бэкенд:", error);
          setBackendResponse(null);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return { backendResponse, loading };
}
