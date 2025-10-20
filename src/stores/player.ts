// init pinia store composition api
import { defineStore } from "pinia";
import { ref } from "vue";

interface Player {
  id: number;
  vk_id: string;
  name: string;
}

export const usePlayerStore = defineStore("player", () => {
  const player = ref<Player | null>(null);

  return {
    player,
  };
});

