<script setup lang="ts">
  import type { FestivalEvent } from '../data/events'

  defineProps<{
    event: FestivalEvent
  }>()
</script>

<template>
  <div>
    <h2>{{ event.title }}</h2>
    <p>{{ event.day }}</p>
    <p>{{ event.time }}</p>
    <p>{{ event.venue }}</p>
    <p>{{ event.category }}</p>
  </div>
</template>
