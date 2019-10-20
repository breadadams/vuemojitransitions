<template>
  <router-link
    :to="to"
    class="side-glow"
    :class="linkClasses"
    @mousemove.native="linkHover"
    @mouseenter.native="displayLink"
    v-mousemove-outside="hideLink"
  >
    <div class="inner-hover-detect" @mouseleave="hideLink"/>
    <div
      class="cursor-magnet"
      :style="cursorMagnetStyles">
      <span
        class="label"
        v-if="displayCursorMagnetTitle">{{title}}</span>
      <span class="icon" />
    </div>
  </router-link>
</template>

<script>
import throttle from 'lodash/throttle'
import { checkLeftOrRight } from '@/utils'
export default {
  name: 'SideGlowLink',
  props: {
    // Color used for the glow
    color: {
      type: String,
      default: 'blue',
      validator (value) {
        return ['blue', 'white'].indexOf(value) >= 0
      }
    },

    // Side of the viewport where the link appears
    side: {
      type: String,
      default: 'right',
      validator (value) {
        return checkLeftOrRight(value)
      }
    },

    // Title displayed on hover
    title: {
      type: String,
      default: ''
    },

    // Path used for the `<router-link>`
    to: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      cursorMagnetOpacity: 0,
      cursorMagnetPosition: {
        x: 0,
        y: 0
      },
      visible: false
    }
  },
  methods: {
    linkHover: throttle(function (e) {
      const { pageX: x, pageY: y } = e
      this.cursorMagnetPosition = { x, y }
    }, 133),

    displayLink () {
      this.visible = true
    },

    hideLink () {
      this.visible = false
    }
  },
  computed: {
    displayCursorMagnetTitle () {
      return this.title !== ''
    },
    isLeftSide () {
      return this.side === 'left'
    },
    isRightSide () {
      return this.side === 'right'
    },
    linkClasses () {
      return {
        '-left-glow': this.isLeftSide,
        '-right-glow': this.isRightSide,
        '-visible': this.visible,
        '-white-glow': this.color === 'white'
      }
    },
    cursorMagnetStyles () {
      return {
        left: `${this.cursorMagnetPosition.x}px`,
        top: `${this.cursorMagnetPosition.y}px`
      }
    }
  }
}
</script>

<style lang="scss" scoped src="./SideGlowLink.scss">
