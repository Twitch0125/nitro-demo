export default eventHandler(async (event) => {
  const user = await useUser(event);
  await user.clear();
  return await $fetch('/profile');
});
