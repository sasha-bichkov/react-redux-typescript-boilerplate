import { snakeCase, mapValues, mapKeys, isPlainObject } from 'lodash'

interface IObject {
  [key: string]: any
}

export function convertToSnakeCase(hash: IObject) {
  return mapKeysDeep(hash, snakeCase)
}

const mapKeysDeep = (hash: IObject, callback: (key: any) => {}): any[any] => {
  const keys = mapKeys(hash, (value, key) => {
    return callback(key)
  })

  return mapValues(keys, (val) => {
    return isPlainObject(val) ? mapKeysDeep(val, callback) : val
  })
}
