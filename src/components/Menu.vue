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
  <header>
    <nav v-if="menu" aria-label="Navigation principale" class="menu flex">
      <a href="/">
        <img src="/logo.png" alt="" />
      </a>
      <ul class="links flex justify-around items-center w-full">
        <li v-for="(item, index) in menu.data.link" :key="item.key ?? index">
          <PrismicLink v-if="isFilled.link(item)" :field="item">
            {{ item.text }}
          </PrismicLink>
          <span v-else>{{ item.text }}</span>
        </li>
      </ul>
    </nav>
    <p v-else-if="error" role="alert" class="site-menu__error">
      {{ error }}
    </p>
  </header>
</template>

<style scoped>
  .menu {
    padding: var(--spacing-16) var(--spacing-32);
  }
</style>
