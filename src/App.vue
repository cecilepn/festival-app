<script setup lang="ts">
  import { RouterView } from 'vue-router'
  import Footer from '@/components/Layout/Footer.vue'
  import Newsletter from '@/components/Layout/Newsletter.vue'
  import Header from './components/Layout/Header.vue'
</script>

<template>
  <Header />

  <main>
    <RouterView />
  </main>

  <Newsletter />

  <Footer />
</template>
