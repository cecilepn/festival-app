<script setup lang="ts">
  import { getImageUrl } from '@/lib/getImageUrl'
  import type { Section } from '@/types'

  defineProps<{
    section: Section
  }>()
</script>

<template>
  <section>
    <h2>{{ section.title }}</h2>
    <p class="whitespace-pre-line">{{ section.body }}</p>
    <template v-if="section.button_url">
      <RouterLink v-if="section.button_url.startsWith('/')" :to="section.button_url">
        {{ section.button_label }}
      </RouterLink>
      <a v-else :href="section.button_url">{{ section.button_label }}</a>
    </template>
    <img
      v-if="section.image_path"
      :src="getImageUrl(section.image_path)"
      :alt="section.image_alt ?? ''"
      loading="lazy" />
  </section>
</template>
