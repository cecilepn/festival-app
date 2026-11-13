import { supabase } from '@/lib/supabaseClient'

export async function getPasses() {
  const { data, error } = await supabase.from('passes').select().order('start_date')
  if (error) throw new Error(error.message)
  return data
}
