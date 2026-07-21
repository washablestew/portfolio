import { AnimatePresence, motion, type MotionValue } from 'framer-motion'
import { projectPreviews } from '../projectPreviews'

export type ActivePreview = {
  projectId: string
  imageIndex: number
}

type ProjectPreviewDeckProps = {
  active: ActivePreview | null
  x: MotionValue<number>
  y: MotionValue<number>
}

export function ProjectPreviewDeck({ active, x, y }: ProjectPreviewDeckProps) {
  if (!active) return null

  const images = projectPreviews[active.projectId]
  if (!images?.length) return null

  const currentIndex = active.imageIndex % images.length
  const backImages = [
    images[(currentIndex + 2) % images.length],
    images[(currentIndex + 1) % images.length],
  ]

  return (
    <motion.div
      className="project-preview-deck"
      style={{ x, y }}
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.94 }}
      transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
      aria-hidden="true"
    >
      {backImages.map((image, index) => (
        <img className={`project-preview-card project-preview-card-${index + 1}`} src={image} alt="" key={`${image}-${index}`} />
      ))}
      <AnimatePresence initial={false} mode="popLayout">
        <motion.img
          className="project-preview-card project-preview-card-front"
          src={images[currentIndex]}
          alt=""
          key={images[currentIndex]}
          initial={{ opacity: 0, scale: 0.94, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 1.03, y: -7 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        />
      </AnimatePresence>
    </motion.div>
  )
}
