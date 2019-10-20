<template>
  <main class="view-container">
    <fade-transition
      slow
      mode="out-in"
      @before-leave="beforeTransitionLeave"
      @after-enter="afterTransitionEnter">
      <slot name="content" :visibleSection="visibleSection" />
    </fade-transition>
    <fade-transition>
      <scroll-down v-if="isntLastSection" @click.native="goToNextSection" />
    </fade-transition>
  </main>
</template>

<script>
import throttle from 'lodash/throttle'
import ScrollDown from '@/components/ScrollDown/ScrollDown'
import FadeTransition from '@/components/FadeTransition/FadeTransition'

export default {
  name: 'FadeScroll',
  props: {
    sections: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      visibleSection: 1,
      isScrolling: false
    }
  },
  created () {
    window.addEventListener('wheel', this.scrollViews)
    window.addEventListener('keydown', this.windowOnKeydown)
  },
  destroyed () {
    window.removeEventListener('wheel', this.scrollViews)
    window.removeEventListener('keydown', this.windowOnKeydown)
  },
  methods: {
    afterTransitionEnter () {
      this.isScrolling = false
    },

    beforeTransitionLeave () {
      this.isScrolling = true
    },

    emitChange () {
      this.$emit('change', this.visibleSection)
    },

    goToNextSection () {
      if (this.isntLastSection) {
        this.visibleSection++
        this.emitChange()
      }
    },

    goToPreviousSection () {
      if (this.isntFirstSection) {
        this.visibleSection--
        this.emitChange()
      }
    },

    scrollViews: throttle(
      function (e) {
        if (!this.isScrolling) {
          const { deltaY } = e
          const scrollUp = this.isntFirstSection && deltaY <= -1
          const scrollDown = this.isntLastSection && deltaY >= 1

          if (scrollDown) {
            this.goToNextSection()
          } else if (scrollUp) {
            this.goToPreviousSection()
          }
        }
      },
      1000,
      { trailing: false }
    ),

    windowOnKeydown (e) {
      const { keyCode, shiftKey } = e
      const goDown = keyCode === 40 || (keyCode === 32 && !shiftKey)
      const goUp = keyCode === 38 || (keyCode === 32 && shiftKey)
      if (goDown) {
        this.goToNextSection()
      } else if (goUp) {
        this.goToPreviousSection()
      }
    }
  },
  computed: {
    isntFirstSection () {
      return this.visibleSection > 1
    },
    isntLastSection () {
      return this.visibleSection < this.sections
    }
  },
  components: {
    'fade-transition': FadeTransition,
    'scroll-down': ScrollDown
  }
}
</script>

<style lang="scss" scoped>
.view-container {
  position: relative;
  display: block;
  width: 100%;
  height: 100vh;
}
</style>
