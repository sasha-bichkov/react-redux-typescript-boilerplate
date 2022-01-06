import React, { FC } from 'react'
import FocusLock from 'react-focus-lock'
import { useForm, SubmitHandler } from 'react-hook-form'

import './SingInForm.scss'
import Button from '@Components/Button'

export interface FormValue {
  email: string;
  password: string;
}

interface ISignInForm {
  onSubmit(): void
}

const SingInForm: FC<ISignInForm> = props => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    reset
  } = useForm<FormValue>({ mode: 'all' })

  const sleep = (milliseconds: number) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }

  const onSubmit: SubmitHandler<FormValue> = async (data) => {
    console.log('sent:', data)
    props.onSubmit()
    await sleep(3000)
    reset()
  }

  const renderEmail = () => {
    return (
      <div className="SingInForm__group">
        <input
          id="email"
          type="text"
          placeholder=" "
          className="SingInForm__input emailInput"
          aria-invalid={errors.email ? 'true' : 'false'}
          {...register('email', {
            required: 'This is required field',
            pattern: {
              value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
              message: 'Invalid email address'
            }
          })}
        />

        <label className="SingInForm__label" htmlFor="email">Email</label>

        {errors.email && (
          <p className="SingInForm__error">
            {errors.email.message}
          </p>
        )}
      </div>
    )
  }
  const renderPassword = () => {
    return (
      <div className="SingInForm__group">
        <input
          id="password"
          type="password"
          placeholder=" "
          className="SingInForm__input passwordInput"
          aria-invalid={errors.password ? 'true' : 'false'}
          {...register('password', {
            required: 'This is required field',
            minLength: {
              value: 6,
              message: 'Please enter at least 6 characters'
            },
            maxLength: {
              value: 30,
              message: 'Please enter at most 30 characters'
            }
          })}
        />

        <label className="SingInForm__label" htmlFor="password">Password</label>

        {errors.password && (
          <p role="alert" className="SingInForm__error">
            {errors.password.message}
          </p>
        )}
      </div>
    )
  }

  return (
    <FocusLock>
      <form
        className="SingInForm"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="SingInForm__title">Account login</h2>

        {renderEmail()}
        {renderPassword()}

        <Button
          type="submit"
          showSpinner={isSubmitting}
          disabled={!isValid || isSubmitting}
          className="SingInForm__button"
        >
          Sign in
        </Button>
      </form>
    </FocusLock>
  )
}

export default SingInForm
