import { Branch } from './Logo'
import { useId, useState } from 'react'

export default function About() {
  const [expanded, setExpanded] = useState(false)
  const moreId = useId()

  return (
    <section id="sobre" className="relative overflow-hidden bg-sand">
      <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        {/* Foto com frase, como no modelo: tom quente à esquerda e fusão com o fundo à direita */}
        <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[4/3] lg:aspect-auto lg:min-h-[660px]">
          <picture>
            <source type="image/webp" srcSet="/img/alini-retrato-640.webp 640w, /img/alini-retrato-1026.webp 1026w" sizes="(min-width: 1024px) 50vw, 100vw" />
            <img
              src="/img/alini-retrato-1026.webp"
              alt="Alini Ross de blazer off-white, sorrindo, com a mão no queixo, em seu consultório"
              width="1026"
              height="1533"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover object-[55%_22%] lg:object-[62%_28%]"
            />
          </picture>
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#3a2c22]/85 via-[#3a2c22]/20 to-transparent lg:bg-gradient-to-r lg:from-[#3a2c22]/75 lg:via-[#3a2c22]/25 lg:to-transparent" />
          <div aria-hidden="true" className="absolute inset-y-0 right-0 hidden w-28 bg-gradient-to-l from-sand to-transparent lg:block" />

          <blockquote className="reveal absolute bottom-8 left-6 right-6 sm:left-10 lg:bottom-auto lg:right-auto lg:top-1/2 lg:max-w-[12rem] lg:-translate-y-1/2 lg:left-[max(2rem,calc((100vw-1240px)/2+1.5rem))]">
            <p className="max-w-[17rem] font-accent text-[1.2rem] italic leading-[1.55] text-ivory/90">
              Desenvolver-se é escolher, todos os dias, uma vida mais alinhada com o que realmente importa.
            </p>
            <span aria-hidden="true" className="mt-6 block h-px w-10 bg-ivory/50" />
          </blockquote>
        </div>

        {/* Texto */}
        <div className="relative flex items-center px-5 py-16 sm:px-12 lg:py-24 lg:pl-14 xl:pl-20">
          <Branch className="pointer-events-none absolute -right-4 top-4 h-56 w-auto rotate-[10deg] text-terra/[0.12] sm:h-72" />
          <div className="relative max-w-[34rem]">
            <p className="eyebrow reveal">Sobre</p>
            <h2 className="reveal mt-4 font-serif text-balance text-[2.6rem] leading-[1.02] text-ink sm:text-[3.3rem]" style={{ '--delay': '80ms' }}>
              Prazer,
              <br />
              eu sou a Alini.
            </h2>
            <div className="reveal mt-7 h-px w-12 bg-terra/50" style={{ '--delay': '140ms' }} />

            <div className="reveal mt-7 space-y-4 text-[0.95rem] leading-[1.75] text-ink/80" style={{ '--delay': '200ms' }}>
              <p>
                Acredito no autoconhecimento como ponto de partida para uma vida mais livre, consciente e alinhada.
              </p>
              <p>
                Meu trabalho é acompanhar pessoas em processos de desenvolvimento pessoal, unindo uma visão humana e
                prática para que cada um possa se posicionar com mais clareza e construir escolhas mais alinhadas com
                quem é.
              </p>
            </div>

            <div
              id={moreId}
              className={`grid transition-all duration-700 ease-out ${expanded ? 'mt-4 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
              aria-hidden={!expanded}
            >
              <div className="space-y-4 overflow-hidden text-[0.95rem] leading-[1.75] text-ink/80">
                <p>
                  Ao longo da minha trajetória, estudei comportamento humano e ferramentas de análise de perfil, como o
                  DISC, e venho aplicando esse conhecimento em atendimentos individuais, grupos e encontros.
                </p>
                <p>
                  Acompanho pessoas que sentem que algo precisa mudar, mas ainda não sabem exatamente o quê. Juntos,
                  olhamos para a sua história, seus padrões e suas escolhas — com cuidado, sem julgamentos e no seu
                  tempo.
                </p>
                <p>
                  Meu propósito é ajudar você a se compreender com mais profundidade e a viver de forma mais coerente
                  com aquilo que faz sentido para você.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
              aria-controls={moreId}
              className="btn-primary reveal mt-9"
              style={{ '--delay': '260ms' }}
            >
              {expanded ? 'Mostrar menos' : 'Conheça mais sobre mim'}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
