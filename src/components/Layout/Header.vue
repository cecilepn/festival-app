<script setup lang="ts">
  import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <nav class="flex justify-around w-full items-center py-32">
      <RouterLink to="/">
        <span class="sr-only">Eclosion</span>
        <img src="/logo.png" alt="" class="size-56" />
      </RouterLink>
      <div class="flex gap-48 px-32 py-16 items-center border-2 rounded-full">
        <RouterLink to="/">Le festival</RouterLink>
        <RouterLink to="/programmation">Programmation</RouterLink>
        <RouterLink to="/artistes">Artistes</RouterLink>
        <RouterLink to="/infos-pratiques">Infos pratiques</RouterLink>
        <RouterLink to="/notre-histoire">Notre histoire</RouterLink>
      </div>
      <a
        href="https://billetterie.laclef.asso.fr/"
        target="_blank"
        class="button">
        Billetterie
      </a>
    </nav>
  </header>
</template>
