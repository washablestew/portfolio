import { AnimatePresence, motion, MotionConfig, useMotionValue, useReducedMotion, useSpring, type Variants } from 'framer-motion'
import { memo, useCallback, useState, type FocusEvent, type PointerEvent } from 'react'
import { Link } from 'react-router-dom'
import smileUrl from './assets/smile.svg'
import { ProjectPreviewDeck, type ActivePreview } from './components/ProjectPreviewDeck'
import { projectPreviews } from './projectPreviews'
import { projects, type Project } from './projects'

const MotionLink = motion.create(Link)

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
}

const projectVariants: Variants = {
  ...revealVariants,
  hover: {
    x: 14,
    transition: { type: 'spring', stiffness: 220, damping: 24, mass: 0.8 },
  },
}

const arrowVariants: Variants = {
  hidden: { rotate: 0 },
  visible: { rotate: 0 },
  hover: {
    rotate: 45,
    transition: { type: 'spring', stiffness: 240, damping: 20 },
  },
}

const revealProps = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: true, amount: 0.12 },
} as const

function ArrowIcon() {
  return (
    <svg viewBox="0 0 56 56" aria-hidden="true">
      <circle cx="28" cy="28" r="26.5" fill="none" stroke="currentColor" strokeWidth="3" />
      <path d="M18 38 38 18M22 18h16v16" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

type ProjectRowProps = {
  project: Project
  onPreviewStart: (project: Project, event: PointerEvent<HTMLAnchorElement> | FocusEvent<HTMLAnchorElement>) => void
  onPreviewMove: (project: Project, event: PointerEvent<HTMLAnchorElement>) => void
  onPreviewEnd: () => void
}

const ProjectRow = memo(function ProjectRow({ project, onPreviewStart, onPreviewMove, onPreviewEnd }: ProjectRowProps) {
  return (
    <MotionLink
      className="project"
      to={project.href}
      id={project.id}
      aria-label={`${project.title}, ${project.category}, ${project.period}`}
      variants={projectVariants}
      {...revealProps}
      whileHover="hover"
      whileFocus="hover"
      onPointerEnter={(event) => onPreviewStart(project, event)}
      onPointerMove={(event) => onPreviewMove(project, event)}
      onPointerLeave={onPreviewEnd}
      onFocus={(event) => onPreviewStart(project, event)}
      onBlur={onPreviewEnd}
    >
      <h2>{project.title}</h2>
      <span className="project-dot" aria-hidden="true" />
      <span className="project-meta">
        <small>Проект</small>
        <b>{project.category}</b>
      </span>
      <span className="project-meta">
        <small>Дата проекта</small>
        <b>{project.period}</b>
      </span>
      <motion.span className="project-arrow" variants={arrowVariants}><ArrowIcon /></motion.span>
    </MotionLink>
  )
})

export function HomePage() {
  const reduceMotion = useReducedMotion()
  const [activePreview, setActivePreview] = useState<ActivePreview | null>(null)
  const previewX = useMotionValue(-400)
  const previewY = useMotionValue(-400)
  const springX = useSpring(previewX, { stiffness: 320, damping: 34, mass: 0.72 })
  const springY = useSpring(previewY, { stiffness: 320, damping: 34, mass: 0.72 })

  const positionPreview = useCallback((clientX: number, clientY: number, fallbackY = window.innerHeight / 2) => {
    const cardWidth = window.innerWidth >= 1200 ? 260 : 220
    const cardHeight = cardWidth
    const offset = 30
    const edge = 18
    const safeX = Number.isFinite(clientX) ? clientX : window.innerWidth / 2
    const safeY = Number.isFinite(clientY) ? clientY : fallbackY
    const nextX = safeX + cardWidth + offset + edge > window.innerWidth
      ? safeX - cardWidth - offset
      : safeX + offset
    const nextY = Math.max(edge, Math.min(safeY + 22, window.innerHeight - cardHeight - edge))

    previewX.set(nextX)
    previewY.set(nextY)
  }, [previewX, previewY])

  const canShowPreview = useCallback(() => (
    window.matchMedia('(min-width: 901px) and (hover: hover) and (pointer: fine)').matches
  ), [])

  const startPreview = useCallback((project: Project, event: PointerEvent<HTMLAnchorElement> | FocusEvent<HTMLAnchorElement>) => {
    if (!canShowPreview()) return

    const rect = event.currentTarget.getBoundingClientRect()
    const isPointerEvent = 'clientX' in event && typeof event.clientX === 'number'
    const clientX = isPointerEvent ? event.clientX : rect.right - 80
    const clientY = rect.top + rect.height / 2

    positionPreview(clientX, clientY, rect.top + rect.height / 2)
    setActivePreview({ projectId: project.id, imageIndex: 0 })
  }, [canShowPreview, positionPreview])

  const movePreview = useCallback((project: Project, event: PointerEvent<HTMLAnchorElement>) => {
    if (!canShowPreview() || reduceMotion) return

    const images = projectPreviews[project.id]
    if (!images?.length) return

    const rect = event.currentTarget.getBoundingClientRect()
    const progress = Math.max(0, Math.min(0.999, (event.clientX - rect.left) / rect.width))
    const imageIndex = Math.floor(progress * images.length)

    positionPreview(event.clientX, rect.top + rect.height / 2)
    setActivePreview((current) => (
      current?.projectId === project.id && current.imageIndex === imageIndex
        ? current
        : { projectId: project.id, imageIndex }
    ))
  }, [canShowPreview, positionPreview, reduceMotion])

  const endPreview = useCallback(() => setActivePreview(null), [])

  return (
    <MotionConfig reducedMotion="user">
      <main>
      <section className="hero" aria-labelledby="hero-title">
        <p className="name">Дима Чумак</p>
        <motion.div className="title-stack" variants={revealVariants} {...revealProps}>
          <i /><i /><i />
          <h1 id="hero-title">ПОРТФОЛИО</h1>
        </motion.div>
        <motion.p className="intro" variants={revealVariants} {...revealProps}>Привет! Я — графический дизайнер широкого профиля.</motion.p>
      </section>

      <section className="projects" aria-label="Проекты">
        {projects.map((project) => (
          <ProjectRow
            project={project}
            key={project.id}
            onPreviewStart={startPreview}
            onPreviewMove={movePreview}
            onPreviewEnd={endPreview}
          />
        ))}
        <motion.p className="upcoming" variants={revealVariants} {...revealProps}>new projects upcoming...</motion.p>
      </section>

      <AnimatePresence>
        {activePreview && (
          <ProjectPreviewDeck
            active={activePreview}
            x={reduceMotion ? previewX : springX}
            y={reduceMotion ? previewY : springY}
          />
        )}
      </AnimatePresence>

      <motion.footer className="contact" variants={revealVariants} {...revealProps}>
        <div className="contact-heading">
          <h2>Давайте<br />работать вместе!</h2>
          <img className="scribble" src={smileUrl} alt="" aria-hidden="true" />
        </div>
        <address>
          <a href="mailto:washablestew@gmail.com">e-mail: washablestew@gmail.com</a>
          <a href="https://t.me/DmitryPawlovich" target="_blank" rel="noreferrer">telegram: @DmitryPawlovich</a>
        </address>
        <div className="footer-line"><span>2026</span><a href="#instagram" id="instagram">INST</a></div>
      </motion.footer>
      </main>
    </MotionConfig>
  )
}
