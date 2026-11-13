<script setup lang="ts">
  import type { Section } from '@/types'
  defineProps<{
    section: Section
  }>()
</script>

<template>
  <section class="flex flex-col gap-32 px-16 py-64 lg:px-48">
    <h2>{{ section.title }}</h2>
    <p class="max-w-[720px] whitespace-pre-line">{{ section.body }}</p>
  </section>
</template>
