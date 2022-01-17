import { ITask, TasksActionTypes } from '@Modules/Tasks/types'
import { put, takeLatest } from 'redux-saga/effects'

import { IAction } from '@Root/types'

function* addNewTask(action: Required<IAction<ITask>>) {
  try {
    yield put({
      type: TasksActionTypes.ADD_TASK_SUCCESS,
      payload: action.payload
    })
  } catch (e) {
    console.error('task sagas error')
    console.error(e)
  }
}

function* tasksSagas() {
  yield takeLatest(TasksActionTypes.ADD_TASK, addNewTask)
}

export default tasksSagas
