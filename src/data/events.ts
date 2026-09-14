export interface FestivalEvent {
  id: string
  title: string
  day: string
  time: string
  venue: string
  category: string
}

export const events: FestivalEvent[] = [
  {
    id: 'concert-aurore',
    title: 'Aurore Magnétique',
    day: 'Vendredi',
    time: '20:30',
    venue: 'Grande scène',
    category: 'Concert',
  },
  {
    id: 'atelier-affiches',
    title: 'Affiches en commun',
    day: 'Samedi',
    time: '14:00',
    venue: 'Atelier nord',
    category: 'Atelier',
  },
  {
    id: 'rencontre-ville',
    title: 'La ville comme scène',
    day: 'Samedi',
    time: '17:30',
    venue: 'Agora',
    category: 'Rencontre',
  },
]
