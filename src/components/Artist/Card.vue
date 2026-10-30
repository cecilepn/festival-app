<script setup lang="ts">
  import { getImageUrl } from '@/lib/getImageUrl'
  import type { Artist } from '@/types'

  defineProps<{
    artist: Artist
  }>()
</script>

<template>
  <div>
    <p>{{ artist.name }}</p>
    <p v-if="artist.description">{{ artist.description }}</p>
    <img
      v-if="artist.image_path"
      :src="getImageUrl(artist.image_path)"
      :alt="artist.name"
      loading="lazy" />
  </div>
</template>
