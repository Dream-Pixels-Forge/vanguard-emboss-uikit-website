import { Analytics } from '@vercel/analytics/react'
import { ThemeProvider } from './hooks/useTheme'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { HeroSection } from './sections/HeroSection'
import { TypographySection } from './sections/TypographySection'
import { ButtonsSection } from './sections/ButtonsSection'
import { CardsSection } from './sections/CardsSection'
import { BadgesSection } from './sections/BadgesSection'
import { FormsSection } from './sections/FormsSection'
import { NavigationSection } from './sections/NavigationSection'
import { FeedbackSection } from './sections/FeedbackSection'
import { ProgressSection } from './sections/ProgressSection'
import { InteractiveSection } from './sections/InteractiveSection'

export default function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <div className="min-h-screen bg-emboss-bg-light text-foreground dark:bg-emboss-bg-dark">
        <Navbar />
        <main>
          <HeroSection />
          <TypographySection />
          <ButtonsSection />
          <CardsSection />
          <BadgesSection />
          <FormsSection />
          <NavigationSection />
          <FeedbackSection />
          <ProgressSection />
          <InteractiveSection />
        </main>
        <Footer />
        <Analytics />
      </div>
    </ThemeProvider>
  )
}
