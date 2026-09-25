<script setup lang="ts">
  import { isFilled } from '@prismicio/client'
  import { PrismicLink } from '@prismicio/vue'
  import { computed } from 'vue'
  import Button from './Button.vue'
  import { onMounted, ref } from 'vue'

  import { prismic } from '../lib/prismicClient'

  const menu = ref<Awaited<ReturnType<typeof prismic.getSingle>> | null>(null)
  const error = ref<string | null>(null)
  const navigationItems = computed(
    () =>
      menu.value?.data.link.filter(item => item.text !== 'Billetterie') ?? []
  )
  const ticketItem = computed(() =>
    menu.value?.data.link.find(item => item.text === 'Billetterie')
  )

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
    <nav
      v-if="menu"
      aria-label="Navigation principale"
      class="menu flex gap-32">
      <a href="/">
        <img src="/logo.png" alt="" />
      </a>
      <div
        class="menu__links flex items-center w-full body-s-semi-bold justify-around">
        <template
          v-for="(item, index) in navigationItems"
          :key="item.key ?? index">
          <PrismicLink v-if="isFilled.link(item)" :field="item">
            {{ item.text }}
          </PrismicLink>
          <span v-else>{{ item.text }}</span>
        </template>
      </div>
      <Button
        v-if="ticketItem"
        to="/billetterie"
        variant="primary"
        class="body-s-semi-bold">
        {{ ticketItem.text }}
      </Button>
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

  .menu__links {
    border: solid 2px var(--color-black);
    border-radius: var(--spacing-32);
  }
</style>
