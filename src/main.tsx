import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { KonyvProvider } from './contexts/TablazatContext'
import { UrlapProvider } from './contexts/UrlapContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <KonyvProvider>
      <UrlapProvider>
        <App />
      </UrlapProvider>
    </KonyvProvider>
  </StrictMode>,
)
