import { supabase } from '@/lib/supabaseClient'

export async function getSections(page: string) {
  const { data, error } = await supabase
    .from('sections')
    .select()
    .eq('page', page)
    .order('position')
  if (error) throw new Error(error.message)
  return data
}
