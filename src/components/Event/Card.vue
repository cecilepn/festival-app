<script setup lang="ts">
  import { computed } from 'vue'
  import { getImageUrl } from '@/lib/getImageUrl'
  import { formatDateBadge, formatTime, statusLabels, typeLabels } from '@/lib/eventFormat'
  import type { EventWithDetails } from '@/types'

  const props = defineProps<{
    event: EventWithDetails
  }>()

  const date = computed(() => formatDateBadge(props.event.starts_at))
  const imagePath = computed(() => props.event.artists.find(artist => artist.image_path)?.image_path)
</script>

<template>
  <article class="group relative aspect-square overflow-hidden rounded-br-[48px] bg-blue-50">
    <img
      v-if="imagePath"
      :src="getImageUrl(imagePath)"
      alt=""
      loading="lazy"
      class="absolute inset-0 size-full object-cover transition-transform duration-300 group-hover:scale-105" />

    <time
      :datetime="event.starts_at"
      class="absolute left-0 top-0 flex w-60 flex-col items-center gap-4 bg-blue-200 py-16 text-body-m text-blue-500">
      <span>{{ date.day }}</span>
      <span class="font-semibold">{{ date.month }}</span>
      <span>{{ date.year }}</span>
    </time>

    <p
      v-if="event.type"
      class="absolute right-16 top-16 rounded-full border border-blue-300 bg-white px-32 py-2 text-label text-blue-500">
      {{ typeLabels[event.type] ?? event.type }}
    </p>

    <div
      class="absolute inset-x-0 bottom-0 flex flex-col gap-4 bg-black/30 px-24 pb-16 pt-24 text-white backdrop-blur-sm">
      <h3 class="truncate">{{ event.name }}</h3>
      <p class="text-label">
        <span v-if="statusLabels[event.status]" class="font-semibold">
          {{ statusLabels[event.status] }} ·
        </span>
        {{ event.venues.name }} - {{ formatTime(event.starts_at) }}
      </p>
    </div>
  </article>
</template>
