import { snakeCase, mapValues, mapKeys, isPlainObject } from 'lodash'

/* eslint-disable @typescript-eslint/no-explicit-any */

interface IObject {
  [key: string]: any
}

export function convertToSnakeCase(hash: IObject) {
  return mapKeysDeep(hash, snakeCase)
}

const mapKeysDeep = (hash: IObject, callback: (key: string) => object): object => {
  const keys = mapKeys(hash, (value: any, key: string) => {
    return callback(key)
  })

  return mapValues(keys, (val: any) => {
    return isPlainObject(val) ? mapKeysDeep(val, callback) : val
  })
}
