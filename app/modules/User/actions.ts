import {
  UserActionTypes,
  IUserRegister
} from './types'

export const registerNewUser = (payload: IUserRegister) => {
  return {
    type: UserActionTypes.REGISTER,
    payload
  }
}
