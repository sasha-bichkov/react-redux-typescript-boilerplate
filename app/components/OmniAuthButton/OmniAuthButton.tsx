import React, { FC, ReactElement } from 'react'
import classNames from 'classnames'

import './OmniAuthButton.scss'

interface IButtonProps {
  readonly className?: string
  readonly children: string
  readonly Icon: FC<React.SVGAttributes<SVGElement>>
  onClick?(): void
}

const OmniAuthButton: FC<IButtonProps> = ({
  className,
  onClick,
  Icon,
  children
}: IButtonProps): ReactElement => {
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
