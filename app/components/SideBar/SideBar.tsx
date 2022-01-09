import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import cn from 'classnames'

import { SideBarData } from '@Components/SideBar/SideBarData'
import ArrowIcon from '@Images/SideBar/chevronDoubleRight.svg'
import './SideBar.scss'

const SideBar = () => {
  const [active, setActive] = useState(false)
  const SideBarClass = cn('SideBar', {
    'active': active
  })

  return (
    <div className={SideBarClass}>
      <ul className="SideBar__navList">
        {SideBarData.map(item => {
          return <li key={item.title} className="SideBar__navItem">
            {item.icon ? item.icon : ''}
            <Link to={item.path} className={item.class}>{item.title}</Link>
          </li>
        })}
        <div className="Sidebar__divider" />
        <button
          className="SideBar__arrowButton"
          type="button"
          onClick={() => setActive(!active)}
        >
          <ArrowIcon className="Sidebar__arrowIcon" />
        </button>
      </ul>
    </div>

  )
}

export default SideBar
