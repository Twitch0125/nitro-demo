export default function ListItem(props: { text: string }) {
  return html`<li data-item=${props.text}>${props.text} ${props.children}</li>`;
}
