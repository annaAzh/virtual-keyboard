export default class {
  constructor({ code, shiftChange }) {
    this.code = code;
    this.shiftChange = shiftChange;
    this.element = null;
  }

  render() {
    const className = `button-code-${this.code}`;
    let innerHTML;
    if (this.shiftChange[4] !== '') {
      innerHTML = this.shiftChange[4];
    } else {
      innerHTML = this.shiftChange[0];
    }
    return `<button class="keyboard__button ${className}">${innerHTML}</button>`;
  }

  update(shift) {
    if (this.element == null) {
      this.element = document.querySelector(`.button-code-${this.code}`);
    }
    this.element.innerHTML = this.shiftChange[4] === '' ? this.shiftChange[shift] : this.shiftChange[4];
  }
}
