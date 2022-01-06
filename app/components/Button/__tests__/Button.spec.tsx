import React from 'react'
import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import Button from '../Button'

describe('Button', () => {
  describe('if a class name is not specified', () => {
    it('does not add any classes', () => {
      render(<Button>Test</Button>)
      const button = screen.getByRole('button')

      expect(button).toBeInTheDocument()
    })
  })

  describe('if a class name is specified', () => {
    it('adds the class', () => {
      render(<Button className="Button-test">Test</Button>)
      const button = screen.getByRole('button')

      expect(button.className).toBe('Button Button-test')
    })
  })

  describe('if a caption is passed', () => {
    it('renders it', () => {
      render(<Button>Test 2</Button>)
      const button = screen.getByText(/Test 2/)

      expect(button).toBeInTheDocument()
    })
  })

  describe('if onClick callback is passed', () => {
    it('calls it once the button has clicked', () => {
      const mockCallback = jest.fn()
      render(<Button onClick={mockCallback}>Test</Button>)
      const button = screen.getByRole('button')

      userEvent.click(button)

      expect(mockCallback).toHaveBeenCalled()
    })
  })

  describe('if a type is passed', () => {
    it('sets it', () => {
      render(<Button type="reset">Test</Button>)
      const button = screen.getByRole('button')

      expect(button.getAttribute('type')).toBe('reset')
    })
  })

  describe('if a type is not passed', () => {
    it('sets default', () => {
      render(<Button>Test</Button>)
      const button = screen.getByRole('button')

      expect(button.getAttribute('type')).toBe('button')
    })
  })

  describe('if disabled is passed', () => {
    it('is disabled', () => {
      render(<Button type="reset" disabled>Test</Button>)
      const button = screen.getByRole('button')

      expect(button).toBeDisabled()
    })
  })

  describe('if showSpinner is false', () => {
    it('does not render the spinner', () => {
      const { container } = render(<Button type="reset">Test</Button>)
      const buttonSpinner = container.querySelector('.Button__spinner')

      expect(buttonSpinner).not.toBeInTheDocument()
    })
  })

  describe('if showSpinner is true', () => {
    it('renders the spinner', () => {
      const { container } = render(<Button type="reset" showSpinner>Test</Button>)
      const buttonSpinner = container.querySelector('.Button__spinner')

      expect(buttonSpinner).toBeInTheDocument()
    })
  })
})
