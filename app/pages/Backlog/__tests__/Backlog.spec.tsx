import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import Backlog from '../Backlog'

describe('Backlog', () => {

  it('renders correctly', () => {
    render(<Backlog />)
    const text = screen.getByText(/Backlog/i)

    expect(text).toBeInTheDocument()
  })
})
