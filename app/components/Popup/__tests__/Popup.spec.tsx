import React from 'react'
import { mount } from 'enzyme'
import Popup from '../Popup'

describe('Popup', () => {
  it('calls button onclick callback at once if click button', () => {
    const mockCallback = jest.fn()
    const component = mount(
      <Popup
        overlay={true}
        close={() => console.log('click')}
      />
    )

    component.find('.Popup__closeButton').simulate('click')

    expect(mockCallback).toHaveBeenCalledTimes(0)
  })

  describe('if overlay is true', () => {
    it('renders background', () => {
      const component = mount(
        <Popup
          overlay
          close={() => console.log('click')}
        />
      )

      const result = component.find('.overlay')

      expect(result).toHaveLength(1)
    })
  })

  describe('if overlay is false', () => {
    it('does not render background', () => {
      const component = mount(
        <Popup
          overlay={false}
          close={() => console.log('click')}
        />
      )

      const result = component.find('.overlay')

      expect(result).toHaveLength(0)
    })
  })
})
