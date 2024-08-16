export default eventHandler(async (event) => {
  const id = getRouterParam(event, "userId");
  const record = await useStorage("users").getItem<{
    username: string;
    id: number;
  }>(id);
  if(!record) return html`<span></span>`
  return html`<span> ${record.username} </span>`;
});
