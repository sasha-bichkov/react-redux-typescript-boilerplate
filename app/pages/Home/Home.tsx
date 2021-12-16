import React from 'react'

interface HomeProps {} // eslint-disable-line @typescript-eslint/no-empty-interface
interface HomeState {} // eslint-disable-line @typescript-eslint/no-empty-interface

import './Home.scss'
import UnsupportedBrowser from '@Components/UnsupportedBrowser'
import Loader from '@Components/Loader'

class Home extends React.Component<HomeProps, HomeState> {
  render() {
    return(
      <div>
        <h1>Home page</h1>
        <Loader />
      </div>
    )
  }
}

export default Home
