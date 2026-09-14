<script setup lang="ts">
  import type { FestivalEvent } from '../data/events'
  defineProps<{
    event: FestivalEvent
  }>()
</script>

<template>
  <a :href="`events/${event.id}`" class="card flex-col gap-s">
    <div class="flex-col gap-xs">
      <h2>{{ event.title }}</h2>
      <p class="eyebrow">{{ event.day }}, {{ event.time }}</p>
    </div>
    <p>{{ event.category }}</p>
    <p>{{ event.venue }}</p>
  </a>
</template>
