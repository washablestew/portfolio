import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const MotionLink = motion.create(Link)

export function ProjectBackLink() {
  return (
    <MotionLink
      className="project-back-link"
      to="/"
      aria-label="Вернуться на главную"
      whileHover={{ x: -3, scale: 1.04 }}
      whileFocus={{ x: -3, scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: 'spring', stiffness: 360, damping: 24 }}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19 12H5m6-6-6 6 6 6" />
      </svg>
    </MotionLink>
  )
}
