<script setup lang="ts">
  import { computed } from 'vue'
  import ArtistCard from '@/components/Artist/Card.vue'
  import EventCard from '@/components/Event/Card.vue'
  import SectionZone from '@/components/Section/Zone.vue'
  import { useArtists } from '@/composables/useArtists'
  import { useEvents } from '@/composables/useEvents'
  import { useSections } from '@/composables/useSections'
  import { formatDay } from '@/lib/eventFormat'

  const { sections, loading: sectionsLoading } = useSections('home')
  const { events, loading: eventsLoading, error: eventsError } = useEvents()
  const { artists, loading: artistsLoading, error: artistsError } = useArtists()

  const festivalDates = computed(() => {
    const firstEvent = events.value[0]
    const lastEvent = events.value[events.value.length - 1]
    if (!firstEvent || !lastEvent) return ''
    return `Du ${formatDay(firstEvent.starts_at)} au ${formatDay(lastEvent.starts_at)}`
  })

  const previewEvents = computed(() => events.value.slice(0, 3))
  const previewArtists = computed(() => artists.value.slice(0, 3))
</script>

<template>
  <SectionZone v-if="sections.length" :sections="sections" />

  <section v-else-if="!sectionsLoading">
    <h1>Eclosion Festival</h1>
    <p v-if="festivalDates">{{ festivalDates }}</p>
    <RouterLink :to="{ name: 'programmation' }">Voir la programmation</RouterLink>
    <RouterLink :to="{ name: 'artistes' }">Voir les artistes</RouterLink>
  </section>

  <section>
    <h2>Programmation</h2>
    <p v-if="eventsLoading">Chargement…</p>
    <p v-else-if="eventsError">Error loading events: {{ eventsError }}</p>
    <ul v-else>
      <li v-for="event in previewEvents" :key="event.id">
        <RouterLink :to="{ name: 'evenement', params: { id: event.id } }">
          <EventCard :event="event" />
        </RouterLink>
      </li>
    </ul>
  </section>

  <section>
    <h2>Artistes</h2>
    <p v-if="artistsLoading">Chargement…</p>
    <p v-else-if="artistsError">Error loading artists: {{ artistsError }}</p>
    <ul v-else>
      <li v-for="artist in previewArtists" :key="artist.id">
        <RouterLink :to="{ name: 'artiste', params: { id: artist.id } }">
          <ArtistCard :artist="artist" />
        </RouterLink>
      </li>
    </ul>
  </section>
</template>
