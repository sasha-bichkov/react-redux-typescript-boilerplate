import React from 'react'
import '@testing-library/jest-dom'
import axios from 'axios'

import isEmailDisposable, { DISPOSABLE_EMAIL_CHECKER_URL } from '../isEmailDisposable'

jest.mock('axios')

describe('isEmailDisposable', () => {
  const URL = DISPOSABLE_EMAIL_CHECKER_URL

  describe('if url path correct', () => {
    it('sends a request to the correct url', async () => {
      const resp = {
        data: {
          disposable: false
        }
      }
      axios.get.mockResolvedValueOnce(resp)
      await isEmailDisposable('test@test.com')

      expect(axios.get).toHaveBeenCalledWith(`${URL}test@test.com`)
    })
  })

  describe('if it is real email', () => {
    it('returns false', async () => {
      const resp = {
        data: {
          disposable: false
        }
      }
      axios.get.mockResolvedValueOnce(resp)
      const result = await isEmailDisposable('test@test.com')

      expect(result).toBeFalsy()
    })
  })

  describe('if it is disposable email', () => {
    it('returns true', async () => {
      const resp = {
        data: {
          disposable: true
        }
      }
      axios.get.mockResolvedValueOnce(resp)
      const result = await isEmailDisposable('konamey234@wusehe.com')

      expect(result).toBeTruthy()
    })
  })

})
