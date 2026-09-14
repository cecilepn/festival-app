import {describe, it, expect} from 'vitest'
import {mount} from '@vue/test-utils'
import CardEvent from './CardEvent.vue'
import type {FestivalEvent} from '../data/events'


// ARRANGE: préparer ma donnée de test
const event: FestivalEvent = {
  id: 'concert-aurore',
  title: 'Aurore Magnétique',
  day: 'Vendredi',
  time: '20:30',
  venue: 'Grande scène',
  category: 'Concert',
}

describe('CardEvent', () => {
    it('affiche les infos de l\'événement', () => {
        // ACT: monter le composant avec la donnée de test
        const wrapper = mount(CardEvent, {
            props: {
                event,
            },
        })

        // ASSERT: vérifier que le rendu correspond à ce que j'attends
        expect(wrapper.text()).toContain(event.title)
        expect(wrapper.text()).toContain(event.day)
        expect(wrapper.text()).toContain(event.time)
        expect(wrapper.text()).toContain(event.venue)
        expect(wrapper.text()).toContain(event.category)
    })
    it('affiche "Temps fort" si l\'événement est en vedette', () => {
        // ACT: monter le composant avec la donnée de test et la prop featured à true
        const featuredCard = mount(CardEvent, {
            props: {
                event,
                featured: true,
            },
        })
        const nonFeaturedCard = mount(CardEvent, {
            props: {
                event,
                featured: false,
            },
        })

        // ASSERT: vérifier que le rendu correspond à ce que j'attends
        expect(featuredCard.text()).toContain('Temps fort')
        expect(nonFeaturedCard.text()).not.toContain('Temps fort')
    })


})