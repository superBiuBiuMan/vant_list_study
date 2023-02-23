import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Vant from "./util/vant/index";
const app = createApp(App);
app.use(Vant);

app.mount('#app')
