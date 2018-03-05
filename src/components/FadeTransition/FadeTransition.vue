<template>
  <transition
    :appear="appear"
    :mode="mode"
    :name="transitionName"
    @before-leave="beforeLeave"
    @after-enter="afterEnter">
    <slot />
  </transition>
</template>

<script>
export default {
  name: 'FadeTransition',
  props: {
    // Run transition "on appear" (inherited from `transition`)
    appear: {
      type: Boolean,
      default: false
    },

    // Transition mode (inherited from `transition`)
    mode: {
      type: String,
      default: ''
    },

    // Display a "slower" fade transition
    slow: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    afterEnter (el) {
      this.$emit('after-enter', el)
    },
    beforeLeave (el) {
      this.$emit('before-leave', el)
    }
  },
  computed: {
    transitionName () {
      return this.slow ? 'fade-slow' : 'fade'
    }
  }
}
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-slow-enter-active {
  transition: opacity 1.75s ease-in;
}
.fade-slow-leave-active {
  transition: opacity 0.75s ease-out;
}

.fade-slow-enter,
.fade-slow-leave-to,
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
