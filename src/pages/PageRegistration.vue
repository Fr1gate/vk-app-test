<template>
  <div>
    <h1>Registration</h1>
  </div>
  <form @submit.prevent="handleSubmit">
    <input type="text" v-model="name" placeholder="Name" />
    <button type="submit">Register</button>
  </form>
</template>

<script setup lang="ts">
import request from "@/api/request";
import { ROUTES_NAMES } from "@/const/routesNames";
import router from "@/router/router";
import { usePlayerStore } from "@/stores/player";
import { ref } from "vue";

const name = ref<string>("");
const playerStore = usePlayerStore();
const handleSubmit = () => {
  request
    .post("/auth/register", {
      name: name.value,
    })
    .then(({ data }) => {
      // init player store
      playerStore.player = data.user;
      router.push({
        name: ROUTES_NAMES.BASE_EARTH,
      });
    })
    .catch((error) => {
      console.error(error);
    });
};
</script>

