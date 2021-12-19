import React from 'react'

import Button from '@Components/Button'
import Warning from '@Images/CookiesNotifying/warning.svg'

import './CookiesNotifying.scss'

const CookiesNotifying = () => {
  return (
    <div className="CookiesNotifying">
      <div className="CookiesNotifying__leftColumn">
        <Warning className="CookiesNotifying__icon" width="25" />
        <p className="CookiesNotifying__text">
          We use cookies to personalise content and ads,
          to provide social media features and to analyse our traffic.
          We also share information about your use of our site with our social media,
          advertising and analytics partners who may combine it with other information
          that you’ve provided to them or that they’ve collected from your use of their services.
        </p>
      </div>
      <div className="CookiesNotifying__rightColumn">
        <Button className="CookiesNotifying__btn" caption="accept and close" />
      </div>
    </div>
  )
}

export default CookiesNotifying
