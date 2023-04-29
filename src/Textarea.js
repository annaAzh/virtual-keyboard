export default class {
  constructor() {
    this.text = [];
  }

  render() {
    return `<textarea class='textarea'>${this.text}</textarea>`;
  }
}
