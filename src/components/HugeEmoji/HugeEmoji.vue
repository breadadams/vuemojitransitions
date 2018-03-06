<template>
  <span class="huge-emoji"><slot></slot></span>
</template>

<script>
export default {
  name: 'HugeEmoji'
}
</script>

<style lang="scss" scoped>
.huge-emoji {
  font-size: 100px;
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  text-align: center;
  transform: translateY(-50%);
  margin: 0;
}
</style>
