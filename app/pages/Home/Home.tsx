import React from 'react'

import Popup from '@Components/Popup'
import UnsupportedBrowser from '@Components/UnsupportedBrowser'

import './Home.scss'

interface HomeProps {} // eslint-disable-line @typescript-eslint/no-empty-interface
interface HomeState {} // eslint-disable-line @typescript-eslint/no-empty-interface

class Home extends React.Component<HomeProps, HomeState> {
  render() {
    return(
      <div>
        Home page
        <Popup overlay={true} close={()=> console.log('click')}>
          <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </div>
        </Popup>
      </div>
    )
  }
}

export default Home
