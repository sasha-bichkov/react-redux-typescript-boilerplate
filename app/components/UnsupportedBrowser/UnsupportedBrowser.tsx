import React, { FC } from 'react'
import './UnsupportedBrowser.scss'
import browser from '@Root/assets/png/browser.png'
import google from '@Root/assets/svg/Chrome_logo.svg'
import firefox from '@Root/assets/svg/Firefox_logo.svg'
import opera from '@Root/assets/svg/Opera_logo.svg'
import safari from '@Root/assets/svg/Safari_logo.svg'
import edge from '@Root/assets/svg/Edge_logo.svg'

const UnsupportedBrowser:FC = () => {
  return (
    <div className={'container-center up'}>
      <div className={'content-center'}>
        <img className={'up__browserImage'} src={browser} alt={'browser image'} width={'500px'}/>
        <h1 className={'up__title'}>Unsupported browser</h1>
        <p className={'up__text'}>You&rsquo;re using a&nbsp;web browser we&nbsp;don&rsquo;t support yet.
          Please use one of&nbsp;these options to&nbsp;improve your experience.
        </p>
        <ul className={'up__list'}>
          <li className={'up__listItem'}>
            <a href="#" className={'up__listemItemLink'}>
              <img className={'up__logo'} src={google} alt="google logo"
                width={'100'} height={'100%'}/>
              <div>Chrome</div>
            </a>
          </li>
          <li className={'up__listItem'}>
            <a href="#" className={'up__listemItemLink'}>
              <img className={'up__logo'} src={safari} alt="safari logo"
                width={'100'} height={'100%'}/>
              <div>Safari</div>
            </a>

          </li>
          <li className={'up__listItem'}>
            <a href="#" className={'up__listemItemLink'}>
              <img className={'up__logo'} src={firefox} alt="firefox logo"
                width={'100'} height={'100%'}/>
              <div>Firefox</div>
            </a>
          </li>
          <li className={'up__listItem'}>
            <a href="#" className={'up__listemItemLink'}>
              <img className={'up__logo'} src={opera} alt="opera logo"
                width={'100'} height={'100%'}/>
              <div>Opera</div>
            </a>

          </li>
          <li className={'up__listItem'}>
            <a href="#" className={'up__listemItemLink'}>
              <img className={'up__logo'} src={edge} alt="edge logo"
                width={'100'} height={'100%'}/>
              <div>Edge</div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default UnsupportedBrowser
