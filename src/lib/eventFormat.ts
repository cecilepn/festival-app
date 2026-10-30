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

export function formatDay(date: string) {
  return dayFormatter.format(new Date(date))
}

export function formatTime(date: string) {
  return timeFormatter.format(new Date(date))
}
