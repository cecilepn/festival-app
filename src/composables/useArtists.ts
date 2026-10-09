import { onMounted, ref } from 'vue'
import { getArtists } from '../lib/handlers'
import type { Artist } from '../types'

export function useArtists() {
  const artists = ref<Artist[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  async function refresh() {
    loading.value = true
    error.value = null
    try {
      artists.value = await getArtists()
    } catch (e) {
      error.value = (e as Error).message
    } finally {
      loading.value = false
    }
  }

  onMounted(refresh)

  return { artists, loading, error, refresh }
}
