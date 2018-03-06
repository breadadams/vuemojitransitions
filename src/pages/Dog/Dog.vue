<template src="./dog.html" />

<script>
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
  }
}
</script>
