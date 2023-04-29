export default class {
  constructor(text) {
    this.text = text;
  }

  render() {
    return `<p class='subtitle'>${this.text}</p>`;
  }
}
