import React from 'react'
import { compose } from 'redux'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
// import { Route, Switch } from 'react-router'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { ErrorBoundary } from 'react-error-boundary'

import ErrorFallback from '@Components/ErrorFallback'
import Loader from '@Components/Loader'

import configureStore from '@Root/configureStore'
import reportWebVitals from '@Root/reportWebVitals'

import '@Scss/App.scss'
import SideBar from '@Components/SideBar/SideBar'
import { ISideBarData, SideBarData } from '@Components/SideBar/SideBarData'

declare global {
  interface Window {
    readonly __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

const rootElement = document.getElementById('main') as HTMLElement

const history = createBrowserHistory()
const store = configureStore(history)
const Home = React.lazy(() => import('@Pages/Home'))
const NotFound = React.lazy(() => import('@Pages/NotFound'))
const Issues = React.lazy(() => import('@Pages/Issues'))
const Backlog = React.lazy(() => import('@Pages/Backlog'))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ConnectedRouter history={history}>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <div className="App">
            <SideBar SideBarData={SideBarData} />
            <React.Suspense fallback={<div className="SuspenseComponent"><Loader /></div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/issues" element={<Issues />} />
                <Route path="/backlog" element={<Backlog />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </React.Suspense>
          </div>
        </ErrorBoundary>
      </ConnectedRouter>
    </BrowserRouter>,
  </Provider>,
  rootElement
)

reportWebVitals(console.log)
