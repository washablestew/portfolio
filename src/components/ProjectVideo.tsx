import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'

type ProjectVideoProps = {
  src: string
  poster: string
  ariaLabel: string
  className?: string
}

export function ProjectVideo({ src, poster, ariaLabel, className }: ProjectVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    const video = videoRef.current
    if (!video || !src || reducedMotion) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) void video.play().catch(() => undefined)
        else video.pause()
      },
      { threshold: 0.35 },
    )

    observer.observe(video)
    return () => observer.disconnect()
  }, [reducedMotion, src])

  return (
    <div className={['project-video', className].filter(Boolean).join(' ')}>
      {src ? (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          aria-label={ariaLabel}
          muted
          loop
          playsInline
          preload="metadata"
          controls={Boolean(reducedMotion)}
        />
      ) : (
        <img src={poster} alt={ariaLabel} />
      )}
    </div>
  )
}
