import Container from './Container.js';
import Textarea from './Textarea.js';
import Subtitle from './Subtitle.js';

const container = new Container();
const textarea = new Textarea();
const subtitle = new Subtitle('Made for MACos *** change language: option + Cmd');

textarea.render();
subtitle.render();

container.pushItem(textarea);
container.pushItem(subtitle);

container.render();
