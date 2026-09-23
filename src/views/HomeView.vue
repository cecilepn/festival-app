<script setup lang="ts">
import { defineSliceZoneComponents, SliceZone } from '@prismicio/vue'
import { onMounted, ref } from 'vue'

import HeroSlice from '../slices/HeroSlice.vue'
import { prismic } from '../lib/prismicClient'

const components = defineSliceZoneComponents({
  hero: HeroSlice,
})

const homepage = ref<Awaited<ReturnType<typeof prismic.getSingle>> | null>(null)
const loading = ref(true)
const error = ref<string | null>(null)

onMounted(async () => {
  try {
    homepage.value = await prismic.getSingle('homepage')
  } catch (fetchError) {
    error.value = fetchError instanceof Error
      ? fetchError.message
      : 'Impossible de charger la page d’accueil Prismic.'
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <main>
    <p v-if="loading" role="status">Chargement de la page d’accueil…</p>
    <p v-else-if="error" role="alert">Erreur lors du chargement : {{ error }}</p>
    <SliceZone
      v-else-if="homepage"
      :slices="homepage.data.body"
      :components="components"
    />
    <p v-else>Aucun contenu disponible pour la page d’accueil.</p>
  </main>
</template>
