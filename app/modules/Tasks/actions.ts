import {
  ITask,
  TasksActionTypes
} from './types'

export const addNewTask = (payload: ITask) => {
  return {
    type: TasksActionTypes.ADD_TASK,
    payload
  }
}
