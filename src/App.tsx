import { useEffect } from 'react'
import { projects, type Project } from './projects'

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
    <a className="project reveal" href={`#${project.id}`} id={project.id} aria-label={`${project.title}, ${project.category}, ${project.period}`}>
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
      <span className="project-arrow"><ArrowIcon /></span>
    </a>
  )
}

export function App() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('.reveal')
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
      elements.forEach((element) => element.classList.add('is-visible'))
      return
    }
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')),
      { threshold: 0.12 },
    )
    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-orbit hero-orbit-left" />
        <div className="hero-orbit hero-orbit-right" />
        <p className="name">Дима Чумак</p>
        <div className="title-stack reveal">
          <i /><i /><i />
          <h1 id="hero-title">ПОРТФОЛИО</h1>
        </div>
        <p className="intro reveal">Привет! Я — графический дизайнер с направленностью на универсальный подход.</p>
      </section>

      <section className="projects" aria-label="Проекты">
        {projects.map((project) => <ProjectRow project={project} key={project.id} />)}
        <p className="upcoming reveal">new projects upcoming...</p>
      </section>

      <footer className="contact reveal">
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
      </footer>
    </main>
  )
}
