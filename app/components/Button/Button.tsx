import React, { FC, ReactElement } from 'react'

import './Button.scss'

interface ButtonProps {
  className?: string,
  caption: string,
  onClick?(): void,
  showSpinner?: boolean,
  type?: 'button' | 'submit' | 'reset',
  disabled?: boolean,
}

const Button: FC<ButtonProps> = ({
  className = '',
  caption,
  onClick,
  showSpinner,
  type = 'button',
  disabled
}: ButtonProps): ReactElement => {
  return (
    <button
      type={type}
      className={`Button ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {caption}
    </button>
  )
}

export default Button
