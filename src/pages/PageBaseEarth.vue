<template>
  <div>
    <h1>Base Earth</h1>
    <p>Player name: {{ playerStore.player!.name }}</p>
  </div>
</template>

<script setup lang="ts">
import { usePlayerStore } from "@/stores/player";

const playerStore = usePlayerStore();
</script>

