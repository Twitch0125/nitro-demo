function go(mutate) {
  return new Promise((resolve) => {
    let iter = 0;
    let interval = setInterval(() => {
      iter++;
      mutate();
      if (iter === 100) {
        clearInterval(interval);
        resolve();
      }
    }, 1000);
  });
}
const token = () => Math.random().toString(36).substring(2, 10);
const list = [];
for (let i = 0; i < 500; i++) {
  list.push({ name: token(), id: crypto.randomUUID() });
}
const listData = list;

export default defineEventHandler((event) => {
  const fragment = html`<ul
    data-store="{ renders: 0, items: ${JSON.stringify(listData)} }"
    id="counter"
  >
    ${listData.map(
      (_, index) =>
        html`<li
          data-on-store-change="$items[${index}].name= Math.random().toString(36).substring(2, 10);"
          data-text="$items[${index}].name"
        ></li>`
    )}
  </ul>`;
  const stream = createEventStream(event);
  stream.push({
    event: "datastar-fragment",
    data: `fragment ${fragment}`,
  });
  function mutate() {
    listData.forEach((item, i) => {
        stream.push({
          event: "datastar-signal",
          data: `{renders: ${i+1}}`,
        });
    });
  }
  console.time("benchmark");
  go(mutate).then(() => {
    console.timeEnd("benchmark");
  });
  return stream.send();
});
