import React from 'react'

interface BrowserIconProps {
  readonly title: string,
  readonly Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>
}

const BrowserIcon: React.FC<BrowserIconProps> = props => {
  const { title, Icon } = props

  return (
    <li className="item">
      <a href="#" className="UnsupportedBrowser__link">
        <Icon className="UnsupportedBrowser__logo" width="80" height="80" />
        <div className="UnsupportedBrowser__logoName">{title}</div>
      </a>
    </li>
  )
}

export default BrowserIcon
