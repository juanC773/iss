import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PeachGomaLoveCard from './components/App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PeachGomaLoveCard />
  </StrictMode>,
)
