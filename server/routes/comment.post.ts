export default eventHandler(async (event) => {
  const body = await readBody(useEvent());
  const userId = useUserId();
  if (!userId) return ``;
  const commentsStorage = useStorage("comments");
  await commentsStorage.setItem(`${Date.now()}`, {
    text: body.text,
    userId: userId,
  });
  return await $fetch("/comments");
});
