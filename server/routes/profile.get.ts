export default eventHandler(async (event) => {
  const { data: user } = await useUser(event);
  if (user?.id == null) return html`<div>No logged in</div>`;
  const { username } = await useStorage("users").getItem(user.id);
  return html` <div id="profile">
    <span class="text-$pico-primary"> ${username} </span>
    <button hx-delete="/profile" hx-target="#profile">Logout</button>
  </div>`;
});
