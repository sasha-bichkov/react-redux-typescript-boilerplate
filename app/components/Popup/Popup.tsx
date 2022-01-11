import React, { FunctionComponent, ReactNode } from 'react'
import FocusLock from 'react-focus-lock'

import './Popup.scss'

export interface PropTypes  {
  readonly overlay: boolean
  readonly children?: ReactNode
  close(): void
}

const Popup: FunctionComponent<PropTypes> = ({
  overlay,
  close,
  children
}) => {
  return (
    <React.Fragment>
      <div className="Popup Popup-decoration">
        <FocusLock>
          <div className="Popup__content Popup__content-decoration Popup__content-backInDown">
            <div className="Popup__contentHeader">
              <button className="Popup__closeButton Popup__clearButton" onClick={close}>
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="Popup__contentBody">
              {children}
            </div>
          </div>
        </FocusLock>
      </div>
      {overlay && (<div className="Popup__overlay" />)}
    </React.Fragment>
  )
}

export default Popup
