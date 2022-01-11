import React, { FC } from 'react'
import FocusLock from 'react-focus-lock'
import { useForm, SubmitHandler } from 'react-hook-form'
import { withTranslation, useTranslation } from 'react-i18next'

import Button from '@Components/Button'

import './SingInForm.scss'

interface IForm {
  readonly email: string
  readonly password: string
}

interface ISignInForm {
  onSubmit(): void
}

const SingInForm: FC<ISignInForm> = props => {
  const {
    reset,
    register,
    handleSubmit,
    formState: {errors, isValid, isSubmitting},
  } = useForm<IForm>({mode: 'all'})
  const {t} = useTranslation()
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
      <div className="SingInForm__group">
        <input
          id="email"
          type="text"
          placeholder=" "
          className="SingInForm__input emailInput"
          aria-invalid={errors.email ? 'true' : 'false'}
          {...register('email', {
            required: t('SingInForm.required'),
            pattern: {
              value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
              message: t('SingInForm.emailErr')
            }
          })}
        />

        <label className="SingInForm__label" htmlFor="email">
          {t('SingInForm.email')}
        </label>

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
            required: t('SingInForm.required'),
            minLength: {
              value: 6,
              message: t('SingInForm.minLength')
            },
            maxLength: {
              value: 30,
              message: t('SingInForm.maxLength')
            }
          })}
        />

        <label className="SingInForm__label" htmlFor="password">
          {t('SingInForm.password')}
        </label>

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
        <h2 className="SingInForm__title">
          {t('SingInForm.title')}
        </h2>

        {renderEmail()}
        {renderPassword()}

        <Button
          type="submit"
          showSpinner={isSubmitting}
          disabled={!isValid || isSubmitting}
          className="SingInForm__button"
        >
          {t('SingInForm.submit')}
        </Button>
      </form>
    </FocusLock>
  )
}

export default withTranslation()(SingInForm)
