import { motion } from 'framer-motion'
import {
  ArrowRight,
  Clock3,
  Gamepad2,
  MapPin,
  Megaphone,
  Tags,
  Sparkles,
} from 'lucide-react'

type HeroSectionProps = {
  waLink: string
}

function HeroSection({ waLink }: HeroSectionProps) {
  return (
    <section id="home" className="mx-auto grid w-full max-w-6xl scroll-mt-28 gap-4 px-4 pb-6 pt-6 md:grid-cols-[1.1fr_1fr] md:px-6 md:pt-10">
      <motion.div
        className="neo-card neo-grid-bg overflow-hidden bg-gradient-to-br from-vault-orange via-vault-sun to-vault-lime p-5 md:p-8"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="mb-4 inline-flex items-center gap-2 border-[3px] border-vault-ink bg-vault-cream px-3 py-1 font-bold uppercase shadow-[4px_4px_0_#5f4a3f]">
          <Sparkles size={16} /> Premium Portable Gaming - PS 4
        </div>
        <h1 className="m-0 text-4xl font-black uppercase leading-none tracking-tight md:text-6xl">
          VaultPlayBox
        </h1>
        <p className="mt-4 max-w-2xl text-base font-semibold md:text-lg">
          Rental PS4 premium yang bikin acara kamu naik level. Tinggal booking,
          unit datang, colok ke TV, dan langsung mabar.
        </p>
        <p className="mt-3 max-w-2xl text-base font-semibold md:text-lg">
          ⚡ Plug & Play | 📍 Medan RingRoad | Siap Antar Jemput
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          <a
            className="neo-button bg-vault-lime shadow-[5px_5px_0_#1b130f]"
            href={waLink}
            target="_blank"
            rel="noreferrer"
          >
            Sewa Sekarang <ArrowRight size={18} />
          </a>
          <a className="neo-button bg-vault-cream shadow-[5px_5px_0_#5f4a3f]" href="#paket">
            Lihat Paket <Gamepad2 size={18} />
          </a>
        </div>

        <div className="mt-6 grid gap-2 md:grid-cols-3">
          <div className="neo-card bg-vault-cream p-3 font-semibold">Booking cepat, admin responsif, proses anti ribet</div>
          <div className="neo-card bg-vault-cream p-3 font-semibold">Plug & Play: unit siap pakai tanpa setting panjang</div>
          <div className="neo-card bg-vault-cream p-3 font-semibold">Medan sekitarnya</div>
        </div>
      </motion.div>

      <motion.div
        className="neo-card bg-vault-cream p-5 md:p-7"
        initial={{ opacity: 0, x: 34 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <div className="neo-card relative overflow-hidden bg-vault-cream p-2">
          <span className="absolute left-3 top-3 z-10 inline-flex -rotate-6 items-center gap-1 border-[3px] border-vault-ink bg-red-600 px-3 py-1 text-xs font-black uppercase text-white shadow-[4px_4px_0_#1b130f] md:text-sm">
            <Megaphone size={14} /> Promo Launch
          </span>
          <img
            src="/promolaunch.png"
            alt="Promo Launch VaultPlayBox"
            className="h-auto w-full border-[3px] border-vault-ink object-cover"
          />
        </div>

        <div className="mt-4 neo-card bg-vault-sun p-4">
          <p className="m-0 flex items-center gap-2 text-sm font-extrabold uppercase text-vault-soft">
            <Megaphone size={16} /> Promo Launch April 2026
          </p>
          <h3 className="mt-2 text-2xl font-black uppercase">Full Day Cuma 135K Aja</h3>
          <p className="mt-1 flex items-center gap-2 font-semibold">
            <MapPin size={16} /> Medan RingRoad & Sekitarnya
          </p>
          <p className="mt-1 flex items-center gap-2 font-semibold">
            <Clock3 size={16} /> Slot Cepat Penuh di Jam Prime Time
          </p>
          <p className="mt-1 flex items-center gap-2 font-semibold">
            <Tags size={16} /> Harga promo terbatas selama periode launch
          </p>
        </div>

        <a
          className="neo-button mt-4 w-full justify-center bg-vault-orange shadow-[5px_5px_0_#5f4a3f]"
          href={waLink}
          target="_blank"
          rel="noreferrer"
        >
          Chat Admin Sekarang <ArrowRight size={18} />
        </a>
      </motion.div>
    </section>
  )
}

export default HeroSection
