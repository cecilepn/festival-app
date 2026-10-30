import { onMounted, ref } from 'vue'
import { getVenues } from '@/lib/handlers'
import type { Venue } from '@/types'

export function useVenues() {
  const venues = ref<Venue[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  async function refresh() {
    loading.value = true
    error.value = null
    try {
      venues.value = await getVenues()
    } catch (e) {
      error.value = (e as Error).message
    } finally {
      loading.value = false
    }
  }

  onMounted(refresh)

  return { venues, loading, error, refresh }
}
