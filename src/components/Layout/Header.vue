<script setup lang="ts">
  import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="px-16 py-24 lg:px-80">
    <nav
      aria-label="Navigation principale"
      class="flex flex-wrap items-center justify-between gap-16">
      <RouterLink to="/" class="shrink-0">
        <span class="sr-only">Eclosion, accueil</span>
        <img src="/logo.png" alt="" class="size-56" />
      </RouterLink>

      <ul
        class="order-last flex w-full gap-24 overflow-x-auto rounded-full [scrollbar-width:none] border-2 border-black px-32 py-16 whitespace-nowrap lg:order-none lg:w-auto lg:gap-48">
        <li><RouterLink to="/" class="nav-link">Le festival</RouterLink></li>
        <li><RouterLink to="/programmation" class="nav-link">Programmation</RouterLink></li>
        <li><RouterLink to="/artistes" class="nav-link">Artistes</RouterLink></li>
        <li><RouterLink to="/infos-pratiques" class="nav-link">Infos pratiques</RouterLink></li>
        <li><RouterLink to="/notre-histoire" class="nav-link">Notre histoire</RouterLink></li>
      </ul>

      <a
        href="https://billetterie.laclef.asso.fr/"
        target="_blank"
        rel="noopener"
        class="button">
        Billetterie
        <span class="sr-only">(nouvel onglet)</span>
      </a>
    </nav>
  </header>
</template>

<style scoped>
  @reference '../../global.css';

  .nav-link {
    @apply font-medium no-underline underline-offset-4 hover:underline aria-[current=page]:underline;
  }
</style>
