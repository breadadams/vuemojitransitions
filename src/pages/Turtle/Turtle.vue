<template src="./turtle.html" />

<script>
import strings from '@/strings'

const {poopTitle, turtleTitle, dogTitle} = strings

export default {
  name: 'Turtle',
  data () {
    return {
      poopTitle,
      turtleTitle,
      dogTitle
    }
  }
}
</script>
