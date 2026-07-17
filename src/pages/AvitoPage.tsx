import { motion, MotionConfig, type Variants } from 'framer-motion'
import { ResponsiveImage } from '../components/ResponsiveImage'
import { ResultSection } from '../components/ResultSection'
import '../avito.css'

function collectAssets(modules: Record<string, string>) {
  return Object.entries(modules)
    .sort(([left], [right]) => left.localeCompare(right))
    .map(([, url]) => url)
}

const desktopAssets = collectAssets(
  import.meta.glob('../assets/avito/desktop/*.png', { eager: true, query: '?url', import: 'default' }) as Record<string, string>,
)
const mobileAssets = collectAssets(
  import.meta.glob('../assets/avito/mobile/*.png', { eager: true, query: '?url', import: 'default' }) as Record<string, string>,
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

export function AvitoPage() {
  const gridDesktop = desktopAssets.slice(3, 11)
  const gridMobile = mobileAssets.slice(3, 11)

  return (
    <MotionConfig reducedMotion="user">
      <main className="case-page">
        <section className="case-hero">
          <h1>Авито.Спецтехника</h1>
          <ResponsiveImage desktop={desktopAssets[2]} mobile={mobileAssets[0]} alt="Авито.Спецтехника" className="case-hero-main" />
          <ResponsiveImage desktop={desktopAssets[0]} mobile={mobileAssets[1]} alt="Пример публикации Авито" className="case-hero-secondary" />
          <ResponsiveImage desktop={desktopAssets[1]} mobile={mobileAssets[2]} alt="Иконка Авито" className="case-hero-icon" />
          <div className="case-hero-copy">
            <a href="https://t.me/avito_trucks" target="_blank" rel="noreferrer">Авито.Спецтехника в телеграм</a>
            <p>Телеграм-канал для тех, кто работает со спецтехникой — продаёт, сдаёт в аренду или закупает для бизнеса</p>
          </div>
        </section>

        <motion.section className="case-meta" variants={reveal} {...revealProps}>
          <div className="case-meta-identity">
            <p>Фирменный стиль<br />Design // 2024</p>
            <ResponsiveImage desktop={desktopAssets[1]} mobile={mobileAssets[2]} alt="Иконка Авито" />
          </div>
          <div>
            <p className="case-label">Клиент</p>
            <p className="case-meta-value">Авито.Спецтехника<br />Авито.Авто</p>
          </div>
          <div>
            <p className="case-label">Задача</p>
            <p className="case-meta-value">Поддержка и развитие фирменного стиля Авито.Спецтехника</p>
          </div>
        </motion.section>

        <motion.section className="case-grid" variants={reveal} {...revealProps} aria-label="Примеры визуального стиля">
          {gridDesktop.map((image, index) => (
            <ResponsiveImage desktop={image} mobile={gridMobile[index]} alt={`Пример публикации ${index + 1}`} key={image} />
          ))}
        </motion.section>

        <motion.section className="case-role" variants={reveal} {...revealProps}>
          <div className="case-role-copy">
            <p className="case-kicker">Роль и подход</p>
            <div className="case-body">
              <p>Я работал как графический дизайнер в рамках аутсорс-команды, отвечая за визуальную коммуникацию Telegram-канала и чат-бота «Авито.Спецтехника».</p>
              <p>Основная задача — поддерживать и развивать фирменный стиль в регулярном контенте, не выходя за рамки брендбука, но при этом избегая ощущения шаблонности.</p>
              <p>Работа строилась на базе готовых Figma-шаблонов, которые я адаптировал под каждую публикацию: перерабатывал композицию, ритм и акценты под конкретный смысл сообщения.</p>
              <p>Дополнительно я настроил пайплайн: контролируемая генерация визуалов через AI (ChatGPT) с последующей доработкой в Photoshop — это позволяло быстро создавать релевантные и уникальные изображения по запросу клиента внутри строгих гайдлайнов.</p>
            </div>
          </div>
          <ResponsiveImage desktop={desktopAssets[11]} mobile={mobileAssets[11]} alt="Работа над визуальным стилем" />
        </motion.section>

        <ResultSection desktopImages={desktopAssets.slice(12, 15)} mobileImages={mobileAssets.slice(12, 15)}>
          <p>Удалось выстроить стабильный визуальный поток, где каждый пост выглядел частью единой системы, но не повторялся.</p>
          <p>Контент стал более читаемым, прикладным и понятным для B2B-аудитории, что усилило восприятие канала как рабочего инструмента, а не просто новостной ленты.</p>
          <p>За счёт комбинации шаблонов и AI удалось ускорить производство без потери качества и поддерживать визуальный уровень на протяжении всей работы.</p>
        </ResultSection>

        <motion.footer className="case-finale" variants={reveal} {...revealProps}>
          <h2>Авито.Спецтехника</h2>
          <ResponsiveImage desktop={desktopAssets[15]} mobile={mobileAssets[15]} alt="Авито.Спецтехника" />
        </motion.footer>
      </main>
    </MotionConfig>
  )
}
