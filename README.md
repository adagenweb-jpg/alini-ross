# Alini Ross — Landing Page

One page institucional em React + Vite + Tailwind CSS v4.

## Rodar

```bash
npm install
npm run dev      # desenvolvimento
npm run build    # gera a pasta dist/ para publicar
npm run preview  # testa o build
```

## Antes de publicar

1. **`src/config.js`** — WhatsApp (+55 51 8208-3939) e Instagram (@aliniross) já configurados; falta só o link do LinkedIn.
2. **`index.html`** — trocar `https://www.aliniross.com.br/` pelo domínio real (canonical, Open Graph e JSON-LD).
3. **`src/components/About.jsx`** — revisar o texto "Sobre" (trajetória, formação) com as informações reais da Alini.

## Estrutura

- `src/components/` — uma seção por arquivo (Header, Hero, Services, About, Attendance, FinalCta, Footer, PrivacyModal)
- `src/logo-h.js` / `src/logo-v.js` — logo vetorizada (SVG) a partir do arquivo original; herda a cor via `currentColor`
- `public/img/` — fotos otimizadas em WebP com `srcset`
- Cada card de serviço abre o WhatsApp com uma mensagem específica já preenchida.
# alini-ross
# alini-ross
