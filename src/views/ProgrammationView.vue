<script setup lang="ts">
  import { computed, ref } from 'vue'

  import Filters from '../components/Filters.vue'

  const selectedDate = ref<string | null>(null)

  const events = [
    { src: '/programmation/event.png', alt: '7 mai' },
    { src: '/programmation/event-1.png', alt: '7 mai' },
    { src: '/programmation/event-2.png', alt: '8 mai' },
    { src: '/programmation/event-3.png', alt: '7 mai' },
    { src: '/programmation/event-4.png', alt: '7 mai' },
    { src: '/programmation/event-5.png', alt: '9 mai' }
  ]

  const filteredEvents = computed(() => {
    if (!selectedDate.value) return events

    return events.filter(
      event => event.alt.toLowerCase() === selectedDate.value?.toLowerCase()
    )
  })
</script>

<template>
  <section class="programmation flex flex-col gap-40">
    <h2>Programmation</h2>
    <Filters v-model="selectedDate" />
    <div class="grid-events gap-16">
      <img
        v-for="event in filteredEvents"
        :key="event.src"
        :src="event.src"
        :alt="event.alt" />
    </div>
  </section>
</template>

<style scoped>
  .programmation {
    padding: var(--spacing-64) var(--spacing-32);
    padding-bottom: var(--spacing-80);
  }
  .grid-events {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .self-center {
    align-self: center;
  }
</style>
