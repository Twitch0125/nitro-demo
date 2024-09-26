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
    }, 0);
  });
}
const token = () => Math.random().toString(36).substring(2, 10);
const list = [];
for (let i = 0; i < 500; i++) {
  list.push({ name: token(), id: crypto.randomUUID() });
}
const listData = list;

export default defineEventHandler((event) => {
  const stream = createEventStream(event);
  function mutate() {
    listData.forEach((item) => {
      setTimeout(() => {
        item.name = token();
        stream.push({
            event: 'datastar-fragment',
            data: `fragment ${html`<ul id="counter"> ${listData.map( item => html`<li>${item.name}</li>`)} </ul>`}\n`+
            'data: selector #counter\n' +
            'data: merge outer_element\n' +
            'data: vt false',
        })
      }, 0);
    });
  }
  console.time('benchmark')
  go(mutate).then(() => {
    console.timeEnd('benchmark')
  })
  return stream.send();
});
