// src/components/ErrorBoundary.tsx
import React from 'react'
import { Link } from 'react-router-dom'

interface Props {
  children: React.ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Oops! Something went wrong</h1>
          <p className="text-gray-600 mb-4">
            {this.state.error?.message || 'An unexpected error occurred'}
          </p>
          <Link
            to="/"
            className="px-4 py-2 bg-violet-600 text-white rounded hover:bg-violet-700 transition-colors"
            onClick={() => this.setState({ hasError: false })}
          >
            Return Home
          </Link>
        </div>
      )
    }

    return this.props.children
  }
}