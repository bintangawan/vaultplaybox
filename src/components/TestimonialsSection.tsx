function TestimonialsSection() {
  return (
    <section id="testimoni" className="mx-auto w-full max-w-6xl scroll-mt-28 px-4 py-6 md:px-6 md:py-8">
      <h2 className="text-center text-3xl font-black uppercase tracking-tight md:text-4xl">Testimoni</h2>

      <div className="mt-4 grid gap-4 md:grid-cols-3">
        <blockquote className="neo-card bg-vault-sun p-4 font-medium">
          <p className="m-0">"Adminnya fast response, unit datang tepat waktu, tinggal colok langsung main."</p>
          <footer className="mt-3 text-sm font-black">- Rama, Medan Helvetia</footer>
        </blockquote>
        <blockquote className="neo-card bg-vault-lime p-4 font-medium">
          <p className="m-0">"Paket 12 jam paling pas buat weekend. Kondisi stick enak dipakai."</p>
          <footer className="mt-3 text-sm font-black">- Dimas, Medan Selayang</footer>
        </blockquote>
        <blockquote className="neo-card bg-vault-orange p-4 font-medium">
          <p className="m-0">"Pesan malam, besok paginya langsung ready. Recommended banget."</p>
          <footer className="mt-3 text-sm font-black">- Bima, Medan RingRoad</footer>
        </blockquote>
      </div>
    </section>
  )
}

export default TestimonialsSection
