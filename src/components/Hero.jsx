import { whatsappLink } from '../config'
import { IconWhatsApp } from './Icons'

const pillars = ['Autoconhecimento', 'Comportamento', 'Desenvolvimento pessoal']

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-cream pt-[84px]">
      {/* Foto — desktop: fundo ocupando toda a seção, Alini à direita */}
      <div className="absolute inset-x-0 bottom-0 top-[84px] hidden lg:block">
        <picture>
          <source type="image/webp" srcSet="/img/alini-hero-1024.webp 1024w, /img/alini-hero-1600.webp 1600w" sizes="100vw" />
          <img
            src="/img/alini-hero-1600.webp"
            alt="Alini Ross, de blazer off-white, sentada em uma poltrona de couro, sorrindo"
            width="1600"
            height="800"
            fetchPriority="high"
            className="h-full w-full object-cover object-[75%_8%]"
          />
        </picture>
        {/* Clareia só a área do texto; o rosto fica livre de sombreado */}
        <div aria-hidden="true" className="absolute inset-y-0 left-0 w-[52%] bg-gradient-to-r from-cream/80 via-cream/45 to-transparent" />
      </div>
      <div className="relative mx-auto grid max-w-[1240px] lg:min-h-[620px] lg:grid-cols-2 xl:min-h-[min(84vh,720px)]">
        {/* Texto */}
        <div className="relative z-10 flex flex-col justify-center px-5 pb-12 pt-10 sm:px-8 lg:py-20 lg:pr-4">
          <h1 className="reveal font-serif text-balance text-[2.6rem] leading-[0.98] tracking-[-0.01em] text-ink sm:text-[3.4rem] xl:text-[4.15rem]">
            Compreenda
            <br />
            quem você é.
            <span className="mt-3 block text-[0.78em] leading-[1.02] text-terra">
              Transforme a forma
              <br />
              como você vive.
            </span>
          </h1>

          <div className="reveal mt-8 h-px w-14 bg-terra/50" style={{ '--delay': '120ms' }} />

          <ul
            className="reveal mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-[0.66rem] font-medium uppercase tracking-[0.2em] text-muted"
            style={{ '--delay': '180ms' }}
          >
            {pillars.map((p, i) => (
              <li key={p} className="flex items-center gap-3">
                {i > 0 && <span aria-hidden="true" className="h-1 w-1 rounded-full bg-terra/60" />}
                {p}
              </li>
            ))}
          </ul>

          <div className="reveal mt-10" style={{ '--delay': '260ms' }}>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <IconWhatsApp className="h-[18px] w-[18px]" />
              Quero conversar com a Alini
            </a>
            <p className="mt-4 text-[0.78rem] text-muted">
              Atendimento via WhatsApp, com acolhimento e sem compromisso.
            </p>
          </div>
        </div>

        {/* Foto — mobile: retrato vertical abaixo do texto */}
        <div className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-[16/10] lg:hidden">
          <picture>
            <source type="image/webp" srcSet="/img/alini-hero-1024.webp 1024w, /img/alini-hero-1600.webp 1600w" sizes="100vw" />
            <img
              src="/img/alini-hero-1024.webp"
              alt="Alini Ross, de blazer off-white, sentada em uma poltrona de couro, sorrindo"
              width="1600"
              height="800"
              className="absolute inset-0 h-full w-full object-cover object-[74%_30%]"
            />
          </picture>
          <div aria-hidden="true" className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-cream to-transparent" />
        </div>
      </div>
    </section>
  )
}
