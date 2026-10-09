import { onMounted, ref } from 'vue'
import { getEvents } from '@/lib/handlers'
import type { EventWithDetails } from '@/types'

export function useEvents() {
  const events = ref<EventWithDetails[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  async function refresh() {
    loading.value = true
    error.value = null
    try {
      events.value = await getEvents()
    } catch (e) {
      error.value = (e as Error).message
    } finally {
      loading.value = false
    }
  }

  onMounted(refresh)

  return { events, loading, error, refresh }
}
