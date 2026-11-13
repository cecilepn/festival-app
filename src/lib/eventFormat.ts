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

const dateFormatter = new Intl.DateTimeFormat('fr-FR', {
  day: '2-digit',
  month: 'long',
  year: 'numeric'
})

export function formatDate(date: string) {
  return dateFormatter.format(new Date(date))
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
