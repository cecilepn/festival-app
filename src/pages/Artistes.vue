<script setup lang="ts">
  import ArtistCard from '@/components/Artist/Card.vue'
  import { useArtists } from '@/composables/useArtists'

  const { artists, loading, error } = useArtists()
</script>

<template>
  <div class="flex flex-col gap-48 px-16 pt-64">
    <h1>Artistes</h1>

    <p v-if="loading">Chargement…</p>
    <p v-else-if="error">Error loading artists: {{ error }}</p>
    <p v-else-if="!artists.length">Aucun artiste pour le moment.</p>

    <ul v-else class="grid gap-24 sm:grid-cols-2 lg:grid-cols-3">
      <li v-for="artist in artists" :key="artist.id">
        <RouterLink :to="{ name: 'artiste', params: { id: artist.id } }" class="block">
          <ArtistCard :artist="artist" />
        </RouterLink>
      </li>
    </ul>
  </div>
</template>
