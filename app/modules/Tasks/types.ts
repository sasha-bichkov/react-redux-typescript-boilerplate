import { tasksReducer } from "./reducer"

export const TasksActionTypes = {
  ADD_TASK: '@@tasks/ADD_TASK',
  ADD_TASK_SUCCESS: '@@tasks/ADD_TASK_SUCCESS'
}

export interface ITask {
  readonly title: string
  readonly text: string
}

export interface ITasks {
  readonly tasks: ITask[]
}
