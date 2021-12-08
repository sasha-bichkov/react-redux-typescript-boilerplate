import React from 'react'

interface FallbackProps {
  readonly error: Error,
  resetErrorBoundary(...args: Array<unknown>): void
}

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
