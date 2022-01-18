import { addNewTask } from '../sagas'
import { TasksActionTypes } from '../types'
import { put } from 'redux-saga/effects'

describe('addNewTask', () => {
  it('adds a new task and the generator has the status done', () => {
    const action = {
      type: TasksActionTypes.ADD_TASK_SUCCESS,
      payload: {
        title: 'testTitle',
        text: 'testText',
      }
    }

    const generator = addNewTask(action)

    expect(generator.next().value).toEqual(put(action))
    expect(generator.next().done).toBeTruthy()
  })
})
