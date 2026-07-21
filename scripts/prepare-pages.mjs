import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises'

const distDirectory = new URL('../dist/', import.meta.url)
const indexFile = new URL('index.html', distDirectory)
const routes = [
  'projects/avito',
  'projects/chillout',
  'projects/durak',
  'projects/gazprom',
  'projects/greenfield',
  'projects/jaecoo',
]

const indexHtml = await readFile(indexFile, 'utf8')

await Promise.all(routes.map(async (route) => {
  const routeDirectory = new URL(`${route}/`, distDirectory)
  await mkdir(routeDirectory, { recursive: true })
  await writeFile(new URL('index.html', routeDirectory), indexHtml)
}))

await copyFile(indexFile, new URL('404.html', distDirectory))
await writeFile(new URL('.nojekyll', distDirectory), '')
