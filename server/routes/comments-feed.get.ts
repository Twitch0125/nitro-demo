export default eventHandler((event) => {
  const eventStream = createEventStream(event);
  const unsub = commentsEmitter.subscribe(async () => {
    eventStream.push(await $fetch(`/comments`, { headers: getHeaders(event) }));
  });
  eventStream.onClosed(() => {
    unsub()
    eventStream.close();
  });
  return eventStream.send()
});
