// Ícones de traço fino, desenhados para a marca (stroke = currentColor).
const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.4,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

export const IconLeaf = (p) => (
  <svg viewBox="0 0 32 32" {...base} {...p}>
    <path d="M7 25C7 14 13 7 26 6c0 13-7 19-17 19H7Z" />
    <path d="M7 25 19 13" />
    <path d="M12 20h5M15 17v-4" />
  </svg>
)

export const IconPerson = (p) => (
  <svg viewBox="0 0 32 32" {...base} {...p}>
    <circle cx="16" cy="11" r="5" />
    <path d="M6.5 26.5c1.2-5 5-7.5 9.5-7.5s8.3 2.5 9.5 7.5" />
  </svg>
)

export const IconChart = (p) => (
  <svg viewBox="0 0 32 32" {...base} {...p}>
    <rect x="6" y="17" width="5" height="9" rx="1" />
    <rect x="13.5" y="12" width="5" height="14" rx="1" />
    <rect x="21" y="6" width="5" height="20" rx="1" />
  </svg>
)

export const IconGroup = (p) => (
  <svg viewBox="0 0 32 32" {...base} {...p}>
    <circle cx="16" cy="11" r="4" />
    <path d="M9 25c.8-4 3.6-6 7-6s6.2 2 7 6" />
    <circle cx="7.5" cy="13.5" r="2.8" />
    <path d="M3 23c.5-2.7 2.2-4.2 4.6-4.2" />
    <circle cx="24.5" cy="13.5" r="2.8" />
    <path d="M29 23c-.5-2.7-2.2-4.2-4.6-4.2" />
  </svg>
)

export const IconLaptop = (p) => (
  <svg viewBox="0 0 32 32" {...base} {...p}>
    <rect x="7" y="7" width="18" height="13" rx="1.5" />
    <path d="M4 24h24l-2 2H6l-2-2Z" />
  </svg>
)

export const IconPin = (p) => (
  <svg viewBox="0 0 32 32" {...base} {...p}>
    <path d="M16 28s-8-8.2-8-14.5a8 8 0 0 1 16 0C24 19.8 16 28 16 28Z" />
    <circle cx="16" cy="13.5" r="3" />
  </svg>
)

export const IconClock = (p) => (
  <svg viewBox="0 0 32 32" {...base} {...p}>
    <circle cx="16" cy="16" r="10.5" />
    <path d="M16 10v6.5l4 2.5" />
  </svg>
)

export const IconLock = (p) => (
  <svg viewBox="0 0 32 32" {...base} {...p}>
    <rect x="7" y="14" width="18" height="13" rx="2" />
    <path d="M11 14v-3.5a5 5 0 0 1 10 0V14" />
    <path d="M16 19v3" />
  </svg>
)

export const IconHeart = (p) => (
  <svg viewBox="0 0 32 32" {...base} {...p}>
    <path d="M16 26S5 19.5 5 12.2A5.6 5.6 0 0 1 16 10a5.6 5.6 0 0 1 11 2.2C27 19.5 16 26 16 26Z" />
  </svg>
)

export const IconFeather = (p) => (
  <svg viewBox="0 0 32 32" {...base} {...p}>
    <path d="M6 26C10 15 17 8 27 5c-1.5 10-8 18-19 20" />
    <path d="M6 26 18 14" />
  </svg>
)

export const IconArrow = (p) => (
  <svg viewBox="0 0 24 24" {...base} strokeWidth={1.6} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

// Marcas (preenchidas)
export const IconWhatsApp = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15h-.01a8.23 8.23 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.25-8.23a8.2 8.2 0 0 1 5.83 2.42 8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.22-8.24 8.22Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.13-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48a.92.92 0 0 0-.66.31c-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.29Z" />
  </svg>
)

export const IconInstagram = (p) => (
  <svg viewBox="0 0 24 24" {...base} strokeWidth={1.5} {...p}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" />
  </svg>
)

export const IconLinkedIn = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3a1.96 1.96 0 1 0 0 3.92 1.96 1.96 0 0 0 0-3.92ZM20.44 13.4c0-3.1-1.66-4.55-3.87-4.55-1.78 0-2.58.98-3.03 1.67V8.5h-3.37c.04.95 0 11.5 0 11.5h3.37v-6.42c0-.34.03-.69.12-.93.27-.69.89-1.4 1.93-1.4 1.36 0 1.91 1.04 1.91 2.56V20h3.37l-.43-6.6Z" />
  </svg>
)

export const IconMenu = (p) => (
  <svg viewBox="0 0 24 24" {...base} strokeWidth={1.5} {...p}>
    <path d="M4 8h16M4 16h16" />
  </svg>
)

export const IconClose = (p) => (
  <svg viewBox="0 0 24 24" {...base} strokeWidth={1.5} {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
)
