import React, { FunctionComponent, ReactNode } from 'react'

import './Popup.scss'

export type PropTypes = {
  overlay: boolean
  className: string
  close(): void
  children?: ReactNode
}

const Popup: FunctionComponent<PropTypes> = ({
  overlay,
  className,
  close,
  children
}) => {
  return (
    <div className={`${className} Popup-decoration`}>
      <div className={'Popup__content Popup__content-decoration'}>
        <div className="Popup__contentHeader">
          <button className="Popup__closeBtn" onClick={close}>X</button>
        </div>
        <div>
          {children}
        </div>
      </div>
      <div className="overlay"></div>
    </div>
  )
}

export default Popup
