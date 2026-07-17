import { motion, MotionConfig, type Variants } from 'framer-motion'
import { ProjectVideo } from '../components/ProjectVideo'
import { ResponsiveImage } from '../components/ResponsiveImage'
import { ResultSection } from '../components/ResultSection'
import '../avito.css'
import '../chillout.css'

import heroMain from '../assets/chillout/hero-main.webp'
import heroSecondary from '../assets/chillout/hero-secondary.webp'
import logo from '../assets/chillout/logo.png'
import grid01 from '../assets/chillout/grid-01.webp'
import grid02 from '../assets/chillout/grid-02.webp'
import grid03 from '../assets/chillout/grid-03.webp'
import grid04Desktop from '../assets/chillout/grid-04-desktop.webp'
import grid04Mobile from '../assets/chillout/grid-04-mobile.webp'
import roleImage from '../assets/chillout/role.webp'
import result01 from '../assets/chillout/result-01.webp'
import result02 from '../assets/chillout/result-02.webp'
import result03 from '../assets/chillout/result-03.webp'
import finalImage from '../assets/chillout/final.webp'
import video from '../assets/chillout/video.mp4'
import videoPoster from '../assets/chillout/video-poster.webp'

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

export function ChillOutPage() {
  return (
    <MotionConfig reducedMotion="user">
      <main className="case-page chillout-page">
        <section className="case-hero">
          <ResponsiveImage desktop={heroMain} mobile={heroMain} alt="Коктейль Велосипед с тоником ChillOut" className="case-hero-main" priority />
          <div className="chillout-hero-side">
            <h1>Напитки ChillOut</h1>
            <ResponsiveImage desktop={heroSecondary} mobile={heroSecondary} alt="Коктейль Шпионский ром с тоником ChillOut" className="case-hero-secondary" />
            <ResponsiveImage desktop={logo} mobile={logo} alt="Логотип ChillOut" className="case-hero-icon" />
            <div className="case-hero-copy">
              <p>ChillOut — молодой бренд тоников и кол от Черноголовки, запущенный в 2022 году и ориентированный на яркое, современное позиционирование в категории безалкогольных напитков.</p>
            </div>
          </div>
        </section>

        <motion.section className="case-meta" variants={reveal} {...revealProps}>
          <div className="case-meta-identity">
            <p>Коммуникационный дизайн<br />Deasign // 2023–2024</p>
            <ResponsiveImage desktop={logo} mobile={logo} alt="Логотип ChillOut" />
          </div>
          <div>
            <p className="case-label">Клиент</p>
            <p className="case-meta-value">Черноголовка</p>
          </div>
          <div>
            <p className="case-label">Задача</p>
            <p className="case-meta-value">Поддержка и развитие визуальной коммуникации продукта</p>
          </div>
        </motion.section>

        <motion.section className="case-grid chillout-grid" variants={reveal} {...revealProps} aria-label="Визуалы ChillOut">
          <ProjectVideo src={video} poster={videoPoster} ariaLabel="Анимация ChillOut" />
          <ResponsiveImage desktop={grid01} mobile={grid01} alt="Линейка напитков ChillOut на красном фоне" />
          <ResponsiveImage desktop={grid02} mobile={grid02} alt="Линейка напитков ChillOut" />
          <ResponsiveImage desktop={grid03} mobile={grid03} alt="Коктейль Малина и розмарин" />
          <ResponsiveImage desktop={grid04Desktop} mobile={grid04Mobile} alt="Жёлтый фон ChillOut" className="chillout-grid-wide" />
        </motion.section>

        <motion.section className="case-role chillout-role" variants={reveal} {...revealProps}>
          <div className="case-role-copy">
            <p className="case-kicker">Роль и подход</p>
            <div className="case-body">
              <p>В составе команды Deasign отвечал за визуальную часть коммуникации бренда ChillOut от Черноголовки в период активного роста (2023–2024).</p>
              <p>Основной фокус — чтобы продукт чётко считывался в каждой точке контакта и не терялся в категории.</p>
              <p>В SMM поддерживал единую систему подачи: упрощал визуал, усиливал присутствие продукта, контролировал консистентность между форматами.</p>
              <p>В карточках маркетплейсов работал с конверсией — структурировал информацию, выстраивал иерархию и акценты, чтобы пользователь быстро понимал ценность и сценарии использования.</p>
            </div>
          </div>
          <ResponsiveImage desktop={roleImage} mobile={roleImage} alt="ChillOut Cola во льду" />
        </motion.section>

        <ResultSection desktopImages={resultImages} mobileImages={resultImages}>
          <p>Коммуникация стала более однородной и понятной: продукт стабильно считывается в соцсетях и на маркетплейсах, без разрыва между каналами.</p>
          <p>Это поддержало задачу масштабирования — рост узнаваемости и закрепление бренда внутри категории.</p>
        </ResultSection>

        <motion.footer className="case-finale chillout-finale" variants={reveal} {...revealProps}>
          <h2>ChillOut</h2>
          <ResponsiveImage desktop={finalImage} mobile={finalImage} alt="Напитки ChillOut" />
        </motion.footer>
      </main>
    </MotionConfig>
  )
}
