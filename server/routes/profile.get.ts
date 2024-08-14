export default eventHandler(async (event) => {
  const { userId } = getQuery(event);
  if(!userId) return html`<div>Invalid user</div>`;
  const user = await useStorage("users").getItem(userId);
  return html`<div>
    <span class="text-$pico-primary"> ${user}</span>
  </div>`;
});
