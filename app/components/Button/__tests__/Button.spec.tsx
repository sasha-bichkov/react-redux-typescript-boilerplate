import React from 'react'
import { mount, shallow } from 'enzyme'

import Button from '../Button'

describe('Button', () => {
  describe('if a class name is not specified', () => {
    it('does not add it', () => {
      const component = shallow(<Button caption="text" />)

      expect(component.find('button').hasClass('Button'))
        .toEqual(true)
    })
    it('is added', () => {
      const component = shallow(<Button caption="text" className="test" />)

      expect(component.find('button').hasClass('Button test'))
        .toBeTruthy()
    })
  })

  describe('if a caption is passed', () => {
    const component = shallow(<Button caption="help me" />)

    expect(component.text()).toEqual('help me')
  })

  describe('if onClick callback is passed', () => {
    it('it passed callback', () => {
      const mockCallback = jest.fn()
      const component = shallow(<Button caption="test" onClick={mockCallback} />)

      component.find('button').simulate('click')

      expect(mockCallback).toBeCalled()
    })
  })

  describe('if a type is passed', () => {
    it('sets it', () => {
      const component = shallow(<Button caption="test" type="submit" />)

      expect(component.find('button').prop('type'))
        .toBe('submit')
    })
    it('sets default', () => {
      const component = shallow(<Button caption="test" />)

      expect(component.find('button').prop('type'))
        .toBe('button')
    })
  })

  describe('if disabled', () => {
    it('was disabled', () => {
      const mockCallback = jest.fn()

      const component = mount(<Button
        caption="test"
        onClick={mockCallback}
        disabled
      />)

      component.find('button').simulate('click')

      expect(mockCallback).toHaveBeenCalledTimes(0)
    })
  })
})
