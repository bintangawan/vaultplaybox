import { CalendarClock, ClipboardPenLine, HandCoins, PhoneCall, Truck } from 'lucide-react'

function HowToRentSection() {
  const steps = [
    {
      icon: <PhoneCall size={18} />,
      title: 'Hubungi Admin via WhatsApp',
    },
    {
      icon: <CalendarClock size={18} />,
      title: 'Kirim Tanggal, Durasi & Lokasi',
    },
    {
      icon: <ClipboardPenLine size={18} />,
      title: 'Isi Data Penyewa',
    },
    {
      icon: <HandCoins size={18} />,
      title: 'Konfirmasi & Pembayaran',
    },
    {
      icon: <Truck size={18} />,
      title: 'Unit Siap Dikirim / Diambil',
    },
  ]

  return (
    <section id="cara-sewa" className="mx-auto w-full max-w-6xl scroll-mt-28 px-4 py-6 md:px-6 md:py-8">
      <h2 className="text-center text-3xl font-black uppercase tracking-tight md:text-4xl">Cara Sewa</h2>

      <div className="neo-card mt-4 bg-vault-cream p-5 md:p-8">
        <div className="grid gap-3 md:grid-cols-2">
          {steps.map((item, idx) => (
            <article key={item.title} className="neo-card flex items-center gap-3 bg-vault-cream p-4">
              <div className="inline-flex h-9 w-9 items-center justify-center border-[3px] border-vault-ink bg-vault-sun font-black">
                {idx + 1}
              </div>
              <div>
                <p className="m-0 flex items-center gap-2 text-base font-black uppercase">
                  {item.icon}
                  {item.title}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-5 text-center text-2xl font-black italic text-vault-soft">
          Sewa sekarang, kami siap antar.
        </p>
      </div>
    </section>
  )
}

export default HowToRentSection
