
export default eventHandler(async (event) => {
  const body = await readBody(event);
  const userId = useUserId(event);
  if (!userId) return ``;
  const commentsStorage = useStorage("comments");
  await commentsStorage.setItem(`${Date.now()}`, {
    text: body.text,
    userId: userId,
  });
  commentsEmitter.emit(body.text)
  return await $fetch("/comments", {headers: getHeaders(event)});
});
