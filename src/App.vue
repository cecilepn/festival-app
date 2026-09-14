<script setup lang="ts">
  import { ref } from 'vue'
  import CardEvent from './components/CardEvent.vue'
  import { events } from './data/events.ts'
  const festival = {
    name: 'Festival',
    promise: 'Le meilleur'
  }
  const isIntroVisible = ref(false)
</script>

<template>
  <header class="site-header">
    <a class="brand" href="#">{{ festival.name }}</a>
    <nav aria-label="Navigation principale">
      <a href="#highlights">Programmation</a>
    </nav>
  </header>

  <main>
    <section class="hero">
      <p class="eyebrow">Festival associatif · 12–13 juin</p>
      <h1>{{ festival.promise }}</h1>
      <button @click="isIntroVisible = !isIntroVisible">En savoir plus</button>
      <p v-if="isIntroVisible" class="intro">je suis l'info en savoir plus</p>
    </section>
    <section class="flex gap-m">
      <CardEvent v-for="(event, e) in events" :event="event" :key="e" />
    </section>
  </main>
</template>
