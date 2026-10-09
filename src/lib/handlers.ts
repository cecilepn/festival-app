import { supabase } from './supabaseClient'
import type { TablesInsert } from '@/types/database'

// Artists

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
    .maybeSingle()
  if (error) throw new Error(error.message)
  return data
}

// Events

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

// Venues

export async function getVenues() {
  const { data, error } = await supabase.from('venues').select().order('name')
  if (error) throw new Error(error.message)
  return data
}

// Infos

export async function getInfos() {
  const { data, error } = await supabase.from('infos').select().order('category')
  if (error) throw new Error(error.message)
  return data
}

// Passes

export async function getPasses() {
  const { data, error } = await supabase.from('passes').select().order('start_date')
  if (error) throw new Error(error.message)
  return data
}

// Subscribers

export async function addSubscriber(email: string) {
  const { error } = await supabase.from('subscribers').insert({ email })
  if (error) throw new Error(error.message)
}

// Visitors

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

// Orders

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
