import { useEffect, useState } from 'react'
import About from './components/About'
import Attendance from './components/Attendance'
import FinalCta from './components/FinalCta'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import { IconWhatsApp } from './components/Icons'
import PrivacyModal from './components/PrivacyModal'
import Services from './components/Services'
import { whatsappLink } from './config'
import { useActiveSection, useReveal } from './hooks/useReveal'

// Ordem das seções na página (usada para destacar o item ativo do menu)
const SECTION_ORDER = ['inicio', 'servicos', 'sobre', 'atendimentos', 'contato']

function WhatsAppFloat() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar com a Alini pelo WhatsApp"
      className={`fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-terra-dark text-ivory shadow-[0_14px_30px_-10px_rgba(110,58,25,0.7)] ring-4 ring-cream/70 transition-all duration-500 hover:scale-105 hover:bg-terra-deep sm:bottom-7 sm:right-7 ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <IconWhatsApp className="h-7 w-7" />
    </a>
  )
}

export default function App() {
  const [privacyOpen, setPrivacyOpen] = useState(false)
  const active = useActiveSection(SECTION_ORDER)
  useReveal()

  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-ivory"
      >
        Pular para o conteúdo
      </a>
      <Header active={active} />
      <main id="conteudo">
        <Hero />
        <Services />
        <About />
        <Attendance />
        <FinalCta />
      </main>
      <Footer onOpenPrivacy={() => setPrivacyOpen(true)} />
      <WhatsAppFloat />
      <PrivacyModal open={privacyOpen} onClose={() => setPrivacyOpen(false)} />
    </>
  )
}
