import { createClient, SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ''

export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseAnonKey)

export type FeedbackRow = {
  id?: string
  name: string
  email?: string
  stars: number
  feedback_text: string
  created_at?: string
}
