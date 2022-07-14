import { ITask, TasksActionTypes } from '@Modules/Tasks/types'
import { put, takeLatest } from 'redux-saga/effects'

import { IAction } from '@Root/types'

export function* addNewTask(action: Required<IAction<ITask>>) {
  try {
    yield put({
      type: TasksActionTypes.ADD_TASK_SUCCESS,
      payload: action.payload
    })
  } catch (e) {
    throw new Error('error adding task')
  }
}

function* tasksSagas() {
  yield takeLatest(TasksActionTypes.ADD_TASK, addNewTask)
}

export default tasksSagas
