import React from 'react'
import { Loader } from 'react-feather'

const LoadingPage = ({ size="48" }) => {
  return (
    <div className="h-screen flex justify-center items-center text-dark">
      <Loader size={size} className="animate-spin-slow" />
    </div>
  )
}

export default LoadingPage