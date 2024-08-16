export default eventHandler(() => {
  return renderApp(() => html`
    <section class="container max-w-page">
      <form action="/users" method="post">
        <label>
          Username
          <input name="username" />
        </label>
        <button>Submit</button>
      </form>
    </section>
  `);
});
