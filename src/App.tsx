import { motion, MotionConfig, type Variants } from 'framer-motion'
import { Link } from 'react-router-dom'
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

function ProjectRow({ project }: { project: Project }) {
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
}

export function HomePage() {
  return (
    <MotionConfig reducedMotion="user">
      <main>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-orbit hero-orbit-left" />
        <div className="hero-orbit hero-orbit-right" />
        <p className="name">Дима Чумак</p>
        <motion.div className="title-stack" variants={revealVariants} {...revealProps}>
          <i /><i /><i />
          <h1 id="hero-title">ПОРТФОЛИО</h1>
        </motion.div>
        <motion.p className="intro" variants={revealVariants} {...revealProps}>Привет! Я — графический дизайнер с направленностью на универсальный подход.</motion.p>
      </section>

      <section className="projects" aria-label="Проекты">
        {projects.map((project) => <ProjectRow project={project} key={project.id} />)}
        <motion.p className="upcoming" variants={revealVariants} {...revealProps}>new projects upcoming...</motion.p>
      </section>

      <motion.footer className="contact" variants={revealVariants} {...revealProps}>
        <div className="contact-heading">
          <h2>Давайте<br />работать вместе!</h2>
          <svg className="scribble" viewBox="0 0 220 270" aria-hidden="true">
            <path d="M88 8c-3 54 5 105 29 151M132 29c-9 51-8 94 5 132M13 166c64-8 123 12 186 87" />
          </svg>
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
