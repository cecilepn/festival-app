import { supabase } from '@/lib/supabaseClient'

export async function getInfos() {
  const { data, error } = await supabase.from('infos').select().order('category')
  if (error) throw new Error(error.message)
  return data
}
