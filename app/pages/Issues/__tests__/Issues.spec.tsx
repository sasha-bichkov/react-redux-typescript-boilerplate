import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import Issues from '../Issues'

describe('Issues', () => {

  it('renders correctly', () => {
    render(<Issues />)
    const text = screen.getByText(/Issues/i)

    expect(text).toBeInTheDocument()
  })
})
