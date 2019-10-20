<template src="./santa.html" />

<script>
import strings from '@/strings'

const {poopTitle, homeTitle, santaTitle} = strings

export default {
  name: 'Santa',
  data () {
    return {
      poopTitle,
      homeTitle,
      santaTitle
    }
  }
}
</script>
