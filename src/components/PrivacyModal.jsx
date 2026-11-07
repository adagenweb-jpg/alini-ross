import { useEffect, useRef } from 'react'
import { IconClose } from './Icons'

export default function PrivacyModal({ open, onClose }) {
  const ref = useRef(null)

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  }, [open])

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
      aria-labelledby="privacidade-titulo"
      className="m-auto max-h-[85vh] w-[min(92vw,640px)] rounded-2xl border border-line bg-ivory p-0 text-ink shadow-2xl backdrop:bg-ink/50 backdrop:backdrop-blur-sm"
    >
      <div className="relative px-6 py-8 sm:px-10">
        <button type="button" onClick={onClose} className="absolute right-4 top-4 p-2 text-muted hover:text-ink" aria-label="Fechar">
          <IconClose className="h-6 w-6" />
        </button>
        <h2 id="privacidade-titulo" className="font-serif text-balance text-[2rem]">
          Política de Privacidade
        </h2>
        <div className="mt-5 space-y-4 text-[0.9rem] leading-relaxed text-ink/80">
          <p>
            Este site tem caráter informativo e não coleta dados pessoais por meio de formulários. Ao clicar nos botões de
            contato, você é direcionado(a) ao WhatsApp, e as informações que escolher compartilhar ficam sujeitas também
            à política de privacidade dessa plataforma.
          </p>
          <p>
            Os dados recebidos por mensagem (como nome e telefone) são usados exclusivamente para responder ao seu
            contato e organizar atendimentos. Eles não são vendidos nem compartilhados com terceiros.
          </p>
          <p>
            Tudo o que é conversado nos atendimentos é tratado com sigilo e confidencialidade, em conformidade com a Lei
            Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD).
          </p>
          <p>
            Você pode, a qualquer momento, solicitar a consulta, correção ou exclusão dos seus dados entrando em contato
            pelo WhatsApp.
          </p>
        </div>
      </div>
    </dialog>
  )
}
