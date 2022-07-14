import { IApplicationState } from '@Root/rootReducer'
import { SagaIterator } from 'redux-saga'
import { call, put, takeLatest } from 'redux-saga/effects'
import { IAction } from '@Root/types'
import { UserActionTypes, IUserRegister } from './types'
import isEmailDisposable from '@Utils/isEmailDisposable'

// import Logger from '@Utils/Logger'
// import * as API from './api'

function* registerUser(action: Required<IAction<IUserRegister>>): SagaIterator {
  try {
    const { email } = action.payload
    const result = yield call(isEmailDisposable, email)

    if (result) {
      throw new Error('Email is not correct.')
    } else {
      const payload = { email }

      yield put({ type: UserActionTypes.REGISTER_SUCCESS, payload })
    }
  } catch (e) {
    console.error(e)
    // Logger.error(e)
  }
}

function* userSagas() {
  yield takeLatest(UserActionTypes.REGISTER, registerUser)
}

export default userSagas
