import { ArrowRight, Clock3 } from 'lucide-react'

type RentalPackagesSectionProps = {
  waNumber: string
}

type RentalPackage = {
  name: string
  duration: string
  originalPrice: string
  promoPrice: string
  caption: string
}

const PACKAGES: RentalPackage[] = [
  {
    name: 'Short Play',
    duration: '5 Jam',
    originalPrice: '90K',
    promoPrice: '75K',
    caption: 'Paket hemat untuk mabar cepat yang tetap berkelas.',
  },
  {
    name: 'Half Day',
    duration: '12 Jam',
    originalPrice: '120K',
    promoPrice: '100K',
    caption: 'Durasi favorit untuk santai panjang tanpa buru-buru.',
  },
  {
    name: 'Full Day',
    duration: '24 Jam',
    originalPrice: '180K',
    promoPrice: '150K',
    caption: 'All-day gaming mode untuk event dan sesi rame seharian.',
  },
  {
    name: 'Paket Malam',
    duration: '22:00 - 08:00',
    originalPrice: '120K',
    promoPrice: '90K',
    caption: 'Night session paling worth it buat kamu yang aktif malam.',
  },
]

function buildWaLink(waNumber: string, message: string) {
  return `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`
}

function RentalPackagesSection({ waNumber }: RentalPackagesSectionProps) {
  return (
    <section id="paket" className="mx-auto w-full max-w-6xl scroll-mt-28 px-4 py-6 md:px-6 md:py-8">
      <div className="mb-4 text-center">
        <h2 className="m-0 text-3xl font-black uppercase tracking-tight md:text-4xl">Paket Penyewaan</h2>
      </div>
      <div className="neo-card bg-vault-cream p-5 md:p-8">
        <p className="m-0 inline-flex border-[2px] border-vault-ink bg-vault-sun px-3 py-1 text-sm font-extrabold uppercase shadow-[3px_3px_0_#5f4a3f]">
          Promo Harga Launch
        </p>
        <h2 className="mb-0 mt-3 text-3xl font-black uppercase tracking-tight md:text-4xl">
          Pilih Paket dan Claim Harga Diskon
        </h2>
        <p className="mt-2 max-w-3xl font-medium">
          Harga coret adalah harga normal. Semua tombol di bawah ini langsung
          mengarah ke WhatsApp dengan pesan otomatis sesuai paket pilihanmu.
        </p>

        <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {PACKAGES.map((item) => {
            const message = `Kak, mau nyewa gaming ps4 nya untuk ${item.name} ${item.duration} dong, boleh info slot dan detail lanjutannya ya.`
            const href = buildWaLink(waNumber, message)

            return (
              <article key={item.name} className="neo-card flex flex-col bg-vault-cream p-4">
                <h3 className="m-0 text-2xl font-black uppercase">{item.name}</h3>
                <p className="mt-2 flex items-center gap-2 font-bold">
                  <Clock3 size={16} /> Durasi {item.duration}
                </p>
                <p className="mt-2 text-sm font-bold uppercase text-vault-soft line-through">{item.originalPrice}</p>
                <p className="mt-0 text-3xl font-black text-red-700">{item.promoPrice}</p>
                <p className="mt-1 min-h-12 font-medium text-vault-soft">{item.caption}</p>

                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="neo-button mt-4 justify-center bg-vault-lime shadow-[4px_4px_0_#1b130f]"
                >
                  Sewa {item.name} <ArrowRight size={18} />
                </a>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default RentalPackagesSection
