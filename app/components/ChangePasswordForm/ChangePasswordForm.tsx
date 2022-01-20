import React, { FC, useRef } from 'react'
import FocusLock from 'react-focus-lock'
import { useForm, SubmitHandler } from 'react-hook-form'

import Button from '@Components/Button'

import './ChangePasswordForm.scss'
import { withTranslation, useTranslation } from 'react-i18next'

interface IForm {
  password: string
  passwordConfirmation: string
}

interface ISignUpForm {
  onSubmit(): void
}

const ChangePasswordForm: FC<ISignUpForm> = props => {
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
            required: t('changePasswordForm.required'),
            minLength: {
              value: 6,
              message: t('changePasswordForm.minLength')
            },
            maxLength: {
              value: 30,
              message: t('changePasswordForm.maxLength')
            }
          })}
        />

        <label className="ChangePasswordForm__label" htmlFor="password">
          {t('changePasswordForm.password')}
        </label>

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
            validate: value => value === password.current || t('changePasswordForm.confirmationErr')
          })}
        />

        <label
          className="ChangePasswordForm__label"
          htmlFor="passwordConfirmation">
          {t('changePasswordForm.passwordConfirmation')}
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
        <h2 className="ChangePasswordForm__title">
          {t('changePasswordForm.title')}
        </h2>

        {renderPassword()}
        {renderPasswordRepeat()}

        <Button
          type="submit"
          showSpinner={isSubmitting}
          disabled={!isValid || isSubmitting}
          className="ChangePasswordForm__button"
        >
          {t('changePasswordForm.submit')}
        </Button>
      </form>
    </FocusLock>
  )
}

export default withTranslation()(ChangePasswordForm)
