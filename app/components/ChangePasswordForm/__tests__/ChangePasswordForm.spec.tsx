import React, { FC, useRef } from 'react'
import FocusLock from 'react-focus-lock'
import { useForm, SubmitHandler } from 'react-hook-form'

import './ChangePasswordForm.scss'
import Button from '@Components/Button'

export interface FormValue {
  password: string;
  passwordConfirmation: string;
}

interface ISChangePasswordForm {
  onSubmit(): void
}

const ChangePasswordForm: FC<ISChangePasswordForm> = props => {
  const {
    register,
    handleSubmit,
    formState: {errors, isValid, isSubmitting},
    reset,
    watch
  } = useForm<FormValue>({mode: 'all'})
  const password = useRef({})
  password.current = watch('password')
  const sleep = (milliseconds: number) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }

  const onSubmit: SubmitHandler<FormValue> = async (data) => {
    console.log('sent:', data)
    props.onSubmit()
    await sleep(3000)
    reset()
  }

  const renderPassword = () => {
    return (
      <div className="ChangePasswordForm__group">
        <input
          id="password"
          type="password"
          placeholder=" "
          className="ChangePasswordForm__input passwordInput"
          aria-invalid={errors.password ? 'true' : 'false'}
          {...register('password', {
            required: 'This is required field',
            minLength: {
              value: 5,
              message: 'Please enter at least 5 characters'
            },
            maxLength: {
              value: 30,
              message: 'Please enter at most 30 characters'
            }
          })}
        />

        <label className="ChangePasswordForm__label" htmlFor="password">Password</label>

        {errors.password && (
          <p role="alert" className="ChangePasswordForm__error">
            {errors.password.message}
          </p>
        )}
      </div>
    )
  }
  const renderPasswordRepeat = () => {
    return (
      <div className="ChangePasswordForm__group">
        <input
          id="passwordConfirmation"
          type="password"
          placeholder=" "
          className="ChangePasswordForm__input passwordInput"
          aria-invalid={errors.passwordConfirmation ? 'true' : 'false'}
          {...register('passwordConfirmation', {
            validate: value =>
              value === password.current || 'The passwords do not match'
          })}
        />

        <label
          className="ChangePasswordForm__label"
          htmlFor="passwordConfirmation">
          Password confirmation
        </label>

        {errors.passwordConfirmation && (
          <p role="alert" className="ChangePasswordForm__error">
            {errors.passwordConfirmation.message}
          </p>
        )}
      </div>
    )
  }

  return (
    <FocusLock>
      <form
        className="ChangePasswordForm"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="ChangePasswordForm__title">Change password</h2>

        {renderPassword()}
        {renderPasswordRepeat()}

        <Button
          type="submit"
          caption="Change password"
          showSpinner={isSubmitting}
          disabled={!isValid || isSubmitting}
          className="ChangePasswordForm__button"
        />
      </form>
    </FocusLock>
  )
}

export default ChangePasswordForm
