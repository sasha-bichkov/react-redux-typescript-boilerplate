import produce, { Draft } from 'immer'
import { IAction } from '@Root/types'
import { IUser, IUserRegister, UserActionTypes } from '@Modules/User/types'

export const initialState: IUser = {
  email: ''
}

export const userReducer = (
  state: IUser = initialState,
  action: IAction
): IUser => {
  return produce(state, draft => {
    switch (action.type) {
    case UserActionTypes.REGISTER_SUCCESS:
      updateEmail(draft, action)
      break

    default:
      break
    }
  })
}

// TODO: возможно можно как-то переделать
function isRegisterUserAction(arg: any): arg is Required<IAction<IUserRegister>> {
  return arg.type === UserActionTypes.REGISTER_SUCCESS
}

const updateEmail = (draft: Draft<IUser>, action: IAction) => {
  if (!isRegisterUserAction(action)) {
    return
  }

  draft.email = action.payload.email
}
