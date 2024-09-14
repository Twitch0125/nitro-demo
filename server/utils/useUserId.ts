import type { H3Event } from "h3";
export function useUserId(event: H3Event) {
  const userId = getCookie(event, "user");
  return Number(userId);
}
