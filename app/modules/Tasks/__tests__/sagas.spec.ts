import { addNewTask } from '../sagas'
import { TasksActionTypes } from '../types'
import { put } from 'redux-saga/effects'

describe('tasksSagas', () => {

  describe('addNewTask', () => {
    const action = {
      type: TasksActionTypes.ADD_TASK_SUCCESS,
      payload: {
        title: 'testTitle',
        text: 'testText',
      }
    }
    const generator = addNewTask(action)

    it('adds a new task', () => {
      expect(generator.next().value).toEqual(put(action))
    })

    it('should be done on next iteration',() => {
      expect(generator.next().done).toBeTruthy()
    })
  })

  // describe('addNewTask error', () => {
  //   const error = new Error()
  //   const generator = addNewTask({})
  //   generator.next()
  //   expect(generator.throw(error)).toBeUndefined()
  //
  // })
})

