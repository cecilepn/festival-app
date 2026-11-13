import { supabase } from '@/lib/supabaseClient'

export async function getArtists() {
  const { data, error } = await supabase.from('artists').select().order('name')
  if (error) throw new Error(error.message)
  return data
}

export async function getArtistById(id: number) {
  const { data, error } = await supabase
    .from('artists')
    .select('*, events(*, venues(*))')
    .eq('id', id)
    .order('starts_at', { referencedTable: 'events' })
    .maybeSingle()
  if (error) throw new Error(error.message)
  return data
}
