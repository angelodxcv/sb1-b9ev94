export interface UserProfile {
  id: string
  username: string
  avatar_url: string
  current_price: number
  owner_id: string | null
  level: number
  experience: number
  last_sale_price: number
  total_transactions: number
  created_at: string
  updated_at: string
  cooldown_ends_at: string | null
}