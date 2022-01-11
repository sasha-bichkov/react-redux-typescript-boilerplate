import React, { FC, ReactNode } from 'react'

import Loader from '@Components/Loader'

import './Suspense.scss'

interface IPropTypes {
  children: ReactNode
}

const Suspense: FC<IPropTypes> = ({children}) => {
  return (
    <React.Suspense fallback={<div className="SuspenseComponent"><Loader /></div>}>
      {children}
    </React.Suspense>
  )
}

export default Suspense
