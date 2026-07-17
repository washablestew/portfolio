export type Project = {
  id: string
  title: string
  category: string
  period: string
}

export const projects: Project[] = [
  { id: 'avito', title: 'Авито', category: 'Брендинг', period: '2023–2024' },
  { id: 'greenfield', title: 'Greenfield', category: 'AI-ролики', period: '2025' },
  { id: 'jaecoo', title: 'Jaecoo', category: 'SMM', period: '2022–2024' },
  { id: 'chillout', title: 'ChillOut', category: 'SMM', period: '2022–2023' },
  { id: 'gazprom', title: 'Газпром', category: 'Аудиобиблиотека', period: '2023' },
]
