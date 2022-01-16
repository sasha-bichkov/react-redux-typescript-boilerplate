import { ITask, TasksActionTypes } from '@Modules/Tasks/types'
import { SagaIterator } from 'redux-saga'
import { put, takeLatest } from 'redux-saga/effects'

import { IAction } from '@Root/types'

function* registerTask(action: Required<IAction<ITask>>): SagaIterator {
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

function* tasksSagas(): SagaIterator {
  yield takeLatest(TasksActionTypes.ADD_TASK, registerTask)
}

export default tasksSagas
