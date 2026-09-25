<script setup lang="ts">
  import Button from './Button.vue'

  const dates = ['7 Mai', '8 Mai', '9 Mai']
  const selectedDate = defineModel<string | null>({ required: true })
</script>

<template>
  <section class="filters flex gap-16" aria-label="Filtres de programmation">
    <div class="filters__dates" aria-label="Dates des événements">
      <Button
        v-for="date in dates"
        :key="date"
        :variant="selectedDate === date ? 'filter-active' : 'filter'"
        :aria-pressed="selectedDate === date"
        class="body-s-semi-bold"
        @click="selectedDate = selectedDate === date ? null : date">
        {{ date }}
      </Button>
    </div>
  </section>
</template>

<style scoped>
  .filters__type {
    justify-content: space-between;
  }

  .filters__dates {
    display: flex;
    justify-content: space-between;
    gap: var(--spacing-16);
  }
</style>
