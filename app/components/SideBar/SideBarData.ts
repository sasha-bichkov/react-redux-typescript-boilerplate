import React, { FC } from 'react'

interface ISideBarData {
  title: string,
  path: string,
  class: string,
  icon?: FC<React.SVGAttributes<SVGElement>>
}

export const SideBarData: Array<ISideBarData> = [
  {
    title: 'Home',
    path: '/',
    class: 'SideBar__link',
  },
  {
    title: 'Issues',
    path: '/issues',
    class: 'SideBar__link'
  },
  {
    title: 'Backlog',
    path: '/Backlog',
    class: 'SideBar__link'
  },
  {
    title: 'Settings',
    path: '/Settings',
    class: 'SideBar__link'
  },
  {
    title: 'Sprint',
    path: '/sprint',
    class: 'SideBar__link'
  }

]
