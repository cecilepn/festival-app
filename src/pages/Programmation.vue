<script setup lang="ts">
  import { computed } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import type { LocationQueryRaw } from 'vue-router'
  import EventCard from '@/components/Event/Card.vue'
  import { useEvents } from '@/composables/useEvents'
  import { useVenues } from '@/composables/useVenues'
  import { formatDay, formatShortDay } from '@/lib/eventFormat'

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

  const dayOptions = computed(() => {
    const options = new Map<string, string>()
    for (const event of events.value) {
      options.set(formatDay(event.starts_at), formatShortDay(event.starts_at))
    }
    return [...options].map(([value, label]) => ({ value, label }))
  })

  function toggleDay(day: string) {
    selectedDay.value = selectedDay.value === day ? '' : day
  }

  const filteredEvents = computed(() =>
    events.value.filter(
      event =>
        (!selectedDay.value || formatDay(event.starts_at) === selectedDay.value) &&
        (selectedVenueId.value === null || event.venue_id === selectedVenueId.value)
    )
  )
</script>

<template>
  <div class="flex flex-col gap-48 px-16 pt-64">
    <h1>Programmation</h1>

    <div v-if="events.length" role="group" aria-label="Filtrer la programmation" class="flex flex-wrap items-center gap-16">
      <label class="sr-only" for="venue-filter">Lieu</label>
      <select id="venue-filter" v-model="selectedVenueId" class="pill cursor-pointer">
        <option :value="null">Tous les lieux</option>
        <option v-for="venue in venues" :key="venue.id" :value="venue.id">
          {{ venue.name }}
        </option>
      </select>
      <button
        v-for="day in dayOptions"
        :key="day.value"
        type="button"
        class="pill cursor-pointer"
        :aria-pressed="selectedDay === day.value"
        @click="toggleDay(day.value)">
        {{ day.label }}
      </button>
      <p v-if="venuesError" class="text-body-s text-error">
        Error loading venues: {{ venuesError }}
      </p>
    </div>

    <p v-if="loading">Chargement…</p>
    <p v-else-if="error">Error loading events: {{ error }}</p>
    <p v-else-if="!events.length">Aucun événement pour le moment.</p>
    <p v-else-if="!filteredEvents.length">Aucun événement pour ces filtres.</p>

    <ul v-else class="grid gap-24 sm:grid-cols-2 lg:grid-cols-3">
      <li v-for="event in filteredEvents" :key="event.id">
        <RouterLink
          :to="{ name: 'evenement', params: { id: event.id }, query: route.query }"
          class="block">
          <EventCard :event="event" />
        </RouterLink>
      </li>
    </ul>
  </div>
</template>
