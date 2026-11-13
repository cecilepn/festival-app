const dayFormatter = new Intl.DateTimeFormat('fr-FR', {
  weekday: 'long',
  day: 'numeric',
  month: 'long'
})

const timeFormatter = new Intl.DateTimeFormat('fr-FR', {
  hour: '2-digit',
  minute: '2-digit'
})

export const statusLabels: Record<string, string> = {
  sold_out: 'Complet',
  cancelled: 'Annulé'
}

export const typeLabels: Record<string, string> = {
  concert: 'Concert',
  dj_set: 'DJ set',
  workshop: 'Atelier'
}

const dateBadgeFormatter = new Intl.DateTimeFormat('fr-FR', {
  day: '2-digit',
  month: 'long',
  year: '2-digit'
})

export function formatDateBadge(date: string) {
  const parts = dateBadgeFormatter.formatToParts(new Date(date))
  const part = (type: string) => parts.find(p => p.type === type)?.value ?? ''
  const month = part('month')
  return {
    day: part('day'),
    month: month.charAt(0).toUpperCase() + month.slice(1),
    year: part('year')
  }
}

const shortDayFormatter = new Intl.DateTimeFormat('fr-FR', {
  day: 'numeric',
  month: 'long'
})

export function formatShortDay(date: string) {
  return shortDayFormatter.format(new Date(date))
}

export function formatDay(date: string) {
  return dayFormatter.format(new Date(date))
}

export function formatTime(date: string) {
  return timeFormatter.format(new Date(date))
}
