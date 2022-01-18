import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import Suspense from '../Suspense'

describe('Suspense', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Suspense />)

    expect(asFragment()).toMatchSnapshot()
  })
})
