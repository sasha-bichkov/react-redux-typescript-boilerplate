import React from 'react'
import { mount, shallow } from 'enzyme'

import Button from '../Button'

describe('Button', () => {
  describe('if a class name is not specified', () => {
    it('does not add it', () => {
      const component = shallow(<Button caption="text" />)

      const result = component.find('button').hasClass('Button')

      expect(result).toBeTruthy()
    })

    it('is added', () => {
      const component = shallow(<Button caption="text" className="test" />)

      const result = component.find('button').hasClass('Button test')

      expect(result).toBeTruthy()
    })
  })

  describe('if a caption is passed', () => {
    it('renders the passed caption', () => {
      const component = shallow(<Button caption="help me" />)

      const result = component.text()

      expect(result).toEqual('help me')
    })
  })

  describe('if onClick callback is passed', () => {
    it('calls it once the button has clicked', () => {
      const mockCallback = jest.fn()
      const component = shallow(<Button caption="test" onClick={mockCallback} />)

      component.find('button').simulate('click')

      expect(mockCallback).toBeCalled()
    })
  })

  describe('if a type is passed', () => {
    it('sets it', () => {
      const component = shallow(<Button caption="test" type="submit" />)

      const result = component.find('button').prop('type')

      expect(result).toBe('submit')
    })
  })

  describe('if a type is passed', () => {
    it('sets default', () => {
      const component = shallow(<Button caption="test" />)

      const result = component.find('button').prop('type')

      expect(result).toBe('button')
    })
  })

  describe('if disabled', () => {
    it('does not call mockCallback when the button was clicked', () => {
      const mockCallback = jest.fn()

      const component = mount(
        <Button
          caption="test"
          onClick={mockCallback}
          disabled
        />
      )

      component.find('button').simulate('click')

      expect(mockCallback).toHaveBeenCalledTimes(0)
    })
  })

  describe('if showSpinner is false', () => {
    it('renders a spinner', () => {
      const component = mount(<Button caption="test" />)

      const result = component.find('.Button__spinner')

      expect(result).toHaveLength(0)
    })
  })

  describe('if showSpinner is true', () => {
    it('renders a spinner', () => {
      const component = mount(<Button caption="test" showSpinner />)

      const result = component.find('.Button__spinner')

      expect(result).toHaveLength(1)
    })
  })
})
