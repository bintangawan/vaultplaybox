import { Rocket, ShieldCheck, Sparkles, Truck } from 'lucide-react'

function AdvantagesSection() {
  return (
    <section id="keunggulan" className="mx-auto w-full max-w-6xl scroll-mt-28 px-4 py-6 md:px-6 md:py-8">
      <h2 className="text-center text-3xl font-black uppercase tracking-tight md:text-4xl">Keunggulan</h2>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <article className="neo-card bg-vault-sun p-5">
          <h3 className="m-0 flex items-center gap-2 text-xl font-black uppercase">
            <Sparkles size={18} /> Plug & Play
          </h3>
          <p className="mt-2 font-semibold">
            Unit datang dalam kondisi siap pakai. Colok ke layar, langsung main.
          </p>
        </article>

        <article className="neo-card bg-vault-lime p-5">
          <h3 className="m-0 flex items-center gap-2 text-xl font-black uppercase">
            <Truck size={18} /> Antar Jemput Medan
          </h3>
          <p className="mt-2 font-semibold">
            Fokus layanan Medan RingRoad dan area Medan sekitar dengan pengantaran cepat.
          </p>
        </article>

        <article className="neo-card bg-vault-cream p-5">
          <h3 className="m-0 flex items-center gap-2 text-xl font-black uppercase">
            <ShieldCheck size={18} /> Unit Terjamin
          </h3>
          <p className="mt-2 font-semibold">
            Unit dibersihkan, dites, dan dipastikan aman sebelum diserahterimakan.
          </p>
        </article>

        <article className="neo-card bg-vault-orange p-5">
          <h3 className="m-0 flex items-center gap-2 text-xl font-black uppercase">
            <Rocket size={18} /> Fast Response Admin
          </h3>
          <p className="mt-2 font-semibold">
            Chat dibalas cepat, proses booking jelas, dan support siap bantu saat dibutuhkan.
          </p>
        </article>
      </div>
    </section>
  )
}

export default AdvantagesSection
