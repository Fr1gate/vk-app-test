<template>
  <div ref="glass" class="fancy-glass">
    <SmallRoundLiquidGlass />
  </div>
</template>
<script setup lang="ts">
import SmallRoundLiquidGlass from "@/components/SmallRoundLiquidGlass.vue";
import { onBeforeUnmount, onMounted, useTemplateRef } from "vue";

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
      glass.value.style.top =
        document.body.scrollHeight - 0.5 * bounds.height + "px";
    } else {
      glass.value.style.top = event.clientY + window.scrollY + "px";
    }
  }
}
</script>
