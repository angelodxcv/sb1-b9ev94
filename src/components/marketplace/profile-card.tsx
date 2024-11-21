import { UserProfile } from '@/types/profile'
import { formatCurrency } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

interface ProfileCardProps {
  profile: UserProfile
  onBuy?: () => void
}

export function ProfileCard({ profile, onBuy }: ProfileCardProps) {
  const initials = profile.username
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()

  return (
    <div className="group relative bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none lg:h-80">
        <div className="flex items-center justify-center w-full h-full bg-gray-100">
          <Avatar className="h-32 w-32">
            <AvatarImage src={profile.avatar_url} alt={profile.username} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-900">{profile.username}</h3>
        <div className="mt-2 flex justify-between items-center">
          <p className="text-sm text-gray-500">Level {profile.level}</p>
          <p className="text-sm font-medium text-gray-900">
            {formatCurrency(profile.current_price)}
          </p>
        </div>
        <div className="mt-4">
          <Button
            onClick={onBuy}
            disabled={!!profile.cooldown_ends_at}
            className="w-full"
          >
            {profile.cooldown_ends_at ? 'In Cooldown' : 'Buy Now'}
          </Button>
        </div>
      </div>
    </div>
  )
}