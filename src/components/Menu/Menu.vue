<template>
  <transition name="menu-fade">
    <div class="menu" v-if="visible">
      <nav class="nav-items">
        <router-link class="nav-item link" @click.native="navItemClick" to="/">{{navLabels.homeTitle}}</router-link>
        <router-link class="nav-item link" @click.native="navItemClick" to="/dog">{{navLabels.dogTitle}}</router-link>
        <router-link class="nav-item link" @click.native="navItemClick" to="/santa">{{navLabels.santaTitle}}</router-link>
        <router-link class="nav-item link" @click.native="navItemClick" to="/poop">{{navLabels.poopTitle}}</router-link>
        <router-link class="nav-item link" @click.native="navItemClick" to="/turtle">{{navLabels.turtleTitle}}</router-link>
      </nav>
    </div>
  </transition>
</template>

<script>
import strings from 'strings'

const { homeTitle, dogTitle, poopTitle, santaTitle, turtleTitle } = strings

export default {
  name: 'Menu',
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      navLabels: { homeTitle, dogTitle, poopTitle, santaTitle, turtleTitle }
    }
  },
  methods: {
    navItemClick (e) {
      this.$emit('nav-item-click', e)
    }
  }
}
</script>

<style lang="scss" scoped>
.menu {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  max-width: 100%;
  z-index: 22;
  text-align: center;
}

.nav-items {
  margin-top: 56px;
  padding-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-item {
  font-size: 36px;
  opacity: 0.6;
  transition: font-size 0.25s ease-in-out, opacity 0.25s ease-in-out;
  backface-visibility: hidden;
  transform: translateX(0.001px);

  &.router-link-exact-active,
  &:hover {
    opacity: 1;
    font-size: 48px;
  }

  &:not(:last-of-type) {
    margin-right: 16px;
  }
}

.menu-fade-enter-active {
  transition: opacity 1.2s ease, transform 1s ease-out;
}

.menu-fade-leave-active {
  transition: opacity 1s ease, transform .8s ease-in;
}

.menu-fade-enter,
.menu-fade-leave-to {
  opacity: 0;
  transform: translateY(14%);
}
</style>
