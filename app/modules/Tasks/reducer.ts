import produce from 'immer'

import { IAction } from '@Root/types'
import { ITask, ITasks, TasksActionTypes } from '@Modules/Tasks/types'

const initialState: ITasks = {
  tasks: []
}

export const tasksReducer = (
  state = initialState,
  action: IAction<ITask>
): ITasks => {
  return produce(state, draft => {
    switch (action.type) {
    case TasksActionTypes.ADD_TASK_SUCCESS:
      draft.tasks.push(action.payload as ITask)
      break

    default:
      break
    }
  })
}
