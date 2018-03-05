<template src="./poop.html" />

<script>
import SideGlowLink from 'components/SideGlowLink/SideGlowLink.vue'
import FadeTransition from 'components/FadeTransition/FadeTransition.vue'
import strings from 'strings'

const {poopTitle, homeTitle, santaTitle} = strings

export default {
  name: 'Poop',
  data () {
    return {
      poopTitle,
      homeTitle,
      santaTitle
    }
  },
  components: {
    'fade-transition': FadeTransition,
    'side-glow-link': SideGlowLink
  }
}
</script>
