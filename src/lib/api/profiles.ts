import { createClient } from '@/lib/supabase/server'
import { UserProfile } from '@/types/profile'

export async function getProfiles(): Promise<UserProfile[]> {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .order('current_price', { ascending: false })
    .limit(20)

  if (error) {
    console.error('Error fetching profiles:', error)
    return []
  }

  return data
}

export async function getProfile(id: string): Promise<UserProfile | null> {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', id)
    .single()

  if (error) {
    console.error('Error fetching profile:', error)
    return null
  }

  return data
}

export async function buyProfile(profileId: string, buyerId: string): Promise<boolean> {
  const supabase = createClient()
  const { error } = await supabase.rpc('buy_profile', {
    profile_id: profileId,
    buyer_id: buyerId
  })

  if (error) {
    console.error('Error buying profile:', error)
    return false
  }

  return true
}