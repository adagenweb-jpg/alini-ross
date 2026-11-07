import * as horizontal from '../logo-h.js'
import * as vertical from '../logo-v.js'

// Logo vetorizada a partir do arquivo original da marca; herda a cor do texto.
export function Logo({ variant = 'horizontal', className = '', title = 'Alini Ross — Desenvolvimento Pessoal' }) {
  const src = variant === 'vertical' ? vertical : horizontal
  return (
    <svg viewBox={src.viewBox} fill="currentColor" role="img" aria-label={title} className={className}>
      <path fillRule="evenodd" d={src.d} />
    </svg>
  )
}

// Apenas o ramo de folhas do símbolo, usado como ornamento.
export function Branch({ className = '' }) {
  return (
    <svg viewBox="0 0 330 382" fill="currentColor" aria-hidden="true" className={className}>
      <path fillRule="evenodd" d={horizontal.d} />
    </svg>
  )
}
