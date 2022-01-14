import { ITask, TasksActionTypes } from '@Modules/Tasks/types'
import { put, takeLatest } from 'redux-saga/effects'
import { IAction } from '@Root/types'

import * as Eff from 'redux-saga/effects'

const call: any = Eff.call

function* registerTask(action: Required<IAction<ITask>>):Generator<any, any, any> {
  try {
    const {taskTitle, taskText} = action.payload
    const payload = {taskTitle, taskText}
    yield put({
      type: TasksActionTypes.ADD_TASK_SUCCESS,
      payload
    })
  } catch (e) {
    console.log('task sagas error')
    console.log(e)
  }
}

function* tasksSagas() {
  yield takeLatest(TasksActionTypes.ADD_TASK, registerTask)
}

export default tasksSagas
