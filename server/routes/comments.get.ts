export default eventHandler(async (event) => {
  const userId = useUserId(event);
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
    <div id="comments">
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
      <form name="createComments" hx-post="/comment" hx-target="#comments">
        ${!userId && html`<span> Not logged in, no commenting for you! </span>`}
        <textarea
          disabled=${!userId}
          aria-label="Comment text"
          name="text"
          required
        />
        <button>Submit</button>
      </form>
    </div>
  `;
});
