import { useEffect, useState } from 'react'
import { NAV_ITEMS, whatsappLink } from '../config'
import { IconClose, IconMenu, IconWhatsApp } from './Icons'
import { Logo } from './Logo'

export default function Header({ active }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-cream/90 shadow-[0_1px_0_0_var(--color-line)] backdrop-blur-md' : 'bg-cream'
      }`}
    >
      <div className={`mx-auto flex max-w-[1240px] items-center justify-between px-5 transition-all duration-500 sm:px-8 ${scrolled ? 'h-[68px]' : 'h-[84px]'}`}>
        <a href="#inicio" className="text-terra" aria-label="Alini Ross — voltar ao início">
          <Logo className="h-9 w-auto sm:h-10" />
        </a>

        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-9">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={active === item.id ? 'true' : undefined}
                  className={`relative py-2 text-[0.8rem] tracking-wide transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:mx-auto after:h-px after:bg-terra after:transition-all after:duration-300 hover:text-terra-dark ${
                    active === item.id ? 'text-terra-dark after:w-full' : 'text-ink/80 after:w-0'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary hidden !px-5 !py-2.5 !text-[0.72rem] !normal-case !tracking-normal lg:inline-flex"
        >
          <IconWhatsApp className="h-4 w-4" />
          Falar no WhatsApp
        </a>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="-mr-2 p-2 text-ink lg:hidden"
          aria-label="Abrir menu"
          aria-expanded={open}
          aria-controls="menu-mobile"
        >
          <IconMenu className="h-7 w-7" />
        </button>
      </div>

      {/* Menu mobile */}
      <div
        id="menu-mobile"
        className={`fixed inset-0 z-50 flex flex-col bg-cream px-6 pb-10 pt-6 transition-all duration-500 lg:hidden ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
      >
        <div className="flex items-center justify-between">
          <Logo className="h-9 w-auto text-terra" />
          <button type="button" onClick={() => setOpen(false)} className="-mr-2 p-2" aria-label="Fechar menu">
            <IconClose className="h-7 w-7" />
          </button>
        </div>
        <ul className="mt-14 space-y-1">
          {NAV_ITEMS.map((item, i) => (
            <li
              key={item.id}
              className={`transition-all duration-500 ${open ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'}`}
              style={{ transitionDelay: open ? `${120 + i * 50}ms` : '0ms' }}
            >
              <a
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="block border-b border-line py-4 font-serif text-balance text-[2rem] leading-none text-ink"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-primary mt-auto w-full">
          <IconWhatsApp className="h-4 w-4" />
          Quero conversar com a Alini
        </a>
      </div>
    </header>
  )
}
