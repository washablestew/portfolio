type ResponsiveImageProps = {
  desktop: string
  mobile: string
  alt: string
  className?: string
  priority?: boolean
}

export function ResponsiveImage({ desktop, mobile, alt, className, priority = false }: ResponsiveImageProps) {
  return (
    <picture className={['case-media', className].filter(Boolean).join(' ')}>
      <source media="(max-width: 900px)" srcSet={mobile} />
      <img
        src={desktop}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
      />
    </picture>
  )
}
