<script setup lang="ts">
  import { useRoute } from 'vue-router'
  import { useEvent } from '@/composables/useEvent'
  import { formatDay, formatTime, statusLabels, typeLabels } from '@/lib/eventFormat'

  const route = useRoute()
  const { event, loading, error } = useEvent(Number(route.params.id))
</script>

<template>
  <div class="flex flex-col gap-48 px-16 pt-32 lg:px-48">
    <RouterLink :to="{ name: 'programmation', query: route.query }" class="button-outline w-fit">
      ← Retour à la programmation
    </RouterLink>

    <p v-if="loading">Chargement…</p>
    <p v-else-if="error">Error loading event: {{ error }}</p>
    <p v-else-if="!event">Événement introuvable.</p>

    <article v-else class="flex flex-col gap-48">
      <div class="flex flex-col gap-16">
        <h1 class="break-words">{{ event.name }}</h1>
        <div class="flex flex-wrap gap-8">
          <p v-if="event.type" class="pill">{{ typeLabels[event.type] ?? event.type }}</p>
          <p v-if="statusLabels[event.status]" class="pill font-semibold">
            {{ statusLabels[event.status] }}
          </p>
        </div>
        <p class="text-body-l">
          {{ formatDay(event.starts_at) }},
          <time :datetime="event.starts_at">{{ formatTime(event.starts_at) }}</time>
          –
          <time :datetime="event.ends_at">{{ formatTime(event.ends_at) }}</time>
        </p>
        <p class="text-body-l">{{ event.venues.name }}</p>
      </div>

      <section v-if="event.artists.length" class="flex flex-col gap-24">
        <h2>Artistes</h2>
        <ul class="flex flex-col gap-24">
          <li v-for="artist in event.artists" :key="artist.id" class="flex flex-col gap-8">
            <h3>
              <RouterLink :to="{ name: 'artiste', params: { id: artist.id } }">
                {{ artist.name }}
              </RouterLink>
            </h3>
            <p v-if="artist.description">{{ artist.description }}</p>
          </li>
        </ul>
      </section>
    </article>
  </div>
</template>
