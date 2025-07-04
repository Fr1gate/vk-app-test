<template>
  <div class="loading-page">
    <div>Loading...</div>
    <div>
      <img src="@/assets/hlebushek.jpg" alt="HOMA - HLEBUSHEK" height="500" />
    </div>
    <div>
      <img
        src="@/assets/hamster_archer.jpg"
        alt="HOMA - HLEBUSHEK"
        height="500"
      />
    </div>
    <div>
      <img
        src="@/assets/hamster_doctor.jpg"
        alt="HOMA - HLEBUSHEK"
        height="500"
      />
    </div>
    <div>
      <img
        src="@/assets/hamster_worker.jpg"
        alt="HOMA - HLEBUSHEK"
        height="500"
      />
    </div>
    <div ref="glass" class="fancy-glass">
      <SmallRoundLiquidGlass />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, useTemplateRef } from "vue";
import SmallRoundLiquidGlass from "@/components/SmallRoundLiquidGlass.vue";

// use the template ref to get the glass div
const glass = useTemplateRef("glass");

onMounted(() => {
  document.addEventListener("mousemove", handleMouseMove);
});
onBeforeUnmount(() => {
  document.removeEventListener("mousemove", handleMouseMove);
});

function handleMouseMove(event: MouseEvent) {
  // if left is more than 50% of the element, than move the glass so that it doesn't overlow the screen
  if (!glass.value) return;

  const bounds = glass.value.getBoundingClientRect();

  if (bounds) {
    // width
    if (event.clientX + 0.5 * bounds.width > document.body.clientWidth) {
      glass.value.style.left =
        document.body.clientWidth - 0.5 * bounds.width + "px";
    } else {
      glass.value.style.left = event.clientX + "px";
    }

    // height of the whole document
    if (
      event.clientY + window.scrollY + 0.5 * bounds.height >
      document.body.scrollHeight
    ) {
      console.log("we are on edge");
      glass.value.style.top =
        document.body.scrollHeight - 0.5 * bounds.height + "px";
    } else {
      console.log("we are not on edge");
      glass.value.style.top = event.clientY + window.scrollY + "px";
    }
  }
}
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
