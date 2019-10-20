<template src="./home.html" />

<script>
import FadeScroll from '@/components/FadeScroll/FadeScroll'
import FullscreenSection from '@/components/FullscreenSection/FullscreenSection'
import strings from '@/strings'
import image1 from '@/assets/images/its_magic.gif';
import image2 from '@/assets/images/cat_paws.gif';
import image3 from '@/assets/images/all_the_biscuits.gif';
import image4 from '@/assets/images/turtle_dance.gif';

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
      santaTitle,
      image1,
      image2,
      image3,
      image4
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
