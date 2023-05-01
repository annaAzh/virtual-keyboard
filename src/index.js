import Container from './Container';
import Textarea from './Textarea';
import Subtitle from './Subtitle';
import Keyboard from './Keyboard';
import './style.css';

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
