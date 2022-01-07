import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import ChangePasswordForm from '../ChangePasswordForm'

describe('ChangePasswordForm', () => {
  const mockOnSubmit = jest.fn()

  describe('if the fields are empty', () => {
    it('shows errors', async () => {
      const {container} = render(<ChangePasswordForm onSubmit={mockOnSubmit}/>)

      const submit = screen.getByRole(/button/i)
      const password = screen.getByLabelText(/password\s?$/i)

      userEvent.click(password)
      userEvent.click(container)

      const passwordErrorTexts = await screen.findByText(/This is required field/i)

      expect(password).toHaveAttribute('aria-invalid')
      expect(passwordErrorTexts).toBeInTheDocument()
      expect(submit).toBeDisabled()
    })
  })


  describe('if a password is less than 6 characters', () => {
    it('show an error', async () => {
      render(<ChangePasswordForm onSubmit={mockOnSubmit}/>)

      const submit = screen.getByRole('button')
      const password = screen.getByLabelText(/password\s?$/i)

      userEvent.type(password, '12345')

      const passwordErrorText = await screen.findByText(/Please enter at least 6 characters/i)

      expect(password).toHaveAttribute('aria-invalid')
      expect(passwordErrorText).toBeInTheDocument()
      expect(submit).toBeDisabled()
    })
  })

  describe('if a password is more than 30 characters', () => {
    it('shows on error', async () => {
      render(<ChangePasswordForm onSubmit={mockOnSubmit}/>)

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
      render(<ChangePasswordForm onSubmit={mockOnSubmit}/>)

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

  describe('if values are correct', () => {
    it('sends the form only once after a click', async () => {
      render(<ChangePasswordForm onSubmit={mockOnSubmit}/>)

      const password = screen.getByLabelText(/password\s?$/i)
      const passwordConfirmation = screen.getByLabelText(/Password confirmation/i)

      userEvent.type(password, 'qwerty')
      userEvent.type(passwordConfirmation, 'qwerty')

      const submit = await screen.findByRole('button')

      userEvent.dblClick(submit)

      await waitFor(() => expect(mockOnSubmit).toHaveBeenCalledTimes(1))
    })
  })
})


