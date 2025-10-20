<script setup lang="ts">
import { vkInit } from "@/services/vk/vkInit.ts";
import router from "./router/router";
import { ROUTES_NAMES } from "./const/routesNames";

vkInit().then((isRegistered) => {
  if (isRegistered) {
    router.push({
      name: ROUTES_NAMES.BASE_EARTH,
    });
  } else {
    router.push({
      name: ROUTES_NAMES.REGISTRATION,
    });
  }
});
</script>

<template>
  <router-view />
</template>
