import React from 'react'

import UnsupportedBrowser from '@Components/UnsupportedBrowser'

import './Home.scss'
import SingInForm from '@Components/SingInForm'
import SignUpForm from "@Components/SingUpForm";

interface HomeProps {
} // eslint-disable-line @typescript-eslint/no-empty-interface
interface HomeState {
} // eslint-disable-line @typescript-eslint/no-empty-interface

class Home extends React.Component<HomeProps, HomeState> {
  render() {
    return (
      <div>
        <h1>Home page</h1>
        <SignUpForm
          onSubmit={() => {
          console.log('submit from')
        }}
        />
      </div>
    )
  }
}

export default Home
