import React from 'react'
import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import GoogleIcon from '@Images/OmniAuthButton/GoogleLogo.svg'
import OmniAuthButton from '../OmniAuthButton'

describe('OmniAuthButton', () => {
  describe('if a class name is not specified', () => {
    it('does not add any classes', () => {
      render(<OmniAuthButton Icon={GoogleIcon} onClick={() => console.log('click')}>
        Sign in with Google
      </OmniAuthButton>)
      const button = screen.getByRole('button')

      expect(button).toBeInTheDocument()
    })
  })

  describe('if a class name is specified', () => {
    it('adds the class', () => {
      render(<OmniAuthButton
        Icon={GoogleIcon}
        className={'Button-test'}
        onClick={() => console.log('click')}
      >
        Sign in with Google
      </OmniAuthButton>)
      const button = screen.getByRole('button')

      expect(button).toHaveClass('Button Button-test')
    })
  })

  describe('if children is passed', () => {
    it('renders it', () => {
      render(<OmniAuthButton
        Icon={GoogleIcon}
        onClick={() => console.log('click')}
      >
        Sign in with Google
      </OmniAuthButton>)
      const text = screen.getByText(/Sign in with Google/)

      expect(text).toBeInTheDocument()
    })
  })

  describe('if onClick callback is passed', () => {
    it('calls it once the button has clicked', () => {
      const mockCallback = jest.fn()
      render(<OmniAuthButton
        Icon={GoogleIcon}
        onClick={mockCallback}
      >
        Sign in with Google
      </OmniAuthButton>)
      const button = screen.getByRole('button')

      userEvent.click(button)

      expect(mockCallback).toHaveBeenCalled()
    })
  })

  describe('if Icon passed', () => {
    it('is in the document', () => {
      const {container}=render(<OmniAuthButton
        Icon={GoogleIcon}
        onClick={() => ''}
      >
        Sign in with Google
      </OmniAuthButton>)
      const icon = container.getElementsByClassName('Button__icon')

      expect(icon.length).toBe(1)
    })
  })

})
