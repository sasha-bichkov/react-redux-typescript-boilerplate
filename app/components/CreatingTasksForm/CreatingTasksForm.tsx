import React, { FC, useRef } from 'react'
import FocusLock from 'react-focus-lock'
import { useForm, SubmitHandler } from 'react-hook-form'

// import { IUserRegister } from '@Modules/User/types'

import Button from '@Components/Button'

import './CreatingTasksForm.scss'
import { addNewTask } from '@Modules/Tasks/actions'

interface IForm {
  readonly taskTitle: string
  readonly taskText: string
}

interface CreatingTasksForm {
  addNewTask(payload): void
}

const CreatingTasksForm: FC<CreatingTasksForm> = props => {
  const {
    register,
    handleSubmit,
    formState: {errors, isValid, isSubmitting},
    reset,
  } = useForm<IForm>({mode: 'all'})
  const sleep = (milliseconds: number) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }

  const onSubmit: SubmitHandler<IForm> = (data) => {
    console.log(data)
    props.addNewTask(data)
    reset()
  }

  const renderInputTitle = () => {
    return (
      <div className="CreatingTasksForm__group">
        <input
          id="taskTitle"
          type="text"
          placeholder=" "
          className="CreatingTaskInput__input TaskTitle"
          aria-invalid={errors.taskTitle ? 'true' : 'false'}
          {...register('taskTitle', {
            required: true,
          })}
        />

        <label
          className="CreatingTasksForm__label"
          htmlFor="creatingTasksTitle">
          Task title
        </label>

        {errors.taskTitle && (
          <p role="alert" className="CreatingTasksForm__error">
            {errors.taskTitle.message}
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
          aria-invalid={errors.taskText ? 'true' : 'false'}
          {...register('taskText', {
            required: true,
          })}
        />

        <label
          className="CreatingTasksForm__label"
          htmlFor="creatingTasksTitle">
          Add description...
        </label>

        {errors.taskText && (
          <p role="alert" className="CreatingTasksForm__error">
            {errors.taskText.message}
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
