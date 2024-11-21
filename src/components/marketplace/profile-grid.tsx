'use client'

import { useState } from 'react'
import { UserProfile } from '@/types/profile'
import { ProfileCard } from './profile-card'
import { buyProfile } from '@/lib/api/profiles'
import { useToast } from '@/hooks/use-toast'

interface ProfileGridProps {
  initialProfiles: UserProfile[]
}

export function ProfileGrid({ initialProfiles }: ProfileGridProps) {
  const [profiles, setProfiles] = useState<UserProfile[]>(initialProfiles)
  const { toast } = useToast()

  const handleBuy = async (profileId: string) => {
    const success = await buyProfile(profileId, 'current-user-id') // Replace with actual user ID
    if (success) {
      toast({
        title: 'Success',
        description: 'Profile purchased successfully!',
      })
      // Refresh profiles after purchase
      // You would typically implement real-time updates here
    } else {
      toast({
        title: 'Error',
        description: 'Failed to purchase profile. Please try again.',
        variant: 'destructive',
      })
    }
  }

  if (profiles.length === 0) {
    return (
      <div className="text-center mt-10">
        <h3 className="mt-2 text-sm font-semibold text-gray-900">No profiles</h3>
        <p className="mt-1 text-sm text-gray-500">Get started by exploring new profiles.</p>
      </div>
    )
  }

  return (
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {profiles.map((profile) => (
        <ProfileCard
          key={profile.id}
          profile={profile}
          onBuy={() => handleBuy(profile.id)}
        />
      ))}
    </div>
  )
}