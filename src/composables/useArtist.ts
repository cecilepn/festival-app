import { onMounted, ref } from 'vue'
import { getArtistById } from '@/lib/handlers'
import type { ArtistWithEvents } from '@/types'

export function useArtist(id: number) {
  const artist = ref<ArtistWithEvents | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)

  async function refresh() {
    loading.value = true
    error.value = null
    try {
      artist.value = Number.isInteger(id) ? await getArtistById(id) : null
    } catch (e) {
      error.value = (e as Error).message
    } finally {
      loading.value = false
    }
  }

  onMounted(refresh)

  return { artist, loading, error, refresh }
}
