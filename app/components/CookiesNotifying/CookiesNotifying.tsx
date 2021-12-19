import React from 'react'

import Button from '@Components/Button'
import Warning from '@Images/CookiesNotifying/warning.svg'

import './CookiesNotifying.scss'

const CookiesNotifying = () => {
  return (
    <div className="CookiesNotifying">
      <div className="CookiesNotifying__content">
        <div className="CookiesNotifying__leftColumn">
          <Warning className="CookiesNotifying__icon" width="25" />
          <p className="CookiesNotifying__text">
            We&nbsp;use cookies to&nbsp;personalise content and ads,
            to&nbsp;provide social media features and to&nbsp;analyse our traffic.
            We&nbsp;also share information about your use of&nbsp;our site with our social media,
            advertising and analytics partners who may combine it&nbsp;with other information
            that you&rsquo;ve provided to&nbsp;them or&nbsp;that
            they&rsquo;ve collected from your use of&nbsp;their services.
          </p>
        </div>
        <div className="CookiesNotifying__rightColumn">
          <Button className="CookiesNotifying__btn" caption="accept and close" />
        </div>
      </div>
    </div>
  )
}

export default CookiesNotifying
