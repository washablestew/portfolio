import { motion, MotionConfig, type Variants } from 'framer-motion'
import '../durak.css'

import heroDesktop from '../assets/durak/hero-desktop.webp'
import heroMobile from '../assets/durak/hero-mobile.webp'
import suits from '../assets/durak/suits.webp'
import box from '../assets/durak/box.webp'
import text01 from '../assets/durak/text-01.svg'
import cardIntro from '../assets/durak/card-intro.webp'
import text02 from '../assets/durak/text-02.svg'
import hands from '../assets/durak/hands.webp'
import cardFan from '../assets/durak/card-fan.webp'
import handCard from '../assets/durak/hand-card.webp'
import cardsRed from '../assets/durak/cards-red.webp'
import cardsBlack from '../assets/durak/cards-black.webp'
import handPoint from '../assets/durak/hand-point.webp'
import finalImage from '../assets/durak/final.webp'

const reveal: Variants = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
}

const revealProps = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: true, amount: 0.12 },
} as const

export function DurakPage() {
  return (
    <MotionConfig reducedMotion="user">
      <main className="durak-page">
        <picture className="durak-hero">
          <source media="(max-width: 900px)" srcSet={heroMobile} />
          <img src={heroDesktop} alt="Игра Дурак — коллаж с сердитым мужчиной" fetchPriority="high" />
        </picture>

        <motion.section className="durak-intro durak-shell" variants={reveal} {...revealProps}>
          <div className="durak-intro-copy">
            <h1 className="durak-decorative">Нет-нет, секунду…</h1>
            <h2>Это вовсе не вам.</h2>
            <p>Дело в том, что так именуется карточная игра, весьма схожая с игрой в дурака.</p>
            <p>Смотрите, знакомые масти:</p>
          </div>
          <img className="durak-suits" src={suits} alt="Четыре карточные масти на ладони" />
          <img className="durak-box" src={box} alt="Коробка карточной игры Дурак" />
        </motion.section>

        <motion.section className="durak-art durak-art-intro durak-shell" variants={reveal} {...revealProps}>
          <img className="durak-vector durak-vector-one" src={text01} alt="А что-то не знакомое…" />
          <img className="durak-card-intro" src={cardIntro} alt="Карты игры Дурак" />
        </motion.section>

        <motion.section className="durak-art durak-profanity durak-shell" variants={reveal} {...revealProps}>
          <img className="durak-vector durak-vector-two" src={text02} alt="Брань, сквернословие и ругательства" />
          <img className="durak-hands" src={hands} alt="Две протянутые руки" />
          <img className="durak-card-fan" src={cardFan} alt="Веер карт игры Дурак" />
        </motion.section>

        <motion.section className="durak-play durak-shell" variants={reveal} {...revealProps}>
          <div className="durak-copy durak-play-copy">
            <h2>Ругайтесь, бранитесь,<br />позвольте себе больше.</h2>
            <p>Перед тем, как совершить ход, вам нужно почитать содержимое карточки сопернику, подключив харизму пьяницы или эксцентричность недовольной хамки.</p>
          </div>
          <img className="durak-hand-card" src={handCard} alt="Рука держит карту" />
          <img className="durak-cards-red" src={cardsRed} alt="Две игровые карты красной масти" />
          <h2 className="durak-decorative durak-beaten">Бито?</h2>
          <img className="durak-cards-black" src={cardsBlack} alt="Две игровые карты чёрной масти" />
        </motion.section>

        <motion.section className="durak-why durak-shell" variants={reveal} {...revealProps}>
          <div className="durak-copy">
            <h2>Но почему? Зачем?</h2>
            <p>Этот проект создан в поддержку обсценной лексики и из моей бездонной любви к уместному употреблению бранных слов.</p>
            <p>Но если честно, играть в дурака таким образом в компании из 3–4 человек становится просто веселее.</p>
          </div>
          <img className="durak-hand-point" src={handPoint} alt="Рука указывает в сторону текста" />
        </motion.section>

        <motion.img className="durak-final" src={finalImage} alt="Коробка игры и карта с памяткой" variants={reveal} {...revealProps} />
      </main>
    </MotionConfig>
  )
}
