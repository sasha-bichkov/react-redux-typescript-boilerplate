import React from 'react'

import Button from '@Components/Button'
import UnsupportedBrowser from '@Components/UnsupportedBrowser'

import './Home.scss'

interface HomeProps {} // eslint-disable-line @typescript-eslint/no-empty-interface
interface HomeState {} // eslint-disable-line @typescript-eslint/no-empty-interface

class Home extends React.Component<HomeProps, HomeState> {
  render() {
    return(
      <div>
        <h1>Home page</h1>
        <Button
          caption={'click me'}
          onClick={() => console.log('click')}
          disabled={false}
          showSpinner={false}
        />
      </div>
    )
  }
}

export default Home
