<template>
  <Menu />
  <RouterView />
  <Newsletter />
  <Footer />
</template>

<script setup lang="ts">
  import Menu from './components/Menu.vue'
  import Footer from './components/Footer.vue'
  import Newsletter from './components/Newsletter.vue'
</script>
