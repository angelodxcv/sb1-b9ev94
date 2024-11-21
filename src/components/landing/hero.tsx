import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function LandingHero() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Your Social Marketplace Adventure Begins Here
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Buy, sell, and interact with other profiles in a dynamic marketplace. Earn rewards, complete missions, and climb the leaderboards!
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild>
              <Link href="/signup">Get Started</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/login">Sign In</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}