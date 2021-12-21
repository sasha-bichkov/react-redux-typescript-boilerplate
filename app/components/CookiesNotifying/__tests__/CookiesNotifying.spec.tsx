import React from 'react'
import { mount, render, shallow } from 'enzyme'

import CookiesNotifying from '../CookiesNotifying'

describe('CookiesNotifying', () => {
  it('renders correctly', () => {
    const component = shallow(<CookiesNotifying />)

    expect(component).toMatchSnapshot()
  })
  describe('if click button', () => {
    it('calls it when a button is clicked', () => {
      const mockCallback = jest.fn()
      const component = shallow(<CookiesNotifying />)

      console.log(component)
    })
  })
})
