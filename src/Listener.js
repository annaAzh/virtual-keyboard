import OS from './OS';

export default class {
  constructor(keyboard) {
    this.keyboard = keyboard;
    this.os = new OS().getOSType();
  }

  handler() {
    const body = document.querySelector('body');
    body.addEventListener('keydown', (event) => {
      event.preventDefault();
      this.keyboard.onKeyDown(event.code);
      return false;
    });

    body.addEventListener('keyup', (event) => {
      event.preventDefault();
      this.keyboard.onKeyUp(event.code);
      return false;
    });

    const buttons = document.querySelectorAll('.keyboard__button');
    for (let i = 0; i < buttons.length; i += 1) {
      buttons[i].addEventListener('mouseup', (event) => {
        const code = event.target.classList[1].split('-')[2];
        if ((this.os === 'mac') && (code === 'CapsLock')) {
          return;
        }
        this.keyboard.onKeyUp(code);
      });

      buttons[i].addEventListener('mousedown', (event) => {
        this.keyboard.onKeyDown(event.target.classList[1].split('-')[2]);
      });
    }
  }
}
