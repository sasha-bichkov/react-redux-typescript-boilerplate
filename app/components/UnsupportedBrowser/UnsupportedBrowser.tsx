import React from 'react'

import './UnsupportedBrowser.scss'
import BrowserIcon from '@Root/assets/png/browser.png'
import GoogleBrowserIcon from '@Root/assets/svg/Chrome_logo.svg'
import FirefoxBrowserIcon from '@Root/assets/svg/Firefox_logo.svg'
import OperaBrowserIcon from '@Root/assets/svg/Opera_logo.svg'
import SafariBrowserIcon from '@Root/assets/svg/Safari_logo.svg'
import EdgeBrowserIcon from '@Root/assets/svg/Edge_logo.svg'

const UnsupportedBrowser: React.FC = () => {
  return (
    <div className="container-center up">
      <div className="content-center">
        <img className="UnsupportedBrowser__browserImage" src={BrowserIcon} alt="browser image" width="500px" />
        <h1 className="UnsupportedBrowser__title">Unsupported browser</h1>
        <p className="UnsupportedBrowser__text">You&rsquo;re using a&nbsp;web browser we&nbsp;don&rsquo;t support yet.
          Please use one of&nbsp;these options to&nbsp;improve your experience.
        </p>
        <ul className="UnsupportedBrowser__list">
          <li className="UnsupportedBrowser__item">
            <a href="#" className="UnsupportedBrowser__itemLink">
              <img className="UnsupportedBrowser__logo" src={GoogleBrowserIcon} alt="google logo"
                width="100" height="100%" />
              <div>Chrome</div>
            </a>
          </li>
          <li className="UnsupportedBrowser__item">
            <a href="#" className="UnsupportedBrowser__itemLink">
              <img className="UnsupportedBrowser__logo" src={SafariBrowserIcon} alt="safari logo"
                height="100%" />
              <div>Safari</div>
            </a>

          </li>
          <li className="UnsupportedBrowser__item">
            <a href="#" className="UnsupportedBrowser__itemLink">
              <img className="UnsupportedBrowser__logo" src={FirefoxBrowserIcon} alt="firefox logo"
                width="100" height="100%" />
              <div>Firefox</div>
            </a>
          </li>
          <li className="UnsupportedBrowser__item">
            <a href="#" className="UnsupportedBrowser__itemLink">
              <img className="UnsupportedBrowser__logo" src={OperaBrowserIcon} alt="opera logo"
                width="100" height="100%" />
              <div>Opera</div>
            </a>
          </li>
          <li className="UnsupportedBrowser__item">
            <a href="#" className="UnsupportedBrowser__itemLink">
              <img className="UnsupportedBrowser__logo" src={EdgeBrowserIcon} alt="edge logo"
                width="100" height="100%" />
              <div>Edge</div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default UnsupportedBrowser
