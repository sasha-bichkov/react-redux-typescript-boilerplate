import { ITasks, TasksActionTypes } from '@Modules/Tasks/types'
import produce from 'immer'
import { IAction } from '@Root/types'

const initialState: ITasks = {
  tasks: [],
}

export const tasksReducer = (
  state = initialState,
  action: IAction
): ITasks => {
  return produce(state, draft => {
    switch (action.type) {
    case TasksActionTypes.ADD_TASK_SUCCESS:
      draft.tasks.push(action.payload)
      break

    default:
      break
    }
  })
}
