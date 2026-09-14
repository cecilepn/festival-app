<script setup lang="ts">
  import type { FestivalEvent } from '../data/events'
  withDefaults(
    defineProps<{
      event: FestivalEvent
      featured?: boolean
    }>(),
    { featured: false }
  )
</script>

<template>
  <a :href="`events/${event.id}`" class="card flex-col gap-s">
    <div class="flex-col gap-xs">
      <h2>{{ event.title }}</h2>
      <p class="eyebrow">{{ event.day }}, {{ event.time }}</p>
    </div>
    <p>{{ event.category }}</p>
    <p>{{ event.venue }}</p>
    <p v-if="featured" class="highlight-card__featured">Mis en avant</p>
  </a>
</template>

<style scoped>
  a {
    text-decoration: none;
  }

  .card {
    border: #d9ff66 solid 1px;
    border-radius: 10px;
    padding: 24px;
  }

  .highlight-card {
    min-block-size: 13rem;
    padding: 1.25rem;
    border: 1px solid var(--border-default);
    border-radius: 1rem;
    background: var(--background-surface);
  }

  .highlight-card__category {
    color: var(--text-accent);
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .highlight-card__featured {
    width: fit-content;
    align-self: flex-end;
    margin: 0 0 0.5rem;
    padding: 0.25rem 0.55rem;
    border-radius: 999px;
    color: #171422;
    background: var(--text-accent);
    font-size: 0.75rem;
    font-weight: 800;
  }

  h3 {
    margin-block: 1.5rem 0.75rem;
    font-size: clamp(1.4rem, 4vw, 2rem);
  }

  p {
    margin-block: 0.3rem;
  }
</style>
