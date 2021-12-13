import React from 'react'

interface BrowserIconProps {
  readonly title: string,
  readonly Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>
}

const BrowserIcon: React.FC<BrowserIconProps> = props => {
  const { title, Icon } = props

  return (
    <li className="UnsupportedBrowser__item">
      <a href="#" className="UnsupportedBrowser__itemLink">
        <Icon className="UnsupportedBrowser__logo" />
        <div>{title}</div>
      </a>
    </li>
  )
}

export default BrowserIcon
