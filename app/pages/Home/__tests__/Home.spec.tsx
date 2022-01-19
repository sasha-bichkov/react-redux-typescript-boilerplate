import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import i18n from '../../../i18n'

import Home from '../Home'

beforeEach(() => {
  i18n.init()
})

describe('Home', () => {

  it('renders correctly', () => {
    render(<Home />)
    const text = screen.getByText(/home/i)

    expect(text).toBeInTheDocument()
  })
})
