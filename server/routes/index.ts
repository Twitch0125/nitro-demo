export default eventHandler(async () => {
  const comments = await $fetch("/comments");
  const Comments = () => html`${comments}`
  return renderApp(() => html`
    <section class="container max-w-[60ch]">
      <h1>JSX working?</h1>
      <${Comments} />
      <form name="createComments" x-init x-target="comments" method="post" action="/comment" @ajax:success="document.forms.createComments.reset()">
        <textarea aria-label="Comment text" name="text" required />
        <button>Submit</button>
      </form>
    </section>
  `);
});
