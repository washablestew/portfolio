import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ResponsiveImage } from './ResponsiveImage'

type ResultSectionProps = {
  desktopImages: string[]
  mobileImages: string[]
  children: React.ReactNode
}

function useDesktopLayout() {
  const [desktop, setDesktop] = useState(() => window.matchMedia('(min-width: 901px)').matches)

  useEffect(() => {
    const media = window.matchMedia('(min-width: 901px)')
    const update = () => setDesktop(media.matches)
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  return desktop
}

export function ResultSection({ desktopImages, mobileImages, children }: ResultSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const viewportRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [travel, setTravel] = useState(0)
  const desktop = useDesktopLayout()
  const reducedMotion = useReducedMotion()
  const sticky = desktop && !reducedMotion
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end end'] })
  const x = useTransform(scrollYProgress, [0, 1], [0, -travel])

  useEffect(() => {
    const viewport = viewportRef.current
    const track = trackRef.current
    if (!viewport || !track) return

    const measure = () => setTravel(Math.max(0, track.scrollWidth - viewport.clientWidth))
    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(viewport)
    observer.observe(track)
    return () => observer.disconnect()
  }, [desktop])

  return (
    <section
      className={`case-result${sticky ? ' is-sticky' : ''}`}
      ref={sectionRef}
      style={sticky ? { height: `calc(100vh + ${travel}px)` } : undefined}
    >
      <div className="case-result-pin">
        <div className="case-result-copy">
          <p className="case-kicker">Результат</p>
          <div className="case-body">{children}</div>
        </div>
        <div className="case-result-viewport" ref={viewportRef}>
          <motion.div className="case-result-track" ref={trackRef} style={sticky ? { x } : undefined}>
            {desktopImages.map((image, index) => (
              <ResponsiveImage
                desktop={image}
                mobile={mobileImages[index]}
                alt={`Визуал результата ${index + 1}`}
                key={image}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
