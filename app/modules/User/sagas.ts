import { IApplicationState } from '@Root/rootReducer'
import { put, takeLatest } from 'redux-saga/effects'
import * as Eff from 'redux-saga/effects' // tslint:disable-line:no-duplicate-imports
import { IAction } from '@Root/types'
import { UserActionTypes, IUserRegister } from './types'
import isEmailDisposable from '@Utils/isEmailDisposable'

// import Logger from '@Utils/Logger'

import {} from './types'

import * as API from './api'

const call: any = Eff.call

// TODO: добавить типы для Generator
function* registerUser(action: Required<IAction<IUserRegister>>): Generator<any, any, any> {
  try {
    const { email } = action.payload
    const result = yield call(isEmailDisposable, email)

    if (result) {
      throw new Error('Email is not correct.')
    } else {
      const payload = { email }

      yield put({ type: UserActionTypes.REGISTER_SUCCESS, payload })
    }
  } catch(error) {
    console.error(error)
    // Logger.error(error)
  }
}

function* userSagas() {
  yield takeLatest(UserActionTypes.REGISTER, registerUser)
}

export default userSagas
