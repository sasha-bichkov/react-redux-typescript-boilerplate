import React, { FC } from 'react'

import Loader from '@Components/Loader'

import './Suspense.scss'

const Suspense: FC = () => {
  return (
    <div className="Suspense">
      <Loader />
    </div>
  )
}

export default Suspense
