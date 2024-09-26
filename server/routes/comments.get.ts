export default eventHandler(async (event) => {
  const { data: user } = await useUser(event);
  const cs = useStorage("comments");
  const keys = await cs.getKeys();
  const comments = await Promise.all(
    keys.map(async (key) => {
      const comment = await cs.getItem(key);
      const user = await $fetch(`/users/${comment.userId}`);
      return { key, value: { text: comment.text, user: user } };
    })
  );
  return html`
    <div data-store="{text: ''}" id="comments">
      <ul>
        ${comments.map(
          (c) =>
            html`<${ListItem} text=${c.value.text}>
              <span class="text-xs text-$pico-secondary">
                -${c.value.user}</span
              >
            <//>`
        )}
      </ul>
      <form data-on-submit="event.preventDefault();$$post('/comment'); $text = ''"   name="createComments">
        ${!user.id &&
        html`<span> Not logged in, no commenting for you! </span>`}
        <textarea
          disabled=${!user.id}
          aria-label="Comment text"
          name="text"
          required
          data-model="text"
        />
        <button>Submit</button>
      </form>
    </div>
  `;
});
