import React from 'react'

interface BrowserIconProps {
  readonly url: string,
  readonly title: string,
}

const BrowserIcon: React.FC<BrowserIconProps> = props => {
  const { title, url } = props

  return (
    <li className="BrowserIcon">
      <a href="#" className="BrowserIcon__link">
        <img className="BrowserIcon__logo" src={url} width="130px" height="130px" alt={title} />
        <div className="BrowserIcon__title">{title}</div>
      </a>
    </li>
  )
}

export default BrowserIcon
