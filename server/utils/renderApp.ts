export async function renderApp(App) {
  return (
    `<!DOCTYPE html>` +
    html`
      <html>
        <head>
          <script
            defer
            src="https://cdn.jsdelivr.net/npm/@imacrayon/alpine-ajax@0.8.0/dist/cdn.min.js"
          ></script>
          <script
            defer
            src="https://cdn.jsdelivr.net/npm/alpinejs@3.11.1/dist/cdn.min.js"
          ></script>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css"
          />
        </head>
        <body>
          <${App} />
        </body>
      </html>
    `
  );
}
