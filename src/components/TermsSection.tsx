import { BadgeAlert, Camera, IdCard, Wallet } from 'lucide-react'

function TermsSection() {
  const terms = [
    {
      icon: <IdCard size={18} />,
      text: 'Menahan jaminan 2 identitas resmi (KTP & SIM/STNK).',
    },
    {
      icon: <Wallet size={18} />,
      text: 'Melakukan pembayaran penuh di awal.',
    },
    {
      icon: <BadgeAlert size={18} />,
      text: 'Unit tidak diperbolehkan dipindahtangankan ke pihak ketiga.',
    },
    {
      icon: <Camera size={18} />,
      text: 'Bersedia dilakukan dokumentasi saat serah terima unit.',
    },
  ]

  return (
    <section id="syarat" className="mx-auto w-full max-w-6xl scroll-mt-28 px-4 py-6 md:px-6 md:py-8">
      <h2 className="text-center text-3xl font-black uppercase tracking-tight md:text-4xl">Syarat dan Ketentuan</h2>

      <div className="neo-card mt-4 bg-vault-cream p-5 md:p-8">
        <div className="grid gap-3 md:grid-cols-2">
          {terms.map((item) => (
            <article key={item.text} className="neo-card flex items-center gap-3 bg-vault-cream p-4">
              <div className="inline-flex h-9 w-9 shrink-0 items-center justify-center border-[3px] border-vault-ink bg-vault-sun">
                {item.icon}
              </div>
              <p className="m-0 text-base font-black uppercase">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TermsSection
