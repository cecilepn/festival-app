import { onMounted, ref } from 'vue'
import { getEventById } from '@/lib/handlers'
import type { EventWithDetails } from '@/types'

export function useEvent(id: number) {
  const event = ref<EventWithDetails | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)

  async function refresh() {
    loading.value = true
    error.value = null
    try {
      event.value = Number.isInteger(id) ? await getEventById(id) : null
    } catch (e) {
      error.value = (e as Error).message
    } finally {
      loading.value = false
    }
  }

  onMounted(refresh)

  return { event, loading, error, refresh }
}
