import React from 'react'

import SingInForm from '@Components/SingInForm'

import './Home.scss'
import SignUpForm from '@Components/SingUpForm'
import ResendConfirmationForm from '@Components/ResendConfirmationForm'
import ForgotPasswordForm from '@Components/ForgotPasswordForm'
import ChangePasswordForm from '@Components/ChangePasswordForm'

interface HomeProps {} // eslint-disable-line @typescript-eslint/no-empty-interface
interface HomeState {} // eslint-disable-line @typescript-eslint/no-empty-interface

class Home extends React.Component<HomeProps, HomeState> {
  render() {
    return (
      <div>
        <h1>Home page</h1>
        <ChangePasswordForm
          onSubmit={() => {
            console.log('submit from')
          }}
        />
      </div>
    )
  }
}

export default Home
