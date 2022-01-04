import React from 'react'
import { create } from 'react-test-renderer'

import Button from '../Button'

describe('Button', () => {
  describe('if a class name is not specified', () => {
    it('does not add any classes', () => {
      const root = create(<Button>Test</Button>).root
      const button = root.findByType('button')

      expect(button.props.className).toBe('Button')
    })
  })

  describe('if a class name is specified', () => {
    it('adds the class', () => {
      const root = create(<Button className="Button-test">Test</Button>).root
      const button = root.findByType('button')

      expect(button.props.className).toBe('Button Button-test') 
    })
  })

  describe('if a caption is passed', () => {
    it('renders it', () => {
      const root = create(<Button>Test</Button>).root
      const button = root.findByType('button')

      expect(button.children).toEqual(['Test'])
    })
  })

  describe('if onClick callback is passed', () => {
    it('calls it once the button has clicked', () => {
      const mockCallback = jest.fn()
      const root = create(<Button onClick={mockCallback}>Test</Button>).root
      const button = root.findByType('button')

      button.props.onClick()

      expect(mockCallback).toHaveBeenCalled()
    })
  })

  describe('if a type is passed', () => {
    it('sets it', () => {
      const root = create(<Button type="reset">Test</Button>).root
      const button = root.findByType('button')

      expect(button.props.type).toBe('reset')
    })
  })

  describe('if a type is not passed', () => {
    it('sets default', () => {
      const root = create(<Button>Test</Button>).root
      const button = root.findByType('button')

      expect(button.props.type).toBe('button')
    })
  })

  describe('if disabled is passed', () => {
    it('is disabled', () => {
      const root = create(<Button type="reset" disabled>Test</Button>).root
      const button = root.findByType('button')

      expect(button.props.disabled).toBe(true)
    })
  })

  describe('if showSpinner is false', () => {
    it('does not render the spinner', () => {
      const root = create(<Button type="reset">Test</Button>).root
      const button = root.findByType('button')
      const buttonSpinner = button.findAllByProps({ className: 'Button__spinner spinner-slow' })

      expect(buttonSpinner).toEqual([])
    })
  })

  describe('if showSpinner is true', () => {
    it('renders the spinner', () => {
      const root = create(<Button type="reset" showSpinner>Test</Button>).root
      const button = root.findByType('button')
      const buttonSpinner = button.findAllByProps({ className: 'Button__spinner spinner-slow' })

      expect(buttonSpinner.length).toBe(1)
    })
  })
})
