import { motion, useAnimationFrame, useMotionValue, useReducedMotion } from 'framer-motion'
import { useId, useState } from 'react'

const orbitWords = [
  'GRAPHIC DESIGN',
  'BRANDING',
  'SMM',
  'AI',
  'CODEX',
  'HIGGSFIELD',
  'MOTION DESIGN',
  'CREATIVE PRODUCTION',
  'VISUAL IDENTITY',
  'ART DIRECTION',
]

type HeroTypeOrbitProps = {
  side: 'left' | 'right'
  mobileEscaped: boolean
  onMobileEscape: () => void
}

export function HeroTypeOrbit({ side, mobileEscaped, onMobileEscape }: HeroTypeOrbitProps) {
  const pathId = `hero-orbit-${side}-${useId().replace(/:/g, '')}`
  const reduceMotion = useReducedMotion()
  const rotation = useMotionValue(side === 'left' ? -8 : 14)
  const [hovered, setHovered] = useState(false)
  const direction = side === 'left' ? 1 : -1

  useAnimationFrame((_, delta) => {
    if (reduceMotion || mobileEscaped) return
    const degreesPerSecond = hovered ? 15 : 2.4
    rotation.set(rotation.get() + direction * degreesPerSecond * (delta / 1000))
  })

  const escaped = hovered || mobileEscaped

  return (
    <div
      className={`hero-type-orbit hero-type-orbit-${side}`}
      aria-hidden="true"
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      onPointerUp={(event) => {
        if (event.pointerType !== 'mouse') onMobileEscape()
      }}
    >
      <motion.div
        className="hero-type-orbit-content"
        animate={reduceMotion ? undefined : {
          x: escaped ? (side === 'left' ? '-112vw' : '112vw') : 0,
          scale: escaped ? 0.86 : 1,
          opacity: escaped ? 0 : 1,
          filter: escaped ? 'blur(12px)' : 'blur(0px)',
        }}
        transition={{ type: 'spring', stiffness: 82, damping: 20, mass: 0.9 }}
      >
        <motion.svg
          viewBox="0 0 1000 1000"
          focusable="false"
          style={{ rotate: reduceMotion ? 0 : rotation }}
        >
          <defs>
            <path id={pathId} d="M 500,72 A 428,428 0 1,1 499.9,72" />
          </defs>
          <circle className="hero-type-orbit-guide" cx="500" cy="500" r="428" />
          <text className="hero-type-orbit-copy">
            <textPath
              href={`#${pathId}`}
              startOffset="0%"
              textLength="2670"
              lengthAdjust="spacingAndGlyphs"
            >
              {`${orbitWords.join('   •   ')}   •`}
            </textPath>
          </text>
        </motion.svg>
      </motion.div>
    </div>
  )
}
