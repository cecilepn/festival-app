import { describe, expect, it } from 'vitest'
import { formatDate } from './eventFormat'

describe('formatDate', () => {
  it('formats a date as day, month and year', () => {
    expect(formatDate('2027-05-07T12:00:00Z')).toBe('07 mai 2027')
  })
})
