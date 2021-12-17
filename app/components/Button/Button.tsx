import React, { FC, ReactElement } from 'react'
import classNames from 'classnames'

import './Button.scss'

interface ButtonProps {
  className?: string,
  caption: string,
  onClick?(): void,
  showSpinner?: boolean,
  type?: 'button' | 'submit' | 'reset' | undefined,
  disabled?: boolean,
}

const Button: FC<ButtonProps> = (
  {
    className,
    caption,
    onClick,
    showSpinner,
    type,
    disabled
  }: ButtonProps
): ReactElement => {

  const classes = classNames(
    'btn',
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
    </button>
  )
}

export default Button
