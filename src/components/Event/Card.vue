<script setup lang="ts">
  import { formatTime, statusLabels } from '@/lib/eventFormat'
  import type { EventWithDetails } from '@/types'

  defineProps<{
    event: EventWithDetails
  }>()
</script>

<template>
  <div>
    <p>{{ event.name }}</p>
    <p>{{ event.venues.name }}</p>
    <p v-if="event.artists.length">
      {{ event.artists.map(artist => artist.name).join(', ') }}
    </p>
    <p v-if="statusLabels[event.status]">
      {{ statusLabels[event.status] }}
    </p>
    <div>
      <p>
        <time :datetime="event.starts_at">
          {{ formatTime(event.starts_at) }}
        </time>
        –
        <time :datetime="event.ends_at">
          {{ formatTime(event.ends_at) }}
        </time>
      </p>
    </div>
  </div>
</template>
