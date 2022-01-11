import React, { FC, ReactElement } from 'react'
import classNames from 'classnames'

import './Button.scss'

// TODO: what is that?
type SvgInHtml = HTMLElement & SVGElement

export interface ButtonProps {
  readonly className?: string
  readonly children?: FC<SvgInHtml>
  onClick?(): void
}

const OmniAuthButton: FC<ButtonProps> = ({
  className,
  onClick,
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
      {children}
    </button>
  )
}

export default OmniAuthButton
