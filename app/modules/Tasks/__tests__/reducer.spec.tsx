import React from 'react'
import { createStore } from 'redux'
import { initialState } from '../../User/reducer'
import { tasksReducer } from '../reducer'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import CreatingTasksForm from '@Containers/TasksFormContainer'
import userEvent from '@testing-library/user-event'
import store from '../../../configureStore'


const renderWithRedux = (
  component,
  { intialState, store = createStore(tasksReducer, initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
}

describe('tasksReducer', () => {

  describe('if action is empty', () => {
    it('returns the initial state', () => {

      expect(tasksReducer(undefined, {})).toEqual({
        tasks: []
      })
    })
  })

  describe('if a task is added', () => {
    it('handles a task is added to an empty state', () => {
      const previousState = { tasks: [] }
      expect(tasksReducer(previousState, {
        type: '@@tasks/ADD_TASK_SUCCESS',
        payload: {
          title: 'test title 1',
          text: 'test text 1'
        }
      })).toEqual({ tasks: [{ title: 'test title 1', text: 'test text 1' }] })
    })
  })

  // describe('integration tests', () => {
  //   it('2', async () => {
  //     renderWithRedux(<CreatingTasksForm />)
  //     const input = screen.getByLabelText(/task title/i)
  //     const textArea = screen.getByLabelText(/add description/i)
  //     const button = screen.getByRole('button')
  //     userEvent.type(input, 'test title')
  //     userEvent.type(textArea, 'test text')
  //     userEvent.click(button)
  //     console.log(tasksReducer(undefined, {
  //       type: '@@tasks/ADD_TASK_SUCCESS',
  //       payload: {
  //         title: 'test title 1',
  //         text: 'test text 1'
  //       }
  //     }))
  //   })
  // })
})
