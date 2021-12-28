import React from 'react'

import Button from '@Components/Button'
import Loader from '@Components/Loader'

import './Home.scss'
import SingInForm from '@Components/SingInForm'

interface HomeProps {} // eslint-disable-line @typescript-eslint/no-empty-interface
interface HomeState {} // eslint-disable-line @typescript-eslint/no-empty-interface

class Home extends React.Component<HomeProps, HomeState> {
  render() {
    return(
      <div>
        <h1>Home page</h1>
        <SingInForm />
      </div>
    )
  }
}

export default Home
