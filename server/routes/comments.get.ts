export default eventHandler(async () => {
  const cs = useStorage("comments");
  const keys = await cs.getKeys();
  const comments = await Promise.all(
    keys.map(async (key) => {
      const comment = await cs.getItem(key);
      const user = await $fetch(`/userName?userId=${comment.user}`);
      return { key, value: { text: comment.text, user: user } };
    })
  );
  return html`<ul id="comments">
    ${comments.map(
      (c) =>
        html`<${ListItem} text=${c.value.text}>
          <span class="text-xs text-$pico-secondary"> -${c.value.user}</span>
        <//>`
    )}
  </ul>`;
});
