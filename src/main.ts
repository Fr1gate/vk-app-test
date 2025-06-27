import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import bridge from "@vkontakte/vk-bridge";

console.log("App started");

bridge.send("VKWebAppInit").then(() => console.log("App init sent"));


createApp(App).mount('#app')
