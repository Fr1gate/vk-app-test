import bridge from "@vkontakte/vk-bridge";
import { auth } from "@/services/auth/auth.ts";

/**
 *
 * @returns true if user is registered, false otherwise
 */
export async function vkInit() {
  return new Promise((resolve) => {
    bridge.send("VKWebAppInit");

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
          const vkParams = event.detail.data;
          auth(vkParams).then((isRegistered) => {
            resolve(isRegistered);
          });

          break;
        }
        case "VKWebAppGetLaunchParamsFailed": {
          console.error("Launch params failed", event);
          break;
        }
      }
    });
  });
}
