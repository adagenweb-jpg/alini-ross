import { whatsappLink } from '../config'
import { IconChart, IconGroup, IconLeaf, IconPerson } from './Icons'

const services = [
  {
    icon: IconLeaf,
    badge: 'Processo individual',
    title: 'Processo de Desenvolvimento Pessoal',
    text: 'Um processo estruturado para você se conhecer em profundidade e fazer escolhas mais conscientes.',
    cta: 'Quero começar meu processo',
    message: 'Olá, Alini! Tenho interesse no Processo de Desenvolvimento Pessoal e gostaria de saber como funciona.',
    featured: true,
  },
  {
    icon: IconPerson,
    title: 'Sessões individuais',
    text: 'Um espaço de escuta e reflexão para quem deseja olhar com mais cuidado para o que está vivendo.',
    cta: 'Agendar uma sessão',
    message: 'Olá, Alini! Gostaria de agendar uma sessão individual.',
  },
  {
    icon: IconChart,
    title: 'Análise DISC',
    text: 'Conheça melhor seu perfil comportamental e entenda sua forma de se comunicar, decidir e se relacionar.',
    cta: 'Quero fazer o DISC',
    message: 'Olá, Alini! Quero fazer a Análise DISC. Pode me passar mais informações?',
  },
  {
    icon: IconGroup,
    title: 'Palestras e encontros',
    text: 'Conversas e experiências para desenvolver pessoas, fortalecer relações e promover uma vida mais consciente.',
    cta: 'Falar sobre palestras',
    message: 'Olá, Alini! Gostaria de conversar sobre palestras e encontros.',
  },
]

export default function Services() {
  return (
    <section id="servicos" className="border-t border-line/70 bg-ivory py-20 sm:py-24">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <header className="reveal mx-auto max-w-3xl text-center">
          <p className="eyebrow">Serviços</p>
          <h2 className="mt-4 font-serif text-balance text-[2.4rem] leading-[1.05] text-ink sm:text-[3rem]">
            Como posso te acompanhar
          </h2>
          <p className="mt-4 text-[0.95rem] leading-relaxed text-muted">
            Diferentes formas de olhar para a sua história, seus padrões e suas escolhas.
          </p>
        </header>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <li
                key={s.title}
                className={`reveal group flex flex-col items-center rounded-2xl border px-6 pb-7 pt-9 text-center transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_40px_-30px_rgba(74,52,36,0.55)] ${
                  s.featured ? 'border-olive/35 bg-olive-soft' : 'border-line bg-cream/60 hover:border-terra/30'
                }`}
                style={{ '--delay': `${i * 90}ms` }}
              >
                <Icon className={`h-9 w-9 ${s.featured ? 'text-olive' : 'text-terra'}`} strokeWidth={1.3} />
                {s.badge && (
                  <span className="mt-5 rounded-full bg-olive px-3 py-1 text-[0.58rem] font-bold uppercase tracking-[0.18em] text-ivory">
                    {s.badge}
                  </span>
                )}
                <h3 className={`font-serif text-balance text-[1.6rem] leading-[1.1] text-ink ${s.badge ? 'mt-4' : 'mt-6'}`}>
                  {s.title}
                </h3>
                <p className="mt-4 text-[0.86rem] leading-relaxed text-muted">{s.text}</p>
                <div className="min-h-7 flex-1" aria-hidden="true" />
                <a
                  href={whatsappLink(s.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={s.featured ? 'btn-primary !px-5 !py-3 !text-[0.66rem]' : 'btn-outline !text-[0.66rem]'}
                >
                  {s.cta}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
