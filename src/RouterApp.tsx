import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { HomePage } from './App'
import { ProjectBackLink } from './components/ProjectBackLink'
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

function ProjectNavigation() {
  const { pathname } = useLocation()
  return pathname.startsWith('/projects/') ? <ProjectBackLink /> : null
}

export function PortfolioApp() {
  const basename = import.meta.env.BASE_URL === '/' ? undefined : import.meta.env.BASE_URL.replace(/\/$/, '')

  return (
    <BrowserRouter basename={basename}>
      <ScrollToTop />
      <ProjectNavigation />
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
