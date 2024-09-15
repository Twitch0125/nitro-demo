
export default eventHandler(async (event) => {
  const body = await readBody(event);
  const username = body.username;
  const us = useStorage("users");
  const keys = await us.getKeys();
  const id = keys.length + 1;
  await us.setItem(id.toString(), { username, id });
  const user = await useUser(event);
  await user.update({ id: id });
  return sendRedirect(event, "/users");
});
