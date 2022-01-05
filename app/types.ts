export interface IAction<T = Record<string, unknown>> {
  type: string,
  payload?: T,
}

export interface IPayload<T> {
  payload: T,
}

type a = number;

const num: a = 123
