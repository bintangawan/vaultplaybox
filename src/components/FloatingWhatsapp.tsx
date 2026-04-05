import { MessageCircleMore } from 'lucide-react'

type FloatingWhatsappProps = {
  waLink: string
}

function FloatingWhatsapp({ waLink }: FloatingWhatsappProps) {
  return (
    <a
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full border-[3px] border-vault-ink bg-vault-lime text-vault-ink shadow-[6px_6px_0_#5f4a3f] transition hover:-translate-x-[1px] hover:-translate-y-[1px]"
      href={waLink}
      target="_blank"
      rel="noreferrer"
      aria-label="Sewa langsung via WhatsApp"
    >
      <MessageCircleMore size={26} />
    </a>
  )
}

export default FloatingWhatsapp
