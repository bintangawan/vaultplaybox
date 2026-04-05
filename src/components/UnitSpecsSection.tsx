import { Cpu, Crosshair, Monitor, ShieldCheck, Speaker } from 'lucide-react'

function UnitSpecsSection() {
  const specs = [
    { icon: <Monitor size={18} />, text: 'Playbox 27 Inch' },
    { icon: <Cpu size={18} />, text: 'PS 4 Slim' },
    { icon: <Speaker size={18} />, text: 'Speaker Gaming' },
    { icon: <Crosshair size={18} />, text: '2 Stick + 1 Backup' },
    { icon: <ShieldCheck size={18} />, text: 'GPS Tracker' },
  ]

  return (
    <section id="spesifikasi" className="mx-auto w-full max-w-6xl scroll-mt-28 px-4 py-6 md:px-6 md:py-8">
      <h2 className="text-center text-3xl font-black uppercase tracking-tight md:text-4xl">
        Spesifikasi Unit
      </h2>

      <div className="neo-card mt-4 bg-vault-cream p-5 md:p-8">
        <p className="m-0 max-w-3xl text-center text-base font-semibold md:mx-auto md:text-lg">
          Unit disiapkan untuk pengalaman gaming yang stabil, nyaman, dan siap
          dipakai dari menit pertama.
        </p>

        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {specs.map((item) => (
            <article key={item.text} className="neo-card flex items-center gap-2 bg-vault-cream p-4">
              {item.icon}
              <p className="m-0 text-lg font-black uppercase">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default UnitSpecsSection
