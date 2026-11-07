import { IconClock, IconFeather, IconHeart, IconLaptop, IconLock, IconPin } from './Icons'

const formats = [
  { icon: IconLaptop, title: 'Online', text: 'De qualquer lugar do Brasil ou do exterior, com toda a comodidade.' },
  { icon: IconPin, title: 'Presencial', text: 'Em um ambiente acolhedor e reservado.' },
  { icon: IconClock, title: 'Duração', text: 'Aproximadamente 1h a 1h30, conforme o atendimento.' },
]

const values = [
  { icon: IconLock, title: 'Sigilo', text: 'Seu processo é tratado com respeito e total confidencialidade.' },
  { icon: IconHeart, title: 'Acolhimento', text: 'Um espaço seguro para você se escutar, sem julgamentos.' },
  { icon: IconFeather, title: 'Clareza', text: 'Reflexão e consciência para fazer novas escolhas.' },
]

export default function Attendance() {
  return (
    <section id="atendimentos" className="border-t border-line/70 bg-ivory py-20 sm:py-24">
      <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
        <header className="reveal mx-auto max-w-3xl text-center">
          <p className="eyebrow">Atendimentos</p>
          <h2 className="mt-4 font-serif text-balance text-[2.4rem] leading-[1.05] text-ink sm:text-[3rem]">
            Como acontecem os atendimentos
          </h2>
          <p className="mt-4 text-[0.95rem] text-muted">Você escolhe o formato que melhor se adapta à sua rotina.</p>
        </header>

        <ul className="mt-14 grid sm:grid-cols-3">
          {formats.map(({ icon: Icon, title, text }, i) => (
            <li
              key={title}
              className="reveal flex flex-col items-center px-6 py-6 text-center max-sm:border-b max-sm:border-line sm:border-l sm:border-line sm:first:border-l-0"
              style={{ '--delay': `${i * 90}ms` }}
            >
              <Icon className="h-9 w-9 text-terra" />
              <h3 className="mt-4 font-serif text-balance text-[1.55rem] leading-none text-ink">{title}</h3>
              <p className="mt-3 max-w-[16rem] text-[0.86rem] leading-relaxed text-muted">{text}</p>
            </li>
          ))}
        </ul>

        <div aria-hidden="true" className="mx-auto my-4 hidden h-px w-full bg-line sm:block" />

        <ul className="grid sm:grid-cols-3">
          {values.map(({ icon: Icon, title, text }, i) => (
            <li
              key={title}
              className="reveal flex items-start gap-4 px-6 py-6 max-sm:border-b max-sm:border-line max-sm:last:border-b-0 sm:border-l sm:border-line sm:first:border-l-0 lg:px-8"
              style={{ '--delay': `${i * 90}ms` }}
            >
              <Icon className="mt-0.5 h-9 w-9 shrink-0 text-terra" />
              <div>
                <h3 className="font-serif text-balance text-[1.45rem] leading-none text-ink">{title}</h3>
                <p className="mt-2 text-[0.86rem] leading-relaxed text-muted">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
