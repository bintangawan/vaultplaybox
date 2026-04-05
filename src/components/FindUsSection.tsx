import { Camera, MessageCircleMore, Music2 } from 'lucide-react'

function FindUsSection() {
  return (
    <section id="find-us" className="mx-auto w-full max-w-6xl scroll-mt-28 px-4 pb-10 pt-6 md:px-6">
      <div className="mb-4 text-center">
        <h2 className="m-0 text-3xl font-black uppercase tracking-tight md:text-4xl">Find Us On</h2>
      </div>

      <div className="neo-card bg-vault-cream p-5 md:p-7">
        <h3 className="m-0 text-2xl font-black uppercase">Tetap Terhubung</h3>
        <p className="mt-2 max-w-2xl font-medium">
          Follow update promo, jadwal slot kosong, dan event mabar mingguan dari
          VaultPlayBox.
        </p>

        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href="https://www.instagram.com/vaultplaybox.mdn"
            target='_blank'
            aria-label="Instagram"
            className="neo-button bg-vault-sun shadow-[4px_4px_0_#5f4a3f]"
          >
            <Camera size={18} /> Instagram
          </a>
          <a
            href="https://www.tiktok.com/@vaultplaybox.mdn"
            target='_blank'
            aria-label="TikTok"
            className="neo-button bg-vault-lime shadow-[4px_4px_0_#5f4a3f]"
          >
            <Music2 size={18} /> TikTok
          </a>
          <a
            href="https://wa.me/6281234567890"
            target='_blank'
            aria-label="WhatsApp"
            className="neo-button bg-vault-orange shadow-[4px_4px_0_#5f4a3f]"
          >
            <MessageCircleMore size={18} /> WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

export default FindUsSection
