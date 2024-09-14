import type { H3Event } from "h3";
export async function renderApp(event: H3Event, App: () => string | string[]) {
  const userId = useUserId(event);
  const profile = await $fetch("/users/" + userId, {
    headers: getHeaders(event),
  });
  const Profile = () => html`${profile}`;
  return (
    `<!DOCTYPE html>` +
    html`
      <html>
        <head>
          <!-- HTMX -->
          <script
            src="https://unpkg.com/htmx.org@2.0.2"
            integrity="sha384-Y7hw+L/jvKeWIRRkqWYfPcvVxHzVzn5REgzbawhxAuQGwX1XWe70vji+VSeHOThJ"
            crossorigin="anonymous"
          ></script>
          <!-- HTMX Server Sent Events (SSE) extension -->
          <script src="https://unpkg.com/htmx-ext-sse@2.2.2/sse.js"></script>
          <script src="https://unpkg.com/idiomorph/dist/idiomorph-ext.min.js"></script>
          <link rel="stylesheet" href="css/uno.css" />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css"
          />
        </head>
        <body hx-ext="morph" hx-ext="sse">
          <${Navigation}> <${Profile} /> <//>
          <${App} />
        </body>
      </html>
    `
  );
}
