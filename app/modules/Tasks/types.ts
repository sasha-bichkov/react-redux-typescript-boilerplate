export const TasksActionTypes = {
  ADD_TASK: '@@tasks/ADD',
  ADD_TASK_SUCCESS: '@tasks/ADD_SUCCESS'
}

export interface ITask {
  readonly taskTitle: string
  readonly taskText: string
}

export interface ITasks {
  readonly tasks: ITasks[]
}
