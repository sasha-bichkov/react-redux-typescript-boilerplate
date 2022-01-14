import {
  TasksActionTypes,
  ITask
} from './types'

export const addNewTask = (payload: ITask) => {
  return {
    type: TasksActionTypes.ADD_TASK,
    payload
  }
}
