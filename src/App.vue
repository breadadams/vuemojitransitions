<template>
  <div>
    <app-header />
    <fade-transition slow appear mode="out-in">
      <router-view />
    </fade-transition>
  </div>
</template>

<script>
import Header from '@/components/Header/Header'
import FadeTransition from '@/components/FadeTransition/FadeTransition'
export default {
  name: 'App',
  components: {
    'app-header': Header,
    'fade-transition': FadeTransition
  }
}
</script>
