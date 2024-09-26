export default defineEventHandler(async (event) => {
  const cs = useStorage("comments");
  const stream = createEventStream(event);
  const unsub = commentsEmitter.subscribe(async () => {
    const keys = await cs.getKeys();
    stream.push({
      event: "datastar-fragment",
      data: 'fragment ' + html`<div>total comments: ${keys.length.toString()}</div>`,
    });
  });
  stream.onClosed(() => {
    unsub();
  });
  return stream.send();
});
