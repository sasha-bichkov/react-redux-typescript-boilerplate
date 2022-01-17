import React, { FC } from 'react'
import FocusLock from 'react-focus-lock'
import { useForm, SubmitHandler } from 'react-hook-form'

import Button from '@Components/Button'
import { ITask } from '@Modules/Tasks/types'

import './CreatingTasksForm.scss'

interface CreatingTasksForm {
  addNewTask(payload: ITask): void
}

const CreatingTasksForm: FC<CreatingTasksForm> = props => {
  const {
    register,
    handleSubmit,
    formState: {errors, isValid, isSubmitting},
    reset,
  } = useForm<ITask>({mode: 'all'})

  const onSubmit: SubmitHandler<ITask> = (data) => {
    console.log(data)
    props.addNewTask(data)
    reset()
  }

  const renderInputTitle = () => {
    return (
      <div className="CreatingTasksForm__group">
        <input
          id="title"
          type="text"
          placeholder=" "
          className="CreatingTaskInput__input TaskTitle"
          aria-invalid={errors.title ? 'true' : 'false'}
          {...register('title', {
            required: true,
          })}
        />

        <label
          className="CreatingTasksForm__label"
          htmlFor="creatingTasksTitle">
          Task title
        </label>

        {errors.title && (
          <p role="alert" className="CreatingTasksForm__error">
            {errors.title.message}
          </p>
        )}
      </div>
    )
  }
  const renderInputText = () => {
    return (
      <div className="CreatingTasksForm__group">
        <textarea
          id="taskText"
          placeholder=" "
          className="CreatingTaskInput__input TaskText"
          aria-invalid={errors.text ? 'true' : 'false'}
          {...register('text', {
            required: true,
          })}
        />

        <label
          className="CreatingTasksForm__label"
          htmlFor="creatingTasksTitle">
          Add description...
        </label>

        {errors.text && (
          <p role="alert" className="CreatingTasksForm__error">
            {errors.text.message}
          </p>
        )}
      </div>
    )
  }

  return (
    <FocusLock>
      <form
        className="CreatingTasksForm"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="CreatingTasksForm__title">Create task</h2>

        {renderInputTitle()}
        {renderInputText()}

        <Button
          type="submit"
          showSpinner={isSubmitting}
          disabled={!isValid || isSubmitting}
          className="CreatingTasksForm__button"
        >
          Create
        </Button>
      </form>
    </FocusLock>
  )
}

export default CreatingTasksForm
