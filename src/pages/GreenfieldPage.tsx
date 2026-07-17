import { motion, MotionConfig, type Variants } from 'framer-motion'
import { ProjectVideo } from '../components/ProjectVideo'
import { ResponsiveImage } from '../components/ResponsiveImage'
import { ResultSection } from '../components/ResultSection'
import '../avito.css'
import '../greenfield.css'

import heroMainDesktop from '../assets/greenfield/desktop/hero-main.png'
import heroSecondaryDesktop from '../assets/greenfield/desktop/hero-secondary.png'
import iconDesktop from '../assets/greenfield/desktop/icon.png'
import roleDesktop from '../assets/greenfield/desktop/role.png'
import result01Desktop from '../assets/greenfield/desktop/result-01.png'
import result02Desktop from '../assets/greenfield/desktop/result-02.png'
import heroMainMobile from '../assets/greenfield/mobile/hero-main.png'
import heroSecondaryMobile from '../assets/greenfield/mobile/hero-secondary.png'
import iconMobile from '../assets/greenfield/mobile/icon.png'
import roleMobile from '../assets/greenfield/mobile/role.png'
import result01Mobile from '../assets/greenfield/mobile/result-01.png'
import result02Mobile from '../assets/greenfield/mobile/result-02.png'

const desktopGrid = Object.values(
  import.meta.glob('../assets/greenfield/desktop/grid-*.png', { eager: true, query: '?url', import: 'default' }),
) as string[]
const mobileGrid = Object.values(
  import.meta.glob('../assets/greenfield/mobile/grid-*.png', { eager: true, query: '?url', import: 'default' }),
) as string[]

const videos = {
  goldenCeylon: '',
  gingerLemon: '',
  currantMint: '',
}

const reveal: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

const revealProps = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: true, amount: 0.12 },
} as const

export function GreenfieldPage() {
  return (
    <MotionConfig reducedMotion="user">
      <main className="case-page greenfield-page">
        <section className="case-hero">
          <h1>Greenfield // AI</h1>
          <ResponsiveImage desktop={heroMainDesktop} mobile={heroMainMobile} alt="Greenfield Golden Ceylon" className="case-hero-main" />
          <ResponsiveImage desktop={heroSecondaryDesktop} mobile={heroSecondaryMobile} alt="AI-ролик Greenfield" className="case-hero-secondary" />
          <ResponsiveImage desktop={iconDesktop} mobile={iconMobile} alt="Логотип Greenfield" className="case-hero-icon" />
          <div className="case-hero-copy">
            <a href="https://greenfieldtea.co.uk/" target="_blank" rel="noreferrer">greenfieldtea.co.uk</a>
            <p>Серия AI-роликов для продвижения трёх вкусов чая Greenfield: Golden Ceylon, Ginger Lemon и Currant Mint.</p>
          </div>
        </section>

        <motion.section className="case-meta" variants={reveal} {...revealProps}>
          <div className="case-meta-identity">
            <p>AI-production<br />Deasign // 2025</p>
            <ResponsiveImage desktop={iconDesktop} mobile={iconMobile} alt="Логотип Greenfield" />
          </div>
          <div>
            <p className="case-label">Клиент</p>
            <p className="case-meta-value">Greenfield</p>
          </div>
          <div>
            <p className="case-label">Задача</p>
            <p className="case-meta-value">Разработка AI-визуалов<br />для рекламной серии</p>
          </div>
        </motion.section>

        <motion.section className="case-grid greenfield-grid" variants={reveal} {...revealProps} aria-label="Визуалы Greenfield">
          {desktopGrid.map((image, index) => (
            <ResponsiveImage desktop={image} mobile={mobileGrid[index]} alt={`Визуал Greenfield ${index + 1}`} key={image} />
          ))}
        </motion.section>

        <motion.section className="greenfield-videos" variants={reveal} {...revealProps}>
          <ProjectVideo src={videos.goldenCeylon} poster={desktopGrid[0]} ariaLabel="Golden Ceylon" />
          <ProjectVideo src={videos.gingerLemon} poster={desktopGrid[1]} ariaLabel="Ginger Lemon" />
        </motion.section>

        <motion.section className="case-role greenfield-role" variants={reveal} {...revealProps}>
          <div className="case-role-copy">
            <p className="case-kicker">Роль и подход</p>
            <div className="case-body">
              <p>В проекте занимал роль графического и motion-дизайнера в команде, которая разрабатывала серию AI-визуалов для рекламных роликов Greenfield.</p>
              <p>Задача заключалась в том, чтобы создать атмосферные продуктовые сцены для трёх вкусов чая: Golden Ceylon, Ginger Lemon и Currant Mint.</p>
              <p>Каждый ролик должен был передавать характер конкретного вкуса через окружение, свет, цвет, фактуру и движение, при этом сохраняя ощущение единой брендовой линейки.</p>
              <p>Пайплайн строился на сочетании генеративных инструментов, 3D и постпродакшена. Окружения под упаковку создавались в Adobe Firefly и Midjourney, после чего пачка чая рендерилась в нужном ракурсе и интегрировалась в сцену.</p>
              <p>Далее статичные AI-кадры анимировались в Kling: добавлялось движение камеры, света и деталей окружения. После этого шоты дорабатывались на этапе композитинга.</p>
              <p>Главная сложность была в том, чтобы соединить AI-фон, 3D-упаковку и видеогенерацию в цельный визуал, где продукт выглядит органично.</p>
            </div>
          </div>
          <ResponsiveImage desktop={roleDesktop} mobile={roleMobile} alt="Три вкуса Greenfield" />
        </motion.section>

        <ResultSection
          desktopImages={[result01Desktop, result02Desktop, heroMainDesktop]}
          mobileImages={[result01Mobile, result02Mobile, heroMainMobile]}
        >
          <p>Собрали визуальную систему для серии рекламных AI-роликов Greenfield, где каждый вкус получил собственное настроение и узнаваемую атмосферу.</p>
          <p>Golden Ceylon был раскрыт через тёплый, насыщенный и классический визуальный образ, Ginger Lemon — через свежую, яркую и энергичную подачу, а Currant Mint — через лёгкое, прохладное и природное ощущение.</p>
          <p>Проект показал, как AI-инструменты можно использовать не как самостоятельную генерацию красивых картинок, а как часть управляемого production-пайплайна.</p>
          <p>Такой подход позволил быстро протестировать разные визуальные направления и получить рекламные шоты, сохраняющие ощущение премиального бренда.</p>
        </ResultSection>

        <motion.footer className="case-finale greenfield-finale" variants={reveal} {...revealProps}>
          <h2>GREENFIELD</h2>
          <ProjectVideo src={videos.currantMint} poster={heroMainDesktop} ariaLabel="Currant Mint" />
        </motion.footer>
      </main>
    </MotionConfig>
  )
}
