import React, { FC } from 'react'
import FocusLock from 'react-focus-lock'
import { useForm, SubmitHandler } from 'react-hook-form'

import './SingInForm.scss'
import Button from '@Components/Button'

interface FormValue {
  email: string;
  password: string;
}

const SingInForm: FC = () => {

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset
  } = useForm<FormValue>({ mode: 'onBlur' })

  const onSubmit: SubmitHandler<FormValue> = data => {
    console.log('sent:', data)
    reset()
  }

  return (
    <FocusLock>
      <form className="SingInForm SingInForm__center" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="SingInForm__title">Account login</h1>
        <div className="SingInForm__group">
          <input
            placeholder=" "
            className="SingInForm__input emailInput"
            type="text"
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
          {
            errors.email &&
            <p className="SingInForm__error">
              {errors.email.message}
            </p>
          }
        </div>
        <div className="SingInForm__group">
          <input
            placeholder=" "
            className="SingInForm__input passwordInput"
            type="password"
            id="password"
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
          <label className="SingInForm__label" htmlFor="password">Password</label>
          {
            errors.password &&
            <p role="alert" className="SingInForm__error">
              {errors.password.message}
            </p>
          }
        </div>

        <Button
          disabled={!isValid}
          className="SingInForm__button"
          type="submit" caption="Sing in"
        />
      </form>
    </FocusLock>
  )
}

export default SingInForm