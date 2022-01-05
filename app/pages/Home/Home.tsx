import React from 'react'

import Button from '@Components/Button'

import './Home.scss'

interface HomeProps {} // eslint-disable-line @typescript-eslint/no-empty-interface
interface HomeState {} // eslint-disable-line @typescript-eslint/no-empty-interface

class Home extends React.Component<HomeProps, HomeState> {
  render() {
    return(
      <div>
        <h1>Home page</h1>
        {/* <Button caption={'click me'} showSpinner disabled /> */}
      </div>
    )
  }
}

export default Home
