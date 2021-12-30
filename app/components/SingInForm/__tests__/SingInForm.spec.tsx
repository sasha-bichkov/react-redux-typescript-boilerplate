import React from 'react'
import { render, } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { act } from 'react-dom/test-utils'

import SingInForm from '../SingInForm'

describe('SingInForm', () => {
  const mockLogin = jest.fn()
  describe('width valid inputs and double click', () => {
    it('calls the onSubmit function once ', async () => {
      const { getByLabelText, getByRole } = render(
        <SingInForm onSubmit={mockLogin} />
      )

      await act(async () => {
        const email = getByLabelText(/email/i)
        const password = getByLabelText(/password/i)
        userEvent.type(email, 'test@example.com')
        userEvent.type(password,'1234455')
      })

      await act(async () => {
        const button = getByRole('button')
        userEvent.dblClick(button)
      })

      expect(mockLogin).toHaveBeenCalledTimes(1)
    })
  })

  describe('if invalid email', () => {
    it('renders email validation error', async () => {
      const { container, getByLabelText } = render(
        <SingInForm onSubmit={mockLogin} />
      )

      await act(async () => {
        const email = getByLabelText(/email/i)
        userEvent.type(email, 'test()mail.ru')
      })

      expect(container.innerHTML).toMatch(/Invalid email/i)
    })
  })

  describe('if invalid password', () => {
    it('renders password validation error', async () => {
      const { container, getByLabelText } = render(
        <SingInForm onSubmit={mockLogin} />
      )

      await act(async () => {
        const password = getByLabelText(/password/i)
        userEvent.type(password, '123')
      })

      expect(container.innerHTML).toMatch(/Please enter at least 5 characters/i)
    })
  })
})
