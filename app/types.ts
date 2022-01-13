export interface IAction<T = {}> {
  readonly type: string
  readonly payload?: T
}

export interface IPayload<T> {
  readonly payload: T
}
