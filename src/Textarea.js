export default class {
  constructor() {
    this.text = [];
    this.element = null;
  }

  render() {
    return `<textarea class='textarea'>${this.text}</textarea>`;
  }

  appendText(text) {
    if (this.element == null) {
      this.element = document.querySelector('.textarea');
    }
    this.text += text;
    this.element.innerHTML = `${this.text}`;
  }

  setText(text) {
    if (this.element == null) {
      this.element = document.querySelector('.textarea');
    }
    this.text = text;
    this.element.innerHTML = `${this.text}`;
  }
}
