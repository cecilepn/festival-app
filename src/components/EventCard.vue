<script setup lang="ts">
  import type { EventWithDetails } from '@/types'

  defineProps<{
    event: EventWithDetails
  }>()

  const statusLabels: Record<string, string> = {
    sold_out: 'Complet',
    cancelled: 'Annulé'
  }

  const timeFormatter = new Intl.DateTimeFormat('fr-FR', {
    hour: '2-digit',
    minute: '2-digit'
  })

  function formatTime(date: string) {
    return timeFormatter.format(new Date(date))
  }
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
