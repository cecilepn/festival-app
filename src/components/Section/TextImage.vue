<script setup lang="ts">
  import { getImageUrl } from '@/lib/getImageUrl'
  import type { Section } from '@/types'

  defineProps<{
    section: Section
  }>()
</script>

<template>
  <section class="grid items-center gap-48 px-16 py-64 md:grid-cols-2 lg:px-48">
    <div class="flex flex-col gap-48">
      <h2>{{ section.title }}</h2>
      <p class="whitespace-pre-line">{{ section.body }}</p>
      <template v-if="section.button_url">
        <RouterLink
          v-if="section.button_url.startsWith('/')"
          :to="section.button_url"
          class="button-outline w-fit">
          {{ section.button_label }}
        </RouterLink>
        <a v-else :href="section.button_url" class="button-outline w-fit">
          {{ section.button_label }}
        </a>
      </template>
    </div>
    <img
      v-if="section.image_path"
      :src="getImageUrl(section.image_path)"
      :alt="section.image_alt ?? ''"
      loading="lazy"
      class="aspect-[588/522] w-full rounded-br-[64px] object-cover" />
  </section>
</template>
