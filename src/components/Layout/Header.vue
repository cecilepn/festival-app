<script setup lang="ts">
  import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
  import { RouterLink, useRoute } from 'vue-router'

  const links = [
    { to: '/', label: 'Le festival' },
    { to: '/programmation', label: 'Programmation' },
    { to: '/artistes', label: 'Artistes' },
    { to: '/infos-pratiques', label: 'Infos pratiques' },
    { to: '/notre-histoire', label: 'Notre histoire' }
  ]

  // Mobile menu state. On desktop (lg and up) the links are always visible.
  const isMenuOpen = ref(false)
  const route = useRoute()

  // Close the menu after navigating to another page.
  watch(() => route.fullPath, () => (isMenuOpen.value = false))

  // Close the menu with the Escape key.
  function onKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') isMenuOpen.value = false
  }
  onMounted(() => document.addEventListener('keydown', onKeydown))
  onBeforeUnmount(() => document.removeEventListener('keydown', onKeydown))
</script>

<template>
  <header class="px-16 py-24 lg:px-80">
    <nav aria-label="Navigation principale" class="flex flex-wrap items-center justify-between gap-16">
      <RouterLink to="/" class="shrink-0">
        <span class="sr-only">Eclosion, accueil</span>
        <img src="/logo.png" alt="" class="size-56" />
      </RouterLink>

      <!-- Mobile: stacked list shown under the header row when the menu is open.
           Desktop: inline pill, always visible. -->
      <ul
        id="main-menu"
        :class="isMenuOpen ? 'flex' : 'hidden'"
        class="order-last w-full flex-col gap-24 rounded-[32px] border-2 border-black px-32 py-24 lg:order-none lg:flex lg:w-auto lg:flex-row lg:gap-24 lg:rounded-full xl:gap-48 lg:py-16 lg:whitespace-nowrap">
        <li v-for="link in links" :key="link.to">
          <RouterLink :to="link.to" class="nav-link">{{ link.label }}</RouterLink>
        </li>
      </ul>

      <div class="flex items-center gap-16">
        <a href="https://billetterie.laclef.asso.fr/" target="_blank" rel="noopener" class="button">
          Billetterie
          <span class="sr-only">(nouvel onglet)</span>
        </a>

        <button
          type="button"
          class="flex size-48 items-center justify-center rounded-full border-2 border-black lg:hidden"
          aria-controls="main-menu"
          :aria-expanded="isMenuOpen"
          @click="isMenuOpen = !isMenuOpen">
          <span class="sr-only">{{ isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu' }}</span>
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            class="size-24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round">
            <path v-if="isMenuOpen" d="M6 6l12 12M18 6L6 18" />
            <path v-else d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>
    </nav>
  </header>
</template>

<style scoped>
  @reference '../../global.css';

  .nav-link {
    @apply font-medium no-underline underline-offset-4 hover:underline aria-[current=page]:underline;
  }
</style>
