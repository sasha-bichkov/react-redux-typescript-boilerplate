import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import SingUpForm from '../SignUpForm'

describe('SingUpForm', () => {
  const mockOnSubmit = jest.fn()

  describe('if the fields are empty', () => {
    it('shows errors', async () => {
      const {container} = render(<SingUpForm onSubmit={mockOnSubmit}/>)

      const submit = screen.getByRole(/button/i)
      const email = screen.getByLabelText(/email/i)
      const password = screen.getByLabelText(/password\s?$/i)

      userEvent.click(email)
      userEvent.click(container)

      userEvent.click(password)
      userEvent.click(container)

      const errorTexts = await screen.findAllByText(/This is required field/i)

      expect(email).toHaveAttribute('aria-invalid')
      expect(password).toHaveAttribute('aria-invalid')
      expect(errorTexts).toHaveLength(2)
      expect(submit).toBeDisabled()
    })
  })

  describe('if an email is specified incorrectly', () => {
    it('shows an error', async () => {
      render(<SingUpForm onSubmit={mockOnSubmit}/>)

      const submit = screen.getByRole('button')
      const email = screen.getByLabelText(/email/i)

      userEvent.type(email, 'fakeEmail')

      const emailErrorText = await screen.findByText(/Invalid email address/i)

      expect(email).toHaveAttribute('aria-invalid')
      expect(emailErrorText).toBeInTheDocument()
      expect(submit).toBeDisabled()
    })
  })

  describe('if a password is less than 6 characters', () => {
    it('show an error', async () => {
      render(<SingUpForm onSubmit={mockOnSubmit}/>)

      const submit = screen.getByRole('button')
      const password = screen.getByLabelText(/password\s?$/i)

      userEvent.type(password,'12345')

      const passwordErrorText = await screen.findByText(/Please enter at least 6 characters/i)

      expect(password).toHaveAttribute('aria-invalid')
      expect(passwordErrorText).toBeInTheDocument()
      expect(submit).toBeDisabled()
    })
  })

  describe('if a password is more than 30 characters', () => {
    it('shows on error', async () => {
      render(<SingUpForm onSubmit={mockOnSubmit} />)

      const submit = screen.getByRole('button')
      const password = screen.getByLabelText(/password\s?$/i)

      userEvent.type(password, '123456789123456789123456789123456789')

      const passwordErrorText = await screen.findByText(/Please enter at most 30 characters/i)

      expect(password).toHaveAttribute('aria-invalid')
      expect(passwordErrorText).toBeInTheDocument()
      expect(submit).toBeDisabled()
    })
  })

  describe('if password confirmation is incorrectly', () => {
    it('shows on error', async () => {
      render(<SingUpForm onSubmit={mockOnSubmit} />)

      const submit = screen.getByRole('button')
      const password = screen.getByLabelText(/password\s?$/i)
      const passwordConfirmation = screen.getByLabelText(/Password confirmation/i)

      userEvent.type(password, '123456')
      userEvent.type(passwordConfirmation, '123457')

      const passwordErrorText = await screen.findByText(/The passwords do not match/i)

      expect(passwordConfirmation).toHaveAttribute('aria-invalid')
      expect(passwordErrorText).toBeInTheDocument()
      expect(submit).toBeDisabled()
    })
  })
})


