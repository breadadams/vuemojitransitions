<template>
  <section class="fullscreen-section">
    <div class="section-background" :style="sectionBackgroundStyles" />
    <slot></slot>
  </section>
</template>

<script>
import throttle from 'lodash/throttle'

const cursorMathCalc = (areaSize, cursorPos) => {
  return Math.max(-140, Math.min(140, areaSize / 2 - cursorPos))
}

export default {
  name: 'FullscreenSection',
  props: {
    bgImage: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      cursorPosition: {
        x: 0,
        y: 0
      }
    }
  },
  created () {
    window.addEventListener('mousemove', this.cursorFollow)
  },
  destroyed () {
    window.removeEventListener('mousemove', this.cursorFollow)
  },
  methods: {
    cursorFollow: throttle(function (e) {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      this.cursorPosition = {
        x: 15 * cursorMathCalc(innerWidth, clientX) / 100,
        y: 15 * cursorMathCalc(innerHeight, clientY) / 100
      }
    }, 100)
  },
  computed: {
    sectionBackgroundStyles () {
      const { x, y } = this.cursorPosition
      return {
        backgroundImage: `url(${this.bgImage})`,
        transform: `scale(1.1) translate(${x}px, ${y}px)`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.fullscreen-section,
.section-background {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}

.fullscreen-section {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
}

.section-background {
  background: no-repeat center center / cover;
  transition: transform 0.75s ease;
  z-index: 1;
}
</style>
