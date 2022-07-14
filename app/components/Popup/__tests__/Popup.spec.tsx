import React from 'react'
import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import Popup from '../Popup'

describe('Popup', () => {
  it('calls button onclick callback at once if click button', () => {
    const mockCallback = jest.fn()
    render(
      <Popup
        overlay
        close={mockCallback}
      />
    )
    const button = screen.getByRole('button')

    userEvent.click(button)

    expect(mockCallback).toHaveBeenCalled()
  })

  describe('if overlay is true', () => {
    it('renders background', () => {
      const { container } = render(
        <Popup
          overlay
          close={() => ''}
        />
      )

      const result = container.getElementsByClassName('Popup__overlay')

      expect(result).toHaveLength(1)
    })
  })

  describe('if overlay is false', () => {
    it('does not render background', () => {
      const { container } = render(
        <Popup
          overlay={false}
          close={() => ''}
        />
      )

      const result = container.getElementsByClassName('Popup__overlay')

      expect(result).toHaveLength(0)
    })
  })
})
