import { useId, useState } from 'react'

export default function About() {
  const [expanded, setExpanded] = useState(false)
  const moreId = useId()

  return (
    <section id="sobre" className="relative overflow-hidden bg-cream">
      <div className="mx-auto grid max-w-[1240px] lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        {/* Foto — mobile em bloco; desktop como fundo de toda a seção, Alini à esquerda */}
        <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[16/9] lg:absolute lg:inset-0 lg:aspect-auto">
          <picture>
            <source
              type="image/webp"
              srcSet="/img/alini-sobre-1024.webp 1024w, /img/alini-sobre-1600.webp 1600w"
              sizes="100vw"
            />
            <img
              src="/img/alini-sobre-1600.webp"
              alt="Alini Ross, de blazer off-white, sentada de lado em uma cadeira de couro, sorrindo"
              width="1600"
              height="800"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover object-[22%_30%] lg:object-[30%_30%]"
            />
          </picture>
          <div aria-hidden="true" className="absolute inset-0 hidden bg-gradient-to-l from-cream/90 via-cream/40 to-transparent lg:block" />
          <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-cream to-transparent lg:hidden" />
        </div>
        <div aria-hidden="true" className="hidden lg:block lg:min-h-[640px]" />

        {/* Texto */}
        <div className="relative flex items-center px-5 pb-16 pt-6 sm:px-12 lg:py-24 lg:pl-10 xl:pl-14">
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

            <blockquote className="reveal mt-8 border-l border-terra/40 pl-5" style={{ '--delay': '240ms' }}>
              <p className="font-accent text-[1.1rem] italic leading-[1.5] text-terra-dark">
                Desenvolver-se é escolher, todos os dias, uma vida mais alinhada com o que realmente importa.
              </p>
            </blockquote>

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
