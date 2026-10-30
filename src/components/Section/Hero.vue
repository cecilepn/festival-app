<script setup lang="ts">
  import { getImageUrl } from '@/lib/getImageUrl'
  import type { Section } from '@/types'

  defineProps<{
    section: Section
  }>()
</script>

<template>
  <section class="h-[80vh] w-full relative">
    <img
      v-if="section.image_path"
      :src="getImageUrl(section.image_path)"
      :alt="section.image_alt ?? ''"
      class="h-full w-full object-cover" />
    <div
      class="absolute flex flex-col gap-48 inset-0 h-fit text-center text-white -translate-y-1/2 top-1/2">
      <p>{{ section.chapo }}</p>
      <h1>{{ section.title }}</h1>
      <p>{{ section.subtitle }}</p>
    </div>
  </section>
</template>
