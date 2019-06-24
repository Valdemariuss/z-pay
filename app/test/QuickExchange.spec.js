import { mount } from '@vue/test-utils'
import QuickExchange from '@/components/QuickExchange.vue'

describe('QuickExchange', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(QuickExchange)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
