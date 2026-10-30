<script setup lang="ts">
  import type { Artist } from '@/types'

  defineProps<{
    artist: Artist
  }>()
</script>

<template>
  <div>
    <p>{{ artist.name }}</p>
    <p v-if="artist.description">{{ artist.description }}</p>
  </div>
</template>
