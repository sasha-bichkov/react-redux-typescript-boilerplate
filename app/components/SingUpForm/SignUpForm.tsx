import React, { FC, useRef } from 'react'
import FocusLock from 'react-focus-lock'
import { useForm, SubmitHandler } from 'react-hook-form'

import Button from '@Components/Button'

import './SingUpForm.scss'

interface IForm {
  readonly email: string
  readonly password: string
  readonly passwordConfirmation: string
}

interface ISignUpForm {
  onSubmit(): void
}

const SignUpForm: FC<ISignUpForm> = props => {
  const {
    register,
    handleSubmit,
    formState: {errors, isValid, isSubmitting},
    reset,
    watch
  } = useForm<IForm>({mode: 'all'})
  const password = useRef({})
  password.current = watch('password')
  const sleep = (milliseconds: number) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }

  const onSubmit: SubmitHandler<IForm> = async (data) => {
    console.log('sent:', data)
    // ...
    props.onSubmit()
    await sleep(3000)
    reset()
  }

  const renderEmail = () => {
    return (
      <div className="SingUpForm__group">
        <input
          id="email"
          type="text"
          placeholder=" "
          className="SingUpForm__input emailInput"
          aria-invalid={errors.email ? 'true' : 'false'}
          {...register('email', {
            required: 'This is required field',
            pattern: {
              value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
              message: 'Invalid email address'
            }
          })}
        />

        <label className="SingUpForm__label" htmlFor="email">Email</label>

        {errors.email && (
          <p className="SingUpForm__error">
            {errors.email.message}
          </p>
        )}
      </div>
    )
  }

  const renderPassword = () => {
    return (
      <div className="SingUpForm__group">
        <input
          id="password"
          type="password"
          placeholder=" "
          className="SingUpForm__input passwordInput"
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

        <label className="SingUpForm__label" htmlFor="password">Password</label>

        {errors.password && (
          <p role="alert" className="SingUpForm__error">
            {errors.password.message}
          </p>
        )}
      </div>
    )
  }

  const renderPasswordRepeat = () => {
    return (
      <div className="SingUpForm__group">
        <input
          id="passwordConfirmation"
          type="password"
          placeholder=" "
          className="SingUpForm__input passwordInput"
          aria-invalid={errors.passwordConfirmation ? 'true' : 'false'}
          {...register('passwordConfirmation', {
            validate: value => value === password.current || 'The passwords do not match'
          })}
        />

        <label
          className="SingUpForm__label"
          htmlFor="passwordConfirmation">
          Password confirmation
        </label>

        {errors.passwordConfirmation && (
          <p role="alert" className="SingUpForm__error">
            {errors.passwordConfirmation.message}
          </p>
        )}
      </div>
    )
  }

  return (
    <FocusLock>
      <form
        className="SingUpForm"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="SingUpForm__title">Account login</h2>

        {renderEmail()}
        {renderPassword()}
        {renderPasswordRepeat()}

        <Button
          type="submit"
          showSpinner={isSubmitting}
          disabled={!isValid || isSubmitting}
          className="SingUpForm__button"
        >
          Sing up
        </Button>
      </form>
    </FocusLock>
  )
}

export default SignUpForm
