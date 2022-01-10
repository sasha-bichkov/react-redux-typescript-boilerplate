import React, { FC } from 'react'

import InboxIcon from '@Images/SideBar/inbox.svg'
import IssuesIcon from '@Images/SideBar/issues.svg'
import SettingsIcon from '@Images/SideBar/settings.svg'
import SprintIcon from '@Images/SideBar/sprint.svg'
import BacklogIcon from '@Images/SideBar/backlog.svg'

export interface ISideBarItem {
  title?: string,
  path?: string,
  class: string,
  icon?: FC<React.SVGAttributes<SVGElement>>
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
    icon: InboxIcon
  },
  {
    class: 'Sidebar__divider',
  },
  {
    title: 'Issues',
    path: '/issues',
    class: 'SideBar__link',
    icon: IssuesIcon
  },
  {
    title: 'Backlog',
    path: '/Backlog',
    class: 'SideBar__link',
    icon: BacklogIcon
  },
  {
    title: 'Sprint',
    path: '/sprint',
    class: 'SideBar__link',
    icon: SprintIcon
  },
  {
    class: 'Sidebar__divider',
  },
  {
    title: 'Settings',
    path: '/Settings',
    class: 'SideBar__link',
    icon: SettingsIcon
  },
]
