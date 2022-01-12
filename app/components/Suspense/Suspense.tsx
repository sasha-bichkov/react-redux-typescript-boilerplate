import React, { FC, ReactNode } from 'react'

import Loader from '@Components/Loader'

import './Suspense.scss'

interface ISuspenseProps {}

const Suspense: FC<ISuspenseProps> = () => {
  return (
    <div className="Suspense">
      <Loader />
    </div>
  )
}

export default Suspense
