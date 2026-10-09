<script setup lang="ts">
  import { useFetchData } from './composables/useFetchData'
  const { error, artists } = useFetchData()
</script>

<template>
  <p v-if="error">Error loading artists: {{ error }}</p>
  <ul v-else>
    <li v-for="artist in artists" :key="artist.id">
      {{ artist.name }}
      {{ artist.description }}
    </li>
  </ul>
</template>
