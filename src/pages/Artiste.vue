<script setup lang="ts">
  import { useRoute } from 'vue-router'
  import { useArtist } from '@/composables/useArtist'
  import { formatDay, formatTime, statusLabels } from '@/lib/eventFormat'

  const route = useRoute()
  const { artist, loading, error } = useArtist(Number(route.params.id))
</script>

<template>
  <RouterLink :to="{ name: 'artistes' }">← Retour aux artistes</RouterLink>

  <p v-if="loading">Chargement…</p>
  <p v-else-if="error">Error loading artist: {{ error }}</p>
  <p v-else-if="!artist">Artiste introuvable.</p>

  <article v-else>
    <h1>{{ artist.name }}</h1>
    <p v-if="artist.description">{{ artist.description }}</p>

    <section v-if="artist.events.length">
      <h2>Événements</h2>
      <ul>
        <li v-for="event in artist.events" :key="event.id">
          <RouterLink :to="{ name: 'evenement', params: { id: event.id } }">
            <p>{{ event.name }}</p>
            <p>
              {{ formatDay(event.starts_at) }},
              <time :datetime="event.starts_at">
                {{ formatTime(event.starts_at) }}
              </time>
              –
              <time :datetime="event.ends_at">
                {{ formatTime(event.ends_at) }}
              </time>
            </p>
            <p>{{ event.venues.name }}</p>
            <p v-if="statusLabels[event.status]">
              {{ statusLabels[event.status] }}
            </p>
          </RouterLink>
        </li>
      </ul>
    </section>
  </article>
</template>
