<script setup lang="ts">
  import SectionZone from '@/components/Section/Zone.vue'
  import { useSections } from '@/composables/useSections'

  const { sections, loading } = useSections('notre-histoire')
</script>

<template>
  <SectionZone v-if="sections.length" :sections="sections" />
  <div v-else-if="!loading" class="px-16 pt-64 lg:px-48">
    <h1>Notre histoire</h1>
  </div>
</template>
