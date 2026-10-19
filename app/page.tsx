import {
  CitywidePatterns,
  Footer,
  Hero,
  HowIBuiltIt,
  Insights,
  KoreatownSpotlight,
  WhereSection,
} from '@/components/story/sections'

export default function Page() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <Hero />
      <KoreatownSpotlight />
      <CitywidePatterns />
      <WhereSection />
      <Insights />
      <HowIBuiltIt />
      <Footer />
    </main>
  )
}
