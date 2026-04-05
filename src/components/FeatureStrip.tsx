function FeatureStrip() {
  return (
    <section id="fitur" className="mx-auto w-full max-w-6xl scroll-mt-28 px-4 py-6 md:px-6 md:py-8">
      <div className="mb-4 text-center">
        <p className="m-0 text-xs font-extrabold uppercase tracking-[0.15em] text-vault-soft">Section</p>
        <h2 className="m-0 text-3xl font-black uppercase tracking-tight md:text-4xl">Keunggulan</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <article className="neo-card bg-vault-cream p-5">
          <h3 className="m-0 text-xl font-black uppercase">Setup Cepat</h3>
          <p className="mt-2 font-medium">Pilih paket, chat admin, lalu unit siap dikirim sesuai jadwal.</p>
        </article>
        <article className="neo-card bg-vault-sun p-5">
          <h3 className="m-0 text-xl font-black uppercase">Plug & Play</h3>
          <p className="mt-2 font-medium">Datang, colok, langsung main tanpa setting teknis yang rumit.</p>
        </article>
        <article className="neo-card bg-vault-lime p-5">
          <h3 className="m-0 text-xl font-black uppercase">Area Medan</h3>
          <p className="mt-2 font-medium">Prioritas layanan Medan RingRoad dan area Medan sekitarnya.</p>
        </article>
      </div>
    </section>
  )
}

export default FeatureStrip
