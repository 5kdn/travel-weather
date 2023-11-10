import { mount } from '@vue/test-utils'
import { test, expect } from 'vitest'
import SayHello from '@/components/SayHello.vue'

test('SayHelloYoshio', () => {
  expect(SayHello).toBeTruthy()
  const wrapper = mount(SayHello, {
    props: {
      name: 'Yoshio',
    },
  })

  expect(wrapper.text()).toContain('Hello, Yoshio!')
  expect(wrapper.html()).toMatchSnapshot()
})
