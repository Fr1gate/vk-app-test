<template>
  <div class="loading-page">
    <div>Loading...</div>
    <div>web server url: {{ serverURL }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const serverURL = ref<string>(import.meta.env.VITE_SERVER_URL);
</script>

<style lang="scss">
.loading-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #333;
  min-height: 100vh;
  color: white;
  gap: 24px;
  font-size: 48px;
}

.fancy-glass {
  position: absolute;
  transform: translateX(-50%) translateY(-50%);
}
</style>
