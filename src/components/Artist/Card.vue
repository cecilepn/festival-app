<script setup lang="ts">
  import { getImageUrl } from '@/lib/getImageUrl'
  import type { Artist } from '@/types'

  defineProps<{
    artist: Artist
  }>()
</script>

<template>
  <article class="group relative aspect-square overflow-hidden rounded-br-[48px] bg-pink-50">
    <img
      v-if="artist.image_path"
      :src="getImageUrl(artist.image_path)"
      alt=""
      loading="lazy"
      class="absolute inset-0 size-full object-cover transition-transform duration-300 group-hover:scale-105" />

    <div
      class="absolute inset-x-0 bottom-0 flex flex-col gap-4 bg-black/55 px-24 pb-16 pt-24 text-white backdrop-blur-sm">
      <h3 class="truncate">{{ artist.name }}</h3>
      <p v-if="artist.description" class="line-clamp-1 text-label">{{ artist.description }}</p>
    </div>
  </article>
</template>
