import type { H3Event } from "h3";
export async function useUser(event: H3Event) {
  const session = await useSession<{ id?: number }>(event, {
    password: useRuntimeConfig().authPassword,
  });
  return session;
}
export async function requireUser(event: H3Event) {
  const user = await useUser(event);
  if (!user?.data.id == null) return createError({ message: "Unauthorized", status: 401 });
  return user;
}
