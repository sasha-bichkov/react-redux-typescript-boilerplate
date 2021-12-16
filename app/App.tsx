import React from 'react'
import { compose } from 'redux'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router'
import { ConnectedRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { ErrorBoundary } from 'react-error-boundary'
import 'normalize.css'

import Home from '@Pages/Home'
import ErrorFallback from '@Components/ErrorFallback'

import configureStore from '@Root/configureStore'
import reportWebVitals from '@Root/reportWebVitals'

import '@Root/App.scss'

declare global {
  interface Window {
    readonly __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

const rootElement = document.getElementById('main') as HTMLElement

const history = createBrowserHistory()
const store = configureStore(history)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </ErrorBoundary>
    </ConnectedRouter>
  </Provider>,
  rootElement
)

reportWebVitals(console.log)
