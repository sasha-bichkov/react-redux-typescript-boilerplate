import React from 'react'

interface HomeProps {} // eslint-disable-line @typescript-eslint/no-empty-interface
interface HomeState {} // eslint-disable-line @typescript-eslint/no-empty-interface

import './Home.scss'
import Button from '@Components/Button'

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
