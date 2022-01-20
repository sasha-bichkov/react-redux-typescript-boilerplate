import React, { FC, useRef } from 'react'
import FocusLock from 'react-focus-lock'
import { useForm, SubmitHandler } from 'react-hook-form'
import { withTranslation, useTranslation } from 'react-i18next'

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
  const {t} = useTranslation()
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
            required: t('SignUpForm.required'),
            pattern: {
              value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
              message: t('SignUpForm.emailErr')
            }
          })}
        />

        <label className="SingUpForm__label" htmlFor="email">
          {t('SignUpForm.email')}
        </label>

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
            required: t('SignUpForm.required'),
            minLength: {
              value: 6,
              message: t('SignUpForm.minLength')
            },
            maxLength: {
              value: 30,
              message: t('SignUpForm.maxLength')
            }
          })}
        />

        <label className="SingUpForm__label" htmlFor="password">
          {t('SignUpForm.password')}
        </label>

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
            validate: value => value === password.current || t('SignUpForm.confirmationErr')
          })}
        />

        <label
          className="SingUpForm__label"
          htmlFor="passwordConfirmation">
          {t('SignUpForm.passwordConfirmation')}
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
        <h2 className="SingUpForm__title">
          {t('SignUpForm.title')}
        </h2>

        {renderEmail()}
        {renderPassword()}
        {renderPasswordRepeat()}

        <Button
          type="submit"
          showSpinner={isSubmitting}
          disabled={!isValid || isSubmitting}
          className="SingUpForm__button"
        >
          {t('SignUpForm.submit')}
        </Button>
      </form>
    </FocusLock>
  )
}

export default withTranslation()(SignUpForm)
