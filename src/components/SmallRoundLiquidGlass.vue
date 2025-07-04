<template>
  <div class="small-round-glass"></div>
</template>

<style lang="scss">
:root {
  --shadow-offset: 0;
  --shadow-blur: 20px;
  --shadow-spread: -5px;
  --shadow-color: rgba(255, 255, 255, 0.7);
  --tint-color: 255, 255, 255;
  --tint-opacity: 0.4;
  --frost-blur: 2px;
  --noise-frequency: 0.008;
  --distortion-strength: 77;
  --outer-shadow-blur: 24px;

  --shadow-color: #ffffff;
  --shadow-blur: 20px;
  --shadow-spread: -5px;
  --tint-color: 255, 255, 255;
  --tint-opacity: 0.04;
  --frost-blur: 8px;
}

.small-round-glass {
  width: 300px;
  height: 200px;
  border-radius: 28px;
  cursor: move;
  isolation: isolate;
  touch-action: none;
  box-shadow: 0px 6px var(--outer-shadow-blur) rgba(0, 0, 0, 0.2);

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 0;
    border-radius: 28px;
    box-shadow: inset var(--shadow-offset) var(--shadow-offset)
      var(--shadow-blur) var(--shadow-spread) var(--shadow-color);
    background-color: rgba(var(--tint-color), var(--tint-opacity));
  }
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    border-radius: 28px;
    backdrop-filter: blur(var(--frost-blur));
    filter: url(#glass-distortion);
    isolation: isolate;
    -webkit-backdrop-filter: blur(var(--frost-blur));
    -webkit-filter: url(#glass-distortion);
  }
}
</style>
