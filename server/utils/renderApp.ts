import type { H3Event } from "h3";
export async function renderApp(event: H3Event, App: () => string | string[]) {
  const profile = await $fetch("/profile", {
    headers: getHeaders(event),
  });
  const Profile = () => html`${profile}`;
  return (
    `<!DOCTYPE html>` +
    html`
      <html>
        <head>
          <!-- Datastar -->
          <script
            type="module"
            defer
            src="https://cdn.jsdelivr.net/npm/@sudodevnull/datastar"
          ></script>
          <link rel="stylesheet" href="css/uno.css" />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css"
          />
        </head>
        <body>
          <${Navigation}> <${Profile} /> <//>
          <${App} />
        </body>
      </html>
    `
  );
}
