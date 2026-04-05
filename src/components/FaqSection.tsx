import { ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'

function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      q: 'Bisa sewa mendadak hari ini?',
      a: 'Bisa, selama slot unit masih tersedia. Disarankan booking secepatnya via WhatsApp.',
    },
    {
      q: 'Apakah bisa antar ke luar Medan RingRoad?',
      a: 'Bisa untuk beberapa area Medan sekitar. Konfirmasi dulu lokasi lengkap ke admin.',
    },
    {
      q: 'Boleh tambah durasi saat sedang sewa?',
      a: 'Boleh jika tidak bentrok jadwal berikutnya. Admin akan cek ketersediaan.',
    },
    {
      q: 'Kalau ada kendala teknis saat main?',
      a: 'Tim support siap bantu troubleshooting lewat chat/telepon secepat mungkin.',
    },
  ]

  return (
    <section id="faq" className="mx-auto w-full max-w-6xl scroll-mt-28 px-4 py-6 md:px-6 md:py-8">
      <h2 className="text-center text-3xl font-black uppercase tracking-tight md:text-4xl">Frequently Asked</h2>

      <div className="mt-4 grid gap-3">
        {faqs.map((item, index) => {
          const isOpen = openIndex === index

          return (
          <article key={item.q} className="neo-card bg-vault-cream p-5">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between gap-3 text-left"
              aria-expanded={isOpen}
            >
              <h3 className="m-0 text-lg font-black uppercase">{item.q}</h3>
              {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>

            {isOpen ? <p className="mt-3 font-semibold">{item.a}</p> : null}
          </article>
          )
        })}
      </div>
    </section>
  )
}

export default FaqSection
