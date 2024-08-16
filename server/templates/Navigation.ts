export default (props) => html` <nav class="container max-w-page">
  <ul class="flex gap-4">
    <a href="/">Home</a>
    <a href="/users"> Users </a>
  </ul>
  <ul>
    ${props.children}
  </ul>
</nav>`;
