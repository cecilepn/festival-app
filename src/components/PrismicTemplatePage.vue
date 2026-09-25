<script setup lang="ts">
import { defineSliceZoneComponents, SliceZone } from '@prismicio/vue'
import { onMounted, ref, watch } from 'vue'

import HeroSlice from '../slices/HeroSlice.vue'
import PublishedContentSlice from '../slices/PublishedContentSlice.vue'
import { prismic } from '../lib/prismicClient'

const props = defineProps<{ uid: string }>()

const components = defineSliceZoneComponents({
  hero: HeroSlice,
  published_content: PublishedContentSlice,
})

type PrismicPage = Awaited<ReturnType<typeof prismic.getByUID>>

const page = ref<PrismicPage | null>(null)
const loading = ref(true)
const error = ref<string | null>(null)

async function loadPage(uid: string) {
  loading.value = true
  error.value = null

  try {
    page.value = await prismic.getByUID('template_page', uid)
  } catch (fetchError) {
    page.value = null
    error.value = fetchError instanceof Error
      ? fetchError.message
      : 'Impossible de charger cette page Prismic.'
  } finally {
    loading.value = false
  }
}

onMounted(() => loadPage(props.uid))
watch(() => props.uid, (uid) => loadPage(uid))
</script>

<template>
  <main>
    <p v-if="loading" role="status">Chargement de la page…</p>
    <p v-else-if="error" role="alert">Erreur lors du chargement : {{ error }}</p>
    <SliceZone
      v-else-if="page"
      :slices="page.data.slices"
      :components="components"
    />
    <p v-else>Cette page ne contient pas de contenu.</p>
  </main>
</template>
