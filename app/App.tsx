import React from 'react'
import { compose } from 'redux'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'

import store from '@Root/configureStore'
import reportWebVitals from '@Root/reportWebVitals'

import Suspense from '@Components/Suspense'
import ErrorFallback from '@Components/ErrorFallback'
import SideBar from '@Components/SideBar'
import { SideBarData } from '@Components/SideBar/SideBarData'

const Home = React.lazy(() => import('@Pages/Home'))
const NotFound = React.lazy(() => import('@Pages/NotFound'))
const Issues = React.lazy(() => import('@Pages/Issues'))
const Backlog = React.lazy(() => import('@Pages/Backlog'))
const Settings = React.lazy(() => import('@Pages/SettingsPage'))

import '@Root/i18n'
import '@Scss/App.scss'

declare global {
  interface Window {
    readonly __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

const rootElement = document.getElementById('main') as HTMLElement

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <SideBar SideBarData={SideBarData} />
            <React.Suspense fallback={Suspense}>
              <div className='App__content'>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/issues" element={<Issues />} />
                  <Route path="/backlog" element={<Backlog />} />
                  <Route path="/settingsPage" element={<Settings />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
            </React.Suspense>
          </div>
        </BrowserRouter>
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>,
  rootElement
)

reportWebVitals(console.log)
