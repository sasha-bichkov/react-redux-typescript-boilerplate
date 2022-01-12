import React from 'react'
import { withTranslation, useTranslation } from 'react-i18next'

import Button from '@Components/Button'
import WarningIcon from '@Images/CookiesNotifying/Warning.svg'

import './CookiesNotifying.scss'

const CookiesNotifying = () => {
  const {t} = useTranslation()
  return (
    <div className="CookiesNotifying">
      <div className="CookiesNotifying__content">
        <div className="CookiesNotifying__leftColumn">
          <WarningIcon className="CookiesNotifying__icon" width="30" />
          <p className="CookiesNotifying__text">
            {t('CookiesNotifying.text')}
          </p>
        </div>

        <div className="CookiesNotifying__rightColumn">
          <Button className="CookiesNotifying__button" caption="accept and close" />
        </div>
      </div>
    </div>
  )
}

export default withTranslation()(CookiesNotifying)
