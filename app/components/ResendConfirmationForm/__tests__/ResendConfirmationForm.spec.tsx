import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import ResendConfirmationForm from '../ResendConfirmationForm'

describe('ResendConfirmationForm', () => {
  const mockOnSubmit = jest.fn()

  describe('if the fields are empty', () => {
    it('shows errors', async () => {
      const {container} = render(<ResendConfirmationForm onSubmit={mockOnSubmit}/>)

      const submit = screen.getByRole(/button/i)
      const email = screen.getByLabelText(/email/i)

      userEvent.click(container)

      const emailErrorText = await screen.findByText(/This is required field/i)

      expect(email).toHaveAttribute('aria-invalid')
      expect(emailErrorText).toBeInTheDocument()
      expect(submit).toBeDisabled()
    })
  })

  describe('if an email is specified incorrectly', () => {
    it('shows an error', async () => {
      render(<ResendConfirmationForm onSubmit={mockOnSubmit}/>)

      const submit = screen.getByRole('button')
      const email = screen.getByLabelText(/email/i)

      userEvent.type(email, 'fakeEmail')

      const emailErrorText = await screen.findByText(/Invalid email address/i)

      expect(email).toHaveAttribute('aria-invalid')
      expect(emailErrorText).toBeInTheDocument()
      expect(submit).toBeDisabled()
    })
  })

  describe('if values are correct', () => {
    it('sends the form only once after a click', async () => {
      render(<ResendConfirmationForm onSubmit={mockOnSubmit}/>)

      const email = screen.getByLabelText(/email/i)

      userEvent.type(email, 'test@example.com')

      const submit = await screen.findByRole('button')

      userEvent.dblClick(submit)

      await waitFor(() => expect(mockOnSubmit).toHaveBeenCalledTimes(1))
    })
  })
})
