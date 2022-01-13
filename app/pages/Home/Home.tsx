import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch, Action } from 'redux'
import { withTranslation, TFunction } from 'react-i18next'
import { IApplicationState } from '@Root/rootReducer'

import OmniAuthButton from '@Components/OmniAuthButton'
import GoogleIcon from '@Images/OmniAuthButton/GoogleLogo.svg'
import SignUpForm from '@Components/SignUpForm'

import {
  registerNewUser
} from '@Modules/User/actions'

import {
  IUserRegister
} from '@Modules/User/types'

import './Home.scss'

interface HomeProps {
  t: TFunction<('translation' | 'common')[], undefined>
  registerNewUser(payload: IUserRegister): void
}

interface HomeState {} // eslint-disable-line @typescript-eslint/no-empty-interface

class Home extends React.Component<HomeProps, HomeState> {
  render() {
    const { t, registerNewUser } = this.props

    return (
      <div>
        <h1>{t('home.title')}</h1>

        <SignUpForm
          onSubmit={registerNewUser}
        />

        <OmniAuthButton Icon={GoogleIcon} onClick={() => console.log('click')}>
          Sign in with Google
        </OmniAuthButton>
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
