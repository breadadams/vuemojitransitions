<template src="./home.html" />

<script>
import FadeScroll from 'components/FadeScroll/FadeScroll.vue'
import FullscreenSection from 'components/FullscreenSection/FullscreenSection.vue'
import strings from 'strings'

const { homeTitle, catTitle, dogTitle, santaTitle, turtleTitle } = strings

const stepBreadcrumbs = {
  1: homeTitle,
  2: catTitle,
  3: dogTitle,
  4: turtleTitle
}

export default {
  name: 'Home',
  data () {
    return {
      dogTitle,
      santaTitle
    }
  },
  methods: {
    fadeScrollChange (activeSection) {
      this.$store.commit('updateActiveBreadcrumb', stepBreadcrumbs[activeSection])
    }
  },
  components: {
    'fade-scroll': FadeScroll,
    'fullscreen-section': FullscreenSection
  }
}
</script>
