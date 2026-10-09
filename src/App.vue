<script setup lang="ts">
  import { computed } from 'vue'
  import EventCard from '@/components/EventCard.vue'
  import { useEvents } from '@/composables/useEvents'
  import type { EventWithDetails } from '@/types'

  const { events, loading, error } = useEvents()

  const dayFormatter = new Intl.DateTimeFormat('fr-FR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  })

  type Day = {
    label: string
    events: EventWithDetails[]
  }

  const days = computed(() => {
    const result: Day[] = []
    for (const event of events.value) {
      const label = dayFormatter.format(new Date(event.starts_at))
      const existingDay = result.find(day => day.label === label)
      if (existingDay) {
        existingDay.events.push(event)
      } else {
        result.push({ label, events: [event] })
      }
    }
    return result
  })
</script>

<template>
  <h1>Programmation</h1>

  <p v-if="loading">Chargement…</p>
  <p v-else-if="error">Error loading events: {{ error }}</p>
  <p v-else-if="!events.length">Aucun événement pour le moment.</p>

  <section v-for="day in days" v-else :key="day.label">
    <h2>{{ day.label }}</h2>
    <ul>
      <li v-for="event in day.events" :key="event.id">
        <EventCard :event="event" />
      </li>
    </ul>
  </section>
</template>
