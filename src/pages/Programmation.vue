<script setup lang="ts">
  import { computed } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import type { LocationQueryRaw } from 'vue-router'
  import EventCard from '@/components/Event/Card.vue'
  import { useEvents } from '@/composables/useEvents'
  import { useVenues } from '@/composables/useVenues'
  import { formatDay } from '@/lib/eventFormat'
  import type { EventWithDetails } from '@/types'

  const { events, loading, error } = useEvents()
  const { venues, error: venuesError } = useVenues()
  const route = useRoute()
  const router = useRouter()

  function updateFilters(filters: LocationQueryRaw) {
    router.replace({ query: { ...route.query, ...filters } })
  }

  const selectedDay = computed({
    get: () => (typeof route.query.jour === 'string' ? route.query.jour : ''),
    set: jour => updateFilters({ jour: jour || undefined })
  })

  const selectedVenueId = computed({
    get: () => (typeof route.query.lieu === 'string' ? Number(route.query.lieu) : null),
    set: lieu => updateFilters({ lieu: lieu === null ? undefined : String(lieu) })
  })

  const dayOptions = computed(() => [
    ...new Set(events.value.map(event => formatDay(event.starts_at)))
  ])

  const filteredEvents = computed(() =>
    events.value.filter(
      event =>
        (!selectedDay.value || formatDay(event.starts_at) === selectedDay.value) &&
        (selectedVenueId.value === null || event.venue_id === selectedVenueId.value)
    )
  )

  type Day = {
    label: string
    events: EventWithDetails[]
  }

  const days = computed(() => {
    const result: Day[] = []
    for (const event of filteredEvents.value) {
      const label = formatDay(event.starts_at)
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

  <form v-if="events.length" @submit.prevent>
    <label>
      Jour
      <select v-model="selectedDay">
        <option value="">Tous les jours</option>
        <option v-for="day in dayOptions" :key="day" :value="day">{{ day }}</option>
      </select>
    </label>
    <label>
      Lieu
      <select v-model="selectedVenueId">
        <option :value="null">Tous les lieux</option>
        <option v-for="venue in venues" :key="venue.id" :value="venue.id">
          {{ venue.name }}
        </option>
      </select>
    </label>
    <p v-if="venuesError">Error loading venues: {{ venuesError }}</p>
  </form>

  <p v-if="loading">Chargement…</p>
  <p v-else-if="error">Error loading events: {{ error }}</p>
  <p v-else-if="!events.length">Aucun événement pour le moment.</p>
  <p v-else-if="!days.length">Aucun événement pour ces filtres.</p>

  <section v-for="day in days" v-else :key="day.label">
    <h2>{{ day.label }}</h2>
    <ul>
      <li v-for="event in day.events" :key="event.id">
        <RouterLink :to="{ name: 'evenement', params: { id: event.id }, query: route.query }">
          <EventCard :event="event" />
        </RouterLink>
      </li>
    </ul>
  </section>
</template>
