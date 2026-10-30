import { supabase } from './supabaseClient'

export function getImageUrl(path: string) {
  return supabase.storage.from('images').getPublicUrl(path).data.publicUrl
}
