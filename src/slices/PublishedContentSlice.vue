<script setup lang="ts">
  import type { ImageField, RichTextField } from '@prismicio/client'
  import { PrismicImage, PrismicRichText } from '@prismicio/vue'
  import { computed } from 'vue'

  const props = defineProps<{
    slice: {
      primary: Record<string, unknown>
    }
  }>()

  const richTextFields = computed(() =>
    Object.entries(props.slice.primary).flatMap(([key, value]) => {
      if (
        !Array.isArray(value) ||
        !value.some(
          (node) => node && typeof node === 'object' && 'type' in node,
        )
      ) {
        return []
      }

      return [{ key, field: value as RichTextField }]
    }),
  )

  const imageFields = computed(() =>
    Object.entries(props.slice.primary).flatMap(([key, value]) => {
      if (
        !value ||
        typeof value !== 'object' ||
        !('url' in value) ||
        typeof value.url !== 'string'
      ) {
        return []
      }

      return [{ key, field: value as ImageField }]
    }),
  )
</script>

<template>
  <section class="published-content">
    <PrismicRichText
      v-for="item in richTextFields"
      :key="item.key"
      :field="item.field"
      class="published-content__text"
    />
    <PrismicImage
      v-for="item in imageFields"
      :key="item.key"
      :field="item.field"
      class="published-content__image"
    />
  </section>
</template>

<style scoped>
  .published-content {
    width: min(100% - 2 * var(--spacing-32), 75rem);
    margin-inline: auto;
    padding-block: var(--spacing-40);
  }

  .published-content__image {
    display: block;
    width: 100%;
    height: auto;
    margin-block: var(--spacing-24);
    object-fit: cover;
  }
</style>
