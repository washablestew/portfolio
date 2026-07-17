export type Project = {
  id: string
  title: string
  category: string
  period: string
  href: string
}

export const projects: Project[] = [
  { id: 'avito', title: 'Авито', category: 'Брендинг', period: '2023–2024', href: '/projects/avito' },
  { id: 'greenfield', title: 'Greenfield', category: 'AI-ролики', period: '2025', href: '/projects/greenfield' },
  { id: 'jaecoo', title: 'Jaecoo', category: 'SMM', period: '2022–2024', href: '/projects/jaecoo' },
  { id: 'chillout', title: 'ChillOut', category: 'SMM', period: '2023–2024', href: '/projects/chillout' },
  { id: 'gazprom', title: 'Газпром', category: 'Аудиобиблиотека', period: '2023', href: '#gazprom' },
]
