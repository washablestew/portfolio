import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { HomePage } from './App'
import { AvitoPage } from './pages/AvitoPage'
import { GreenfieldPage } from './pages/GreenfieldPage'

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
        <Route path="/projects/greenfield" element={<GreenfieldPage />} />
      </Routes>
    </BrowserRouter>
  )
}
