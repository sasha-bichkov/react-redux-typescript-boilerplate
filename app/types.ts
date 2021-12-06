export interface IAction<T = Record<string, unknown>> {
  type: string,
  payload?: T,
}

export interface IPayload<T> {
  payload: T,
}
