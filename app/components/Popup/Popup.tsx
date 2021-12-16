import React, { FunctionComponent, ReactNode } from 'react'

import './Popup.scss'

export type PropTypes = {
  overlay: boolean
  close(): void
  children?: ReactNode
}

const Popup: FunctionComponent<PropTypes> = ({
  overlay,
  close,
  children
}) => {
  return (
    <div className="Popup Popup-decoration">
      <div className={'Popup__content Popup__content-decoration backInDown'}>
        <div className="Popup__contentHeader">
          <button className="Popup__closeBtn" onClick={close}>X</button>
        </div>
        <div className="Popup__contentBody">
          {children}
        </div>
      </div>
      {overlay && <div className="overlay"></div>}
    </div>
  )
}

export default Popup
