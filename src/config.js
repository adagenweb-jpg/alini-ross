// ---------------------------------------------------------------
// Dados de contato — edite aqui para atualizar o site inteiro.
// ---------------------------------------------------------------

// Número no formato internacional, só dígitos: 55 + DDD + número
export const WHATSAPP_NUMBER = '555182083939'

export const INSTAGRAM_URL = 'https://www.instagram.com/aliniross/'
export const LINKEDIN_URL = 'https://www.linkedin.com/'

export const DEFAULT_MESSAGE =
  'Olá, Alini! Vim pelo seu site e gostaria de conversar com você.'

export function whatsappLink(message = DEFAULT_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const NAV_ITEMS = [
  { id: 'inicio', label: 'Início' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'servicos', label: 'Serviços' },
  { id: 'atendimentos', label: 'Atendimentos' },
  { id: 'contato', label: 'Contato' },
]
