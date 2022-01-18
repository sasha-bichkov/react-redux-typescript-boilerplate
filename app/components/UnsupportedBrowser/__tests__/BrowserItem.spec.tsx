import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import UnsupportedBrowser from '../UnsupportedBrowser'

describe('UnsupportedBrowser', () => {
  it('1', () => {
    render(<UnsupportedBrowser />)
  })
})
