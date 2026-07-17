type ResponsiveImageProps = {
  desktop: string
  mobile: string
  alt: string
  className?: string
}

export function ResponsiveImage({ desktop, mobile, alt, className }: ResponsiveImageProps) {
  return (
    <picture className={['case-media', className].filter(Boolean).join(' ')}>
      <source media="(max-width: 900px)" srcSet={mobile} />
      <img src={desktop} alt={alt} loading="lazy" />
    </picture>
  )
}
