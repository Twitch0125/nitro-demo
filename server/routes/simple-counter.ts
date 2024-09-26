export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const stream = createEventStream(event);
  let count = 0;
  const getPayload = () => ({
    event: "datastar-fragment",
    data: `fragment ${html`<button id=${query.id}>count: ${count}</button>`}\ndata: selector #${query.id}\ndata: merge outer_element`,
  })
  const interval = setInterval(() => {
    count++;
    stream.push(getPayload());
  }, 100);
  stream.onClosed(() => clearInterval(interval));
  stream.push(getPayload());
  return stream.send();
});
