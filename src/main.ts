import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/router.ts";
import bridge from "@vkontakte/vk-bridge";
import { createPinia } from "pinia";

const app = createApp(App);
const pinia = createPinia();
app.use(router);
app.use(pinia);
app.mount("#app");
