<script setup lang="ts">
  import { onMounted, ref } from 'vue'
  import { supabase } from './lib/supabaseClient'

  type Artist = {
    id: number
    name: string
    description: string
  }

  const artists = ref<Artist[]>([])
  const error = ref<string | null>(null)

  async function getArtists() {
    const { data, error: fetchError } = await supabase.from('artists').select()
    console.log({ data })

    if (fetchError) {
      error.value = fetchError.message
      return
    }

    artists.value = data
  }

  onMounted(() => {
    getArtists()
  })
</script>

<template>
  <p v-if="error">Error loading artists: {{ error }}</p>
  <ul v-else>
    <li v-for="artist in artists" :key="artist.id">
      {{ artist.name }}
      {{ artist.description }}
    </li>
  </ul>
</template>
