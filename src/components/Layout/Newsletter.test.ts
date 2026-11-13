import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import { addSubscriber } from '@/lib/handlers'
import Newsletter from './Newsletter.vue'

// Replace the Supabase handlers so the test never calls the real database
vi.mock('@/lib/handlers', () => ({
  addSubscriber: vi.fn()
}))

describe('Newsletter', () => {
  it('shows an error and does not call Supabase when the email is invalid', async () => {
    const wrapper = mount(Newsletter)

    await wrapper.find('input').setValue('pas-un-email')
    await wrapper.find('form').trigger('submit')

    expect(wrapper.find('[role="status"]').text()).toContain('Saisissez une adresse mail valide')
    expect(wrapper.find('input').attributes('aria-invalid')).toBe('true')
    expect(addSubscriber).not.toHaveBeenCalled()
  })
})
