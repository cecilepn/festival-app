<script setup lang="ts">
  import { useArtists } from './composables/useArtists'
  const { error, artists } = useArtists()
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
