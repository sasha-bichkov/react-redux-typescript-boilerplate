import React from 'react'
import { withTranslation, TFunction } from 'react-i18next'

import SingInForm from '@Components/SingInForm'

import './Home.scss'

interface HomeProps {
  t: TFunction<('translation' | 'common')[], undefined>
}

interface HomeState {} // eslint-disable-line @typescript-eslint/no-empty-interface

class Home extends React.Component<HomeProps, HomeState> {
  render() {
    const { t } = this.props

    return(
      <div>
        <h1>{t('home.title')}</h1>
        <SingInForm onSubmit={() => console.log('submit form')} />
      </div>
    )
  }
}

export default withTranslation()(Home)
