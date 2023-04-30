import Key from './Key.js';
import Data from './Data.js';

export default class {
  constructor() {
    this.keys = [];

    for (let i = 0; i < Data.length; i += 1) {
      const row = [];
      for (let j = 0; j < Data[i].length; j += 1) {
        const key = new Key(Data[i][j]);
        row.push(key);
      }
      this.keys.push(row);
    }
  }

  render() {
    let innerHTML = '';
    for (let i = 0; i < this.keys.length; i += 1) {
      innerHTML += this.renderRow(i);
    }
    return `<div class="keyboard__inner">${innerHTML}</div>`;
  }

  renderRow(i) {
    let innerHTML = '';
    for (let j = 0; j < this.keys[i].length; j += 1) {
      innerHTML += this.keys[i][j].render();
    }
    return `<div class="keyboard__row">${innerHTML}</div>`;
  }
}
