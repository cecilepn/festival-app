import type { Tables } from './database'

export type Artist = Tables<'artists'>
export type FestivalEvent = Tables<'events'>
export type EventArtist = Tables<'event_artists'>
export type Info = Tables<'infos'>
export type Venue = Tables<'venues'>
export type Order = Tables<'orders'>
export type Pass = Tables<'passes'>
export type Subscriber = Tables<'subscribers'>
export type Visitor = Tables<'visitors'>
