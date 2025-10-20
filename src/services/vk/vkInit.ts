import bridge from "@vkontakte/vk-bridge";
import { auth } from "@/services/auth/auth.ts";

export async function vkInit() {
  console.log("VK INIT START");
  const params = new URLSearchParams(window.location.search);
  console.log("URL params", params);

  bridge.send("VKWebAppInit").then(() => console.log("App init sent"));

  bridge.subscribe((event) => {
    if (!event.detail) {
      return;
    }

    console.log("GOT VK EVENT", event);

    switch (event.detail.type) {
      case "VKWebAppInitResult": {
        if (event.detail.data.result) {
          bridge.send("VKWebAppGetLaunchParams");
        } else {
          // Ошибка
          console.error("app did not launch properly", event.detail);
          return;
        }
        break;
      }
      case "VKWebAppGetLaunchParamsResult": {
        // auth
        auth(event.detail.data.vk_user_id);

        break;
      }
      case "VKWebAppGetLaunchParamsFailed": {
        console.error("Launch params failed", event);
        break;
      }
    }
  });
}
