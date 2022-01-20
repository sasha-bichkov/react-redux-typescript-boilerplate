import React from 'react'
import { withTranslation, TFunction } from 'react-i18next'
import { Button } from 'antd'

import OmniAuthButton from '@Components/OmniAuthButton'
import ChangePasswordForm from '@Components/ChangePasswordForm'
import ForgotPasswordForm from '@Components/ForgotPasswordForm'
import ResendConfirmationForm from '@Components/ResendConfirmationForm'
import SingInForm from '@Components/SingInForm'
import SignUpForm from '@Components/SingUpForm'
import CookiesNotifying from '@Components/CookiesNotifying'

import './Home.scss'
import Settings from '@Components/Settings'

interface HomeProps {
  t: TFunction<('translation' | 'common')[], undefined>
}

interface HomeState {} // eslint-disable-line @typescript-eslint/no-empty-interface

class Home extends React.Component<HomeProps, HomeState> {
  render() {
    const {t} = this.props

    return (
      <Settings />
      // <div>
      //   <h1>{t('home.title')}</h1>
      //   {/*<SingInForm onSubmit={() => '1'} />*/}
      //   {/*<CookiesNotifying />*/}
      //
      // </div>
    )
  }
}

export default withTranslation()(Home)
