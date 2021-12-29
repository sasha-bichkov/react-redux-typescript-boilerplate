import React from 'react'

import Popup from '@Components/Popup'
import Button from '@Components/Button'
import Loader from '@Components/Loader'
import UnsupportedBrowser from '@Components/UnsupportedBrowser'

import './Home.scss'

interface HomeProps {} // eslint-disable-line @typescript-eslint/no-empty-interface
interface HomeState {} // eslint-disable-line @typescript-eslint/no-empty-interface

class Home extends React.Component<HomeProps, HomeState> {
  render() {
    return(
      <div>
        <h1>Home page</h1>
        <Button caption={'clicl me'} />
      </div>
    )
  }
}

export default Home
