import React, { FC, useState } from 'react'
import { NavLink } from 'react-router-dom'
import classnames from 'classnames'

import { ISideBarItem } from '@Components/SideBar/SideBarData'
import ArrowIcon from '@Images/SideBar/ChevronDoubleRight.svg'

import './SideBar.scss'

interface ISideBarList {
  SideBarData: Array<ISideBarItem>
}

const SideBar: FC<ISideBarList> = ({SideBarData}) => {
  const [active, setActive] = useState(false)
  const SideBarClass = classnames('SideBar', {
    'SideBar-active': active
  })

  return (
    <nav className={SideBarClass}>
      <div className="SideBar__navList">
        {SideBarData.map((item, index) => {
          if (item.class === 'Sidebar__divider') {
            return (
              <hr
                key={index}
                className='Sidebar__divider'
              />
            )
          }
          return <div key={item.title} className="SideBar__navItem">
            <NavLink
              to={item.path || '/'}
              className={item.class}>
              {item.Icon ? <item.Icon /> : ''}
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
