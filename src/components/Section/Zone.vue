<script setup lang="ts">
  import type { Component } from 'vue'
  import SectionHero from '@/components/Section/Hero.vue'
  import SectionText from '@/components/Section/Text.vue'
  import SectionTextImage from '@/components/Section/TextImage.vue'
  import type { Section } from '@/types'

  defineProps<{
    sections: Section[]
  }>()

  const components: Record<string, Component> = {
    text: SectionText,
    text_image: SectionTextImage,
    hero: SectionHero
  }
</script>

<template>
  <component
    :is="components[section.variation]"
    v-for="section in sections"
    :key="section.id"
    :section="section" />
</template>
