import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import NotFound from '../NotFound'

describe('Issues', () => {

  it('renders correctly', () => {
    render(<NotFound />)
    const text = screen.getByText(/Page not found/i)

    expect(text).toBeInTheDocument()
  })
})
