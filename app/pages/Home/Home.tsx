import React from 'react'

interface HomeProps {} // eslint-disable-line @typescript-eslint/no-empty-interface
interface HomeState {} // eslint-disable-line @typescript-eslint/no-empty-interface

import './Home.scss'
import Popup from '@Components/Popup'

class Home extends React.Component<HomeProps, HomeState> {
  render() {
    return(
      <div>
        Home page
        <Popup
          close={()=> console.log('close')}
          overlay={true}
          className={'Popup'}>
          <div>Lorem ipsum dolor sit amet, consectetur.</div>
        </Popup>
      </div>
    )
  }
}

export default Home
