<script setup lang="ts">
  import { getImageUrl } from '@/lib/getImageUrl'
  import type { Section } from '@/types'
  defineProps<{
    section: Section
  }>()
</script>

<template>
  <section
    class="relative flex min-h-480 items-center justify-center overflow-hidden bg-black lg:h-[80vh]">
    <img
      v-if="section.image_path"
      :src="getImageUrl(section.image_path)"
      :alt="section.image_alt ?? ''"
      fetchpriority="high"
      class="absolute inset-0 size-full object-cover" />
    <div class="absolute inset-0 bg-black/30" aria-hidden="true"></div>
    <div
      class="relative flex flex-col items-center gap-32 px-16 py-64 text-center text-white">
      <p class="text-body-l">{{ section.chapo }}</p>
      <h1>{{ section.title }}</h1>
      <p class="text-body-l">{{ section.subtitle }}</p>
    </div>
  </section>
</template>
