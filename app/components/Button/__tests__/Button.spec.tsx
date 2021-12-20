import React from 'react'
import { shallow } from 'enzyme'

import Button from '../Button'

describe('Button component', () => {
  describe('check className', () => {
    it('if className is empty', () => {
      const component = shallow(<Button caption="text" />)
      expect(component.find('button').hasClass('Button'))
        .toEqual(true)
    })
    it('if className not empty', () => {
      const component = shallow(<Button caption="text" className="test" />)
      expect(component.find('button').hasClass('Button test'))
        .toEqual(true)

    })
  })

  describe('check caption', () => {
    const component = shallow(<Button caption="help me" />)
    expect(component.text()).toEqual('help me')
  })

  describe('check onClick', () => {
    const mockCallback = jest.fn()
    const component = shallow(<Button caption="test" onClick={mockCallback} />)
    expect(mockCallback.mock.calls.length).toBe(0)
    component.find('button').simulate('click')
    expect(mockCallback.mock.calls.length).toBe(1)
  })

  describe('check type', () => {
    it('type should be submit', () => {
      const component = shallow(<Button caption="test" type="submit" />)
      expect(component.find('button').prop('type'))
        .toBe('submit')
    })
    it('type should be button', () => {
      const component = shallow(<Button caption="test" />)
      expect(component.find('button').prop('type'))
        .toBe('button')
    })
  })

  describe('check disabled', () => {
    it('button should be disabled', () => {
      const mockCallback = jest.fn()
      const component = shallow(<Button
        caption="test"
        disabled={true}
        onClick={mockCallback} />)
      component.find('.Button').simulate('click')
      expect(mockCallback).toHaveBeenCalledTimes(0)
    })
  })
})
