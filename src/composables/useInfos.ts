import { onMounted, ref } from 'vue'
import { getInfos } from '@/lib/handlers'
import type { Info } from '@/types'

export function useInfos() {
  const infos = ref<Info[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  async function refresh() {
    loading.value = true
    error.value = null
    try {
      infos.value = await getInfos()
    } catch (e) {
      error.value = (e as Error).message
    } finally {
      loading.value = false
    }
  }

  onMounted(refresh)

  return { infos, loading, error, refresh }
}
