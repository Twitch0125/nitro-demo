export default eventHandler(async (event) => {
  const comments = await $fetch("/comments", { headers: getHeaders(event) });
  const Comments = () => html`${comments}`;

  return renderApp(event,
    () => html`
      <section class="container max-w-page">
        <h1 class="text-$pico-primary">Is it working?</h1>
        <${Comments} />
      </section>
    `
  );
});
