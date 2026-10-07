<script setup lang="ts">
  import { onMounted, ref } from 'vue'
  import { supabase } from './lib/supabaseClient'

  type Instrument = {
    id: number
    name: string
  }

  const instruments = ref<Instrument[]>([])
  const error = ref<string | null>(null)

  async function getInstruments() {
    const { data, error: fetchError } = await supabase
      .from('instruments')
      .select()

    if (fetchError) {
      error.value = fetchError.message
      return
    }

    instruments.value = data
  }

  onMounted(() => {
    getInstruments()
  })
</script>

<template>
  <Menu />
  <RouterView />
  <Newsletter />
  <Footer />
</template>

<script setup lang="ts">
  import Menu from './components/Menu.vue'
  import Footer from './components/Footer.vue'
  import Newsletter from './components/Newsletter.vue'
</script>
