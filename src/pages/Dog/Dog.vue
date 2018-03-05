<template src="./dog.html" />

<script>
import SideGlowLink from 'components/SideGlowLink/SideGlowLink.vue'
import FadeTransition from 'components/FadeTransition/FadeTransition.vue'
import strings from 'strings'

const { dogTitle, homeTitle, turtleTitle } = strings

export default {
  name: 'Dog',
  data () {
    return {
      dogTitle,
      turtleTitle,
      homeTitle
    }
  },
  components: {
    'fade-transition': FadeTransition,
    'side-glow-link': SideGlowLink
  }
}
</script>
