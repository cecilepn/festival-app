<script setup lang="ts">
  import { getImageUrl } from '@/lib/getImageUrl'
  import type { Section } from '@/types'

  defineProps<{
    section: Section
  }>()
</script>

<template>
  <section>
    <img
      v-if="section.image_path"
      :src="getImageUrl(section.image_path)"
      :alt="section.image_alt ?? ''" />
    <p>{{ section.chapo }}</p>
    <h1>{{ section.title }}</h1>
    <p>{{ section.subtitle }}</p>
  </section>
</template>
