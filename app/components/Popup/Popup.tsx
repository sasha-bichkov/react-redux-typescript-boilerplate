import React, { FunctionComponent, ReactNode } from 'react'
import FocusLock from 'react-focus-lock'

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
      <FocusLock>
        <div className={'Popup__content Popup__content-decoration backInDown'}>
          <div className="Popup__contentHeader">
            <button className="Popup__closeBtn clearBtn" onClick={close}>
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="Popup__contentBody">
            {children}
          </div>
        </div>
      </FocusLock>
      {overlay && <div className="overlay"></div>}
    </div>
  )
}

export default Popup
