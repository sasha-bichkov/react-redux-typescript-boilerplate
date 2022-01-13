import React from 'react'
import '@testing-library/jest-dom'
import axios from 'axios'

import isEmailDisposable, { DISPOSABLE_EMAIL_CHECKER_URL } from '../isEmailDisposable'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('isEmailDisposable', () => {
  const URL = DISPOSABLE_EMAIL_CHECKER_URL

  describe('if url path correct', () => {
    it('sends a request to the correct url', async () => {
      const response = {
        data: {
          disposable: false
        }
      }

      mockedAxios.get.mockResolvedValueOnce(response)

      await isEmailDisposable('test@test.com')

      expect(mockedAxios.get).toHaveBeenCalledWith(`${URL}test@test.com`)
    })
  })

  describe('if it is real email', () => {
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

  describe('if it is disposable email', () => {
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
