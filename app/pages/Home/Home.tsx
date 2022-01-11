import React from 'react'
import { withTranslation, TFunction } from 'react-i18next'

import OmniAuthButton from '@Components/OmniAuthButton'
import  GoogleIcon from '@Images/OmniAuthButton/GoogleLogo.svg'

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

        <OmniAuthButton Icon={GoogleIcon} onClick={() => console.log('click')}>
          Sign in with Google
        </OmniAuthButton>
      </div>
    )
  }
}

export default withTranslation()(Home)
