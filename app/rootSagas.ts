import { all, fork } from 'redux-saga/effects'
import userSagas from '@Modules/User/sagas'

export default function* sagas() {
  yield all([
    fork(userSagas)
  ])
}
