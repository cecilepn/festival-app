import { supabase } from '@/lib/supabaseClient'

export async function getVenues() {
  const { data, error } = await supabase.from('venues').select().order('name')
  if (error) throw new Error(error.message)
  return data
}
