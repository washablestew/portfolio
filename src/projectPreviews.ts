const previewModules = import.meta.glob('./assets/previews/*/*.webp', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>

export const projectPreviews = Object.entries(previewModules)
  .sort(([left], [right]) => left.localeCompare(right))
  .reduce<Record<string, string[]>>((groups, [path, url]) => {
    const projectId = path.match(/previews\/([^/]+)\//)?.[1]

    if (projectId) {
      groups[projectId] ??= []
      groups[projectId].push(url)
    }

    return groups
  }, {})
