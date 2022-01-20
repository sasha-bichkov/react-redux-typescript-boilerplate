import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import Loader from '../Loader'

describe('Loader', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Loader />)

    expect(asFragment()).toMatchSnapshot()
  })
})
