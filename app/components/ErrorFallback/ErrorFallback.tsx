import React from 'react'
import { FallbackProps } from 'react-error-boundary'

const ErrorFallback: React.FC<FallbackProps> = props => {
  const {
    error,
    resetErrorBoundary
  } = props

  return (
    <div>
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}

export default ErrorFallback
