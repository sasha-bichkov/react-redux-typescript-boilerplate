import React, { FC } from 'react'
import FocusLock from 'react-focus-lock'
import { useForm, SubmitHandler } from 'react-hook-form'
import { withTranslation, useTranslation } from 'react-i18next'

import Button from '@Components/Button'
import './ResendConfirmationForm.scss'

interface IForm {
  readonly email: string
}

interface ISResendConfirmationForm {
  onSubmit(): void
}

const ResendConfirmationForm: FC<ISResendConfirmationForm> = props => {
  const {
    register,
    handleSubmit,
    formState: {errors, isValid, isSubmitting},
    reset,
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
      <div className="ResendConfirmationForm__group">
        <input
          id="email"
          type="text"
          placeholder=" "
          className="ResendConfirmationForm__input emailInput"
          aria-invalid={errors.email ? 'true' : 'false'}
          {...register('email', {
            required: t('ResendConfirmationForm.required'),
            pattern: {
              value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
              message: t('ResendConfirmationForm.emailErr')
            }
          })}
        />

        <label className="ResendConfirmationForm__label" htmlFor="email">
          {t('ResendConfirmationForm.email')}
        </label>

        {errors.email && (
          <p className="ResendConfirmationForm__error">
            {errors.email.message}
          </p>
        )}
      </div>
    )
  }

  return (
    <FocusLock>
      <form
        className="ResendConfirmationForm"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="ResendConfirmationForm__title">
          {t('ResendConfirmationForm.title')}
        </h2>

        {renderEmail()}

        <Button
          type="submit"
          showSpinner={isSubmitting}
          disabled={!isValid || isSubmitting}
          className="ResendConfirmationForm__button"
        >
          {t('ResendConfirmationForm.submit')}
        </Button>
      </form>
    </FocusLock>
  )
}

export default withTranslation()(ResendConfirmationForm)
