import React from 'react'

import UnsupportedBrowser from '@Components/UnsupportedBrowser'

import './Home.scss'

interface HomeProps {} // eslint-disable-line @typescript-eslint/no-empty-interface
interface HomeState {} // eslint-disable-line @typescript-eslint/no-empty-interface

class Home extends React.Component<HomeProps, HomeState> {
  render() {
    return(
      <div>
        <h1>Home page</h1>

        <UnsupportedBrowser />
      </div>
    )
  }
}

export default Home
