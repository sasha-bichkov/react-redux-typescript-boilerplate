import React from 'react'

import BrowserItem from './BrowserItem'

import BrowserIcon from '@Images/UnsupportedBrowser/browser.png'
import GoogleBrowserIcon from '@Images/UnsupportedBrowser/ChromeLogo.svg'
import FirefoxBrowserIcon from '@Images/UnsupportedBrowser/FirefoxLogo.svg'
import OperaBrowserIcon from '@Images/UnsupportedBrowser/OperaLogo.svg'
import SafariBrowserIcon from '@Images/UnsupportedBrowser/SafariLogo.svg'
import EdgeBrowserIcon from '@Images/UnsupportedBrowser/EdgeLogo.svg'

import './UnsupportedBrowser.scss'

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
          <BrowserItem title="Chrome" Icon={GoogleBrowserIcon} />
          <BrowserItem title="Safari" Icon={SafariBrowserIcon} />
          <BrowserItem title="Firefox" Icon={FirefoxBrowserIcon} />
          <BrowserItem title="Opera" Icon={OperaBrowserIcon} />
          <BrowserItem title="Edge" Icon={EdgeBrowserIcon} />
        </ul>
      </div>
    </div>
  )
}

export default UnsupportedBrowser
