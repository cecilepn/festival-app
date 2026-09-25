<script setup lang="ts">
  import { PrismicImage, PrismicRichText } from '@prismicio/vue'
  import type { ImageField, RichTextField } from '@prismicio/client'

  defineProps<{
    slice: {
      primary: {
        eyebrow: RichTextField
        main_title: RichTextField
        description: RichTextField
        bg_image: ImageField
      }
    }
  }>()
</script>

<template>
  <section class="hero">
    <PrismicImage
      v-if="slice.primary.bg_image"
      :field="slice.primary.bg_image"
      class="hero__image" />
    <div class="hero__content flex flex-col items-center gap-24">
      <PrismicRichText :field="slice.primary.eyebrow" />
      <PrismicRichText :field="slice.primary.main_title" />
      <PrismicRichText :field="slice.primary.description" />
    </div>
  </section>
</template>

<style scoped>
  .hero {
    position: relative;
    min-height: 80vh;
    display: grid;
    align-items: center;
    overflow: hidden;
  }

  .hero__image {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .hero__content {
    z-index: 1;
    padding: 2rem;
    color: var(--color-white);
  }
</style>
