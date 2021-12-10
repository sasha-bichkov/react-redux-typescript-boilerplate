import React, { FC } from 'react'
import './UnsupportedBrowser.scss'

const UnsupportedBrowser:FC = () => {
  return (
    <div className={'container-center up'}>
      {/*<img className={'up__browserImage'} src={browser} alt={'browser image'}/>*/}
      <h1 className={'up__title'}>Unsupported browser</h1>
      <p className={'up__text'}>You’re using a web browser we don’t support yet.
        Please use one of these options to improve your experience.
      </p>
    </div>
  )
}

export default UnsupportedBrowser
