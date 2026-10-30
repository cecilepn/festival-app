import { onMounted, ref } from 'vue'
import { getSections } from '@/lib/handlers'
import type { Section } from '@/types'

export function useSections(page: string) {
  const sections = ref<Section[]>([])
  const loading = ref(true)
  const error = ref<string | null>(null)

  async function refresh() {
    loading.value = true
    error.value = null
    try {
      sections.value = await getSections(page)
    } catch (e) {
      error.value = (e as Error).message
    } finally {
      loading.value = false
    }
  }

  onMounted(refresh)

  return { sections, loading, error, refresh }
}
