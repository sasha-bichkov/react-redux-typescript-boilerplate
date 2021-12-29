import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { act } from 'react-dom/test-utils'


import SingInForm from '../SingInForm'



describe('SingInForm', () => {
  const mockLogin = jest.fn()
  describe('width valid inputs', () => {
    it('calls the onSubmit function', async () => {
      const { getByLabelText, getByRole } = render(
        <SingInForm onSubmit={mockLogin} />
      )

      await act(async () => {
        fireEvent.change(getByLabelText(/email/i), {
          target: { value: 'email@test.com' }
        })
        fireEvent.change(getByLabelText(/password/i), {
          target: { value: '1234556' }
        })
      })

      await act(async () => {
        fireEvent.submit(getByRole('button'))
      })

      expect(mockOnSubmit).toHaveBeenCalled()
    })
  })

  describe('if invalid email', () => {
    it('lala', async () => {
      const { container } = render(<SingInForm />)
      const email = container.getElementsByClassName('emailInput')

    })
  })

  describe('if invalid password', () => {

  })
})
