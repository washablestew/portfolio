import { motion, MotionConfig, type Variants } from 'framer-motion'
import { ResponsiveImage } from '../components/ResponsiveImage'
import { ResultSection } from '../components/ResultSection'
import '../avito.css'
import '../gazprom.css'

import heroMain from '../assets/gazprom/hero-main.png'
import heroSecondary from '../assets/gazprom/hero-secondary.png'
import logo from '../assets/gazprom/logo.png'
import roleImage from '../assets/gazprom/role.png'
import result01 from '../assets/gazprom/result-01.png'
import result02 from '../assets/gazprom/result-02.png'
import result03 from '../assets/gazprom/result-03.png'
import mountains from '../assets/gazprom/mountains.png'

function collectAssets(modules: Record<string, string>) {
  return Object.entries(modules)
    .sort(([left], [right]) => left.localeCompare(right))
    .map(([, url]) => url)
}

const gridImages = collectAssets(
  import.meta.glob('../assets/gazprom/grid-*.*', { eager: true, query: '?url', import: 'default' }) as Record<string, string>,
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

const resultImages = [result01, result02, result03]

export function GazpromPage() {
  return (
    <MotionConfig reducedMotion="user">
      <main className="case-page gazprom-page">
        <section className="case-hero">
          <h1>Сказки Крайнего<br />Севера</h1>
          <ResponsiveImage desktop={heroMain} mobile={heroMain} alt="Сказки Крайнего Севера" className="case-hero-main" priority />
          <ResponsiveImage desktop={heroSecondary} mobile={heroSecondary} alt="Иллюстрация к сказке Крайнего Севера" className="case-hero-secondary" />
          <ResponsiveImage desktop={logo} mobile={logo} alt="Логотип Газпром" className="case-hero-icon" />
          <div className="case-hero-copy">
            <p>
              Аудиобиблиотека сказок коренных народов Севера, которые можно послушать на{' '}
              <a href="https://skazkisevera.ru/" target="_blank" rel="noreferrer">специальном сайте</a>{' '}
              или на 52 стриминговых площадках (VK, Яндекс Музыка и т.д.).
            </p>
          </div>
        </section>

        <motion.section className="case-meta" variants={reveal} {...revealProps}>
          <div className="case-meta-identity">
            <p>Фирменный стиль<br />Deasign // 2022</p>
            <ResponsiveImage desktop={logo} mobile={logo} alt="Логотип Газпром" />
          </div>
          <div>
            <p className="case-label">Клиент</p>
            <p className="case-meta-value">Газпром нефть<br />Родные Просторы</p>
          </div>
          <div>
            <p className="case-label">Задача</p>
            <p className="case-meta-value">Создание визуальной айдентики проекта</p>
          </div>
        </motion.section>

        <motion.section className="case-grid gazprom-grid" variants={reveal} {...revealProps} aria-label="Иллюстрации проекта">
          {gridImages.map((image, index) => (
            <ResponsiveImage desktop={image} mobile={image} alt={`Иллюстрация сказки ${index + 1}`} key={image} />
          ))}
        </motion.section>

        <motion.section className="case-role gazprom-role" variants={reveal} {...revealProps}>
          <div className="case-role-copy">
            <p className="case-kicker">Роль и подход</p>
            <div className="case-body">
              <p>Занимал роль графического и веб-дизайнера в проекте «Сказки Севера» — аудиобиблиотека, посвящённая культуре коренных народов.</p>
              <p>Моя зона ответственности включала разработку визуальной системы для обложек сказок, а также проектирование и дизайн сайта.</p>
              <p>В работе с обложками ключевой задачей было создать цельный визуальный язык, который передаёт атмосферу северного фольклора, но при этом остаётся современным и цифровым.</p>
              <p>Параллельно я занимался прототипированием и дизайном сайта. Структура выстраивалась вокруг сценария потребления аудиоконтента: быстрый вход, удобная навигация по сказкам и акцент на прослушивании.</p>
              <p>Визуально сайт продолжал идею обложек — через ритм, композицию и работу с пустотой создавалось ощущение спокойствия и северного пространства, что усиливало восприятие контента.</p>
            </div>
          </div>
          <ResponsiveImage desktop={roleImage} mobile={roleImage} alt="Персонажи сказок у чумов" />
        </motion.section>

        <ResultSection desktopImages={resultImages} mobileImages={resultImages}>
          <p>Собрали целостную визуальную экосистему проекта: обложки, сайт и пользовательский опыт работали как единое высказывание.</p>
          <p>Проект не только решил прикладную контентную задачу, но и сформировал узнаваемый образ, усиливающий культурную ценность материала.</p>
          <p>
            <a className="gazprom-link" href="https://tagline.ru/deasign/cases/audiobiblioteka--skazki-kraynego-severa/" target="_blank" rel="noreferrer">
              Проект занял 1 место на фестивале Loud PR в категории PR-проектов в сфере культуры (Art &amp; Culture).
            </a>
          </p>
          <p>Это подтвердило, что выбранный визуальный и продуктовый подход эффективно работает не только на уровне дизайна, но и как часть коммуникационной стратегии.</p>
        </ResultSection>

        <motion.footer className="case-finale gazprom-finale" variants={reveal} {...revealProps}>
          <h2>СКАЗКИ КРАЙНЕГО СЕВЕРА</h2>
          <img src={mountains} alt="" aria-hidden="true" />
        </motion.footer>
      </main>
    </MotionConfig>
  )
}
