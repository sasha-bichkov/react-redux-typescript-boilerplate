import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import UnsupportedBrowser from '../UnsupportedBrowser'

describe('UnsupportedBrowser', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<UnsupportedBrowser />)

    expect(asFragment()).toMatchSnapshot()
  })
})
