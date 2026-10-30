<script setup lang="ts">
  import { useRoute } from 'vue-router'
  import { useEvent } from '@/composables/useEvent'
  import { formatDay, formatTime, statusLabels } from '@/lib/eventFormat'

  const route = useRoute()
  const { event, loading, error } = useEvent(Number(route.params.id))
</script>

<template>
  <RouterLink :to="{ name: 'programmation', query: route.query }">
    ← Retour à la programmation
  </RouterLink>

  <p v-if="loading">Chargement…</p>
  <p v-else-if="error">Error loading event: {{ error }}</p>
  <p v-else-if="!event">Événement introuvable.</p>

  <article v-else>
    <h1>{{ event.name }}</h1>
    <p v-if="statusLabels[event.status]">
      {{ statusLabels[event.status] }}
    </p>
    <p v-if="event.type">{{ event.type }}</p>
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

    <section v-if="event.artists.length">
      <h2>Artistes</h2>
      <ul>
        <li v-for="artist in event.artists" :key="artist.id">
          <h3>{{ artist.name }}</h3>
          <p v-if="artist.description">{{ artist.description }}</p>
        </li>
      </ul>
    </section>
  </article>
</template>
