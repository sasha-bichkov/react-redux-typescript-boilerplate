import React from 'react'

interface HomeProps {} // eslint-disable-line @typescript-eslint/no-empty-interface
interface HomeState {} // eslint-disable-line @typescript-eslint/no-empty-interface

import './Home.scss'
import UnsupportedBrowser from '@Components/UnsupportedBrowser/UnsupportedBrowser'

function Bomb():never {
  throw new Error('💥 CABOOM 💥')
}

class Home extends React.Component<HomeProps, HomeState> {
  render() {
    return(
      <div>
        Home page
        <UnsupportedBrowser/>
      </div>
    )
  }
}

export default Home
