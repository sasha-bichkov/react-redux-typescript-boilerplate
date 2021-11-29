export interface IAction<T = {}> {
  type: string,
  payload?: T,
}

export interface IPayload<T> {
  payload: T,
}
