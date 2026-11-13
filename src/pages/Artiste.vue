<script setup lang="ts">
  import { useRoute } from 'vue-router'
  import EventCard from '@/components/Event/Card.vue'
  import { useArtist } from '@/composables/useArtist'
  import { getImageUrl } from '@/lib/getImageUrl'

  const route = useRoute()
  const { artist, loading, error } = useArtist(Number(route.params.id))
</script>

<template>
  <div class="flex flex-col gap-48 px-16 pt-32 lg:px-48">
    <RouterLink :to="{ name: 'artistes' }" class="button-outline w-fit">
      ← Retour aux artistes
    </RouterLink>

    <p v-if="loading">Chargement…</p>
    <p v-else-if="error">Error loading artist: {{ error }}</p>
    <p v-else-if="!artist">Artiste introuvable.</p>

    <template v-else>
      <article class="grid items-center gap-48 md:grid-cols-2">
        <div class="flex flex-col gap-32">
          <h1>{{ artist.name }}</h1>
          <p v-if="artist.description" class="text-body-l whitespace-pre-line">
            {{ artist.description }}
          </p>
        </div>
        <img
          v-if="artist.image_path"
          :src="getImageUrl(artist.image_path)"
          :alt="artist.name"
          class="aspect-square w-full rounded-br-[64px] object-cover" />
        <div
          v-else
          class="aspect-square w-full rounded-br-[64px] bg-gradient-to-br from-blue-200 to-pink-200"
          aria-hidden="true"></div>
      </article>

      <section v-if="artist.events.length" class="flex flex-col gap-32">
        <h2>Au programme</h2>
        <ul class="grid gap-24 sm:grid-cols-2 lg:grid-cols-3">
          <li v-for="event in artist.events" :key="event.id">
            <RouterLink :to="{ name: 'evenement', params: { id: event.id } }" class="block">
              <EventCard :event="{ ...event, artists: [artist] }" />
            </RouterLink>
          </li>
        </ul>
      </section>
    </template>
  </div>
</template>
