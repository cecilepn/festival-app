<script setup lang="ts">
  import { isFilled } from '@prismicio/client'
  import { PrismicLink } from '@prismicio/vue'
  import { onMounted, ref } from 'vue'

  import { prismic } from '../lib/prismicClient'

  const menu = ref<Awaited<ReturnType<typeof prismic.getSingle>> | null>(null)
  const error = ref<string | null>(null)

  onMounted(async () => {
    try {
      menu.value = await prismic.getSingle('main_menu')
    } catch (fetchError) {
      error.value =
        fetchError instanceof Error
          ? fetchError.message
          : 'Impossible de charger le menu.'
    }
  })
</script>

<template>
  <header class="site-header">
    <nav v-if="menu" aria-label="Navigation principale">
      <ul class="site-menu">
        <li v-for="(item, index) in menu.data.link" :key="item.key ?? index">
          <PrismicLink v-if="isFilled.link(item)" :field="item">
            {{ item.text }}
          </PrismicLink>
          <span v-else>{{ item.text }}</span>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
  .site-header {
    padding: 1rem 2rem;
  }

  .site-menu {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1.5rem;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .site-menu a {
    color: inherit;
  }

  .site-menu span {
    color: inherit;
  }

  .site-header__error {
    margin: 0;
  }
</style>
