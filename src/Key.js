export default class {
  constructor({code, shiftChange}) {
    this.code = code;
    this.shiftChange = shiftChange;
    this.element = null;
  }

  render() {
    let className = `button-code-${this.code}`;
    let innerHTML;
    if (this.shiftChange[4] !== '') {
      innerHTML = this.shiftChange[4];
    } else {
      innerHTML = this.shiftChange[0];
    }
    return `<button class="keyboard__button ${className}">${innerHTML}</button>`;
  }
}