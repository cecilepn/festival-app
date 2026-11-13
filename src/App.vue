<script setup lang="ts">
  import { RouterView } from 'vue-router'
  import Footer from '@/components/Layout/Footer.vue'
  import Newsletter from '@/components/Layout/Newsletter.vue'
  import Preloader from '@/components/Layout/Preloader.vue'
  import Header from './components/Layout/Header.vue'
</script>

<template>
  <Preloader />
  <Header />
  <main>
    <RouterView />
  </main>
  <Newsletter />
  <Footer />
</template>
