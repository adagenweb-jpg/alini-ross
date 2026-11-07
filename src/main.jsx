import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/gilda-display/latin-400.css'
import '@fontsource/playfair-display/latin-400-italic.css'
import '@fontsource/manrope/latin-400.css'
import '@fontsource/manrope/latin-500.css'
import '@fontsource/manrope/latin-700.css'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
