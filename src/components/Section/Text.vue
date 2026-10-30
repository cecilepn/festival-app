<script setup lang="ts">
  import type { Section } from '@/types'

  defineProps<{
    section: Section
  }>()
</script>

<template>
  <section>
    <h2>{{ section.title }}</h2>
    <p class="whitespace-pre-line">{{ section.body }}</p>
  </section>
</template>
