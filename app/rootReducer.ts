import { combineReducers } from 'redux'
import { userReducer } from '@Modules/User/reducer'
import { IUser } from '@Modules/User/types'

export interface IApplicationState {
  user: IUser
}

export default () => combineReducers<IApplicationState>({
  user: userReducer
})
