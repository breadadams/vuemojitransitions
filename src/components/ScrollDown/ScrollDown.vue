<template>
  <div class="scroll">↓</div>
</template>

<script>
export default {
  name: 'ScrollDown'
}
</script>

<style lang="scss" scoped>
.scroll {
  font-size: 40px;
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  z-index: 2;
}

@keyframes scroll {
  0% {
    bottom: 100%;
    opacity: 0;
  }
  100% {
    bottom: 0;
    opacity: 1;
  }
}
</style>
