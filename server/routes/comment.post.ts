export default eventHandler(async () => {
  const body = await readBody(useEvent());
  const commentsStorage = useStorage("comments");
  await commentsStorage.setItem(`${Date.now()}`, { text: body.text, user: 1 });
  return await $fetch('/comments');
});
