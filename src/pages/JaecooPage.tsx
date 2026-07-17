import { motion, MotionConfig, type Variants } from 'framer-motion'
import { ProjectVideo } from '../components/ProjectVideo'
import { ResponsiveImage } from '../components/ResponsiveImage'
import { ResultSection } from '../components/ResultSection'
import '../avito.css'
import '../jaecoo.css'

import heroMainDesktop from '../assets/jaecoo/desktop/hero-main.png'
import heroSecondaryDesktop from '../assets/jaecoo/desktop/hero-secondary.png'
import iconDesktop from '../assets/jaecoo/desktop/icon.png'
import roleDesktop from '../assets/jaecoo/desktop/role.png'
import result01Desktop from '../assets/jaecoo/desktop/result-01.png'
import result02Desktop from '../assets/jaecoo/desktop/result-02.png'
import result03Desktop from '../assets/jaecoo/desktop/result-03.png'
import finaleDesktop from '../assets/jaecoo/desktop/finale.png'
import heroMainMobile from '../assets/jaecoo/mobile/hero-main.png'
import heroSecondaryMobile from '../assets/jaecoo/mobile/hero-secondary.png'
import iconMobile from '../assets/jaecoo/mobile/icon.png'
import roleMobile from '../assets/jaecoo/mobile/role.png'
import result01Mobile from '../assets/jaecoo/mobile/result-01.png'
import result02Mobile from '../assets/jaecoo/mobile/result-02.png'
import result03Mobile from '../assets/jaecoo/mobile/result-03.png'
import finaleMobile from '../assets/jaecoo/mobile/finale.png'
import animationVideo from '../assets/jaecoo/media/jaecoo-animation.mp4'
import animationPoster from '../assets/jaecoo/media/jaecoo-animation-poster.webp'

function collectAssets(modules: Record<string, string>) {
  return Object.entries(modules)
    .sort(([left], [right]) => left.localeCompare(right))
    .map(([, url]) => url)
}

const desktopGrid = collectAssets(
  import.meta.glob('../assets/jaecoo/desktop/grid-*.*', { eager: true, query: '?url', import: 'default' }) as Record<string, string>,
)
const mobileGrid = collectAssets(
  import.meta.glob('../assets/jaecoo/mobile/grid-*.*', { eager: true, query: '?url', import: 'default' }) as Record<string, string>,
)

const reveal: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

const revealProps = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: true, amount: 0.12 },
} as const

export function JaecooPage() {
  return (
    <MotionConfig reducedMotion="user">
      <main className="case-page jaecoo-page">
        <section className="case-hero">
          <h1>Jaecoo</h1>
          <ResponsiveImage desktop={heroMainDesktop} mobile={heroMainMobile} alt="Автомобиль Jaecoo" className="case-hero-main" priority />
          <ResponsiveImage desktop={heroSecondaryDesktop} mobile={heroSecondaryMobile} alt="Публикация Jaecoo" className="case-hero-secondary" />
          <ResponsiveImage desktop={iconDesktop} mobile={iconMobile} alt="Логотип Jaecoo" className="case-hero-icon" />
          <div className="case-hero-copy">
            <a href="https://t.me/jaecooclub" target="_blank" rel="noreferrer">JAECOO.КЛУБ в телеграм</a>
            <p>Телеграм-канал для аудитории Jaecoo: владельцев автомобилей, потенциальных покупателей и тех, кто интересуется брендом</p>
          </div>
        </section>

        <motion.section className="case-meta" variants={reveal} {...revealProps}>
          <div className="case-meta-identity">
            <p>Фирменный стиль<br />Deasign // 2024–2025</p>
            <ResponsiveImage desktop={iconDesktop} mobile={iconMobile} alt="Логотип Jaecoo" />
          </div>
          <div>
            <p className="case-label">Клиент</p>
            <p className="case-meta-value">Jaecoo</p>
          </div>
          <div>
            <p className="case-label">Задача</p>
            <p className="case-meta-value">Поддержка и развитие фирменного стиля Jaecoo в рамках социальных сетей</p>
          </div>
        </motion.section>

        <motion.section className="case-grid jaecoo-grid" variants={reveal} {...revealProps} aria-label="Визуалы Jaecoo">
          {desktopGrid.map((image, index) => (
            <ResponsiveImage desktop={image} mobile={mobileGrid[index]} alt={`Визуал Jaecoo ${index + 1}`} key={image} />
          ))}
          <ProjectVideo src={animationVideo} poster={animationPoster} ariaLabel="Зимняя анимация Jaecoo" />
        </motion.section>

        <motion.section className="case-role jaecoo-role" variants={reveal} {...revealProps}>
          <div className="case-role-copy">
            <p className="case-kicker">Роль и подход</p>
            <div className="case-body">
              <p>В проекте занимал роль графического дизайнера в команде Deasign над визуальной коммуникацией Telegram-канала Jaecoo Россия.</p>
              <p>Моя задача заключалась в том, чтобы поддерживать премиальный, технологичный и при этом живой образ автомобильного бренда в регулярном контенте: от продуктовых публикаций и анонсов до спецпроектов, конкурсов, ситуативных постов и материалов для комьюнити.</p>
              <p>В работе совмещали графический дизайн, фоторетушь и цветокоррекцию с моушн- и 3D-инструментами. Основной пайплайн строился вокруг Photoshop, After Effects и Blender, а для поиска визуальных решений и оптимизации производства я использовал Midjourney и ChatGPT.</p>
              <p>Большая часть задач требовала не просто собрать макет по шаблону, а адаптировать визуальный язык под конкретный инфоповод.</p>
              <p>Также много работал с фото: ретушь, цветокоррекция, доработка исходников, композитинг и приведение разнородных материалов к единому уровню качества.</p>
              <p>Это позволило сохранить ощущение цельной бренд-системы даже в условиях быстрого производства и большого количества разноформатного контента.</p>
            </div>
          </div>
          <ResponsiveImage desktop={roleDesktop} mobile={roleMobile} alt="Автомобили Jaecoo" />
        </motion.section>

        <ResultSection
          desktopImages={[result01Desktop, result02Desktop, result03Desktop]}
          mobileImages={[result01Mobile, result02Mobile, result03Mobile]}
        >
          <p>В результате удалось поддержать стабильный визуальный уровень Telegram-канала и развивать его как полноценную бренд-площадку, а не просто новостную ленту.</p>
          <p>Контент знакомил аудиторию с моделями и технологиями Jaecoo, поддерживал интерес владельцев, вовлекал потенциальных покупателей и помогал усиливать комьюнити вокруг бренда.</p>
          <p>За время работы (2024–2025) наша команда регулярно запускала конкурсы, интерактивы, спецпроекты и ситуативные механики, которые помогали активировать подписчиков и переводить коммуникацию в формат живого диалога с аудиторией.</p>
        </ResultSection>

        <motion.footer className="case-finale jaecoo-finale" variants={reveal} {...revealProps}>
          <h2>JAECOO</h2>
          <ResponsiveImage desktop={finaleDesktop} mobile={finaleMobile} alt="Jaecoo" />
        </motion.footer>
      </main>
    </MotionConfig>
  )
}
