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
  </div>
  <!--    <LiquidGlassOnCursor />-->
</template>

<script setup lang="ts">
// import LiquidGlassOnCursor from "@/components/LiquidGlassOnCursor.vue";
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
