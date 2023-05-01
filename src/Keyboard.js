import Key from './Key';
import Data from './Data';
import OS from './OS';
import Listener from './Listener';
import Storage from './Storage';

export default class {
  constructor(textarea, element) {
    this.keys = [];
    this.textarea = textarea;
    this.element = element;
    this.storage = new Storage();
    this.os = new OS().getOSType();
    this.shift = parseInt(this.storage.get('shift', 0), 10);
    this.lang = parseInt(this.storage.get('lang', 0), 10);
    this.controlLeftFlag = false;
    this.shiftFlag = false;

    for (let i = 0; i < Data.length; i += 1) {
      const row = [];
      for (let j = 0; j < Data[i].length; j += 1) {
        const key = new Key(Data[i][j]);
        row.push(key);
      }
      this.keys.push(row);
    }
  }

  init() {
    this.update();
    this.updateCapsState();
    this.listener = new Listener(this);
    this.listener.handler();
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

  update() {
    for (let i = 0; i < this.keys.length; i += 1) {
      for (let j = 0; j < this.keys[i].length; j += 1) {
        this.keys[i][j].update(this.lang + this.shift);
      }
    }

    this.storage.set('shift', this.shift);
    this.storage.set('lang', this.lang);
  }

  updateCapsState() {
    const key = this.findKey('CapsLock');
    if (this.shift) {
      key.element.classList.add('keyboard__button-active');
    } else {
      key.element.classList.remove('keyboard__button-active');
    }
    this.update();
  }

  findKey(code) {
    for (let i = 0; i < this.keys.length; i += 1) {
      for (let j = 0; j < this.keys[i].length; j += 1) {
        if (this.keys[i][j].code === code) {
          return this.keys[i][j];
        }
      }
    }
    return null;
  }

  onKeyDown(code) {
    const key = this.findKey(code);
    key.element.classList.add('keyboard__button-active');

    if (code.toString().includes('ShiftLeft') || (code.toString().includes('ShiftRight'))) {
      if (this.shiftFlag === false) {
        this.shiftFlag = true;
        this.shift = this.shift ? 0 : 1;
        this.update();
      }
      return;
    }

    if (code.toString().includes('Backspace')) {
      this.textarea.setText(this.textarea.text.slice(0, this.textarea.text.length - 1));
      return;
    }

    if (code.toString().includes('CapsLock')) {
      this.shift = this.shift ? 0 : 1;
      this.updateCapsState();
      return;
    }

    if (code.toString().includes('ControlLeft')) {
      this.controlLeftFlag = true;
      return;
    }

    if (code.toString().includes('AltLeft')) {
      if (this.controlLeftFlag) {
        this.lang = this.lang === 0 ? 2 : 0;
        this.update();
        return;
      }
    }

    this.textarea.appendText(key.shiftChange[this.lang + this.shift]);
  }

  onKeyUp(code) {
    const key = this.findKey(code);

    if (code.toString().includes('CapsLock')) {
      if (this.os === 'mac') {
        this.shift = this.shift ? 0 : 1;
        this.updateCapsState();
      }
      return;
    }

    key.element.classList.remove('keyboard__button-active');

    if (code.toString().includes('ShiftLeft') || (code.toString().includes('ShiftRight'))) {
      if (this.shiftFlag === true) {
        this.shiftFlag = false;
        this.shift = this.shift ? 0 : 1;
        this.update();
      }
    }

    if (code.toString().includes('ControlLeft')) {
      this.controlLeftFlag = false;
    }
  }
}
