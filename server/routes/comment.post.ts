export default eventHandler(async (event) => {
  const { data: user } = await requireUser(event);
  const body = await readBody(event);
  const commentsStorage = useStorage("comments");
  await commentsStorage.setItem(`${Date.now()}`, {
    text: body.text,
    userId: user.id,
  });
  commentsEmitter.emit(body.text);
  const stream = createEventStream(event); 
  return stream.send();
});
