import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { HomePage } from './App'
import { AvitoPage } from './pages/AvitoPage'
import { ChillOutPage } from './pages/ChillOutPage'
import { DurakPage } from './pages/DurakPage'
import { GreenfieldPage } from './pages/GreenfieldPage'
import { GazpromPage } from './pages/GazpromPage'
import { JaecooPage } from './pages/JaecooPage'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return null
}

export function PortfolioApp() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/avito" element={<AvitoPage />} />
        <Route path="/projects/chillout" element={<ChillOutPage />} />
        <Route path="/projects/durak" element={<DurakPage />} />
        <Route path="/projects/greenfield" element={<GreenfieldPage />} />
        <Route path="/projects/gazprom" element={<GazpromPage />} />
        <Route path="/projects/jaecoo" element={<JaecooPage />} />
      </Routes>
    </BrowserRouter>
  )
}
