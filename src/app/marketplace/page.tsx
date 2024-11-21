import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { ProfileGrid } from '@/components/marketplace/profile-grid'
import { getProfiles } from '@/lib/api/profiles'

export default async function MarketplacePage() {
  const supabase = createClient()
  const { data: { session } } = await supabase.auth.getSession()

  if (!session) {
    redirect('/login')
  }

  const profiles = await getProfiles()

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">Marketplace</h1>
          <ProfileGrid initialProfiles={profiles} />
        </div>
      </main>
    </div>
  )
}