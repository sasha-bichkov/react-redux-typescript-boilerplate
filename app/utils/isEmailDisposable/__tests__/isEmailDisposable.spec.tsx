import axios from 'axios'
import '@testing-library/jest-dom'

import isEmailDisposable from '../isEmailDisposable'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('isEmailDisposable', () => {

  describe('if the email is not disposable', () => {
    it('returns false', async () => {
      const response = {
        data: {
          disposable: false
        }
      }

      mockedAxios.get.mockResolvedValueOnce(response)
      const result = await isEmailDisposable('test@test.com')

      expect(result).toBeFalsy()
    })
  })

  describe('if the email is disposable', () => {
    it('returns true', async () => {
      const response = {
        data: {
          disposable: true
        }
      }

      mockedAxios.get.mockResolvedValueOnce(response)
      const result = await isEmailDisposable('konamey234@wusehe.com')

      expect(result).toBeTruthy()
    })
  })

})
