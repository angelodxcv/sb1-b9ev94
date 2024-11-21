import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { createClient } from '@/lib/supabase/client'

export function AuthForm() {
  const supabase = createClient()

  return (
    <Auth
      supabaseClient={supabase}
      appearance={{ theme: ThemeSupa }}
      theme="default"
      showLinks={true}
      providers={['google', 'facebook']}
      redirectTo={`${window.location.origin}/auth/callback`}
    />
  )
}