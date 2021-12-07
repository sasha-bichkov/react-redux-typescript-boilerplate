import React from 'react'

interface HomeProps {} // eslint-disable-line @typescript-eslint/no-empty-interface
interface HomeState {} // eslint-disable-line @typescript-eslint/no-empty-interface

import './Home.scss'
import {ErrorBoundary} from 'react-error-boundary'
import ErrorFallback from '@Root/components/ErrorFallback'


function Bomb():any {
  throw new Error('💥 CABOOM 💥')
}

class Home extends React.Component<HomeProps, HomeState> {
  render() {
    return(
      <div>
        Home page
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Bomb/>
        </ErrorBoundary>
      </div>
    )
  }
}

export default Home
