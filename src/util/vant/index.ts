import type {App} from "vue";
import 'vant/lib/index.css';
import {
  List,
  Button,
  Empty,
  Icon
} from "vant";

export default (app:App) => {
  app.use(List);
  app.use(Button);
  app.use(Empty);
  app.use(Icon);
}
