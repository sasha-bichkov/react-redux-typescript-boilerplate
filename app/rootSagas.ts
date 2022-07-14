import { all, fork } from 'redux-saga/effects'
import userSagas from '@Modules/User/sagas'
import tasksSagas from '@Modules/Tasks/sagas'

export default function* sagas() {
  yield all([
    fork(userSagas),
    fork(tasksSagas)
  ])
}
