import React from 'react'

import SingInForm from '@Components/SingInForm'

import './Home.scss'

interface HomeProps {} // eslint-disable-line @typescript-eslint/no-empty-interface
interface HomeState {} // eslint-disable-line @typescript-eslint/no-empty-interface

class Home extends React.Component<HomeProps, HomeState> {
  render() {
    return(
      <div>
        <h1>Home page</h1>
        <SingInForm onSubmit={() => console.log('submit form')} />
      </div>
    )
  }
}

export default Home
