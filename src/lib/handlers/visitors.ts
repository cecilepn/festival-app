import { supabase } from '@/lib/supabaseClient'
import type { TablesInsert } from '@/types/database'

export async function getVisitor(id: string) {
  const { data, error } = await supabase.from('visitors').select().eq('id', id).maybeSingle()
  if (error) throw new Error(error.message)
  return data
}

export async function createVisitor(visitor: TablesInsert<'visitors'>) {
  const { data, error } = await supabase.from('visitors').insert(visitor).select().single()
  if (error) throw new Error(error.message)
  return data
}
