import React, { FC, ReactElement } from 'react'
import classNames from 'classnames'

import './OmniAuthButton.scss'

interface ButtonProps {
  readonly className?: string,
  readonly children: string,
  readonly Icon: FC<React.SVGAttributes<SVGElement>>
  onClick?(): void
}

const OmniAuthButton: FC<ButtonProps> = ({
  className,
  onClick,
  Icon,
  children
}: ButtonProps): ReactElement => {
  const classes = classNames(
    'Button',
    className,
  )
  return (
    <button
      type='button'
      className={classes}
      onClick={onClick}
    >
      <Icon className='Button__icon' />
      {children}
    </button>
  )
}

export default OmniAuthButton
