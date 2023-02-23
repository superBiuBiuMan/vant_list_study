import type {App} from "vue";
import {
  List,
  Button,
} from "vant";

export default (app:App) => {
  app.use(List);
  app.use(Button);
}
