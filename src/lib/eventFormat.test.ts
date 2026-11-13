import { describe, expect, it } from 'vitest'
import { formatDateBadge } from './eventFormat'

describe('formatDateBadge', () => {
  it('splits a date into day, capitalized month and short year', () => {
    expect(formatDateBadge('2027-05-07T12:00:00Z')).toEqual({
      day: '07',
      month: 'Mai',
      year: '27'
    })
  })
})
