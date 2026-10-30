<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Eclosion</RouterLink>
      <RouterLink to="/programmation">Programmation</RouterLink>
      <RouterLink to="/artistes">Artistes</RouterLink>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>
</template>
