import bridge from "@vkontakte/vk-bridge";

export async function vkInit() {
  bridge.send("VKWebAppInit").then(() => console.log("App init sent"));

  bridge.subscribe((event) => {
    if (!event.detail) {
      return;
    }

    console.log("GOT VK EVENT", event);

    switch (event.detail.type) {
      case "VKWebAppOpenCodeReaderResult": {
        if (event.detail.data) {
          // Обработка события в случае успеха
          bridge.send("VKWebAppGetLaunchParams");
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
