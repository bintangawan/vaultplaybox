import { Power, Unplug, WifiOff } from 'lucide-react'

function WarningsSection() {
  const warnings = [
    'Dilarang menyambungkan internet / WiFi.',
    'Dilarang mencabut listrik dalam keadaan PS menyala.',
    'Pastikan mematikan PS dengan cara yang benar.',
    'Unit dilengkapi dengan GPS tracker.',
  ]

  return (
    <section id="peringatan" className="mx-auto w-full max-w-6xl scroll-mt-28 px-4 py-6 md:px-6 md:py-8">
      <h2 className="text-center text-3xl font-black uppercase tracking-tight md:text-4xl">Peringatan Keras</h2>

      <div className="neo-card mt-4 bg-vault-cream p-5 md:p-8">
        <div className="grid gap-3 md:grid-cols-2">
          {warnings.map((text, idx) => (
            <article key={text} className="neo-card flex items-center gap-3 bg-vault-cream p-4">
              <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-[3px] border-vault-ink bg-vault-sun">
                {idx === 0 && <WifiOff size={18} />}
                {idx === 1 && <Unplug size={18} />}
                {idx === 2 && <Power size={18} />}
                {idx === 3 && <Power size={18} />}
              </div>
              <p className="m-0 text-base font-black uppercase">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WarningsSection
