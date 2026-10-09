import { onMounted, ref } from 'vue'
import { supabase } from '../lib/supabaseClient'
import type { Artist } from '../types'

export function useFetchData() {
  const artists = ref<Artist[]>([])
  const error = ref<string | null>(null)

  async function getArtists() {
    const { data, error: fetchError } = await supabase.from('artists').select()

    if (fetchError) {
      error.value = fetchError.message
      return
    }

    artists.value = data
  }

  onMounted(() => {
    getArtists()
  })

  return {
    error,
    artists
  }
}
