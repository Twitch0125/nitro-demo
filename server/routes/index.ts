export default eventHandler(async (event) => {
  const comments = await $fetch("/comments", { headers: getHeaders(event) });
  const Comments = () => html`${comments}`;
  const CounterSignal = (props) => html`<button data-on-click="$$get('/counter-signal')">Counter signal benchmark</button>`;
  const SimpleCounter = (props) => html`<button id=${props.id} data-on-load="$$get('/simple-counter?id=${props.id}')">Simple counter test</button>`;
  return renderApp(
    event,
    () => html`
      <section class="container max-w-page">
        <div data-on-load="$$get('/comments-count')"></div>
        <h1 class="text-$pico-primary">Is it working?</h1>
        <div data-on-load="$$get('/comments-feed')"></div>
        <${Comments} />
        <button data-on-click="$$get('/counter')">
          Start counter benchmark
        </button>
        <h2>counter</h2>
        <ul id="counter">
        </ul>
        ${Array.from({ length: 100 }).map((_, index) => html`<${SimpleCounter} id=${`counter-${index + 1}`} />`)}
      </section>
    `
  );
});
