<template>
  <header
    :class="headerClasses"
    @click="headerClick">
    <div class="header-inner">
      <span class="header-logo" @click="logoClick">{{logoLabel}}</span>
      <fade-transition slow mode="out-in">
        <p v-if="!menuVisible" class="active-breadcrumb" :key="this.$store.state.activeBreadcrumb">{{this.$store.state.activeBreadcrumb}}</p>
      </fade-transition>
    </div>
    <header-menu :visible="menuVisible" v-click-outside="headerClickOutside" @nav-item-click="navItemClick" />
  </header>
</template>

<script>
import Menu from 'components/Menu/Menu.vue'
import FadeTransition from 'components/FadeTransition/FadeTransition.vue'
import strings from 'strings'

export default {
  name: 'Header',
  data () {
    return {
      logoLabel: strings.logoLabel,
      menuVisible: false
    }
  },
  methods: {
    headerClick () {
      if (!this.menuVisible) {
        this.toggleMenu()
      }
    },
    headerClickOutside (e) {
      if (this.menuVisible) {
        e.stopPropagation()
        e.preventDefault()
        this.toggleMenu()
      }
    },
    logoClick (e) {
      if (this.menuVisible) {
        e.stopPropagation()
        this.toggleMenu()
      }
    },
    navItemClick (e) {
      e.stopPropagation()
      this.toggleMenu()
    },
    toggleMenu () {
      this.menuVisible = !this.menuVisible
    }
  },
  computed: {
    headerClasses () {
      return {
        'header': true,
        '-expanded': this.menuVisible
      }
    }
  },
  components: {
    'fade-transition': FadeTransition,
    'header-menu': Menu
  }
}
</script>

<style lang="scss" scoped src="./header.scss" />
