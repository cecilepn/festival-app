import { supabase } from '@/lib/supabaseClient'

export async function addSubscriber(email: string) {
  const { error } = await supabase.from('subscribers').insert({ email })
  // 23505 : violation de la contrainte d'unicité sur l'email
  if (error?.code === '23505') return 'already_subscribed'
  if (error) throw new Error(error.message)
  return 'subscribed'
}
