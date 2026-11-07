import { whatsappLink } from '../config'
import { IconWhatsApp } from './Icons'
import { Branch } from './Logo'

export default function FinalCta() {
  return (
    <section id="contato" className="relative isolate overflow-hidden bg-olive py-24 text-ivory sm:py-28">
      {/* Ramos desfocados, como luz atravessando folhas */}
      <Branch className="pointer-events-none absolute -left-24 -top-10 -z-10 h-[460px] w-auto -rotate-[18deg] text-olive-deep opacity-90 blur-[3px]" />
      <Branch className="pointer-events-none absolute -bottom-28 -right-16 -z-10 hidden h-[380px] w-auto rotate-[160deg] text-olive-deep opacity-70 blur-[4px] md:block" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),transparent_65%)]" />

      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <p className="reveal text-[0.66rem] font-medium uppercase tracking-[0.32em] text-ivory/60">
          Uma nova possibilidade sempre existe
        </p>
        <h2
          className="reveal mt-6 font-serif text-balance text-[2.2rem] leading-[1.12] sm:text-[3rem]"
          style={{ '--delay': '100ms' }}
        >
          Quem você se tornou até aqui — e quem você escolhe ser daqui para frente?
        </h2>
        <p
          className="reveal mx-auto mt-6 max-w-xl text-[0.95rem] leading-[1.75] text-ivory/75"
          style={{ '--delay': '180ms' }}
        >
          Você não precisa ter todas as respostas para começar. Às vezes, o primeiro passo é simplesmente parar, olhar
          para si e compreender o que está acontecendo.
        </p>
        <div className="reveal mt-10" style={{ '--delay': '260ms' }}>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-primary !bg-terra-dark hover:!bg-terra-deep">
            <IconWhatsApp className="h-[18px] w-[18px]" />
            Quero conversar com a Alini
          </a>
          <p className="mt-4 text-[0.78rem] text-ivory/60">Atendimento via WhatsApp, com acolhimento e sem compromisso.</p>
        </div>
      </div>
    </section>
  )
}
