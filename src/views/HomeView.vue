<script setup lang="ts">
  import { defineSliceZoneComponents, SliceZone } from '@prismicio/vue'
  import { onMounted, ref } from 'vue'

  import HeroSlice from '../slices/HeroSlice.vue'
  import { prismic } from '../lib/prismicClient'
  import Button from '../components/Button.vue'

  const components = defineSliceZoneComponents({
    hero: HeroSlice
  })

  const homepage = ref<Awaited<ReturnType<typeof prismic.getSingle>> | null>(
    null
  )
  const loading = ref(true)
  const error = ref<string | null>(null)

  onMounted(async () => {
    try {
      homepage.value = await prismic.getSingle('homepage')
    } catch (fetchError) {
      error.value =
        fetchError instanceof Error
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
    <p v-else-if="error" role="alert">
      Erreur lors du chargement : {{ error }}
    </p>
    <SliceZone
      v-else-if="homepage"
      :slices="homepage.data.slices"
      :components="components" />
    <section class="programmation flex flex-col gap-40 items-center">
      <h2>Programmation</h2>
      <div class="grid-events gap-16">
        <img src="/programmation/event.png" alt="" />
        <img src="/programmation/event-1.png" alt="" />
        <img src="/programmation/event-2.png" alt="" />
        <img src="/programmation/event-3.png" alt="" />
        <img src="/programmation/event-4.png" alt="" />
        <img src="/programmation/event-5.png" alt="" />
      </div>
      <Button to="/programmation" variant="primary" class="body-s-semi-bold">
        En découvrir plus
      </Button>
    </section>

    <section class="billetterie flex flex-col gap-40 items-center">
      <h2>Billetterie</h2>
      <div class="grid-events gap-16">
        <div class="flex flex-col items-center gap-32">
          <img src="/pass/event.png" alt="" />
          <Button to="/billetterie" variant="primary" class="body-s-semi-bold">
            Acheter
          </Button>
        </div>
        <div class="flex flex-col items-center gap-32">
          <img src="/pass/event-1.png" alt="" />
          <Button to="/billetterie" variant="primary" class="body-s-semi-bold">
            Acheter
          </Button>
        </div>
        <div class="flex flex-col items-center gap-32">
          <img src="/pass/event-2.png" alt="" />
          <Button to="/billetterie" variant="primary" class="body-s-semi-bold">
            Acheter
          </Button>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
  .programmation {
    padding: var(--spacing-80) 0;
  }
  .billetterie {
    padding-bottom: var(--spacing-80);
  }
  .grid-events {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    padding: 0 var(--spacing-32);
  }
</style>
