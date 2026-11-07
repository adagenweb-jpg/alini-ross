import { INSTAGRAM_URL, LINKEDIN_URL, NAV_ITEMS, whatsappLink } from '../config'
import { IconInstagram, IconLinkedIn, IconWhatsApp } from './Icons'
import { Logo } from './Logo'

export default function Footer({ onOpenPrivacy }) {
  const socials = [
    { href: INSTAGRAM_URL, label: 'Instagram', Icon: IconInstagram },
    { href: whatsappLink(), label: 'WhatsApp', Icon: IconWhatsApp },
    { href: LINKEDIN_URL, label: 'LinkedIn', Icon: IconLinkedIn },
  ]

  return (
    <footer className="bg-cream">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="flex flex-col items-center gap-8 py-12 text-center lg:flex-row lg:justify-between lg:text-left">
          <a href="#inicio" className="text-terra" aria-label="Alini Ross — voltar ao início">
            <Logo className="h-11 w-auto" />
          </a>

          <nav aria-label="Rodapé">
            <ul className="flex flex-wrap justify-center gap-x-7 gap-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="text-[0.8rem] text-ink/75 transition-colors hover:text-terra-dark">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-6">
            <ul className="flex items-center gap-2">
              {socials.map(({ href, label, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full text-terra transition-colors hover:bg-terra/10 hover:text-terra-deep"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                </li>
              ))}
            </ul>
            <p className="hidden border-l border-line pl-6 font-accent text-[0.98rem] italic leading-snug text-muted sm:block">
              Mais consciência para
              <br />
              uma vida mais sua.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-line py-6 text-[0.74rem] text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} Alini Ross. Todos os direitos reservados.</p>
          <button type="button" onClick={onOpenPrivacy} className="underline-offset-4 transition-colors hover:text-terra-dark hover:underline">
            Política de Privacidade
          </button>
        </div>
      </div>
    </footer>
  )
}
