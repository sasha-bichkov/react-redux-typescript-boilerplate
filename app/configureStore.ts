import { BrowserHistory } from 'history'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'connected-react-router'
import { Store, compose, createStore, applyMiddleware } from 'redux'

import sagas from '@Root/rootSagas'
import rootReducer, { IApplicationState } from '@Root/rootReducer'

export default function configureStore(history: BrowserHistory): Store<IApplicationState> {
  const middlewares = [routerMiddleware(history)]
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
    rootReducer(history),
    composeEnhancer(applyMiddleware(...middlewares))
  )

  sagaMiddleware.run(sagas)

  return store
}
