import React, { FC } from 'react'

import InboxIcon from '@Images/SideBar/Inbox.svg'
import IssuesIcon from '@Images/SideBar/Issues.svg'
import SettingsIcon from '@Images/SideBar/Settings.svg'
import SprintIcon from '@Images/SideBar/Sprint.svg'
import BacklogIcon from '@Images/SideBar/Backlog.svg'

export interface ISideBarItem {
  title?: string,
  path?: string,
  class: string,
  Icon?: FC<React.SVGAttributes<SVGElement>>
}

export const SideBarData: Array<ISideBarItem> = [
  {
    title: 'Home',
    path: '/',
    class: 'SideBar__link',
  },
  {
    title: 'Inbox',
    path: '/inbox',
    class: 'SideBar__link',
    Icon: InboxIcon
  },
  {
    class: 'Sidebar__divider',
  },
  {
    title: 'Issues',
    path: '/issues',
    class: 'SideBar__link',
    Icon: IssuesIcon
  },
  {
    title: 'Backlog',
    path: '/Backlog',
    class: 'SideBar__link',
    Icon: BacklogIcon
  },
  {
    title: 'Sprint',
    path: '/sprint',
    class: 'SideBar__link',
    Icon: SprintIcon
  },
  {
    class: 'Sidebar__divider',
  },
  {
    title: 'Settings',
    path: '/settingsPage',
    class: 'SideBar__link',
    Icon: SettingsIcon
  },
]
