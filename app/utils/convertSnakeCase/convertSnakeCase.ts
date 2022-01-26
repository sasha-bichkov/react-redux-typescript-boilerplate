import { snakeCase, mapValues, mapKeys, isPlainObject } from 'lodash'

const testObject = {
  myParam: {
    myParam2: 'value'
  },
  myParam2: 'value2'
}

const clone = (obj) => Object.assign({}, obj)
const renameKey = (object, key) => {
  const snakeKey = snakeCase(key)
  if (snakeKey === key) {
    return object
  }
  const targetKey = object[key]
  delete object[key]
  object[snakeKey] = targetKey
  return object
}

export function converToSnakeCase(object) {
  const cloneObject = clone(object)
  const iterObj = (o) => {
    for (const key in o) {
      if (typeof o[key] === 'object') {
        const snakeKey = snakeCase(key)
        o[snakeKey] = o[key]
        delete o[key]
        iterObj(o[snakeKey])
      } else {
        renameKey(o, key)
      }
    }
  }
  iterObj(cloneObject)
  return cloneObject
  // const deepMapKeys = (obj) => {
  //   return mapKeys(obj, (value, key) => {
  //     return snakeCase(key)
  //   })
  // }
  // return mapKeys(cloneObject, (value, key) => {
  //   if (typeof cloneObject[key] === 'object') {
  //     const snakeKey = snakeCase(key)
  //     object[snakeKey] = object[key]
  //     delete object[key]
  //     snakeCase(key)
  //     converToSnakeCase(cloneObject[key])
  //   }
  //   else {
  //     return snakeCase(key)
  //   }
  //   return snakeCase(key)
  // })
}

// interface IObject {
//   [key: string]: any
// }
//
// export default function convertToSnakeCase(hash: IObject) {
//   return mapKeysDeep(hash, snakeCase)
// }
//
// const mapKeysDeep = (hash: IObject, callback: (key: any) => {}): any[any] => {
//   const keys = mapKeys(hash, (value, key) => {
//     return callback(key)
//   })
//
//   return mapValues(keys, (val) => {
//     return isPlainObject(val) ? mapKeysDeep(val, callback) : val
//   })
// }
//
// converToSnakeCase(testObject)
