export default eventHandler(async (event) => {
  const eventStream = createEventStream(event);
  const unsub = commentsEmitter.subscribe(async () => {
    const fragment = await $fetch(`/comments`, { headers: getHeaders(event) });
    let payload = "";
    payload += "data: fragment " + fragment + "\n";
    payload += "data: selector #comments\n";
    payload += "data: merge inner_element\n";
    eventStream.push({
      event: "datastar-fragment",
      data: payload.replace("data: ", "").replace(/\n$/g, ''),
    });
  });
  eventStream.onClosed(() => {
    unsub();
  });

  return eventStream.send();
});
