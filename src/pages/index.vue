<script setup lang="ts">
  import { computed } from 'vue'
  import ArtistCard from '@/components/Artist/Card.vue'
  import EventCard from '@/components/Event/Card.vue'
  import SectionZone from '@/components/Section/Zone.vue'
  import { useArtists } from '@/composables/useArtists'
  import { useEvents } from '@/composables/useEvents'
  import { useSections } from '@/composables/useSections'

  const { sections } = useSections('home')
  const { events, loading: eventsLoading, error: eventsError } = useEvents()
  const { artists, loading: artistsLoading, error: artistsError } = useArtists()

  const previewEvents = computed(() => events.value.slice(0, 6))
  const previewArtists = computed(() => artists.value.slice(0, 3))
</script>

<template>
  <SectionZone v-if="sections.length" :sections="sections" />
  <section class="flex flex-col items-center gap-64 px-16 py-96">
    <h2 class="text-center">Programmation</h2>
    <p v-if="eventsLoading">Chargement…</p>
    <p v-else-if="eventsError">Error loading events: {{ eventsError }}</p>
    <ul v-else class="grid w-full gap-24 sm:grid-cols-2 lg:grid-cols-3">
      <li v-for="event in previewEvents" :key="event.id">
        <RouterLink :to="{ name: 'evenement', params: { id: event.id } }" class="block">
          <EventCard :event="event" />
        </RouterLink>
      </li>
    </ul>
    <RouterLink :to="{ name: 'programmation' }" class="button">En découvrir plus</RouterLink>
  </section>

  <section class="flex flex-col items-center gap-64 px-16 pb-96">
    <h2 class="text-center">Artistes</h2>
    <p v-if="artistsLoading">Chargement…</p>
    <p v-else-if="artistsError">Error loading artists: {{ artistsError }}</p>
    <ul v-else class="grid w-full gap-24 sm:grid-cols-2 lg:grid-cols-3">
      <li v-for="artist in previewArtists" :key="artist.id">
        <RouterLink :to="{ name: 'artiste', params: { id: artist.id } }" class="block">
          <ArtistCard :artist="artist" />
        </RouterLink>
      </li>
    </ul>
    <RouterLink :to="{ name: 'artistes' }" class="button">Voir tous les artistes</RouterLink>
  </section>
</template>
