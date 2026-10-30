<script setup lang="ts">
  import ArtistCard from '@/components/Artist/Card.vue'
  import { useArtists } from '@/composables/useArtists'

  const { artists, loading, error } = useArtists()
</script>

<template>
  <h1>Artistes</h1>

  <p v-if="loading">Chargement…</p>
  <p v-else-if="error">Error loading artists: {{ error }}</p>
  <p v-else-if="!artists.length">Aucun artiste pour le moment.</p>

  <ul v-else>
    <li v-for="artist in artists" :key="artist.id">
      <RouterLink :to="{ name: 'artiste', params: { id: artist.id } }">
        <ArtistCard :artist="artist" />
      </RouterLink>
    </li>
  </ul>
</template>
