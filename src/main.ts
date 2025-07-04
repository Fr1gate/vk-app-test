import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/router.ts";
import bridge from "@vkontakte/vk-bridge";

bridge.send("VKWebAppInit").then(() => console.log("App init sent"));

const app = createApp(App);
app.use(router);
app.mount("#app");
