import { supabase } from '@/lib/supabaseClient'
import type { TablesInsert } from '@/types/database'

export async function getOrdersByVisitor(visitorId: string) {
  const { data, error } = await supabase
    .from('orders')
    .select('*, passes(*)')
    .eq('visitor_id', visitorId)
    .order('purchased_at', { ascending: false })
  if (error) throw new Error(error.message)
  return data
}

export async function createOrder(order: TablesInsert<'orders'>) {
  const { data, error } = await supabase.from('orders').insert(order).select().single()
  if (error) throw new Error(error.message)
  return data
}
