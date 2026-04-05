import { BadgeCheck, Rocket, ShieldPlus, Sparkles, Star, Truck } from 'lucide-react'

function CrowdSections() {
  return (
    <>
      <section className="mx-auto w-full max-w-6xl px-4 py-2 md:px-6">
        <div className="mb-4 text-center">
          <p className="m-0 text-xs font-extrabold uppercase tracking-[0.15em] text-vault-soft">Section</p>
          <h2 className="m-0 text-3xl font-black uppercase tracking-tight md:text-4xl">Layanan Utama</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
        <article className="neo-card bg-vault-sun p-5">
          <h3 className="m-0 flex items-center gap-2 text-xl font-black uppercase">
            <ShieldPlus size={18} /> Unit Premium
          </h3>
          <p className="mt-2 font-medium">
            PS4 terjaga, dibersihkan rutin, dan dicek sebelum kirim.
          </p>
        </article>
        <article className="neo-card bg-vault-lime p-5">
          <h3 className="m-0 flex items-center gap-2 text-xl font-black uppercase">
            <Truck size={18} /> Layanan Fleksibel
          </h3>
          <p className="mt-2 font-medium">
            Area Medan RingRoad hingga Medan sekitar, siap antar jemput.
          </p>
        </article>
        <article className="neo-card bg-vault-orange p-5">
          <h3 className="m-0 flex items-center gap-2 text-xl font-black uppercase">
            <Rocket size={18} /> Fast Response
          </h3>
          <p className="mt-2 font-medium">
            Tim admin aktif bantu proses booking dan kebutuhan teknis selama sewa.
          </p>
        </article>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-6 md:px-6">
        <div className="mb-4 text-center">
          <p className="m-0 text-xs font-extrabold uppercase tracking-[0.15em] text-vault-soft">Section</p>
          <h2 className="m-0 text-3xl font-black uppercase tracking-tight md:text-4xl">Alur & Testimoni</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
        <div className="neo-card bg-vault-cream p-6">
          <h3 className="m-0 text-2xl font-black uppercase">Cara Sewa Cepat</h3>
          <ol className="mt-3 list-decimal space-y-2 pl-5 font-medium">
            <li>Pilih paket Short Play, Half Day, atau Full Day.</li>
            <li>Klik tombol sewa, pesan otomatis langsung masuk ke WhatsApp.</li>
            <li>Konfirmasi jadwal, lokasi, dan admin proses booking.</li>
            <li>PS4 siap dimainkan sesuai durasi pilihan kamu.</li>
          </ol>
        </div>

        <div id="testimoni" className="neo-card scroll-mt-28 bg-vault-cream p-6">
          <h3 className="m-0 text-2xl font-black uppercase">Testimoni Penyewa</h3>
          <div className="mt-4 grid gap-3">
            <blockquote className="neo-card bg-vault-sun p-3 font-medium">
              <p className="m-0">"Unitnya bersih banget, setup cepat, admin gercep."</p>
              <footer className="mt-2 text-sm font-bold">- Rama, Mabar Weekend</footer>
            </blockquote>
            <blockquote className="neo-card bg-vault-lime p-3 font-medium">
              <p className="m-0">"Full day 24 jam worth it, anak-anak pada seneng semua."</p>
              <footer className="mt-2 text-sm font-bold">- Dimas, Event Keluarga</footer>
            </blockquote>
            <blockquote className="neo-card bg-vault-orange p-3 font-medium">
              <p className="m-0">"Paket half day paling pas buat kumpul komunitas kami."</p>
              <footer className="mt-2 text-sm font-bold">- Bima, Komunitas Lokal</footer>
            </blockquote>
          </div>
        </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-6 md:px-6">
        <div className="mb-4 text-center">
          <p className="m-0 text-xs font-extrabold uppercase tracking-[0.15em] text-vault-soft">Section</p>
          <h2 className="m-0 text-3xl font-black uppercase tracking-tight md:text-4xl">Kenapa Pilih Kami</h2>
        </div>

        <div className="neo-card bg-vault-cream p-6">
          <h3 className="m-0 flex items-center gap-2 text-2xl font-black uppercase">
            <Sparkles size={20} /> Kenapa VaultPlayBox Beda?
          </h3>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            <div className="neo-card bg-vault-cream p-3">
              <p className="m-0 flex items-center gap-2 font-extrabold">
                <BadgeCheck size={18} /> Paket Jelas
              </p>
              <p className="mt-1 text-sm font-medium">Durasi dan harga langsung kelihatan, minim tanya ulang.</p>
            </div>
            <div className="neo-card bg-vault-cream p-3">
              <p className="m-0 flex items-center gap-2 font-extrabold">
                <Star size={18} /> Kualitas Utama
              </p>
              <p className="mt-1 text-sm font-medium">Performa konsol stabil, cocok untuk sesi main panjang.</p>
            </div>
            <div className="neo-card bg-vault-cream p-3">
              <p className="m-0 flex items-center gap-2 font-extrabold">
                <Sparkles size={18} /> Vibe Mewah
              </p>
              <p className="mt-1 text-sm font-medium">Desain layanan dibuat premium, bukan sekadar rental biasa.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CrowdSections
