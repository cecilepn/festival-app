<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/programmation">Programmation</RouterLink>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>
</template>
