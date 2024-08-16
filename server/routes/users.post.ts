export default eventHandler(async (event) => {
  const body = await readBody(event);
  const username = body.username;
  const us = useStorage("users");
  const keys = await us.getKeys();
  const id = keys.length + 1;
  await us.setItem(id.toString(), { username, id });
  setCookie(event, "user", id.toString());
  return sendRedirect(event, '/users')
});
