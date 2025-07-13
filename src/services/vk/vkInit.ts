import bridge from "@vkontakte/vk-bridge";

export async function vkInit() {
  bridge.send("VKWebAppInit").then(() => console.log("App init sent"));
  bridge
    .send("VKWebAppGetLaunchParams")
    .then(() => console.log("App launch params request sent"));

  bridge.subscribe((event) => {
    if (!event.detail) {
      return;
    }

    console.log("GOT VK EVENT", event);

    switch (event.detail.type) {
      case "VKWebAppOpenCodeReaderResult": {
        if (event.detail.data) {
          // Обработка события в случае успеха
          return event.detail.data;
        } else {
          // Ошибка
          console.error(event.detail);
          return;
        }
      }
      case "VKWebAppOpenCodeReaderFailed": {
        // Обработка события в случае ошибки
        console.error(event.detail);
        return;
      }
    }
  });
}
