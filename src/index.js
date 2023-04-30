import Container from './Container.js';
import Textarea from './Textarea.js';
import Subtitle from './Subtitle.js';
import Keyboard from './Keyboard.js';

  const container = new Container();
  const textarea = new Textarea();
  const subtitle = new Subtitle('Made for MACos  ---   change language: option + Cmd');
  const keyboard = new Keyboard();
  
  textarea.render();
  subtitle.render();
  keyboard.render();
  container.pushItem(textarea);
  container.pushItem(subtitle);
  container.pushItem(keyboard);
  container.render();

