import React, { FC, useState } from 'react'
import { NavLink } from 'react-router-dom'
import cn from 'classnames'

import ArrowIcon from '@Images/SideBar/chevronDoubleRight.svg'
import './SideBar.scss'
import { ISideBarItem } from '@Components/SideBar/SideBarData'

interface ISideBarList {
  SideBarData: Array<ISideBarItem>
}

const SideBar: FC<ISideBarList> = ({SideBarData}) => {
  const [active, setActive] = useState(false)
  const SideBarClass = cn('SideBar', {
    'SideBar-active': active
  })

  return (
    <nav className={SideBarClass}>
      <div className="SideBar__navList">
        {SideBarData.map((item, index) => {
          if (item.class === 'Sidebar__divider') return <div
            key={index}
            className='Sidebar__divider'
          />
          return <div key={item.title} className="SideBar__navItem">
            <NavLink
              to={item.path || '/'}
              className={item.class}>
              {item.icon ? <item.icon /> : ''}
              <span className="SideBar__text">
                {item.title}
              </span>
            </NavLink>
          </div>
        })}
        <button
          className="SideBar__arrowButton"
          type="button"
          onClick={() => setActive(!active)}
        >
          <ArrowIcon className="Sidebar__arrowIcon" />
        </button>
      </div>
    </nav>
  )
}

export default SideBar
