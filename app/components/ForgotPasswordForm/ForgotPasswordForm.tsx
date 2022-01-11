import React, { FC } from 'react'
import FocusLock from 'react-focus-lock'
import { useForm, SubmitHandler } from 'react-hook-form'

import Button from '@Components/Button'

import './ForgotPasswordForm.scss'

interface IForm {
  email: string
}

interface ISForgotPasswordForm {
  onSubmit(): void
}

const ForgotPasswordForm: FC<ISForgotPasswordForm> = props => {
  const {
    register,
    handleSubmit,
    formState: {errors, isValid, isSubmitting},
    reset,
  } = useForm<IForm>({mode: 'all'})

  const sleep = (milliseconds: number) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }

  const onSubmit: SubmitHandler<IForm> = async (data) => {
    console.log('sent:', data)
    props.onSubmit()
    await sleep(3000)
    reset()
  }

  const renderEmail = () => {
    return (
      <div className="ForgotPasswordForm__group">
        <input
          id="email"
          type="text"
          placeholder=" "
          className="ForgotPasswordForm__input emailInput"
          aria-invalid={errors.email ? 'true' : 'false'}
          {...register('email', {
            required: 'This is required field',
            pattern: {
              value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
              message: 'Invalid email address'
            }
          })}
        />

        <label className="ForgotPasswordForm__label" htmlFor="email">Email</label>

        {errors.email && (
          <p className="ForgotPasswordForm__error">
            {errors.email.message}
          </p>
        )}
      </div>
    )
  }

  return (
    <FocusLock>
      <form
        className="ForgotPasswordForm"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="ForgotPasswordForm__title">
          Forgot your password
        </h2>

        {renderEmail()}

        <Button
          type="submit"
          showSpinner={isSubmitting}
          disabled={!isValid || isSubmitting}
          className="ForgotPasswordForm__button"
        >
          Send me&nbsp;reset password instructions
        </Button>
      </form>
    </FocusLock>
  )
}

export default ForgotPasswordForm
