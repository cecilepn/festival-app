import { supabase } from '@/lib/supabaseClient'

export async function getEvents() {
  const { data, error } = await supabase
    .from('events')
    .select('*, venues(*), artists(*)')
    .order('starts_at')
  if (error) throw new Error(error.message)
  return data
}

export async function getEventById(id: number) {
  const { data, error } = await supabase
    .from('events')
    .select('*, venues(*), artists(*)')
    .eq('id', id)
    .maybeSingle()
  if (error) throw new Error(error.message)
  return data
}
