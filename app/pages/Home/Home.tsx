import React from 'react'

import './Home.scss'
import OmniAuthButton from '@Components/OmniAuthButton'
import GoogleIcon from '@Images/OmniAuthButton/Google__Logo.svg'

interface HomeProps {} // eslint-disable-line @typescript-eslint/no-empty-interface
interface HomeState {} // eslint-disable-line @typescript-eslint/no-empty-interface

class Home extends React.Component<HomeProps, HomeState> {
  render() {
    return (
      <div>
        <h1>Home page</h1>
        <OmniAuthButton Icon={GoogleIcon} onClick={() => console.log('click')}>
          Sign in with Google
        </OmniAuthButton>
      </div>
    )
  }
}

export default Home
