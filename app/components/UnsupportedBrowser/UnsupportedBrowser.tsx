import React from 'react'

import BrowserItem from './BrowserItem'

import BrowserIcon from '@Images/UnsupportedBrowser/Browser.png'
import GoogleBrowserIcon from '@Images/UnsupportedBrowser/ChromeLogo.png'
import FirefoxBrowserIcon from '@Images/UnsupportedBrowser/FirefoxLogo.png'
import OperaBrowserIcon from '@Images/UnsupportedBrowser/OperaLogo.png'
import SafariBrowserIcon from '@Images/UnsupportedBrowser/SafariLogo.png'
import EdgeBrowserIcon from '@Images/UnsupportedBrowser/EdgeLogo.png'

import './UnsupportedBrowser.scss'

const UnsupportedBrowser: React.FC = () => {
  return (
    <div className="UnsupportedBrowser">
      <img
        className="UnsupportedBrowser__icon"
        src={BrowserIcon}
        alt="browser image"
        width="500px"
      />

      <h1 className="UnsupportedBrowser__title">Unsupported browser</h1>

      <p className="UnsupportedBrowser__text">
        You&rsquo;re using a&nbsp;web browser we&nbsp;don&rsquo;t support yet.
        Please use one of&nbsp;these options to&nbsp;improve your experience.
      </p>

      <ul className="UnsupportedBrowser__list">
        <BrowserItem title="Chrome" url={GoogleBrowserIcon} />
        <BrowserItem title="Safari" url={SafariBrowserIcon} />
        <BrowserItem title="Firefox" url={FirefoxBrowserIcon} />
        <BrowserItem title="Opera" url={OperaBrowserIcon} />
        <BrowserItem title="Edge" url={EdgeBrowserIcon} />
      </ul>
    </div>
  )
}

export default UnsupportedBrowser
