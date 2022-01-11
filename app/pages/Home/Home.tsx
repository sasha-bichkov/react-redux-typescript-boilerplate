import React from 'react'
import { withTranslation, TFunction } from 'react-i18next'

import SingInForm from '@Components/SingInForm'
import SignUpForm from '@Components/SingUpForm'
import ResendConfirmationForm from '@Components/ResendConfirmationForm'
import ForgotPasswordForm from '@Components/ForgotPasswordForm'
import ChangePasswordForm from '@Components/ChangePasswordForm'

import './Home.scss'

interface HomeProps {
  t: TFunction<('translation' | 'common')[], undefined>
}

interface HomeState {} // eslint-disable-line @typescript-eslint/no-empty-interface

class Home extends React.Component<HomeProps, HomeState> {
  render() {
    const { t } = this.props

    return (
      <div>
        <h1>{t('home.title')}</h1>
        <ChangePasswordForm
          onSubmit={() => {
            console.log('submit from')
          }}
        />
      </div>
    )
  }
}

export default withTranslation()(Home)
