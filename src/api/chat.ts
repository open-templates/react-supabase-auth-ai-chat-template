import { API_BASE_URL, apiFetch } from "@/api/api";

export interface ChatCompletionResponse {
  message: string;
  reply: string;
  model: string;
}

export async function sendChatMessage(message: string): Promise<{
  data?: ChatCompletionResponse;
  error?: string;
}> {
  const url = new URL("/chat", API_BASE_URL);
  return apiFetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message }),
  });
}
