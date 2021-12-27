import React, { FC, ReactElement } from 'react'
import classNames from 'classnames'

import './Button.scss'

export interface ButtonProps {
  className?: string,
  caption: string,

  onClick?(): void,

  showSpinner?: boolean,
  type?: 'button' | 'submit' | 'reset',
  disabled?: boolean,
}

const Button: FC<ButtonProps> = ({
  className,
  caption,
  onClick,
  showSpinner,
  type = 'button',
  disabled
}: ButtonProps): ReactElement => {
  const classes = classNames(
    'Button',
    className,
  )

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {caption}
      {
        showSpinner &&
        <span className="Button__spinner spinner-slow" />
      }
    </button>
  )
}

export default Button
