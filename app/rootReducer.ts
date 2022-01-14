import { combineReducers } from 'redux'
import { userReducer } from '@Modules/User/reducer'
import { IUser } from '@Modules/User/types'
import { tasksReducer } from '@Modules/Tasks/reducer'
import { ITask } from '@Modules/Tasks/types'

export interface IApplicationState {
  user: IUser
  tasks: any
}

export default () => combineReducers<IApplicationState>({
  user: userReducer,
  tasks: tasksReducer
})
