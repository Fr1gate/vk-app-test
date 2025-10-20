import request from "@/api/request";
import { usePlayerStore } from "@/stores/player";

/**
 *
 * @param vkParams VK launch params
 * @returns true if user is registered, false otherwise
 */
export async function auth(vkParams: Record<string, any>): Promise<boolean> {
  const playerStore = usePlayerStore();
  return new Promise((resolve) => {
    // add x-vk-params header to request. Params as base64 encoded json string
    const base64Params = btoa(JSON.stringify(vkParams));
    request.defaults.headers.common["x-vk-params"] = base64Params;

    // attempt to login
    request
      .post("/auth/login")
      .then((response) => {
        // set player store
        playerStore.player = response.data.user;
        resolve(true);
        console.log("Auth check response: ", response);
      })
      .catch((error) => {
        console.error("Auth check error: ", error);
        resolve(false);
      });
  });
}
