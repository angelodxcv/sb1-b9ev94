import { LandingHero } from '@/components/landing/hero'
import { Features } from '@/components/landing/features'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <LandingHero />
      <Features />
    </main>
  )
}