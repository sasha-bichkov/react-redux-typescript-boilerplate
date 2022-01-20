import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch, Action, compose } from 'redux'
import { withTranslation, TFunction } from 'react-i18next'
import { IApplicationState } from '@Root/rootReducer'

import OmniAuthButton from '@Components/OmniAuthButton'
import GoogleIcon from '@Images/OmniAuthButton/GoogleLogo.svg'
import ChangePasswordForm from '@Components/ChangePasswordForm'
import ForgotPasswordForm from '@Components/ForgotPasswordForm'
import ResendConfirmationForm from '@Components/ResendConfirmationForm'
import SingInForm from '@Components/SingInForm'
import CookiesNotifying from '@Components/CookiesNotifying'

import {
  registerNewUser
} from '@Modules/User/actions'

import {
  IUserRegister
} from '@Modules/User/types'

import CreatingTasksForm from '@Containers/TasksFormContainer'
import './Home.scss'

interface HomeProps {
  t: TFunction<('translation' | 'common')[], undefined>

  registerNewUser(payload: IUserRegister): void
}

interface HomeState {} // eslint-disable-line @typescript-eslint/no-empty-interface

class Home extends React.Component<HomeProps, HomeState> {
  render() {
    const {t, registerNewUser} = this.props
    return (
      <div>
        <h1>{t('home.title')}</h1>
        {/*<SignUpForm*/}
        {/*  onSubmit={registerNewUser}*/}
        {/*/>*/}
        <CreatingTasksForm />
        {/*<OmniAuthButton Icon={GoogleIcon} onClick={() => console.log('click')}>*/}
        {/*  Sign in with Google*/}
        {/*</OmniAuthButton>*/}
        {/*<SingInForm onSubmit={() => '1'} />*/}
        <CookiesNotifying />
      </div>
    )
  }
}

function mapStateToProps(state: IApplicationState) {
  return {}
}

function mapDispatchToProps(dispatch: Dispatch<Action>) {
  return bindActionCreators({
    registerNewUser
  }, dispatch)
}

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(Home))
