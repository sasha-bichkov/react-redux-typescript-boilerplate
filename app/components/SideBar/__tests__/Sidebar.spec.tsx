import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history'
import { BrowserRouter, Router } from 'react-router-dom'
import '@testing-library/jest-dom'

import SideBar from '../SideBar'
import { SideBarData } from '../SideBarData'

describe('SideBar', () => {

  describe('if SideBar render', () => {
    it('has SideBar in html', () => {
      render(<BrowserRouter>
        <SideBar SideBarData={SideBarData} />
      </BrowserRouter>)

      const nav = screen.getByRole('navigation')

      expect(nav.className).toBe('SideBar')
    })
  })

  describe('if the expand button is clicked', () => {
    it('has add to SideBar SideBar-active class', () => {
      render(<BrowserRouter>
        <SideBar SideBarData={SideBarData} />
      </BrowserRouter>)

      const button = screen.getByRole('button')
      const nav = screen.getByRole('navigation')

      userEvent.click(button)

      expect(nav.className).toBe('SideBar SideBar-active')
    })
  })

  describe('if a link is clicked', () => {
    it('redirects and updates the history', () => {
      const history = createMemoryHistory()

      render(<Router history={history}>
        <SideBar SideBarData={SideBarData} />
      </Router>)
    })
  })
})
