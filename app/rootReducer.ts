import { combineReducers } from 'redux'
import { History } from 'history'
import { connectRouter, RouterState } from 'connected-react-router'

export interface IApplicationState {
  router: RouterState,
}

export default (history: History) => combineReducers<IApplicationState>({
  router: connectRouter(history),
})
