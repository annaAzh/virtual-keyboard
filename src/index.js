import Container from './Container.js';
import Textarea from './Textarea.js';
import Subtitle from './Subtitle.js';
import Keyboard from './Keyboard.js';

const text = 'Made for MAC  ---   change language: option + control';
const container = new Container();
const textarea = new Textarea();
const subtitle = new Subtitle(text);
const keyboard = new Keyboard(textarea);
textarea.render();
subtitle.render();
keyboard.render();
container.pushItem(textarea);
container.pushItem(subtitle);
container.pushItem(keyboard);
container.render();
keyboard.init();
