export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          username: string
          avatar_url: string | null
          current_price: number
          owner_id: string | null
          level: number
          experience: number
          last_sale_price: number | null
          total_transactions: number
          cooldown_ends_at: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          username: string
          avatar_url?: string | null
          current_price?: number
          owner_id?: string | null
          level?: number
          experience?: number
          last_sale_price?: number | null
          total_transactions?: number
          cooldown_ends_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          username?: string
          avatar_url?: string | null
          current_price?: number
          owner_id?: string | null
          level?: number
          experience?: number
          last_sale_price?: number | null
          total_transactions?: number
          cooldown_ends_at?: string | null
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}