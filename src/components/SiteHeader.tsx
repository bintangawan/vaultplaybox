import { Menu, MessageCircleMore, X } from 'lucide-react'
import type { MouseEvent } from 'react'

type SiteHeaderProps = {
  menuOpen: boolean
  onToggleMenu: () => void
  onCloseMenu: () => void
  waLink: string
}

function SiteHeader({
  menuOpen,
  onToggleMenu,
  onCloseMenu,
  waLink,
}: SiteHeaderProps) {
  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, targetId: string) => {
    event.preventDefault()
    onCloseMenu()

    const target = document.getElementById(targetId)
    if (!target) return

    const header = document.querySelector('header')
    const headerHeight = header instanceof HTMLElement ? header.offsetHeight : 0
    const targetTop = target.getBoundingClientRect().top + window.scrollY
    const top = Math.max(targetTop - headerHeight - 2, 0)

    window.scrollTo({ top, behavior: 'smooth' })
    window.history.replaceState(null, '', `#${targetId}`)
  }

  return (
    <header className="sticky top-0 z-40 border-b-[3px] border-vault-ink bg-vault-cream/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3 md:px-6">
        <a href="#home" aria-label="VaultPlayBox Home" className="shrink-0">
          <img src="/VAULT PLAYBOX2.png" alt="VaultPlayBox logo" className="h-auto w-32 md:w-40" />
        </a>

        <button
          className="inline-flex h-11 w-11 items-center justify-center border-[3px] border-vault-ink bg-vault-sun md:hidden"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={onToggleMenu}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav
          className={`absolute left-0 right-0 top-full border-b-[3px] border-vault-ink bg-vault-cream px-4 py-4 shadow-[0_7px_0_#5f4a3f] md:static md:flex md:items-center md:gap-2 md:border-0 md:bg-transparent md:p-0 md:shadow-none ${
            menuOpen ? 'block' : 'hidden md:flex'
          }`}
        >
          <a
            href="#spesifikasi"
            onClick={(event) => handleNavClick(event, 'spesifikasi')}
            className="block border-[2px] border-transparent px-3 py-2 font-bold uppercase tracking-wide hover:border-vault-ink"
          >
            Spesifikasi
          </a>
          <a
            href="#cara-sewa"
            onClick={(event) => handleNavClick(event, 'cara-sewa')}
            className="block border-[2px] border-transparent px-3 py-2 font-bold uppercase tracking-wide hover:border-vault-ink"
          >
            Cara Sewa
          </a>
          <a
            href="#paket"
            onClick={(event) => handleNavClick(event, 'paket')}
            className="block border-[2px] border-transparent px-3 py-2 font-bold uppercase tracking-wide hover:border-vault-ink"
          >
            Paket
          </a>
          <a
            href="#keunggulan"
            onClick={(event) => handleNavClick(event, 'keunggulan')}
            className="block border-[2px] border-transparent px-3 py-2 font-bold uppercase tracking-wide hover:border-vault-ink"
          >
            Keunggulan
          </a>
          <a
            href="#testimoni"
            onClick={(event) => handleNavClick(event, 'testimoni')}
            className="block border-[2px] border-transparent px-3 py-2 font-bold uppercase tracking-wide hover:border-vault-ink"
          >
            Testimoni
          </a>
          <a
            className="neo-button mt-3 bg-vault-lime shadow-[4px_4px_0_#1b130f] md:mt-0"
            href={waLink}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircleMore size={18} /> Sewa Sekarang
          </a>
        </nav>
      </div>
    </header>
  )
}

export default SiteHeader
