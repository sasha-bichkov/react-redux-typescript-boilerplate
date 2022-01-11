import { BrowserHistory } from 'history'
import createSagaMiddleware from 'redux-saga'
import { Store, compose, createStore, applyMiddleware, Middleware } from 'redux'

import sagas from '@Root/rootSagas'
import rootReducer, { IApplicationState } from '@Root/rootReducer'
import { createBrowserHistory } from 'history'

const configureStore = (): Store<IApplicationState> => {
  const history = createBrowserHistory()
  const middlewares: Middleware[] = []
  const sagaMiddleware = createSagaMiddleware()

  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { logger } = require('redux-logger')
    middlewares.push(logger)
  }

  middlewares.push(sagaMiddleware)

  // https://github.com/zalmoxisus/redux-devtools-extension
  const composeEnhancer: typeof compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const store = createStore(
    rootReducer(),
    composeEnhancer(applyMiddleware(...middlewares))
  )

  sagaMiddleware.run(sagas)

  return store
}

const store = configureStore()

export default store
