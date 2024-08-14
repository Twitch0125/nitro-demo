export default eventHandler(async () => {
  const comments = await $fetch("/comments");
  const Comments = () => html`${comments}`
  const profile = await $fetch("/profile?userId=1");
  const Profile = () => html`${profile}`
  return renderApp(() => html`
    <section class="container max-w-60ch">
      <nav>
        <a href="/">Home</a>
        <${Profile} />
      </nav>
      <h1 class="text-$pico-primary">JSX working?</h1>
      <${Comments} />
      <form name="createComments" x-init x-target="comments" method="post" action="/comment" @ajax:success="document.forms.createComments.reset()">
        <textarea aria-label="Comment text" name="text" required />
        <button>Submit</button>
      </form>
    </section>
  `);
});
