import React, { FC, ReactElement } from 'react'
import classNames from 'classnames'

import './Button.scss'

export interface ButtonProps {
  readonly className?: string
  readonly showSpinner?: boolean
  readonly type?: 'button' | 'submit' | 'reset'
  readonly disabled?: boolean
  readonly children: React.ReactNode
  onClick?(): void
}

const Button: FC<ButtonProps> = ({
  className,
  onClick,
  showSpinner,
  type = 'button',
  disabled,
  children
}: ButtonProps): ReactElement => {
  const classes = classNames(
    'Button',
    className,
  )

  const renderSpinner = () => {
    return (
      <span className="Button__spinner Button__spinner-slow" />
    )
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
      {showSpinner && renderSpinner()}
    </button>
  )
}

export default Button
