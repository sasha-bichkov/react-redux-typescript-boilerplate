export const UserActionTypes = {
  REGISTER: '@@user/REGISTER',
  REGISTER_SUCCESS: '@@user/REGISTER_SUCCESS'
}

export interface IUser {
  readonly email: string
}

export interface IUserRegister {
  readonly email: string
  readonly password: string
  readonly passwordConfirmation: string
}
