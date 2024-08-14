export default eventHandler(async (event) => {
  const { userId: id } = getQuery(event);
  const us = useStorage("users");
  const user = await us.getItem<string>(id);
  return html`<span> ${user} </span>`;
});
