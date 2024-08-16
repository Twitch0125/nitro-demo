export function useUserId() {
  const event = useEvent();
  const userId = getCookie(event, "user");
  return Number(userId);
}
