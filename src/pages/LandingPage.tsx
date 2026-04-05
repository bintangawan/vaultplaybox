import { useState } from 'react'
import AdvantagesSection from '../components/AdvantagesSection'
import FaqSection from '../components/FaqSection'
import FindUsSection from '../components/FindUsSection'
import FloatingWhatsapp from '../components/FloatingWhatsapp'
import HeroSection from '../components/HeroSection'
import HowToRentSection from '../components/HowToRentSection'
import RentalPackagesSection from '../components/RentalPackagesSection'
import SiteHeader from '../components/SiteHeader'
import TermsSection from '../components/TermsSection'
import TestimonialsSection from '../components/TestimonialsSection'
import UnitSpecsSection from '../components/UnitSpecsSection'
import WarningsSection from '../components/WarningsSection'

const WA_NUMBER = '085111224415'
const WA_LINK = `https://wa.me/${WA_NUMBER}`

function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="relative pb-10">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-70">
        <div className="neo-grid-bg h-full w-full" />
      </div>

      <SiteHeader
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen((prev) => !prev)}
        onCloseMenu={() => setMenuOpen(false)}
        waLink={WA_LINK}
      />

      <main>
        <HeroSection waLink={WA_LINK} />
        <UnitSpecsSection />
        <HowToRentSection />
        <RentalPackagesSection waNumber={WA_NUMBER} />
        <AdvantagesSection />
        <TestimonialsSection />
        <WarningsSection />
        <TermsSection />
        <FaqSection />
        <FindUsSection />

        <footer className="mx-auto w-full max-w-6xl px-4 pb-4 md:px-6">
          <div className="neo-card bg-vault-cream p-5 text-sm font-semibold text-vault-soft">
            VaultPlayBox - Premium Gaming PS4 Rental
          </div>
        </footer>
      </main>

      <FloatingWhatsapp waLink={WA_LINK} />
    </div>
  )
}

export default LandingPage
